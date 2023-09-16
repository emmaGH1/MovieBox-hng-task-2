import { IconType } from 'react-icons'

export interface MovieData {
    adult: boolean;
    backdrop_path: string;
    id: number;
    name: string;
    title: string;
    original_name: string;
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

export interface SidebarLinkProps {
  label: string,
  link: string,
  icon?: IconType
}[]