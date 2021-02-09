import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <small class='website-rights'>
              <span>© 2021 by Nishtha Gakkhar  </span>
              <span><i class="fa fa-heart"></i></span>
            </small>
          </div>
          <div class='social-icons'>
            <a class='social-icon-link LinkedIn' href="https://www.linkedin.com/in/nishtha-gakkhar-532784111/">
                 <i class='fa fa-linkedin' />
            </a>
            <a class='social-icon-link LinkedIn' href="https://github.com/nishgakkhar">
              <i class='fa fa-github' />
            </a>
            <a class='social-icon-link LinkedIn' href={`mailto:nishgakkhar@gmail.com`}>
                 <i class='fa fa-envelope' />
            </a>
          </div>
            <div>
            <a class='website-rights' href={`mailto:nishgakkhar@gmail.com`}>
                  <small class="website-rights">nishgakkhar@gmail.com</small>
            </a>
          </div>
        </div>
    </div>
  );
}

export default Footer;
