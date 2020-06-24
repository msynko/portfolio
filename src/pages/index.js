import React from "react"
import "../styles/styles.scss"

//Import Components
import Header from "../components/header"
import Banner from "../components/banner"
import AboutBlurb from "../components/aboutBlurb"
import Work from "../components/works"
import Footer from "../components/footer"

const IndexPage = () => {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }
  return (
    <div>
      <Header />
      <Banner />
      <AboutBlurb />
      <Work />
      <Footer />
    </div>
  )
}
export default IndexPage
