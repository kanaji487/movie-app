import { getTrendingMovies } from '@/utils/request'
import Card from './components/Card';

export default async function Home() {
  const movies = await getTrendingMovies();
  return (
    <div className=''>
      <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mx-auto py-4'>
        {movies.map(movie =>{
          return (
            <Card movie={movie} />
          )
        })}
      </div>
    </div>
  )
}