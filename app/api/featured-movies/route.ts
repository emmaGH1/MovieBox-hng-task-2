import { BASE_URL } from '@/constants';
import { NextResponse } from 'next/server'

export async function GET() {
  const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTllOTI2OGYwYjlmOWFlODY5ZDk0NWQ0NTEyNjRkOSIsInN1YiI6IjY0ZmZhMTU5ZWZlYTdhMDBhYWQ3MDNlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9D-nClfvjOEhgTSqvE-RZJdY6X6PcrdIG8xsssgW2xg`
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



