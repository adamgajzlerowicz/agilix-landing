import React from 'react';

import PageWrapper from '../components/PageWrapper';
import { Seo } from '../components/seo';
import { Container } from 'react-bootstrap';
import { Section } from '../components/Core';
import WithBox from '../sections/price/withBox';
import Line from '../sections/price/line';

export default function () {
  return (
    <PageWrapper>
      <h1 className="text-3xl font-bold underline text-red-900">Hello world!</h1>
      <Seo title="Cennik" />
      <Section>
        <div className="flex justify-center flex-col items-center" data-cy="pricing-page">
          <div className={'flex flex-col items-center gap-12 p-4 w-full max-w-screen-2xl'}>
            <div
              className="w-full flex rounded-2xl min-h-[calc(100vh_-_300px)]
         bg-[url('/images/mongo-jump.png')] bg-opacity-50 bg-center bg-cover bg-no-repeat
          bg-slate-300
         shadow-2xl
         ">
              <div className="bg-slate-300 bg-opacity-50 w-full flex-1  items-center justify-center flex-col rounded flex rounded-2xl">
                <div className="w-full pb-4 text-[40px] sm:text-[88px] font-bold flex text-center content-center justify-center ">
                  Prosty model cenowy
                </div>

                <p className="text-xl text-center content-center pt-4">
                  Dopasowujemy się do Twoich potrzeb.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 content-evenly flex-1 w-full gap-16 justify-evenly sm-p-2">
              <WithBox title={'foo'}>
                <div className="text-5xl font-bold mt-4 pl-2">
                  20 <span className="text-xl underline">za miesi20c</span>
                </div>

                <div className="flex flex-col items-start mt-8">
                  <Line>foo</Line>
                  <Line>bar</Line>
                </div>

                <div className="mt-4">
                  <span className="text-sm text-gray-600">{'deeee'}</span>
                </div>
              </WithBox>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="dark">
        <Container></Container>
      </Section>

      <Section>
        <Container></Container>
      </Section>
    </PageWrapper>
  );
}
