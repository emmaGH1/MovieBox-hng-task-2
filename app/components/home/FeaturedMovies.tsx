'use client'

import { useState } from 'react';
import useSWR from 'swr'
import MovieCard from '../MovieCard';

interface MovieCardProps {
   poster_path: string,
   release_date: string,
   title: string,
   vote_average: number,
   popularity: number
}

const FeaturedMovies = () => {
  const fetcher = (url: string) => fetch(url).then(res => res.json())
  const { data, error, isLoading } = useSWR(`/api/featured-movies`, fetcher)
  const [isFavorite, setIsFavorite] = useState(false)
  
  if (error) return <div>Failed to load posts</div>
  if (isLoading) return <div>Loading posts...</div>
  
  const fetchedData = data?.data?.results.splice(0, 10)
  return (
    <div className="">
      <div>
        <div>Featured Movie</div>
        <div>{`See more >`}</div>
      </div>
      
      <div>
        {
          fetchedData.map((each: MovieCardProps) => {
            const {  poster_path, release_date, title, vote_average, popularity } = each
            return <MovieCard 
               posterPath={poster_path}
               releaseDate={release_date}
               title={title}
               voteAverage={vote_average}
               popularity={popularity}
               isFavorite={isFavorite}
               setIsFavorite={setIsFavorite}
            />
          })
        }
      </div>
    </div>
  );
};

export default FeaturedMovies;