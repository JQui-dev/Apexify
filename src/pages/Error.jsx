// MODULES
import { useState, useEffect } from "react"

// PAGES

// COMPONENTS
import Loader from "./../components/Loader";

// STYLE
import './style/Error.scss';

import React from 'react';

function Error() {

  const [ count, setCount ] = useState(3)

  useEffect(() => {
    setTimeout(() => {
      if(count>1) {
        setCount(count - 1)
      } else {
        // window.history.back();
      }
    }, 1000);
  }, [ count ])
  

  return (
    <div className='Error'>
      <div className="right">
        <img src="/error.jpg"/>
      </div>

      <div className="left">
        <div className="top">
          <h1>ERROR</h1>
          <h2>404</h2>
        </div>

        <div className="bottom">
          <h3>Going back in</h3>
          <h4>{count} s</h4>
        </div>
      </div>
    </div>
  )
}

export default Error