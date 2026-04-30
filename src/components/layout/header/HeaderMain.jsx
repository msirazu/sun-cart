import Account from "./Account";
import Navbar from "./Navbar";

const HeaderMain = () => {
    return (
        <div className="flex justify-between items-center py-3 border-b border-gray-200 bg-white">
            <section>
                <h1 className="font-bold text-3xl text-third">Sun<span className="text-four">Cart</span></h1>
            </section>
            <section>
                <Navbar/>
            </section>
            <section>
                <Account/>
            </section>
        </div>
    );
};

export default HeaderMain;