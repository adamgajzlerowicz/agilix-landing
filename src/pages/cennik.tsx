import React from 'react'

import PageWrapper from '../components/PageWrapper'
import { Seo } from '../components/seo'
import { Container } from 'react-bootstrap'
  import { Section } from '../components/Core'
import WithBox from '../sections/price/withBox'
import Line from '../sections/price/line'

    // categoriesTitle: 'Minus Zero / Zero / Open',
    // price: '1 zł',
    // perDay: '/ za dzień *',
    // categories: 'Kategorie Minus Zero, Zero oraz/lub Open',
    // manageSubmissions: 'Zarządzanie zapisami.',
    // fullOrganization: 'Pełne prowadzenie zawodów.',
    // realTimeResults: 'Wyniki w czasie rzeczywistym.',
    // minusZeroPriceInfo:
    //   '* Wierzymy w promowanie Agility wśród nowych zawodników. Cena zawodów z kategorią Minus Zero nie ulegnie zmianie.',
    // standardPriceInfo: '* Cena zawodów bez kategorii Minus Zero ulegnie zmianie w przyszłości.',


export default function() {
  return (
      <PageWrapper>
      <Seo title="Cennik" />
      <Section>
        <Container>
             <div className="flex  justify-center flex-col items-center" data-cy="pricing-page">
      <div className={'flex flex-col items-center gap-12 p-4 w-full'}>
        <div
          className="w-full flex rounded-2xl min-h-[calc(100vh_-_300px)]
         bg-[url('/images/mongo-jump.png')] bg-opacity-50 bg-center bg-cover bg-no-repeat
         text-black bg-slate-300
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
          <WithBox title={"foo"}>
            <div className="text-5xl font-bold mt-4 pl-2">
              20 <span className="text-xl underline">za miesi20c</span>
            </div>

            <div className="flex flex-col items-start mt-8">
              <Line>
              foo
              </Line>
              <Line>bar</Line>
            </div>

            <div className="mt-4">
              <span className="text-sm text-gray-600">{"deeee"}</span>
            </div>
          </WithBox>
        </div>
      </div>
    </div>
 

        </Container>
      </Section>

      <Section bg="dark">
        <Container></Container>
      </Section>

      <Section>
        <Container></Container>
      </Section>
  </PageWrapper>
  )
}

