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
                    <div className='tagline'>
                      <h2 className='display-4 text-center'>
                        <strong className='fw-bold'>Prueba gratis</strong>
                      </h2>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='paragraph-tagline'>
                      <h5 className='p-4 align-self-end text-center'>
                        Look, just because I don't be givin' no man a foot
                        massage don't make it right for Marsellus to throw
                        Antwone into a glass motherfuckin' house...
                      </h5>
                    </div>
                  </div>
                  <div className='row d-flex justify-content-center'>
                    <FontAwesomeIcon
                      icon={faTag}
                      className={`${classes['tag-icon']} fa-4x`}
                    />
                  </div>
                  <div className='row text-center'>
                    <div className='prices-bebore-after'>
                      <div className='container'>
                        <div className='row'>
                          <div className='col'>
                            <div className='price-before'>
                              <span className='fs-1 fw-bold strikethrough'>
                                100€
                              </span>
                            </div>
                          </div>
                          <div className='col'>
                            <div className='price-after'>
                              <span className='fs-1 fw-bold'>79€</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col'></div>
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
