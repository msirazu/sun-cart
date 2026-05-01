import HeaderMain from "@/components/layout/header/HeaderMain";

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <header className="w-11/12 lg:w-10/12 mx-auto">
                <HeaderMain/>
            </header>
            <main className="w-11/12 lg:w-10/12 mx-auto">
                {children}
            </main>
            <footer className="w-11/12 lg:w-10/12 mx-auto"></footer>
        </div>
    );
};

export default DashboardLayout;