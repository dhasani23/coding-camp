import React from 'react';
import classNames from 'classnames';

const FooterSocial = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="https://twitter.com/rondevootv" target="_blank" rel="noopener noreferrer">
            <svg
              width="28"
              height="28"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">
              <title>Twitter</title>
              <path
                d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/rondevootv/" target="_blank" rel="noopener noreferrer">
            <svg
              width="28"
              height="28"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">
              <title>Instagram</title>
              <g>
                <circle cx="12.145" cy="3.892" r="1" />
                <path
                  d="M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                <path
                  d="M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z" />
              </g>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/rondevoo-io" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>  
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocial;