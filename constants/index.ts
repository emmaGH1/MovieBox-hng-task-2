import { AiOutlineTwitter, AiOutlineGithub, AiFillLinkedin, AiOutlineVideoCamera} from 'react-icons/ai'
import { BsLink45Deg, BsCardList } from 'react-icons/bs'
import { BiHomeAlt2 } from 'react-icons/bi'
import { PiTelevisionSimple } from 'react-icons/pi'

export const BASE_URL = 'https://api.themoviedb.org/3/';
export const IMG_BASE_URL = 'https://image.tmdb.org/t/p/';
export const apiKey = process.env.API_KEY

export const socialMediaLinks = [
    {
        icon: AiOutlineGithub,
        link: 'https://github.com/emmaGH1'
    },
    {
        icon: AiOutlineTwitter,
        link: 'https://twitter.com/emmadotdev'
    },
    {
        icon: AiFillLinkedin,
        link: 'https://www.linkedin.com/in/maduakor-emmanuel-5a141b245/'
    },
    {
        icon: BsLink45Deg,
        link: 'https://emmajs.vercel.app'
    },
]

export const sidebarLinks = (id?: string) => {
  const links = [
    {
      label: 'Home',
      link: '/',
      icon: BiHomeAlt2,
    },
    {
      label: 'Movies',
      link: id ? `/movies/${id}` : '/movies',
      icon: AiOutlineVideoCamera,
    },
    {
      label: 'TV Series',
      icon: PiTelevisionSimple,
    },
    {
      label: 'Upcoming',
      icon: BsCardList,
    },
  ]

  return links
}