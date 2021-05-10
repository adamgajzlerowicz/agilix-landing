import * as React from 'react'
// @ts-ignore
import { slugs } from './news-slugs'

export const news: Record<string, {
    date: string,
    title: string
    content: React.ReactNode,
}> = {
    [slugs['nowe-notyfikacje-i-ekrany-dla-admina']]: {
        title: 'Nowa wersja wydana - zawiera nowe notyfikacje!',
        date: '23 Kwiecień 2021',
        content: <div>
            Upływający czas pozwolił na zbadanie jak aplikacja jest używana:
            <hr/>
            Od dziś dostępna jest nowa notyfikacja. Jeżeli wydarzenie zostanie odwołane - dostaniesz powiadomienie wprost na telefon.
            <hr/>
            Kolejna notyfikacja da Ci znać o nowo dodanych wydarzeniach. Jeżeli danego
            dnia klub dodał trening na który możesz się zapisać - dowiesz się o tym i nie przegapisz zajęć w swoim klubie.
            <hr/>
            Ekran do zapraszania na treningi został ulepszony. Sortowanie uczestników uwzględnia duże litery natomiast dodawanie
            uczestników nie powoduje przesortowania listy.
            <hr />
            Nowy ekran - jeżeli nie ma połączenia z internetem przy otwarciu aplikacji, wyskoczy komunikat proszący o ponowienie połączenia
        </div>
    },
    [slugs['nowy-formularz-kontaktowy']]: {
        title: 'Formularz kontaktowy został ukończony',
        date: '13 Luty 2021',
        content: <div>
            Z upływem czasu strona jest rozwijana i dodawane są nowe funkcjonalności.
            <br/>
            Od dziś, formularz kontaktowy jest w pełni sprawny.
        </div>
    },
    [slugs['strona-zostala-odpalona']]: {
        title: 'Powstała strona internetowa.',
        date: '6 Luty 2021',
        content: <div>
            Pierwszy projekt strony internetowej jest już dostępny.
            <br/>
            Będą tutaj sie powiawiać aktualności zwiazane z życiem aplikacji oraz nowo stworzone
            funkcjonalności.
        </div>
    }
}
