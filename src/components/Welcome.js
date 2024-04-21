import react from "react";
import mainimg from "../images/video.webp";
import "./Welcome.css";
import { Link } from "react-router-dom";



const Welcome = () => {
  return (
    <>
      <div className="header">
        
        <div className="container content" id="main-container">
          <div className="text-content">
            <h1>FintelliLearn</h1>
            <p>
            Master Your Finances, Shape Your Future:  <br />
            FintelliLearn - Where Learning Meets Investment Innovation
            </p>
            <div className="button">
              <Link to="/login">
                <button class="log">Login</button>
              </Link>

              
                <Link to="/signup">
                <button class="reg">Sign up</button>
                </Link>
              
            </div>
          </div>
          <div className="img_1">
            
          </div>
        </div>
      </div>
      {/* </header> */}
    </>
  );
};
export default Welcome;