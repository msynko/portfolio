import React from "react"

//Featured Companies
import afropunk from "../images/afropunk.png"
import creativeBoom from "../images/creative-boom.png"
import vogue from "../images/vogue.png"
import wgsn from "../images/wgsn.png"

// Socials
import twitter from "../images/twitter.svg"
import instagram from "../images/instagram.svg"

const featured = [
  { name: "CreativeBoom", image: creativeBoom },
  { name: "Afropunk", image: afropunk },
  { name: "WGSN", image: wgsn },
  { name: "Vogue", image: vogue },
]

const Footer = () => {
  return (
    <footer id="contact">
      <div className="featured-companies">
        <div className="container">
          <div className="title">
            <h3>Let’s Get In Touch</h3>
          </div>
          <div className="content">
            <div class="left-side">
              <h3>
                <a href="https://github.com/msynko">Github</a>
              </h3>

              <h3>
                <a href="https://www.linkedin.com/in/marynasynko">LinkedIn</a>
              </h3>
            </div>
            <div class="right-side">
              <h3>
                <a href="#">Resume</a>
              </h3>

              <h3>
                <a href="mailto:marina.synko@gmail.com">Email</a>
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="inner">
          <span>© 2020 Maryna Synko</span>

          <span>marina.synko@gmail.com</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
