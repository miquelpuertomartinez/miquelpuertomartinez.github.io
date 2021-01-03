import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright"> 
	        <a href="mailto:miquelpm18@gmail.com">Email</a> <a>|</a>
            <a href="https://github.com/miquelpuertomartinez">Github</a> <a>|</a>
            <a href="https://www.linkedin.com/in/miquel-puerto-mart%C3%ADnez-b8a38b166/">Linkedin</a>
        </p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
