import "../../styles/pages/contactUs/contactUs.scss";
import { Call, EmailOutlined } from "@mui/icons-material"


function ContacctUs() {
  return (
    <div className="contactUs">
      <div className="left">
        <div className="call-to-us">
          {/* <Call style={{backgroundColor:"orange", color:"white", borderRadius:"10px"}}/> */}
          <h2><Call style={{backgroundColor:"rgba(219, 68, 68, 1)", color:"white", borderRadius:"10px"}}/> Call to Us</h2>
          <p>We are availble 24/7, 7 days a week.</p>
          <span>Phone: <a href="tel:+355671234567">+355671234567</a></span>
        </div>
        
        <div className="write-to-us">
          
          <h2><EmailOutlined style={{backgroundColor:"rgba(219, 68, 68, 1)", color:"white", borderRadius:"10px"}}/> Write To US</h2>
          <p>Fill out our form and we will contact <br />you within 24 hours</p>
          <a href="mailto:customer@exclusive.com">Emails: customer@exclusive.com</a>
          <br />
          <a href="mailto:support@exclusive.com">Emails: support@exclusive.com</a>
        </div>
      </div>

      <div className="right">
        <div className="name-email-phone">
          <input type="text" placeholder="Your Name"/>
          <input type="email" placeholder="Your Email" />
          <input type="tel" placeholder="Your Phone" />
        </div>
        <div className="message">
          <textarea placeholder="Your Message" ></textarea>
        </div>
        <button>Send Message</button>
      </div>
    </div>
  )
}

export default ContacctUs
