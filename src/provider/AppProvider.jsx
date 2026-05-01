import { ToastContainer } from "react-toastify";

const AppProvider = ({ children }) => {
    return (
        <>
        <ToastContainer />
        {children}
        </>
    );
};

export default AppProvider;