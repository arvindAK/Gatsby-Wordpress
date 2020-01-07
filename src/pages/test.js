import React from "react"
import { navigate } from "gatsby"
import Header from "../components/Header"

const Test = () => (
  <div>
    <Header />
    <h1>This is the test page!</h1>
    <button onClick={() => navigate("/")}>Home page</button>
  </div>
)

export default Test
