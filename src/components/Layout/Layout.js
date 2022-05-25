import React, { useState, useEffect, useLayoutEffect, useContext, useRef } from 'react'

import styled, { ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet'
import AOS from 'aos'

import Header from '../Header'
import Footer from '../Footer'

import GlobalContext from '../../context/GlobalContext'

import GlobalStyle from '../../utils/globalStyle'

import imgFavicon from '../../assets/agilix-new.svg'

import '../../assets/fonts/icon-font/fonts/avasta.ttf'
import '../../assets/fonts/icon-font/css/style.css'

import './bootstrap-custom.scss'
import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'
import '../../../node_modules/aos/dist/aos.css'

import '../../assets/fonts/icon-font/css/style.css'
import '../../assets/fonts/fontawesome-5/css/all.css'

import { get, merge } from 'lodash'

import { theme as baseTheme } from '../../utils'

const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  z-index: 9999999999;
  opacity: 1;
  visibility: visible;
  transition: all 0.2s ease-out 0.1s;
  &.inActive {
    opacity: 0;
    visibility: hidden;
  }
`

// options for different color modes
const modes = { light: 'light', dark: 'dark' }

const getTheme = mode =>
  merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
  })

const Layout = ({ children }) => {
  const gContext = useContext(GlobalContext)

  useLayoutEffect(() => {
    AOS.init()
  }, [])

  const eleRef = useRef()

  useEffect(() => {
    window.addEventListener(
      'popstate',
      function (event) {
        gContext.closeOffCanvas()
      },
      false,
    )
    window.addEventListener(
      'pushState',
      function (event) {
        gContext.closeOffCanvas()
      },
      false,
    )
  }, [gContext])

  return (
    <>
      <ThemeProvider theme={getTheme(modes.light)}>
        <GlobalStyle />
        <Helmet titleTemplate="%s | Agilix">
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-0003FLN5B7"></script>
          <script>{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-0003FLN5B7');
          `}</script>

          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

          {/*<link*/}
          {/*  rel="preload"*/}
          {/*  as="style"*/}
          {/*  href="https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap"*/}
          {/*/>*/}

          {/*<link*/}
          {/*  rel="stylesheet"*/}
          {/*  href="https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap"*/}
          {/*  media="print"*/}
          {/*  onLoad="this.media='all'"*/}
          {/*/>*/}

          {/*<link*/}
          {/*  rel="stylesheet"*/}
          {/*  href="https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap"*/}
          {/*/>*/}

          <title>Agilix</title>
          <link rel="icon" type="image/png" href={imgFavicon} />
        </Helmet>
        <Loader id="loading" className={'inActive'}>
          <div className="load-circle">
            <span className="one" />
          </div>
        </Loader>
        <div className="site-wrapper overflow-hidden" ref={eleRef}>
          <Header isDark={gContext.headerDark} />

          {children}

          <Footer isDark={gContext.footerDark} />
        </div>
      </ThemeProvider>
    </>
  )
}

export default Layout
