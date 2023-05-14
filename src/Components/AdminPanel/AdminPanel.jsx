import { useEffect, useState } from "react";
import cssClasses from "./AdminPanel.module.css";
import { Auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { setPersistence, browserSessionPersistence } from "firebase/auth";

const AdminPanel = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate();
    const [validEmail, setValidEmail] = useState(true);
    const validateEmail = (email) => {
        const regExEmail = /^([a-zA-Z0-9-]+)@([a-zA-Z0-9]+)\.([a-z]{2,10})$/;
        const isValid = regExEmail.test(email);
        if (isValid) return true;
        else return false;
    };
    function handleEmailChange(e) {
        const value = e.target.value;
        const isEmailValid = validateEmail(value);
        if (isEmailValid) {
            setValidEmail(true);
        } else {
            setValidEmail(false);
        }
        setLoginData({ ...loginData, email: value });
    }
    function handlePasswordChange(e) {
        const value = e.target.value;
        setLoginData({ ...loginData, password: value });
    }

    function loginUser() {
        signInWithEmailAndPassword(Auth, loginData.email, loginData.password)
            .then(async (res) => {
                navigate("/enquiry-report");
            })
            .catch((err) => {
                console.log("Something went wrong", err);
                setLoginError("Something Went wrong, Please check Email ID and Password again!")
            });
    }
    return (
        <div className={cssClasses.wrapper}>
            <span>Login Here</span>
            <div className={cssClasses.container}>
                <div className="relative z-0 mb-6 w-full group">
                    <input
                        type="text"
                        name="floating_first_name"
                        id="floating_first_name"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={loginData.email}
                        onChange={(e) => {
                            handleEmailChange(e);
                        }}
                    />
                    <div className={`flex ${validEmail ? "hidden" : "text-red-600"}`}>
                        <p>Email is invalid.</p>
                    </div>
                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Email Id
                    </label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input
                        type="password"
                        name="floating_first_name"
                        id="floating_first_name"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={loginData.password}
                        onChange={(e) => {
                            handlePasswordChange(e);
                        }}
                    />
                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Password
                    </label>
                </div>
                <p className={cssClasses.loginError}>{loginError}</p>
                <button
                    type="submit"
                    className={` ${cssClasses.btn} ${cssClasses.submit_btn}`}
                    style={{
                        marginRight: "1rem",
                    }}
                    onClick={loginUser}
                >
                    Login
                </button>
            </div>

        </div>
    );
};

export default AdminPanel;
