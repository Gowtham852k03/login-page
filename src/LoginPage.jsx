import React from 'react';
import './LoginPage.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

class LoginPage extends React.Component {
  handleSignUpClick = () => {
    this.container.classList.add("sign-up-mode");
  };

  handleSignInClick = () => {
    this.container.classList.remove("sign-up-mode");
  };

  render() {
    return (
      <div className="container" ref={c => (this.container = c)}>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <div className="icon">
                <FontAwesomeIcon icon={faUser} />
                </div>
                
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
              <div className="icon">
              <FontAwesomeIcon icon={faLock} />
                </div>
               
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="btn solid" />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
              <div className="icon">
              <FontAwesomeIcon icon={faUser} />
                </div>
                
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
              <div className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
                </div>
                
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
              <div className="icon">
              <FontAwesomeIcon icon={faLock} />
                </div>
                
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className="btn" value="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                ex ratione. Aliquid!
              </p>
              <button className="btn transparent" onClick={this.handleSignUpClick}>
                Teachers Login
              </button>
            </div>
            <img src="img/log.svg" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button className="btn transparent" onClick={this.handleSignInClick}>
                Sign in
              </button>
            </div>
            <img src="img/register.svg" className="image" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
