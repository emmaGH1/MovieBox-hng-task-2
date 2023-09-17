import { BASE_URL, apiKey } from "@/constants"

export async function getMovie(id: number) {
    const idString = id.toString()
    const res = await fetch(`${BASE_URL}/movie/${idString}?api_key=b19e9268f0b9f9ae869d945d451264d9&language=en-US&page=1`, {
        cache: 'default',
    })
    
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}