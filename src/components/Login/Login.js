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
        <div className='container'>
          <div className={`row row-cols-lg-2 ${classes['dark-overlay']}`}>
            <div className={classes['login-left']}>
              <div className={classes['dark-overlay']}>
                <div className='col'>
                  <div className='row'>
                    <h2 className='display-4 text-center'>
                      <strong className='fw-bold'>Prueba gratis</strong>
                    </h2>
                  </div>
                  <div className='row'>
                    <h5 className='p-4 align-self-end login-tagline text-center'>
                      Look, just because I don't be givin' no man a foot massage
                      don't make it right for Marsellus to throw Antwone into a
                      glass motherfuckin' house...
                    </h5>
                  </div>
                  <div className='row d-flex justify-content-center'>
                    <FontAwesomeIcon
                      icon={faTag}
                      className={`fa-4x ${classes['tag-icon']}`}
                    />
                  </div>
                  <div className='row'>
                    <div className='prices-before-after'>
                      <div className='container'>
                        <div className='row'>
                          <div className='col strikethrough'>100€</div>
                          <div className='col'>79€</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'></div>
          </div>
        </div>
      </main>
    </>
  )
}
