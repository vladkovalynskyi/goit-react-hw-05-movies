import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom';
import css from './GoBackBtn.module.css'

export const GoBackBtn = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');  
    
  return (
    <div>
        <Link to={backLinkLocationRef.current} className={css.button}>
          &#129044; Go back
        </Link>
    </div>
  )
}
