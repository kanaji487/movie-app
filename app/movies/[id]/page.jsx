import React from 'react'
import Image from 'next/image'
import { getMovieDetails, getSimilarMovies } from '@/utils/request'

async function MovieDetailsPage({params}) {
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";
  const movieDetails = await getMovieDetails(params.id);
  const similarMovies = await getSimilarMovies(params.id);

  return (
    <div className='w-full'>
      <div className='p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6'>
        <Image 
          src={IMAGE_BASE_URL + movieDetails.backdrop_path}
          width={500}
          height={300}
        />
        <div className='p-2'>
          <h2 className='text-lg mb-3 font-bold'>{movieDetails.title || movieDetails.name}</h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>
            {movieDetails.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movieDetails.vote_count}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MovieDetailsPage