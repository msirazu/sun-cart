'use client';

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';

const AppProvider = ({ children }) => {
    return (
        <>
        <ToastContainer />
        {children}
        </>
    );
};

export default AppProvider;