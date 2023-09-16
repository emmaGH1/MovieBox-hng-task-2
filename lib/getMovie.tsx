import { BASE_URL, apiKey } from "@/constants"

export async function getMovie(id: number) {
    const idString = id.toString()
    const res = await fetch(`${BASE_URL}/movie/${idString}?api_key=${apiKey}&language=en-US&page=1`, {
        cache: 'default',
    })
    
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}