import PostMapping from './PostMapping'
import { useQuery } from '@tanstack/react-query'
import './Posts.scss'
import { makeRequest } from '../../axios'


export default function Posts({userId}) {
 
  const { isLoading, error, data } = useQuery(['posts'], () =>
  makeRequest.get("/posts?userId="+userId).then((res) => {
    return res.data;
  })
  )
  return (
    <div className='posts'>
      {error
        ? 'Someting went wrong!'
        : isLoading
          ? 'Loading...'
          : data.map(post =>
            <PostMapping post={post} key={post.id} />)}
    </div>
  )
}
