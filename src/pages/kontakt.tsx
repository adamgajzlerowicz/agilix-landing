import React from 'react';
import Cta from '../sections/landing/Cta';

import PageWrapper from '../components/PageWrapper';
import { Seo } from '../components/seo';

const Kontakt = () => (
  <PageWrapper footerDark>
    <Seo title="Kontakt" />

    <div style={{ marginTop: 150 }}>
      <Cta />
    </div>
  </PageWrapper>
);

export default Kontakt;
