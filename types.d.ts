import { IconType } from 'react-icons'

export interface MovieData {
    adult: boolean;
    backdrop_path: string;
    id: number;
    name?: string;
    title?: string;
    original_name?: string;
    original_language: string;
    original_title?: string;
    overview: string;
    poster_path: string;
    media_type: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    media_type: "movie" | "tv";
    runtime: number;
    genres: Genre[];
  }
  
  export interface Genre {
      id: number;
      name: string;
  }
  export interface Movies {
    page: number;
    results: MovieData[];
  }
  export interface MovieCardProps {
    id: number,
    poster_path: string,
    release_date: string,
    title: string,
    vote_average: number,
    popularity: number,
 }
