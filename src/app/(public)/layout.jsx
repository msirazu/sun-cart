import FooterMain from "@/components/layout/footer/FooterMain";
import HeaderMain from "@/components/layout/header/HeaderMain";

const PublicLayout = ({children}) => {
    return (
        <div>
            <header className="w-11/12 lg:w-10/12 mx-auto">
                <HeaderMain/>
            </header>
            <main className="w-11/12 lg:w-10/12 mx-auto">
                {children}
            </main>
            <footer className="w-11/12 lg:w-10/12 mx-auto">
                <FooterMain/>
            </footer>
        </div>
    );
};

export default PublicLayout;