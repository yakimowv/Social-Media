import './Rightbar.scss'
import SuggestionPicture from '../../assets/asd.png'
import SuggestionPictureSecond from '../../assets/dddd.jpg'
import SuggestionPictureFourth from '../../assets/a1.jpg'
import SuggestionPictureThird from '../../assets/a2.jpg'

export default function Rightbar() {
	return (
		<div className='rightbar'>
			<div className='container'>
				<div className='item'>
					<span>Suggestions For You</span>
					<div className='user'>
						<div className='userInfo'>
							<img src={SuggestionPicture} alt='User' />
							<span>Natsu Dragneel</span>
						</div>
						<div className='buttons'>
							<button>follow</button>
							<button>dismiss</button>
						</div>
					</div>
					<div className='user'>
						<div className='userInfo'>
							<img src={SuggestionPictureSecond} alt='User' />
							<span>Itachi Uchiha</span>
						</div>
						<div className='buttons'>
							<button>follow</button>
							<button>dismiss</button>
						</div>
					</div>
				</div>
				<div className="item">
					<span>Latest Activities</span>
					<div className='user'>
						<div className='userInfo'>
							<img src={SuggestionPicture} alt='User' />
							<p>
								<span>Natsu Dragneel</span> changed their cover picture
							</p>
						</div>
						<span>1 mi ago</span>
					</div>
					<div className='user'>
						<div className='userInfo'>
							<img src={SuggestionPictureSecond} alt='User' />
							<p>
								<span>Itachi Uchiha</span> changed their cover picture
							</p>
						</div>
						<span>10 mi ago</span>
					</div>
					<div className='user'>
						<div className='userInfo'>
							<img src={SuggestionPictureThird} alt='User' />
							<p>
								<span>Naruto Uzumaki</span> changed their cover picture
							</p>
						</div>
						<span>1 mi ago</span>
					</div>
					<div className='user'>
						<div className='userInfo'>
							<img src={SuggestionPictureFourth} alt='User' />
							<p>
								<span>Saske Uchiha</span> changed their cover picture
							</p>
						</div>
						<span>1 mi ago</span>
					</div>
				</div>
				<div className="item">
					<span>Online Friends</span>
					<div className='user'>
						<div className='userInfo'>
							<img src={SuggestionPictureFourth} alt='User' />
							<div className='online'/>
								<span>Saske Uchiha</span> 
						</div>
					</div>
					<div className='user'>
						<div className='userInfo'>
							<img src={SuggestionPictureSecond} alt='User' />
							<div className='online'/>
								<span>Itachi Uchiha</span> 
						</div>
					</div>
					<div className='user'>
						<div className='userInfo'>
							<img src={SuggestionPictureThird} alt='User' />
							<div className='online'/>
								<span>Naruto Uzumaki</span> 
						</div>
					</div>
					<div className='user'>
						<div className='userInfo'>
							<img src={SuggestionPicture} alt='User' />
							<div className='online'/>
								<span>Natsu Dragniel</span> 
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}
