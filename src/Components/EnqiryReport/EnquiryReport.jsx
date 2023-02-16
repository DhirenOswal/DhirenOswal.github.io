import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "../../firebase";

const EnquiryReport = () => {
    const navigate = useNavigate();
    useEffect(() => {
        Auth.onAuthStateChanged((user) => {
            if (user === null) {
                navigate("/admin-panel");
            }
        });
    }, []);
    return <h1>Hiii</h1>;
};

export default EnquiryReport;
