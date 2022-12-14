import "./Profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from '../../components/Posts/Posts';


export default function Profile() {
  return (
    <div className="profile">
      <div className="images">
        <img src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y292ZXIlMjBwaG90b3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="Cover" className="cover" />
        <img src="https://play-lh.googleusercontent.com/BMryS7Cn454jIAVrchF9as-7WOG07H97Lugr62ISdJSo7wj1cC-0MTUm3SqSZffc7IQ" alt="Profile" className="profilePicture" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href='https://www.facebook.com/'>
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href='https://www.instagram.com/'>
              <InstagramIcon fontSize="large" />
            </a>
            <a href='https://twitter.com/'>
              <TwitterIcon fontSize="large" />
            </a>
            <a href='https://bg.linkedin.com/'>
              <LinkedInIcon fontSize="large" />
            </a>
            <a href='https://www.pinterest.at/'>
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Valeri Yakimov</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>BG</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>Bulgerian</span>
              </div>
            </div>
              <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
    <Posts />
      </div>
    </div>
  )
}
