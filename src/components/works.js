import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      cardOne: file(relativePath: { eq: "card1.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardTwo: file(relativePath: { eq: "card2.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardThree: file(relativePath: { eq: "card3.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFour: file(relativePath: { eq: "card4.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="video-section">
      <div className="container">
        <div className="video-player">
          <div className="grid">
            <div className="flip-card col-1">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Img
                    className="img1"
                    fluid={data.cardOne.childImageSharp.fluid}
                    style={{
                      width: `200px`,
                      height: `300px`,
                    }}
                  />
                </div>
                <div className="flip-card-back">
                  <h2>To Do List</h2>
                  <span>Youtube Channel</span>
                  <div className="sm">
                    <a href="#">
                      <i className="fa fa-github-square" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-globe" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flip-card col-2">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <Img
                    className="img2"
                    fluid={data.cardTwo.childImageSharp.fluid}
                  />
                </div>
                <div class="flip-card-back">
                  <h2>To Do List</h2>
                  <span>Youtube Channel</span>

                  <div class="sm">
                    <a href="#">
                      <i class="fa fa-github" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-globe" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flip-card col-3">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <Img
                    className="img3"
                    fluid={data.cardThree.childImageSharp.fluid}
                    style={{
                      width: `200px`,
                      height: `300px`,
                    }}
                  />
                </div>
                <div class="flip-card-back">
                  <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
              </div>
            </div>

            <div className="flip-card col-4">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <Img
                    className="img4"
                    fluid={data.cardFour.childImageSharp.fluid}
                    style={{
                      width: `200px`,
                      height: `300px`,
                    }}
                  />
                </div>
                <div class="flip-card-back">
                  <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
