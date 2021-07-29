import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTag } from '@fortawesome/free-solid-svg-icons'

import inubaLogo from '../../assets/inuba-logo.png'

import classes from './Login.module.scss'

export default function Login() {
  return (
    <>
      <main className={classes['login-section']}>
        <div className={classes['login-left']}>
          <div className={classes['dark-overlay']}>
            <h2 className={classes['display-4 text-center']}>
              <strong className='fw-bold'>Prueba gratis</strong>
            </h2>
            <h5 className='p-4 align-self-end login-tagline'>
              Look, just because I don't be givin' no man a foot massage don't
              make it right for Marsellus to throw Antwone into a glass
              motherfuckin' house...
            </h5>
          </div>
        </div>
        <div className={classes['login-right']}></div>
      </main>
    </>
  )
}
