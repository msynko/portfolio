import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaGlobeAmericas, FaGithub } from "react-icons/fa"

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
    <div className="video-section" id="work">
      <div className="container">
        <h3>Some of my projects</h3>

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
                  <div className="flip-card-back-content">
                    <div className="sm">
                      <a href="https://github.com/msynko/react-todo">
                        <FaGithub />
                      </a>
                      <a href="https://msynko.github.io/react-todo">
                        <FaGlobeAmericas />
                      </a>
                    </div>
                    <h4>To do list app</h4>
                    <p>To do list build with React</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flip-card col-2">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Img
                    className="img2"
                    fluid={data.cardTwo.childImageSharp.fluid}
                  />
                </div>
                <div className="flip-card-back">
                  <div className="flip-card-back-content">
                    <div className="sm">
                      <a href="https://github.com/msynko/react-piano">
                        <FaGithub />
                      </a>
                      <a href="https://msynko.github.io/react-piano/">
                        <FaGlobeAmericas />
                      </a>
                    </div>
                    <h4>Piano App</h4>
                    <p>
                      An interactive Piano App build with React and Soundfont
                      loader
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flip-card col-3">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Img
                    className="img3"
                    fluid={data.cardThree.childImageSharp.fluid}
                    style={{
                      width: `200px`,
                      height: `300px`,
                    }}
                  />
                </div>
                <div className="flip-card-back">
                  <div className="flip-card-back-content">
                    <div className="sm">
                      <a href="https://github.com/msynko/DineIn">
                        <FaGithub />
                      </a>
                      <a href="https://msynko.github.io/dinein/">
                        <FaGlobeAmericas />
                      </a>
                    </div>
                    <h4>Landing Page</h4>
                    <p>Landing page build with HTML,CSS,JS</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flip-card col-4">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Img
                    className="img4"
                    fluid={data.cardFour.childImageSharp.fluid}
                    style={{
                      width: `200px`,
                      height: `300px`,
                    }}
                  />
                </div>
                <div className="flip-card-back">
                  <div className="flip-card-back-content">
                    <div className="sm">
                      <a href="https://github.com/msynko/crypto-app">
                        <FaGithub />
                      </a>
                      <a href="https://msynko.github.io/crypto-app/">
                        <FaGlobeAmericas />
                      </a>
                    </div>
                    <h4>BITCOIN CHART</h4>
                    <p>
                      30day Bitcoin Crypto Chart build with React, VX and D3.js
                    </p>
                  </div>
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
