import { BASE_URL } from '@/constants';
import { NextResponse } from 'next/server'

export async function GET() {
  const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.AUTHENTICATION_KEY}`
    },
     
  };
  
  const res = await fetch(`${BASE_URL}/movie/top_rated?language=en-US&page=1`, options)

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    const data = await res.json()

    if (data.error) {
      throw new Error(data.error.message)
    }
 
    return NextResponse.json({ data })
}



