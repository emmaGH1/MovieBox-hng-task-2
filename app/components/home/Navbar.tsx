import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center">
        <Image src='/assets/logo.png' alt='logo' width={30} height={30} />
        <span>MovieBox</span>
      </div>

      <div className="search-box">
        <button className="btn-search"><i className="fas fa-search"></i></button>
        <input type="text" className="input-search" placeholder="Type to Search..." />
      </div>
    </div>
  );
};

export default Navbar;