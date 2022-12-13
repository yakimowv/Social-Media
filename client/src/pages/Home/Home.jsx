import Stories from '../../components/Stories/Stories'
import Posts from '../../components/Posts/Posts'
import './Home.scss'

export default function Home() {
  return (
    <div className='home'>
      <Stories/>
      <Posts/>
    </div>
  )
}
