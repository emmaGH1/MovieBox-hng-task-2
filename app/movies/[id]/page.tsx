import { IMG_BASE_URL } from "@/constants";
import { getMovie } from "@/lib/getMovie";
import { MovieData } from "@/types";
import { Metadata } from "next";
import Image from "next/image";
import { BsFillPlayFill } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import { Clock3 } from "lucide-react";

type Params = {
    params: {
      id: number;
    };
  };
  
  export async function generateMetadata({
    params: { id },
  }: Params): Promise<Metadata> {
    const movie = await getMovie(id);
  
    return {
      title: movie.name || movie.title,
    };
  }

export default async function Page({ params: { id } }: Params) {
   const movieData: Promise<MovieData> = getMovie(id)

   const [movie] = await Promise.all([movieData])
   const date = new Date(movie.release_date)
   const year = date.getFullYear()
   const runtimeToHoursAndMinutes = (totalMinutes: number): string => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours} hr ${minutes} min`;
    }
    const formatNumberToK = (number: number): string => {
      if (number >= 1000) {
          const numInK = (number / 1000).toFixed(0);
          return numInK + "k";
      }
      return number.toString();
  }
  
   
   return (
     <div className="text-black w-[90%] lg:w-full mx-auto flex flex-col items-center mt-10">
      <div className="flex w-full h-[300px] justify-center mx-auto relative">
        <Image src={`${IMG_BASE_URL}original${movie.backdrop_path}`} alt="bg-image" width={1000} height={200} className="w-full object-cover rounded-xl brightness-50 -z-50"/>
        <div className="absolute flex flex-col justify-center items-center top-[30%]  cursor-pointer">
          <BsFillPlayFill className='text-white text-5xl bg-white/30 rounded-full flex justify-center ' />
          <span className="text-white text-xl">Watch Trailer</span>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row w-full mx-auto mt-3 justify-between items-center">
          <div className="flex items-center flex-col lg:flex-row w-full lg:w-auto">
            <div className="flex lg:items-center w-full lg:w-auto">
              <div data-testid='movie-title' className="flex font-bold text-xl mr-3 items-center">
                {movie.name || movie.original_title} 
                <span className="hidden lg:flex ml-2 font-bold text-xl">•</span>
              </div> 
              <div data-testid='movie-release-date' className='flex items-center'>
                {year}
                <span className="mx-2 font-bold text-xl">•</span>
              </div>
            </div> 

            <div className=" flex items-center">
              <div>{movie.adult ? 'R18' : 'PG-13'}</div>
              <span className="mx-2 font-bold text-xl">•</span>
            </div> 

            <p className="flex items-center gap-2 font-medium">
              <Clock3 className="w-5 h-5" /> Runtime:{" "}
              <span data-testid="movie-runtime">{movie.runtime}</span>mins
            </p>

            <div className="my-3 lg:my-0 flex gap-2 items-center justify-center">
              {movie.genres.map((genre: any) => (
                <span
                  key={genre.name}
                  className="text-sm text-rose-700 py-1 px-4 rounded-full border border-rose-700"
                >
                  {genre.name}
                </span>
              ))}
            </div>

          </div>
          <div className="flex font-bold items-center">
            <div className=" text-yellow-300 text-lg mr-1">
              <AiFillStar />
            </div> 
            <div className=" font-normal text-gray-400 mr-1">
              {movie.vote_average.toFixed(1)}
            </div> |
            <div className="ml-1 lg:mr-2">{formatNumberToK(movie.vote_count)}</div>
          </div>
      </div>
      
      <div>
        <div>
            <div className="flex mt-3" data-testid='movie-overview'>
              {movie.overview}
            </div>
        </div>
        <div>

        </div>
      </div>

     </div>
   )
}