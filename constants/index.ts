import { AiOutlineTwitter, AiOutlineGithub, AiFillLinkedin, } from 'react-icons/ai'
import { BsLink45Deg } from 'react-icons/bs'

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