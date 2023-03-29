import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import cssClasses from "../Home/styles/MainPage.module.css";

const Enquire = (setToast) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: undefined,
        project: "Kanchan",
        source: "",
        flatDetails: [],
    });

    const addTodo = async (e) => {
        e.preventDefault();
        console.log("Hiii");
        try {
            const docRef = await addDoc(collection(db, "enquiry"), { formData });
            console.log("Document written with ID: ", docRef.id);
            setToast("We've received your enquiry, We'll reach out to you soon!");
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };
    const [validEmail, setValidEmail] = useState(true);
    const [validPhone, setValidPhone] = useState(true);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const data = formData;
        console.log(data);
        clearFormData();
        document.getElementById("enquire-form").reset();
    };

    const handleFirstNameInputChange = (e) => {
        const value = e.target.value;
        setFormData({ ...formData, firstName: value });
    };

    const handleLastNameInputChange = (e) => {
        const value = e.target.value;
        setFormData({ ...formData, lastName: value });
    };

    const handleEmailInputChange = (e) => {
        const value = e.target.value;
        const isEmailValid = validateEmail(value);
        if (isEmailValid) {
            setValidEmail(true);
        } else {
            setValidEmail(false);
        }
        setFormData({ ...formData, email: value });
    };

    const handlePhoneInputChange = (e) => {
        const value = e.target.value;
        const isValid = validatePhone(value);
        if (isValid) {
            setValidPhone(true);
        } else {
            setValidPhone(false);
        }
        setFormData({ ...formData, phone: value });
    };

    const handleProjectChange = (e) => {
        const value = e.target.value;
        console.log(value);
        setFormData({ ...formData, project: value });
    };

    const handleRadioChange = (e) => {
        const value = e.target.value;
        console.log(value);
        setFormData({ ...formData, source: value });
    };

    const clearFormData = () => {
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: undefined,
        });
    };

    const validateEmail = (email) => {
        const regExEmail = /^([a-zA-Z0-9-]+)@([a-zA-Z0-9]+)\.([a-z]{2,10})$/;
        const isValid = regExEmail.test(email);

        if (isValid) return true;
        else return false;
    };

    const validatePhone = (phoneNo) => {
        const regExPhone = /^[6-9]\d{9}$/;
        const isPhoneValid = regExPhone.test(phoneNo);

        if (isPhoneValid) return true;
        else return false;
    };

    const changeFlatDetailsData = (val) => {
        if (formData.flatDetails.includes(val)) {
            formData.flatDetails = formData.flatDetails.filter((f) => f !== val);
        } else {
            formData.flatDetails.push(val);
        }
        console.log(formData.flatDetails);
    };

    return (
        <div className="mt-10">
            <form className="w-full px-6 lg:px-0 lg:w-1/2 lg:mx-auto" id="enquire-form">
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="text" name="first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={formData.firstName} onChange={handleFirstNameInputChange} />
                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            First name
                        </label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="text" name="last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={formData.lastName} onChange={handleLastNameInputChange} />
                        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Last name
                        </label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={formData.email} onChange={handleEmailInputChange} />
                        <div className={`flex ${validEmail ? "hidden" : "text-red-600"}`}>
                            <p>Email is invalid.</p>
                        </div>
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Email address
                        </label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <div className="flex items-center">
                            <div className="block py-2.5 px-0 text-sm text-gray-900 bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">+91</div>
                            <input type="tel" name="phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={formData.phone} onChange={handlePhoneInputChange} />
                            <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ml-8">
                                Phone number
                            </label>
                        </div>
                        <div className={`ml-4 block ${validPhone ? "hidden" : "text-red-600"}`}>
                            <p>Enter 10 digit number</p>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6 sm:mt-2">
                    <div className="relative z-0 mb-6 w-full">
                        <label htmlFor="checkbox" name="checkbox" id="checkbox" className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Interested in
                        </label>
                        <div className="flex items-center mt-8">
                            <div className="flex items-center mr-6">
                                <input type="checkbox" value="2-bhk" name="type_a" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={(e) => changeFlatDetailsData(e.target.value)} />
                                <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    2 BHK
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" value="3-bhk" name="type_b" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={(e) => changeFlatDetailsData(e.target.value)} />
                                <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    3 BHK
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="relative z-0 mb-6 w-full">
                        <label htmlFor="radio" name="radio" id="radio" className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Source
                        </label>
                        <div className="flex items-center mt-8">
                            <div className="flex items-center mr-6">
                                <input type="radio" value="Referral" name="source" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={handleRadioChange} />
                                <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Referral
                                </label>
                            </div>
                            <div className="flex items-center mr-6">
                                <input type="radio" value="Hoarding" name="source" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={handleRadioChange} />
                                <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Hoarding
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input type="radio" value="Online" name="source" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={handleRadioChange} />
                                <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Online
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="">
                        <label htmlFor="project" name="project" id="project" className="peer-focus:font-medium text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Project
                        </label>
                        <select onChange={handleProjectChange} className="w-full rounded-lg" name="drop-down" id="drop-down">
                            <option className="block text-md py-2" value="Kanchan">
                                Kanchan
                            </option>
                        </select>
                    </div>
                </div>
                <button type="submit" className={` ${cssClasses.btn} ${cssClasses.submit_btn}`} onClick={addTodo}>
                    Submit
                </button>
                <button onClick={clearFormData} type="reset" className="text-blue-700 underline font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 mt-2 sm:ml-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Clear All
                </button>
            </form>
        </div>
    );
};

export default Enquire;
