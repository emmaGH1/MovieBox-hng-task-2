import { BASE_URL } from "@/constants"
const apiKey = process.env.API_KEY

export async function getTrendingMovies() {
    const res = await fetch(`${BASE_URL}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`, {
        cache: 'no-cache',
    })
    
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
