import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href='/' className="flex items-center">
        <Image 
        src='/assets/logo.svg' alt='logo' 
        width={50} height={50} priority 
        className=" stroke-transparent stroke-0" 
        />
        
        <span className="ml-2 lg:text-xl">MovieBox</span>
    </Link>
  );
};

export default Logo;