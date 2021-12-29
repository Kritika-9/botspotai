import "./firstPage.css";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import DirectionsTransitIcon from '@mui/icons-material/DirectionsTransit';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import HandymanIcon from '@mui/icons-material/Handyman';
import SchoolIcon from '@mui/icons-material/School';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';

const FirstPage = () => {
    return (
        <div>
        <div className="firstPage">
            <div className="topbar">
                <div className="topbarleft">
                    BOTSPOT AI 
                </div>
                <div className="topbarright">
                    <LocalPhoneIcon className= "Phoneicon" />
                    <SearchIcon className = "search" />
                    <MenuIcon className="Menu" />
                </div>
            </div>
            
                <div className="first">THE SOUL OF THE WORLD</div>
                <div><ArrowRightIcon className="arrowright"/></div>
                <div className="second">A SIMPLE SOLUTION</div>
                <div className="rectangle"></div>
                <div className="third">For businesses and organizations - you can build communities and engage audiences with one easy-to-use mobile app platform.</div>
                <button className="leftbutton" type="button" 
                onClick={(e) => {
                    e.preventDefault();
                    window.open("https://botspotai.com/index.php/about-us/","_blank");
                }}>Know More</button>
                
                <button className="rightbutton" type="button" 
                onClick={(e) => {
                    e.preventDefault();
                    window.open("https://botspotai.com/index.php/contact-us/","_blank");
                }}>Contact Us</button>

                <div className="bottom"></div>
                <div className="text">Why Choose BOTSPOT AI ?   
                    We’re so glad you asked !</div>

                <button className="button1" type="button" 
                onClick={(e) => {
                    e.preventDefault();
                    window.open("https://botspotai.com/","_blank");
                }}>GET STARTED TODAY</button>
               <ArrowDownwardIcon className="downArrow1"/>

                <button className="button2" type="button" 
                onClick={(e) => {
                    e.preventDefault();
                    window.open("https://botspotai.com/","_blank");
                }}>Our Services</button>
                <ArrowDownwardIcon className="downArrow2"/>
                
        </div>
        

        < div className="middletext">Botsopot AI offers our customer a wealth of technical and business
            expertise. We create diverse, complex, web and mobile solutions for any busness need. 
           Our knowledge and experience transkate to added value and peace of mind for our customer.
           </div>
           <div><HeartBrokenIcon className="heart" /></div>
           <div><ShoppingCartIcon className="cart" /></div>
           <div className="rectserve"></div>
           <div className="textserve">Who We Serve</div>
           <div><LightbulbIcon className="bulb"/></div>
           
           <div className="bottomtext">
               Botspot AI serves businesses in all major sectors, 
               providing exceptional software solutions for large corporation, mid-sized and startups. 
               we use industry specific knowledge and custom tailor our products to each customer’s
               unique needs.
            </div>
            <div><DirectionsTransitIcon className="bus"/></div>

            <div className="rect1"></div>
            <div><LocalAtmIcon className="dollar"/></div>
           <div className="rect1text">Finance and Insurance</div>
           
           <div className="rect2"></div>
            <div><HealthAndSafetyIcon className="health"/></div>
           <div className="rect2text">HealthCare</div>
           
           <div className="rect3"></div>
            <div><HandymanIcon className="hammer"/></div>
           <div className="rect3text">Construction</div>

           <div className="rect4"></div>
            <div className="rect4text">Wholesale and retail</div>

           <div className="rect5"></div>
           <div><SchoolIcon className="school"/></div>
           <div className="rect5text">Education</div>

           <div className="rect6"></div>
            <div className="rect6text">Energy and resources</div>

           <div className="rect7"></div>
            <div><TheaterComedyIcon className="comedy"/></div>
           <div className="rect7text">Entertainment</div>

           <div className="rect8"></div>
            <div className="rect8text">Transportation</div>
            <div>   </div>
</div>
    )
}

export default FirstPage
