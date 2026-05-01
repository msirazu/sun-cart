import NavLinks from "./NavLinks";

const Navbar = () => {
    return (
        <nav className="flex gap-2">
           <NavLinks href={'/'}>Home</NavLinks> 
           <NavLinks href={'/products'}>Products</NavLinks>
           <NavLinks href={'/dashboard/my-profile'}>My Profile</NavLinks>
        </nav>
    );
};

export default Navbar;