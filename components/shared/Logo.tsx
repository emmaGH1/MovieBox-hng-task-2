import Image from "next/image";
import Link from "next/link";

interface Props {
  className?: string
}

const Logo = ({ className }: Props) => {
  return (
    <Link href='/' className={`flex items-center ${className}`}>
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