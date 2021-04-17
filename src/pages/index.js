import React from "react"
import { Link } from 'gatsby'
import '../styles/index.scss'

const IndexPage = () => {
  return (
    <div class='master'>
      <div class='center'>
        <h1>MIQUEL PUERTO MARTINEZ</h1>
        <p>Telematic engineer, communications and maker</p>
      </div>
      <div class='content'>
      <div class="button"><Link style={{ textDecoration: 'none' }} to="/blog" ><a style={{ color: 'black'}}>My work</a></Link></div>
      </div>
    </div> 
  )
}

export default IndexPage