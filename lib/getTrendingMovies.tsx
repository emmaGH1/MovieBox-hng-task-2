import { BASE_URL, apiKey } from "@/constants"

export async function getTrendingMovies() {
    const res = await fetch(`${BASE_URL}/movie/top_rated?api_key=b19e9268f0b9f9ae869d945d451264d9&language=en-US&page=1`, {
        cache: 'default',
    })
    
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
