import { NextResponse } from 'next/server'
const base_url = 'https://api.themoviedb.org/3/'

export async function GET() {
  const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.AUTHENTICATION_KEY}`
    },
     
  };
  
  const res = await fetch(`${base_url}/movie/top_rated?language=en-US&page=1`, options)

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    const data = await res.json()

    if (data.error) {
      throw new Error(data.error.message)
    }
 
    return NextResponse.json({ data })
}



