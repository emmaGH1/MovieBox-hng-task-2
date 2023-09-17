import Image from "next/image";
import { AiFillPlayCircle } from 'react-icons/ai';
import { BASE_URL, IMG_BASE_URL } from "@/constants";
import { MovieData } from "@/types";
import { getTrendingMovies } from "@/lib/getTrendingMovies";
import Link from "next/link";


const getRandomIndex = (array: object[]) => {
  if (array.length === 0) {
    return -1;
  }
  return Math.floor(Math.random() * array.length);
};

const Discover = async () => {
  try {
    const { results } = await getTrendingMovies();
    const movieIndex = getRandomIndex(results);
    const currentItem: MovieData | undefined = results[movieIndex];
  
    return (
      <div className="flex w-full scroll-smooth">
        
        {/* Banner image */}
        <div className="absolute inset-0 bg-fixed bg-cover ">
          <Image
            src={`${IMG_BASE_URL}original${currentItem?.backdrop_path}`}
            alt='bg-img'
            fill
            className="top-0 brightness-50 -z-50 pointer-events-none object-cover bg-fixed absolute"
          />
        </div>

        {/* Name, description and others */}
        <div className="flex flex-col lg:w-4/5 mx-auto lg:mt-14 w-full mt-10">
          <div className="font-semibold text-5xl flex flex-wrap text-center justify-center w-4/5 mx-auto lg:mx-0 lg:justify-start">
            {currentItem?.original_title || 
             currentItem?.name ||
              currentItem?.original_name
            }
          </div>
          <div className="flex mb-3 text-gray-400 justify-center lg:justify-start">
            <div className="flex items-center mr-8">
              <Image src='/assets/imdb.svg' alt='imdb' width={40} height={10} className="mt-1" />
              <span className="text-sm">{` ${Math.round(currentItem?.vote_average || 0)} / 10`}</span>
            </div>
            <div className="flex items-center">
              <Image src='/assets/rotten-tomatoes.svg' alt='rotten tomato' className='mt-1' width={30} height={30} />
              <span>97%</span>
            </div>
          </div>
          <div
            className="lg:w-2/5 w-4/5 mx-auto lg:mx-0 text-center lg:text-start
             text-lg leading-xl lg:leading-sm lg:text-ellipsis lg:max-h-60 lg:overflow-clip"
          >
            {currentItem?.overview}
          </div>
          <Link href={`/movies/${currentItem?.id}`} className="flex justify-center lg:justify-normal z-50">
            <button
              className="flex mt-5 bg-rose-700 hover:bg-rose-500
                  transition-colors px-5 py-[6px] items-center rounded-md cursor-pointer delay-100 duration-300"
            >
              <AiFillPlayCircle className='w-8 h-8 mr-3' />
              <span className="uppercase text-md">watch trailer</span>
            </button>
          </Link>
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    // Handle errors gracefully here, maybe show a message to the user
    return null;
  }
};

export default Discover;
