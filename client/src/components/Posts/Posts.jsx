import PostMapping from './PostMapping'
import { useQuery } from '@tanstack/react-query'
import './Posts.scss'
import { makeRequest } from '../../axios'


export default function Posts() {
  //DATA TO DELETE
  // const posts = [
  //   {
  //       id: 1,
  //       name: 'Valeri Yakimov',
  //       userId:1,
  //       profilePicture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCkRKGH_zZnRgUP8gpRBXGt6Y7nAzmE5giWA&usqp=CAU',
  //       desc: 'Driving my BMW',
  //       img: 'https://i.pinimg.com/originals/3f/00/63/3f0063f63e25a727ef8ca7b02e4fc84e.jpg'
  //   },
  //   {
  //       id: 2,
  //       name: 'Robby the Lobster',
  //       userId:1,
  //       profilePicture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ZU0W4Br4fGjCjdW9UaNXHiGrP-YBZfiYw9XU2MfbVaismhRj9XYnIuT_-jZQ3Xz0cuY&usqp=CAU',
  //       desc: 'Nacepin',
  //       img: 'https://thespongeclub.com/wp-content/uploads/2022/07/Larry-the-Lobster-Guide.png'
  //   },
  //   {
  //       id: 3,
  //       name: 'Brat Pit',
  //       userId:1,
  //       profilePicture:'https://akns-images.eonline.com/eol_images/Entire_Site/2014719/rs_600x600-140819123657-600-fury-brad-pitt.ls.81914.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top',
  //       desc: 'Driving my Tank',
  //       img: 'https://tankmuseum.org/wp-content/uploads/2020/06/Sherman-Fury-feat-1100x500.jpg'
  //   },
  //   {
  //       id: 4,
  //       name: 'Tori Black',
  //       userId:1,
  //       profilePicture:'https://m.media-amazon.com/images/M/MV5BMTQwNDcwNzMzM15BMl5BanBnXkFtZTcwODk2ODM3OA@@._V1_.jpg',
  //       desc: 'In Paris',
  //       img: 'https://i.pinimg.com/originals/59/5d/a7/595da7af08374a4e3930930df3b93524.jpg'
  //   },
  // ]
  const { isLoading, error, data } = useQuery(['repoData'], () =>
    makeRequest.get('/posts').then(res => {
      return res.data
    })
  )
  console.log(data)
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
