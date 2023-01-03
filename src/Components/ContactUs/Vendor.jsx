import React, { useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

const Vendor = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: undefined,
        address: "",
        material: "",
    });
    const [validEmail, setValidEmail] = useState(true);
    const [validPhone, setValidPhone] = useState(true);
    const addTodo = async (e) => {
        e.preventDefault();
        console.log(formData);
        console.log("Hiii");
        try {
            const docRef = await addDoc(collection(db, "vendor"), { formData });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

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
        console.log(e.target.value);
        const isValid = validatePhone(value);
        if (isValid) {
            setValidPhone(true);
        } else {
            setValidPhone(false);
        }
        setFormData({ ...formData, phone: value });
    };

    const handleAddressInputChange = (e) => {
        const value = e.target.value;
        setFormData({ ...formData, address: value });
    };

    const handleMaterialInputChange = (e) => {
        const value = e.target.value;
        setFormData({ ...formData, material: value });
    };

    const clearFormData = () => {
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: undefined,
            address: "",
            material: "",
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

    return (
        <div className="mt-10">
            <form onSubmit={handleFormSubmit} className="w-full px-6 lg:px-0 lg:w-1/2 lg:mx-auto ">
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={formData.firstName} onChange={handleFirstNameInputChange} />
                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            First name
                        </label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={formData.lastName} onChange={handleLastNameInputChange} />
                        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Last name
                        </label>
                    </div>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={formData.email} onChange={handleEmailInputChange} />
                    <div className={`flex ${validEmail ? "hidden" : "text-red-600"}`}>
                        <p>Email is invalid.</p>
                    </div>
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Email address
                    </label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
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
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="text" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={formData.address} onChange={handleAddressInputChange} />
                        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Address
                        </label>
                    </div>
                </div>
                <div className="grid md:grid-cols-1 md:gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                        <textarea rows="3" name="description" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={formData.material} onChange={handleMaterialInputChange} />
                        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Material (Descriptive)
                        </label>
                    </div>
                </div>
                {/* <ReCAPTCHA sitekey="Your client site key" onChange={() => console.log("changed!!")} style={{ marginTop: "2rem" }} /> */}
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={addTodo}>
                    Submit
                </button>
                <button onClick={clearFormData} type="reset" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-3 mt-2 sm:ml-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Clear
                </button>
            </form>
        </div>
    );
};

export default Vendor;