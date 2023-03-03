import { async } from "@firebase/util";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const EnquiryReport = () => {
    const navigate = useNavigate();
    async function getData() {
        const querySnapshot = await getDocs(collection(db, "enquiry"));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().formData.email}`);
        });
    }
    useEffect(() => {
        Auth.onAuthStateChanged((user) => {
            if (user === null) {
                navigate("/admin-panel");
            }
            getData();
        });
    }, []);
    return <h1>Hiii</h1>;
};

export default EnquiryReport;
