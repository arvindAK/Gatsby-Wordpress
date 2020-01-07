import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const PrimaryLayout = props => (
  <div>
    <Header />
    <div className="container">
      <div className="row justify-content-md-center">{props.children}</div>
    </div>
    <Footer></Footer>
  </div>
)

export default PrimaryLayout
