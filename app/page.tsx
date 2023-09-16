import Discover from "@/components/home/Discover";
import FeaturedMovies from "@/components/home/FeaturedMovies";
import Navbar from "@/components/home/Navbar";

const Page = () => {
  return (
    <div className="font-custom flex flex-col">
      <div className="flex flex-col h-screen">
        <Navbar />
        <Discover />
      </div>
      <FeaturedMovies />
    </div>
  );
};

export default Page;