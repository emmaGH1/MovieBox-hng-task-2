'use client'

import Image from "next/image";
import { useState, Dispatch, SetStateAction } from "react";
import { AiFillHeart } from 'react-icons/ai'
import { IMG_BASE_URL } from "../../constants";
import Link from "next/link";

interface Props {
  id: number,
  posterPath: string,
  releaseDate: string,
  title: string,
  voteAverage: number,
  popularity: number,
}

const MovieCard = ({ id, posterPath, releaseDate, title, voteAverage, popularity }: Props) => {
    const [isFavorite, setIsFavorite] = useState(false)
    const date = new Date(releaseDate)
    const year = date.getFullYear()

    const handleIsFavorite = () => {
        setIsFavorite((prevState) => !prevState)
    }

  return (
    <div data-testid="movie-card" className="flex flex-col mb-10 shadow-md" >
       <div className="relative lg:flex lg:justify-center">
            <Image 
            data-testid="movie-poster"
            src={`${IMG_BASE_URL}original${posterPath}`}
            alt={title}
            width={300}
            height={370}
            className="md:w-full md:h-[370px]"
            />
            <AiFillHeart className={`absolute top-0 right-0 w-7 h-7 bg-[#f3f4f680] rounded-full p-1 mr-3 mt-3 ${isFavorite ? 'text-rose-700' : 'text-white'}`} onClick={handleIsFavorite} />
       </div>
       <Link href={`/movies/${id}`}   className="text-gray-400 px-2 mb-2 mt-2">USA, 
       <span data-testid="movie-release-date">
        {year}
      </span></Link>
       <Link href={`/movies/${id}`} data-testid="movie-title"  className="text-gray-900 text-lg font-bold px-2 mb-1">{title}</Link>
       <div className="flex text-gray-400 justify-between px-2">
            <div className="flex items-center mr-8">
              <Image src='/assets/imdb.svg' alt='imdb' width={40} height={10} className="mt-1" />
              <span className="text-sm">{` ${Math.round(voteAverage || 0)} / 10`}</span>
            </div>
            <div className="flex items-center mb-3">
              <Image src='/assets/rotten-tomatoes.svg' alt='rotten tomato' className='mt-1' width={30} height={30} />
              <div> {popularity > 100 ? 100 : popularity.toFixed(0)}% </div>
            </div>
        </div>
    </div>
  );
};

export default MovieCard;