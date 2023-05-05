import { async } from "@firebase/util";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import * as XLSX from 'xlsx';
import saveAs from 'file-saver';

const EnquiryReport = () => {
    const [flatDetails, setFlatDetails] = useState([]);
    const [jobDetails, setJobDetails] = useState([]);
    const [vendorData, setVendorData] = useState([]);
    const navigate = useNavigate();

    async function getData() {
        let flatEnquiryDetails = [];
        const querySnapshot = await getDocs(collection(db, "enquiry"));
        querySnapshot.forEach((doc) => {
            flatEnquiryDetails.push(new Object(doc.data().formData));
        });
        setFlatDetails(flatEnquiryDetails);
    }

    async function getJobData() {
        let jobData = [];
        const querySnapshot = await getDocs(collection(db, "jobOpening"));
        querySnapshot.forEach((doc) => {
            jobData.push(new Object(doc.data().formData));
        });
        setJobDetails(jobData);
    }

    async function getVendorData() {
        let vendor = [];
        const querySnapshot = await getDocs(collection(db, "vendor"));
        querySnapshot.forEach((doc) => {
            vendor.push(new Object(doc.data().formData));
        });
        setVendorData(vendor);
    }

    const FlatDataToCSV = () => {
        const worksheet = XLSX.utils.json_to_sheet(flatDetails);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        const excelFile = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
        saveAs(new Blob([excelFile], { type: 'application/octet-stream' }), 'data.xlsx');
    }

    const jobDataToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(jobDetails);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        const excelFile = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
        saveAs(new Blob([excelFile], { type: 'application/octet-stream' }), 'data.xlsx');
    }

    const vendorDataToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(vendorData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        const excelFile = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
        saveAs(new Blob([excelFile], { type: 'application/octet-stream' }), 'data.xlsx');
    }

    useEffect(() => {
        Auth.onAuthStateChanged((user) => {
            if (user === null) {
                navigate("/admin-panel");
            }
            getData();
            getJobData();
            getVendorData();
        });
    }, []);
    return (
        <>
            <div className="py-32 px-16 w-full">
                <div className="w-full flex items-center justify-evenly">
                    <button className="py-2 px-4 bg-indigo-500 text-white rounded-lg"
                        onClick={FlatDataToCSV}
                    >
                        Flat Data
                    </button>
                    <button
                        className="py-2 px-4 bg-indigo-500 text-white rounded-lg"
                        onClick={jobDataToExcel}
                    >
                        Job Data
                    </button>
                    <button
                        className="py-2 px-4 bg-indigo-500 text-white rounded-lg"
                        onClick={vendorDataToExcel}
                    >
                        Vendor Data
                    </button>
                </div>
            </div>
        </>
    )
};

export default EnquiryReport;
