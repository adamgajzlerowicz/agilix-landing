import React, { useEffect } from 'react'
import { GlobalProvider } from './src/context/GlobalContext'
import Layout from './src/components/Layout'
import { useLocation } from '@reach/router'
import './src/styles/global.css'

export const wrapPageElement = ({ element, props }) => {
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
  }, [location.pathname])

  return <Layout {...props}>{element}</Layout>
}

export const wrapRootElement = ({ element }) => <GlobalProvider>{element}</GlobalProvider>
