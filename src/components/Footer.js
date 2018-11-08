import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li><a href="https://twitter.com/elgentos" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                {/*<li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>*/}
                {/*<li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>*/}
                <li><a href="https://github.com/elgentos" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="https://www.linkedin.com/company/elgentos/" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; elgentos</li><li>Built with: <a href="https://gatsbyjs.org">GatsbyJS</a></li>
            </ul>
        </div>
    </footer>
)

export default Footer