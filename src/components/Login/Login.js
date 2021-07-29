import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTag } from '@fortawesome/free-solid-svg-icons'

import inubaLogo from '../../assets/inuba-logo.png'

import classes from './Login.module.scss'

export default function Login() {
  return (
    <>
      <main className={`${classes['login-section']}`}>
        <div className={`container ${classes['u-min-height-100']}`}>
          <div className={`row row-cols-lg-2 ${classes['u-height-100']}`}>
            <div
              className={`d-flex align-items-center ${classes['login-left']} ${classes['light-overlay']}`}
            >
              <div className='col text-white'>
                <div className='row'>
                  <div className={classes['tagline']}>
                    <h2 className='display-4 text-center'>
                      <strong className={classes['fw-bold']}>
                        Prueba gratis
                      </strong>
                    </h2>
                  </div>
                  <div className='row'>
                    <div className={classes['paragraph-tagline']}>
                      <h5 className='p-4 align-self-end text-center'>
                        Look, just because I don't be givin' no man a foot
                        massage don't make it right for Marsellus to throw
                        Antwone into a glass motherfuckin' house...
                      </h5>
                    </div>
                  </div>
                  <div className='row'>
                    <div
                      className={`d-flex justify-content-center ${classes['tag-icon']}`}
                    >
                      <FontAwesomeIcon icon={faTag} className='fa-4x' />
                    </div>
                  </div>
                  <div className='row text-center'>
                    <div className={classes['prices-bebore-after']}>
                      <div className='container'>
                        <div className='row'>
                          <div className='col'>
                            <div className={classes['price-before']}>
                              <span
                                className={`display-4 fw-bold ${classes['strikethrough']}`}
                              >
                                100€
                              </span>
                            </div>
                          </div>
                          <div className='col'>
                            <div className='price-after'>
                              <span
                                className={`display-4 fw-bold ${classes['strikethrough']}`}
                              >
                                79€
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={classes['benefits']}>
                    <div className={classes['benefit']}>
                      <div className='d-flex'>
                        <div className='p-4 align-self-start'>
                          <FontAwesomeIcon
                            icon={faCheck}
                            className={`fa-2x ${classes['check-icon']}`}
                          />
                        </div>
                        <div className='p-4 align-self-end'>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Laudantium doloremque excepturi commodi corporis
                          non asperiores!
                        </div>
                      </div>
                    </div>
                    <div className={classes['benefit']}>
                      <div className='d-flex'>
                        <div className='p-4 align-self-start'>
                          <FontAwesomeIcon
                            icon={faCheck}
                            className={`fa-2x ${classes['check-icon']}`}
                          />
                        </div>
                        <div className='p-4 align-self-end'>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Laudantium doloremque excepturi commodi corporis
                          non asperiores!
                        </div>
                      </div>
                    </div>
                    <div className={classes['benefit']}>
                      <div className='d-flex'>
                        <div className='p-4 align-self-start'>
                          <FontAwesomeIcon
                            icon={faCheck}
                            className={`fa-2x ${classes['check-icon']}`}
                          />
                        </div>
                        <div className='p-4 align-self-end'>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Laudantium doloremque excepturi commodi corporis
                          non asperiores!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`d-flex align-items-center ${classes['login-right']} p-5`}
            >
              <div className='col'>
                <div className='ro'>
                  <div className='col col-lg-4 col-md-4 col-xs-4'>
                    <img
                      src={inubaLogo}
                      class='img-fluid'
                      alt='iNUBA logo'
                    ></img>
                  </div>
                </div>
                <div className='row'>
                  <div className='login-text'>
                    <h4 className='mt-5 mb-4 fw-bold text-secondary'>
                      Iniciar sesión
                    </h4>
                  </div>
                </div>
                <div className='row'>
                  <div className='login-form'>
                    <form>
                      <div class='mb-3'>
                        <label for='exampleInputEmail1' class='form-label'>
                          Usuario
                        </label>
                        <input
                          type='email'
                          class='form-control'
                          id='user-input'
                          placeholder='Introduce tu nombre de usuario'
                        />
                      </div>
                      <div class='mb-3'>
                        <label for='password' class='form-label'>
                          Contraseña
                        </label>
                        <input
                          type='password'
                          class='form-control'
                          id='password-input'
                          placeholder='Introduce tu contraseña'
                        />
                        <div id='forgotPassword' class='form-text'>
                          <a
                            href='#'
                            className='text-secondary text-decoration-none'
                          >
                            Has olvidado tu contraseña?
                          </a>
                        </div>
                      </div>
                      <button
                        type='submit'
                        class='btn btn-primary text-uppercase float-end fw-bold mt-4 px-5 py-2'
                      >
                        Iniciar sesión
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
