import Stories from '../../components/Stories/Stories'
import Posts from '../../components/Posts/Posts'
import './Home.scss'
import Share from '../../components/Share/Share'

export default function Home() {
  return (
    <div className='home'>
      <Stories/>
      <Share/>
      <Posts/>
    </div>
  )
}
