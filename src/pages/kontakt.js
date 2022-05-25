import React from 'react'
import Cta from '../sections/landing/Cta'

import PageWrapper from '../components/PageWrapper'
import { Helmet } from 'react-helmet'

const Kontakt = () => (
  <PageWrapper footerDark>
    <Helmet>
      <title>Kontakt</title>
    </Helmet>
    <div style={{ marginTop: 150 }}>
      <Cta />
    </div>
  </PageWrapper>
)

export default Kontakt
