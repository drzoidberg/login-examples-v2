import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTag } from '@fortawesome/free-solid-svg-icons'

import { userLogin } from '../../store/actions'

import inubaLogo from '../../assets/inuba-logo.png'

import classes from './Login.module.scss'

function Form() {
  const [userTextInput, setUserTextInput] = React.useState('')
  const [passwordInput, setPasswordInput] = React.useState('')
  const dispatch = useDispatch()

  function handleUserTextInput(e) {
    return setUserTextInput(e.target.value)
  }

  function handlePasswordInput(e) {
    return setPasswordInput(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(userLogin({ name: userTextInput, password: passwordInput }))
  }

  return (
    <form>
      <div className='mb-3'>
        <input
          type='email'
          className='form-control'
          placeholder='Usuario'
          id='user-input'
          value={userTextInput}
          onChange={handleUserTextInput}
        />
      </div>
      <div className='mb-3'>
        <input
          type='password'
          className='form-control'
          placeholder='Contraseña'
          id='password-input'
          value={passwordInput}
          onChange={handlePasswordInput}
        />
        <div id='forgotPassword' className='form-text'>
          <a href='#' className='text-secondary text-decoration-none'>
            Has olvidado tu contraseña?
          </a>
        </div>
      </div>
      <button
        type='submit'
        className='btn btn-lg btn-primary text-uppercase float-end fw-bold mt-4 px-5 py-2 fs-6'
        onClick={handleSubmit}
      >
        Iniciar sesión
      </button>
    </form>
  )
}

function FormValidate({ userData }) {
  switch (userData) {
    case 'logged in':
      return <Redirect to='/home' />
    case 'logged out':
      return <Form />
    default:
      return <Form />
  }
}
FormValidate.propTypes = PropTypes.string.isRequired

export default function Login() {
  const userData = useSelector(state => state.user)

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
                      className={`d-flex justify-content-center position-relative ${classes['tag-icon']}`}
                    >
                      <span className='fs-4 fw-bold position-absolute top-50 start-50 translate-middle text-white'>
                        %
                      </span>
                      <FontAwesomeIcon icon={faTag} className='fa-4x' />
                    </div>
                  </div>
                  <div className='row text-center'>
                    <div className={classes['prices-bebore-after']}>
                      <div className='container'>
                        <div className='row my-4'>
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
                              <span className={`display-4 fw-bold`}>79€</span>
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
                        <div className='py-4 pe-4 align-self-end'>
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
                        <div className='py-4 pe-4  align-self-end'>
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
                        <div className='py-4 pe-4  align-self-end'>
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
                      className='img-fluid'
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
                    {/* FormValidate */}
                    <FormValidate userData={userData} />
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
