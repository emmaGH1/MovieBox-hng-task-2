import { IMG_BASE_URL } from "@/constants";
import { getMovie } from "@/lib/getMovie";
import { MovieData } from "@/types";
import { Metadata } from "next";
import Image from "next/image";
import { BsFillPlayFill } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'

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
     <div className="text-black w-full mx-auto flex flex-col items-center mt-10">
      <div className="flex w-full h-[300px] justify-center mx-auto relative">
        <Image src={`${IMG_BASE_URL}original${movie.backdrop_path}`} alt="bg-image" width={1000} height={200} className="w-[90%] object-cover rounded-xl brightness-50 -z-50"/>
        <div className="absolute flex flex-col justify-center items-center top-[30%]  cursor-pointer">
          <BsFillPlayFill className='text-white text-5xl bg-white/30 rounded-full flex justify-center ' />
          <span className="text-white text-xl">Watch Trailer</span>
        </div>
      </div>
      
      <div className="flex justify-between">
          <div className="flex justify-between items-center">
            <div>
              <div data-testid='movie-title'>
                {movie.name || movie.original_title}
              </div> •
              <div data-testid='release-date'>{year}</div>
            </div> •

            <div>
              {movie.adult ? 'R18' : 'PG-13'}
            </div> •

            <div data-testid='movie-runtime'>
              {runtimeToHoursAndMinutes(movie.runtime)}
            </div> •

            <div className="flex">
              {movie.genres.map(each => (
                <div key={each.id} >
                  {each.name}
                </div>
              ))}
            </div>

          </div>
          <div>
            <AiFillStar />
          </div> 
          <div>{movie.vote_average.toFixed(1)}</div>
          <div>{formatNumberToK(movie.vote_count)}</div>
      </div>

      <div className="flex" data-testid='movie-overview'>
        {movie.overview}
      </div>

     </div>
   )
}