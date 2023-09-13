import Image from "next/image";
import { BsDashLg } from 'react-icons/bs'
import { AiFillPlayCircle } from 'react-icons/ai'

interface Props {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const base_url = 'https://api.themoviedb.org/3/'
const img_base_url = 'https://image.tmdb.org/t/p/'

async function getData() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.AUTHENTICATION_KEY}`
    },
    next: { revalidate: 10 } 
  };
  
  const res = await fetch(`${base_url}/trending/all/week?language=en-US`, options)

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
 
    return res.json()
}
const Discover = async () => {
  const { results } = await getData()

  const getRandomIndex = (array: object[]) => {
    if (array.length === 0) {
      return -1
    }
    const randomIndex = Math.floor(Math.random() * array.length)
    return randomIndex
  }
  
  const movieIndex = getRandomIndex(results)
  const currentItem = results[movieIndex]
  const movieName = currentItem?.original_title || currentItem.name || currentItem?.original_name
  
  console.log(movieIndex)

  return (
    <div className="flex w-full h-screen">
       
       {/* Banner image  */}
       <div>
         <Image src={`${img_base_url}original${currentItem.backdrop_path}`} alt='bg-img' fill className=" absolute top-0 brightness-50 -z-50 pointer-events-none object-cover" />
       </div>
       
       {/* Name, description and others */}
       <div className="flex flex-col lg:w-4/5 mx-auto lg:mt-14 w-full mt-10">
            <div className="font-semibold text-5xl flex flex-wrap text-center justify-center w-4/5 mx-auto lg:mx-0 lg:justify-start">{movieName}</div>
            <div className="flex mb-3 text-gray-400 justify-center lg:justify-start">
                <div className="flex items-center mr-8">
                  <Image src='/assets/imdb.svg' alt='imdb' width={40} height={10} className="mt-1" />
                  <span className="text-sm">{` ${Math.round(currentItem?.vote_average)} / 10`}</span>
                </div>
                <div className="flex items-center">
                  <Image src='/assets/rotten-tomatoes.svg' alt='rotten tomato' className='mt-1' width={30} height={30} />
                  <span> 97% </span>
                </div>
            </div>
            <div className="lg:w-2/5 w-4/5 mx-auto lg:mx-0 text-center lg:text-start text-lg leading-xl lg:leading-sm lg:text-ellipsis lg:max-h-60 lg:overflow-clip">
              {currentItem?.overview}
            </div>
            <div className="flex justify-center lg:justify-normal">
              <button className="flex mt-5 bg-rose-700 hover:bg-rose-500 transition-colors px-5 py-[6px] items-center rounded-md cursor-pointer delay-100 duration-300">
                <AiFillPlayCircle className='w-8 h-8 mr-3' /> 
                <span className="uppercase text-md">watch trailer</span>
              </button>
            </div>
        </div>
    </div>
  );
};

export default Discover;