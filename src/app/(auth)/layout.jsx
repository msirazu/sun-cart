import Navbar from "@/components/layout/header/Navbar";

const AuthLayout = ({ children }) => {
    return (
        <div>
            <header className="w-11/12 lg:w-10/12 mx-auto">
                <div className="flex justify-center items-center py-5">
                <Navbar/>
                </div>
            </header>
            <main className="w-11/12 lg:w-10/12 mx-auto">
                {children}
            </main>
        </div>
    );
};

export default AuthLayout;