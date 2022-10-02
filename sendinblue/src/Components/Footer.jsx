import "../Components/footer.css";
function Footer() {
  return (
    <div className="main">
      <div className="nav">
        <div>
          <img
            style={{ width: "300px", margin: "5px", marginLeft: "-1800px" }}
            src="https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/common/logo-color.svg"
            alt="logo"
          ></img>
        </div>
        <div className="icon">
          <div>
            <img
              style={{ width: "50px", margin: "5px" }}
              src="https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/footer/rs-facebook.svg"
              alt="fblogo"
            ></img>
          </div>
          <div>
            <img
              style={{ width: "50px", margin: "5px" }}
              src="https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/footer/rs-twitter.svg"
              alt="twitterlogo"
            ></img>
          </div>
          <div>
            <img
              style={{ width: "50px", margin: "5px" }}
              src="	https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/footer/rs-linkedin.svg"
              alt="lnlogo"
            ></img>
          </div>
          <div>
            <img
              style={{ width: "50px", margin: "5px" }}
              src="https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/footer/rs-instagram.svg"
              alt="Instagram logo"
            ></img>
          </div>
          <div>
            <img
              style={{ width: "50px", margin: "5px" }}
              src="	https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/footer/rs-youtube.svg"
              alt="youtube logo"
            ></img>
          </div>
        </div>
      </div>
      {/* //footer */}
      <div className="footer">
        <div className="div">
            <div>
          <img
            src="https://www.sendinblue.com/wp-content/uploads/2019/05/CEO_Footer_image.jpg"
            alt="logo"
            style={{ width: "150px" }}
          ></img>
          </div>
          <div>
          <p
            style={{ fontSize:"20px"}}
          >
             Email, SMS, Facebook, Chat, CRM, and more, all-in-one
            platform to help you grow your business through building stronger
            customer relationships.
          </p>
         
          <h5 style={{color:"#0092FF"}}> Why Sendinblue? </h5>
          </div>
        </div>
        <div>
          <h4>Solutions</h4>
          <p>Features</p>
          <p>Enterprise offer</p>
          <p>Sendinblue vs. Mailchimp</p>
          <p>Service Lab</p>
          <p>Partner with us</p>
        </div>
        <div>
          <h4> Company</h4>
          <p>About us</p>
          <p>Jobs</p>
          <p>Press</p>
          <p>Our carbon footprint</p>
          <p>Contact us</p>
          <p>GDPR</p>
        </div>
        <div>
          <h4> Resources</h4>
          <p>Blog</p>
          <p>Help center</p>
          <p>Sendinblue Academy</p>
          <p>Glossary</p>
          <p>Plugins</p>
          <p>API docs</p>
          <p>Status</p>
          <p>Find an Expert</p>
          <p>Product Updates</p>
        </div>
      </div>


      <div>
      <hr></hr>
      <div className="last">
        <div>
          <p>© 2022 Sendinblue. All rights reserved</p>
        </div>
        <div>
          <p>Cookie Settings, Anti-Spam, Privacy, User agreement, Legal Notice and Responsible Disclosure</p>
        </div>
      </div>
      </div>
    
    
    </div>
  );
}
export default Footer;
