import React, { useEffect } from 'react'
import { GlobalProvider } from './src/context/GlobalContext'
import Layout from './src/components/Layout'
import { useLocation } from '@reach/router'

export const wrapPageElement = ({ element, props }) => {
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 1000)
  }, [location.pathname])

  return <Layout {...props}>{element}</Layout>
}

export const wrapRootElement = ({ element }) => <GlobalProvider>{element}</GlobalProvider>
