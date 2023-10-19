import { getTrendingMovies } from '@/utils/request'
import Card from './components/Card';

export default async function Home() {
  const movies = await getTrendingMovies();
  return (
    <div className=''>
      <h1>Trending Movies</h1>
      <div className='w-full grid grid-cols-5 gap-4'>
        {movies.map(movie =>{
          return (
            <div className=''>
              <Card movie={movie}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}