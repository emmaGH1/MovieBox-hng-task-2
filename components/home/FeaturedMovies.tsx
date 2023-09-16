'use client'

import useSWR from 'swr'
import MovieCard from './MovieCard';
import Footer from './Footer';
import { useRouter } from 'next/navigation';
import { MovieCardProps } from '@/types';


const FeaturedMovies = () => {
  const router = useRouter()
  const fetcher = (url: string) => fetch(url).then(res => res.json())
  const { data, error, isLoading } = useSWR(`/api/featured-movies`, fetcher)
  
  if (error) return <div className='text-red-500 h-[30vh]'>Failed to load posts</div>
  if (isLoading) return <div className='text-red-500 h-[30vh]'>Loading posts...</div>
  if (!data) return <div className='text-red-500 h-[30vh]'>No data available</div> 
  if (data?.data?.results.length < 1) {
    return (
      <div className='flex justify-center items-center h-[30vh]'>
        <button className='flex mt-5 bg-rose-700 hover:bg-rose-500
          transition-colors px-5 py-[6px] items-center rounded-md cursor-pointer delay-100 duration-300' onClick={() => router.refresh()}>
            Refresh page
        </button>
      </div>
  )}

  console.log(error, isLoading, data)
  const fetchedData = data?.data?.results.splice(0, 12)
  return (
    <div className="flex flex-col">
      <div className='mx-auto w-[90%] flex justify-between m-5'>
        <div className='text-black font-extrabold text-lg'>Featured Movie</div>
        <div className='text-rose-700 font-semibold'>{`See more >`}</div>
      </div>
      
      <div className='flex flex-col items-center md:grid lg:grid-cols-4 md:w-[90%] md:mx-auto md:gap-10 sm:grid-cols-2'>
        {
          fetchedData.map((each: MovieCardProps) => {
            const {  id, poster_path, release_date, title, vote_average, popularity } = each
            return <MovieCard 
               key={id}
               id={id}
               posterPath={poster_path}
               releaseDate={release_date}
               title={title}
               voteAverage={vote_average}
               popularity={popularity}
            />
          })
        }
      </div>
      <Footer />
    </div>
  );
};

export default FeaturedMovies;