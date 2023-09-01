import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import PageWrapper from '../components/PageWrapper';
import { Section, Title } from '../components/Core';
import { Seo } from '../components/seo';

const PolitykaPrywatnosci = () => (
  <PageWrapper footerDark>
    <Seo title="Polityka prywatności" />

    <Section>
      <div className="pt-5"></div>
      <Container>
        <Row className="justify-content-center">
          <Col lg="9" xl="8">
            <Title variant="hero" className="text-center">
              Polityka Prywatności aplikacji Agilix
            </Title>

            <p>
              Poniższa Polityka Prywatności określa{' '}
              <strong>
                zasady zapisywania i uzyskiwania dostępu do danych na Urządzeniach Użytkowników
              </strong>{' '}
              korzystających z Serwisu do celów świadczenia usług drogą elektroniczną przez
              Administratora oraz{' '}
              <strong>zasady gromadzenia i przetwarzania danych osobowych Użytkowników</strong>,
              które zostały podane przez nich osobiście i dobrowolnie za pośrednictwem narzędzi
              dostępnych w Serwisie.
            </p>
            <h2>§1 Definicje</h2>
            <ul>
              <li>
                <p>
                  <strong>Serwis</strong> - serwis internetowy
                </p>
              </li>
              <li>
                <p>
                  <strong>Serwis zewnętrzny</strong> - serwisy internetowe partnerów, usługodawców
                  lub usługobiorców współpracujących z Administratorem
                </p>
              </li>
              <li>
                <p>
                  <strong>Administrator Serwisu / Danych</strong> - Administratorem Serwisu oraz
                  Administratorem Danych (dalej Administrator) jest Adam Gajzlerowicz o nadanym
                  numerze identyfikacji podatkowej (NIP): 7772841677, świadczący usługi drogą
                  elektroniczną za pośrednictwem Serwisu
                </p>
              </li>
              <li>
                <p>
                  <strong>Użytkownik</strong> - osoba fizyczna, dla której Administrator świadczy
                  usługi drogą elektroniczną za pośrednictwem Serwisu.
                </p>
              </li>
              <li>
                <p>
                  <strong>Urządzenie</strong> - elektroniczne urządzenie wraz z oprogramowaniem, za
                  pośrednictwem którego Użytkownik uzyskuje dostęp do Serwisu
                </p>
              </li>
              <li>
                <p>
                  <strong>Cookies (ciasteczka)</strong> - dane tekstowe gromadzone w formie plików
                  zamieszczanych na Urządzeniu Użytkownika
                </p>
              </li>
              <li>
                <p>
                  <strong>RODO</strong> - Rozporządzenie Parlamentu Europejskiego i Rady (UE)
                  2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z
                  przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych
                  oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych){' '}
                </p>
              </li>
              <li>
                <p>
                  <strong>Dane osobowe</strong> - oznaczają informacje o zidentyfikowanej lub
                  możliwej do zidentyfikowania osobie fizycznej („osobie, której dane dotyczą”);
                  możliwa do zidentyfikowania osoba fizyczna to osoba, którą można bezpośrednio lub
                  pośrednio zidentyfikować, w szczególności na podstawie identyfikatora takiego jak
                  imię i nazwisko, numer identyfikacyjny, dane o lokalizacji, identyfikator
                  internetowy lub jeden bądź kilka szczególnych czynników określających fizyczną,
                  fizjologiczną, genetyczną, psychiczną, ekonomiczną, kulturową lub społeczną
                  tożsamość osoby fizycznej{' '}
                </p>
              </li>
              <li>
                <p>
                  <strong>Przetwarzanie</strong> - oznacza operację lub zestaw operacji wykonywanych
                  na danych osobowych lub zestawach danych osobowych w sposób zautomatyzowany lub
                  niezautomatyzowany, taką jak zbieranie, utrwalanie, organizowanie, porządkowanie,
                  przechowywanie, adaptowanie lub modyfikowanie, pobieranie, przeglądanie,
                  wykorzystywanie, ujawnianie poprzez przesłanie, rozpowszechnianie lub innego
                  rodzaju udostępnianie, dopasowywanie lub łączenie, ograniczanie, usuwanie lub
                  niszczenie;{' '}
                </p>
              </li>
              <li>
                <p>
                  <strong>Ograniczenie przetwarzania</strong> - oznacza oznaczenie przechowywanych
                  danych osobowych w celu ograniczenia ich przyszłego przetwarzania{' '}
                </p>
              </li>
              <li>
                <p>
                  <strong>Profilowanie</strong> - oznacza dowolną formę zautomatyzowanego
                  przetwarzania danych osobowych, które polega na wykorzystaniu danych osobowych do
                  oceny niektórych czynników osobowych osoby fizycznej, w szczególności do analizy
                  lub prognozy aspektów dotyczących efektów pracy tej osoby fizycznej, jej sytuacji
                  ekonomicznej, zdrowia, osobistych preferencji, zainteresowań, wiarygodności,
                  zachowania, lokalizacji lub przemieszczania się
                </p>
              </li>
              <li>
                <p>
                  <strong>Zgoda</strong> - zgoda osoby, której dane dotyczą oznacza dobrowolne,
                  konkretne, świadome i jednoznaczne okazanie woli, którym osoba, której dane
                  dotyczą, w formie oświadczenia lub wyraźnego działania potwierdzającego, przyzwala
                  na przetwarzanie dotyczących jej danych osobowych{' '}
                </p>
              </li>
              <li>
                <p>
                  <strong>Naruszenie ochrony danych osobowych</strong> - oznacza naruszenie
                  bezpieczeństwa prowadzące do przypadkowego lub niezgodnego z prawem zniszczenia,
                  utracenia, zmodyfikowania, nieuprawnionego ujawnienia lub nieuprawnionego dostępu
                  do danych osobowych przesyłanych, przechowywanych lub w inny sposób przetwarzanych{' '}
                </p>
              </li>
              <li>
                <p>
                  <strong>Pseudonimizacja</strong> - oznacza przetworzenie danych osobowych w taki
                  sposób, by nie można ich było już przypisać konkretnej osobie, której dane
                  dotyczą, bez użycia dodatkowych informacji, pod warunkiem że takie dodatkowe
                  informacje są przechowywane osobno i są objęte środkami technicznymi i
                  organizacyjnymi uniemożliwiającymi ich przypisanie zidentyfikowanej lub możliwej
                  do zidentyfikowania osobie fizycznej{' '}
                </p>
              </li>
              <li>
                <p>
                  <strong>Anonimizacja</strong> - Anonimizacja danych to nieodwracalny proces
                  operacji na danych, który niszczy / nadpisuje "dane osobowe" uniemożliwiając
                  identyfikację, lub powiązanie danego rekordu z konkretnym użytkownikiem lub osobą
                  fizyczną.
                </p>
              </li>
            </ul>
            <h2>§2 Inspektor Ochrony Danych</h2>
            <p>Na podstawie Art. 37 RODO, Administrator nie powołał Inspektora Ochrony Danych.</p>
            <p>
              W sprawach dotyczących przetwarzania danych, w tym danych osobowych, należy
              kontaktować się bezpośrednio z Administratorem.
            </p>
            <h2>§3 Rodzaje Plików Cookies</h2>
            <ul>
              <li>
                <p>
                  <strong>Cookies wewnętrzne</strong> - pliki zamieszczane i odczytywane z
                  Urządzenia Użytkownika przez system teleinformatyczny Serwisu
                </p>
              </li>
            </ul>
            <h2>§4 Bezpieczeństwo składowania danych</h2>
            <ul>
              <li>
                <p>
                  <strong>Mechanizmy składowania i odczytu plików Cookie</strong> - Mechanizmy
                  składowania, odczytu i wymiany danych pomiędzy Plikami Cookies zapisywanymi na
                  Urządzeniu Użytkownika a Serwisem są realizowane poprzez wbudowane mechanizmy
                  przeglądarek internetowych i nie pozwalają na pobieranie innych danych z
                  Urządzenia Użytkownika lub danych innych witryn internetowych, które odwiedzał
                  Użytkownik, w tym danych osobowych ani informacji poufnych. Przeniesienie na
                  Urządzenie Użytkownika wirusów, koni trojańskich oraz innych robaków jest także
                  praktycznie niemożliwe.
                </p>
              </li>
              <li>
                <p>
                  <strong>Cookie wewnętrzne</strong> - zastosowane przez Administratora pliki Cookie
                  są bezpieczne dla Urządzeń Użytkowników i nie zawierają skryptów, treści lub
                  informacji mogących zagrażać bezpieczeństwu danych osobowych lub bezpieczeństwu
                  Urządzenia z którego korzysta Użytkownik.
                </p>
              </li>
              <li>
                <p>
                  <strong>Kontrola plików Cookie</strong>
                  <ul>
                    <li>
                      <p>
                        Użytkownik może w dowolnym momencie, samodzielnie zmienić ustawienia
                        dotyczące zapisywania, usuwania oraz dostępu do danych zapisanych plików
                        Cookies przez każdą witrynę internetową lub aplikacje mobilną
                      </p>
                    </li>
                  </ul>
                </p>
              </li>
              <li>
                <p>
                  <strong>Zagrożenia po stronie Użytkownika </strong> - Administrator stosuje
                  wszelkie możliwe środki techniczne w celu zapewnienia bezpieczeństwa danych
                  umieszczanych w plikach Cookie. Należy jednak zwrócić uwagę, że zapewnienie
                  bezpieczeństwa tych danych zależy od obu stron w tym działalności Użytkownika.
                  Administrator nie bierze odpowiedzialności za przechwycenie tych danych, podszycie
                  się pod sesję Użytkownika lub ich usunięcie, na skutek świadomej lub nieświadomej
                  działalność Użytkownika, wirusów, koni trojańskich i innego oprogramowania
                  szpiegującego, którymi może jest lub było zainfekowane Urządzenie Użytkownika.
                  Użytkownicy w celu zabezpieczenia się przed tymi zagrożeniami powinni stosować się
                  do zaleceń korzystania z internetu.
                </p>
              </li>
              <li>
                <p>
                  <strong>Przechowywanie danych osobowych</strong> - Administrator zapewnia, że
                  dokonuje wszelkich starań, by przetwarzane dane osobowe wprowadzone dobrowolnie
                  przez Użytkowników były bezpieczne, dostęp do nich był ograniczony i realizowany
                  zgodnie z ich przeznaczeniem i celami przetwarzania. Administrator zapewnia także,
                  że dokonuje wszelkich starań w celu zabezpieczenia posiadanych danych przed ich
                  utratą, poprzez stosowanie odpowiednich zabezpieczeń fizycznych jak i
                  organizacyjnych.
                </p>
              </li>
              <li>
                <p>
                  <strong>Przechowywanie haseł</strong> - Administrator oświadcza, że hasła
                  przechowywane są w zaszyfrowanej postaci, używając najnowszych standardów i
                  wytycznych w tym zakresie. Deszyfracja podawanych w Serwisie haseł dostępu do
                  konta jest praktycznie niemożliwa.
                </p>
              </li>
            </ul>
            <h2>§5 Cele do których wykorzystywane są dane Local storage</h2>
            <ul id="cele">
              <li>Usprawnienie i ułatwienie dostępu do Serwisu</li>
              <li>Personalizacja Serwisu dla Użytkowników</li>
              <li>Umożliwienie Logowania do serwisu</li>
              <li>
                Prowadzenie statystyk (użytkowników, ilości odwiedzin, rodzajów urządzeń, łącze
                itp.)
              </li>
              <li>Serwowanie usług multimedialnych</li>
              <li>Świadczenie usług społecznościowych</li>
            </ul>
            <h2>§6 Cele przetwarzania danych osobowych</h2>
            <p>
              Dane osobowe dobrowolnie podane przez Użytkowników są przetwarzane w jednym z
              następujących celów:
            </p>
            <ul>
              <li>
                Realizacji usług elektronicznych:
                <ul>
                  <li>
                    Usługi rejestracji i utrzymania konta Użytkownika w Serwisie i funkcjonalności z
                    nim związanych
                  </li>
                  <li>
                    Usługi komentowania / polubienia wpisów w Serwisie bez konieczności
                    rejestrowania się
                  </li>
                  <li>
                    Usługi udostępniania informacji o treści umieszczonych w Serwisie w serwisach
                    społecznościowych lub innych witrynach.
                  </li>
                </ul>
              </li>
              <li>
                Komunikacji Administratora z Użytkownikami w sprawach związanych z Serwisem oraz
                ochrony danych
              </li>
              <li>Zapewnienia prawnie uzasadnionego interesu Administratora</li>
            </ul>
            <p>
              Dane o Użytkownikach gromadzone anonimowo i automatycznie są przetwarzane w jednym z
              następujących celów:
            </p>
            <ul>
              <li>Prowadzenie statystyk</li>
              <li>Zapewnienia prawnie uzasadnionego interesu Administratora</li>
            </ul>
            <h2>§7 Pliki Cookies Serwisów zewnętrznych</h2>
            <ul id="zewnetrzne">
              <li>
                <strong>Cookies usług zewnętrznych nie są przechowywane</strong>
              </li>
            </ul>
            <p>
              Usługi świadczone przez podmioty trzecie są poza kontrolą Administratora. Podmioty te
              mogą w każdej chwili zmienić swoje warunki świadczenia usług, polityki prywatności,
              cel przetwarzania danych oraz sposów wykorzystywania plików cookie.
            </p>
            <h2>§8 Rodzaje gromadzonych danych</h2>
            <p>
              Serwis gromadzi dane o Użytkownikach. Cześć danych jest gromadzona automatycznie i
              anonimowo, a część danych to dane osobowe podane dobrowolnie przez Użytkowników w
              trakcie zapisywania się do poszczególnych usług oferowanych przez Serwis.
            </p>
            <p>
              <strong>Dane gromadzone podczas rejestracji:</strong>
            </p>
            <ul>
              <li>Imię / nazwisko / pseudonim</li>
              <li>Login</li>
              <li>Adres e-mail</li>
            </ul>

            <p>
              <strong>Dane gromadzone podczas użytkowania aplikacji:</strong>
            </p>
            <ul>
              <li>Uczestnictwo w zajeciach</li>
              <li>Dane piesków</li>
            </ul>
            <p>
              <strong>Przesyłane zdjęcia. </strong> W ciągu użytkowania aplikacji, użytkownik może
              dobrowolnie wysyłać do serwisu zdjęcia. Zdjęcia te będą dostępne dla pozostałych
              użytkowniów serwisu, oraz publicznie.
            </p>

            <p>
              Część danych (bez danych identyfikujących) może być przechowywana w local storage.
            </p>
            <h2>§9 Dostęp do danych osobowych przez podmioty trzecie</h2>
            <p>
              Co do zasady jedynym odbiorcą danych osobowych podawanych przez Użytkowników jest
              Administrator. Dane gromadzone w ramach świadczonych usług nie są przekazywane ani
              odsprzedawane podmiotom trzecim.
            </p>
            <p>
              Dostęp do danych (najczęściej na podstawie Umowy powierzenia przetwarzania danych)
              mogą posiadać podmioty, odpowiedzialne za utrzymania infrastruktury i usług
              niezbędnych do prowadzenia serwisu tj.: Apple oraz Play store w trakcie kiedy dokonują
              dystrybucji aplikacji na telefony.
            </p>
            <br />
            <h2>§10 Sposób przetwarzania danych osobowych</h2>
            <p>
              <strong>Dane osobowe podane dobrowolnie przez Użytkowników:</strong>
            </p>
            <ul>
              <li>
                Dane osobowe nie będą przekazywane poza Unię Europejską, chyba że zostały
                opublikowane na skutek indywidualnego działania Użytkownika (np. wprowadzenie
                komentarza lub wpisu), co sprawi, że dane będą dostępne dla każdej osoby
                odwiedzającej serwis.
              </li>
              <li>
                Dane osobowe nie będą wykorzystywane do zautomatyzowanego podejmowania decyzji
                (profilowania).
              </li>
              <li>Dane osobowe nie będą odsprzedawane podmiotom trzecim.</li>
            </ul>
            <p>
              <strong>Dane anonimowe (bez danych osobowych) gromadzone automatycznie:</strong>
            </p>
            <ul>
              <li>Dane anonimowe (bez danych osobowych) będą przekazywane poza Unię Europejską.</li>
              <li>
                Dane anonimowe (bez danych osobowych) nie będą wykorzystywane do zautomatyzowanego
                podejmowania decyzji (profilowania).
              </li>
              <li>
                Dane anonimowe (bez danych osobowych) nie będą odsprzedawane podmiotom trzecim.
              </li>
            </ul>
            <h2>§11 Podstawy prawne przetwarzania danych osobowych</h2>
            <p>Serwis gromadzi i przetwarza dane Użytkowników na podstawie:</p>
            <ul>
              <li>
                Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016
                r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w
                sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne
                rozporządzenie o ochronie danych)
                <ul>
                  <li>
                    art. 6 ust. 1 lit. a<br />
                    <small>
                      osoba, której dane dotyczą wyraziła zgodę na przetwarzanie swoich danych
                      osobowych w jednym lub większej liczbie określonych celów
                    </small>
                  </li>
                  <li>
                    art. 6 ust. 1 lit. b<br />
                    <small>
                      przetwarzanie jest niezbędne do wykonania umowy, której stroną jest osoba,
                      której dane dotyczą, lub do podjęcia działań na żądanie osoby, której dane
                      dotyczą, przed zawarciem umowy
                    </small>
                  </li>
                  <li>
                    art. 6 ust. 1 lit. f<br />
                    <small>
                      przetwarzanie jest niezbędne do celów wynikających z prawnie uzasadnionych
                      interesów realizowanych przez administratora lub przez stronę trzecią
                    </small>
                  </li>
                </ul>
              </li>
              <li>
                Ustawa z dnia 10 maja 2018 r. o ochronie danych osobowych (Dz.U. 2018 poz. 1000)
              </li>
              <li>
                Ustawa z dnia 16 lipca 2004 r. Prawo telekomunikacyjne (Dz.U. 2004 nr 171 poz. 1800)
              </li>
              <li>
                Ustawa z dnia 4 lutego 1994 r. o prawie autorskim i prawach pokrewnych (Dz. U. 1994
                Nr 24 poz. 83)
              </li>
            </ul>
            <h2>§12 Okres przetwarzania danych osobowych</h2>
            <p>
              <strong>Dane osobowe podane dobrowolnie przez Użytkowników:</strong>
            </p>
            <p>
              Co do zasady wskazane dane osobowe są przechowywane wyłącznie przez okres świadczenia
              Usługi w ramach Serwisu przez Administratora. Są one usuwane lub anonimizowane w
              okresie do 30 dni od chwili zakończenia świadczenia usług (np. usunięcie
              zarejestrowanego konta użytkownika, wypisanie z listy Newsletter, itp.)
            </p>
            <p>
              Wyjątek stanowi sytuacja, która wymaga zabezpieczenia prawnie uzasadnionych celów
              dalszego przetwarzania tych danych przez Administratora. W takiej sytuacji
              Administrator będzie przechowywał wskazane dane, od czasu żądania ich usunięcia przez
              Użytkownika, nie dłużej niż przez okres 3 lat w przypadku naruszenia lub podejrzenia
              naruszenia zapisów regulaminu serwisu przez Użytkownika
            </p>
            <p>Użytkownicy będą otrzymywali notyfikacje z Serwisu na telefon.</p>
            <p>
              <strong>Dane anonimowe (bez danych osobowych) gromadzone automatycznie:</strong>
            </p>
            <p>
              Anonimowe dane statystyczne, niestanowiące danych osobowych, są przechowywane przez
              Administratora w celu prowadzenia statystyk serwisu przez czas nieoznaczony
            </p>
            <h2>§13 Prawa Użytkowników związane z przetwarzaniem danych osobowych</h2>
            <p>Serwis gromadzi i przetwarza dane Użytkowników na podstawie:</p>
            <ul>
              <li>
                <p>
                  <strong>Prawo dostępu do danych osobowych</strong>
                  <br />
                  Użytkownikom przysługuje prawo uzyskania dostępu do swoich danych osobowych,
                  realizowane na żądanie złożone do Administratora.
                </p>
              </li>
              <li>
                <p>
                  <strong>Prawo do sprostowania danych osobowych</strong>
                  <br />
                  Użytkownikom przysługuje prawo żądania od Administratora niezwłocznego
                  sprostowania danych osobowych, które są nieprawidłowe lub / oraz uzupełnienia
                  niekompletnych danych osobowych, realizowane na żądanie złożone do Administratora
                </p>
              </li>
              <li>
                <p>
                  <strong>Prawo do usunięcia danych osobowych</strong>
                  <br />
                  Użytkownikom przysługuje prawo żądania od Administratora niezwłocznego usunięcia
                  danych osobowych, realizowane na żądanie złożone do Administratora. W przypadku
                  kont użytkowników, usunięcie danych polega na anonimizacji danych umożliwiających
                  identyfikację Użytkownika. Administrator zastrzega sobie prawo wstrzymania
                  realizacji żądania usunięcia danych w celu ochrony prawnie uzasadnionego interesu
                  Administratora (np. w gdy Użytkownik dopuścił się naruszenia Regulaminu czy dane
                  zostały pozyskane wskutek prowadzonej korespondencji).
                </p>
              </li>
              <li>
                <p>
                  <strong>Prawo do ograniczenia przetwarzania danych osobowych</strong>
                  <br />
                  Użytkownikom przysługuje prawo ograniczenia przetwarzania danych osobowych w
                  przypadkach wskazanych w art. 18 RODO, m.in. kwestionowania prawidłowość danych
                  osobowych, realizowane na żądanie złożone do Administratora
                </p>
              </li>
              <li>
                <p>
                  <strong>Prawo do przenoszenia danych osobowych</strong>
                  <br />
                  Użytkownikom przysługuje prawo uzyskania od Administratora, danych osobowych
                  dotyczących Użytkownika w ustrukturyzowanym, powszechnie używanym formacie
                  nadającym się do odczytu maszynowego, realizowane na żądanie złożone do
                  Administratora
                </p>
              </li>
              <li>
                <p>
                  <strong>Prawo wniesienia sprzeciwu wobec przetwarzania danych osobowych</strong>
                  <br />
                  Użytkownikom przysługuje prawo wniesienia sprzeciwu wobec przetwarzania jego
                  danych osobowych w przypadkach określonych w art. 21 RODO, realizowane na żądanie
                  złożone do Administratora
                </p>
              </li>
              <li>
                <p>
                  <strong>Prawo wniesienia skargi</strong>
                  <br />
                  Użytkownikom przysługuje prawo wniesienia skargi do organu nadzorczego zajmującego
                  się ochroną danych osobowych.
                </p>
              </li>
            </ul>
            <h2>§14 Kontakt do Administratora</h2>
            <p>
              Z Administratorem można skontaktować się używając adresu poczty elektronicznej
              gajzlerowicz@gmail.com
            </p>
            <h2>§15 Wymagania Serwisu</h2>
            <ul>
              <li>
                <p>
                  Ograniczenie zapisu i dostępu do plików Cookie na Urządzeniu Użytkownika może
                  spowodować nieprawidłowe działanie niektórych funkcji Serwisu.
                </p>
              </li>
              <li>
                <p>
                  Aplikacja może okazjonalnie wysyłać wiadomości email do Użytkowników. Wiadomości
                  będą dotyczyły głównie informacji takich jak reset hasła, informacji dotyczących
                  informacji kynologicznych, aktualności, wydarzeń i innych informacji łączącymi się
                  pośrednio lub bezpośrednio z tematyką psów. Użytkownik może w każdej chwili
                  zrezygnować z selektywnego lub pełnego otrzymywania wiadomości email, poprzez
                  zmianę ustawień w swoim koncie. Aplikacja nie wysyła reklam.
                </p>
              </li>
              <li>
                <p>
                  Administrator nie ponosi żadnej odpowiedzialności za nieprawidłowo działające
                  funkcje Serwisu w przypadku gdy Użytkownik ograniczy w jakikolwiek sposób
                  możliwość zapisywania i odczytu plików Cookie.
                </p>
              </li>
            </ul>
            <h2>§16 Linki zewnętrzne</h2>
            <p>
              W Serwisie - artykułach, postach, wpisach czy komentarzach Użytkowników mogą znajdować
              się odnośniki do witryn zewnętrznych, z którymi Właściciel serwisu nie współpracuje.
              Linki te oraz strony lub pliki pod nimi wskazane mogą być niebezpieczne dla Twojego
              Urządzenia lub stanowić zagrożenie bezpieczeństwa Twoich danych. Administrator nie
              ponosi odpowiedzialności za zawartość znajdującą się poza Serwisem.
            </p>

            <h2>§17 Zmiany w Polityce Prywatności</h2>
            <ul>
              <li>
                <p>
                  Administrator zastrzega sobie prawo do dowolnej zmiany niniejszej Polityki
                  Prywatności bez konieczności informowania o tym Użytkowników w zakresie stosowania
                  i wykorzystywania danych anonimowych lub stosowania plików Cookie.
                </p>
              </li>
              <li>
                <p>
                  Administrator zastrzega sobie prawo do dowolnej zmiany niniejszej Polityki
                  Prywatności w zakresie przetwarzania Danych Osobowych, o czym poinformuje
                  Użytkowników posiadających konta użytkownika lub zapisanych do usługi newsletter,
                  za pośrednictwem poczty elektronicznej w terminie do 7 dni od zmiany zapisów.
                  Dalsze korzystanie z usług oznacza zapoznanie się i akceptację wprowadzonych zmian
                  Polityki Prywatności. W przypadku w którym Użytkownik nie będzie się zgadzał z
                  wprowadzonymi zmianami, ma obowiązek usunąć swoje konto z Serwisu lub wypisać się
                  z usługi Newsletter.
                </p>
              </li>
              <li>
                <p>
                  Wprowadzone zmiany w Polityce Prywatności będą publikowane na tej podstronie
                  Serwisu.
                </p>
              </li>
              <li>
                <p>Wprowadzone zmiany wchodzą w życie z chwilą ich publikacji.</p>
              </li>
            </ul>

            <h2>§18 Treści tworzone przez użytkowników</h2>
            <ul>
              <li>
                <p>
                  Treści tworzone przez użytkowników, takie jak nazwa użytkownika, imię psa, nazwy
                  klubów i wydarzeń czy treści na wiadomościach chat, nie mogą zawierać treści
                  obraźliwych dla innych użytkowników. Nie mogą również zawierać wulgaryzmów, treści
                  erotycznych i pornograficznych, treści obrażających inne religie czy orientacje
                  seksualne. Nie zezwala się również na treści dotyczące używek alkoholowych,
                  nikotynowych, narkotykowych czy hazardowych.
                </p>
              </li>
              <li>
                <p>
                  Gdy takie treści zostaną zgłoszone przez użytkowników, administrator aplikacji
                  udzieli ostrzeżenia użytkownikowi publikującemu takie treści. Jeżeli sytuacja
                  powtórzy się, konto użytkownika może zostać zawieszone, zablokowane lub usunięte.
                </p>
              </li>
              <li>
                <p>Treści można zgłaszać na adres email gajzlerowicz@gmail.com.</p>
              </li>
            </ul>
            <h2>§19 Udostępnianie kalendarza</h2>
            <ul>
              <li>
                <p>
                  Użytkownik z dostępem administracyjnym aplikacji ma możliwość dobrowolnie połączyć
                  swój kalendarz Google z kalendarzem aplikacji.
                </p>
              </li>
              <li>
                <p>
                  Kalendarz ten będzie automatycznie aktualizowany gdy nastąpi zmiana w wydarzeniu,
                  taka jak: nowy uczestnik, zmiana czasu lub nazwy wydarzenia.
                </p>
              </li>
              <li>
                <p>
                  Jedyny kalendarz podlegający zmianom, to kalendarz utworzony przez aplikację.
                  Kalendarz ten ma nazwę "Agilix"
                </p>
              </li>
              <li>
                <p>Połączony kalendarz może zostać odłączony w dowolnym momencie.</p>
              </li>
              <li>
                <p>Odłączenie następuje poprzez wybranie "rozłącz" z ustawień profilu.</p>
              </li>
              <li>
                <p>
                  Dane kalendarza są poufnymi i nie będą sprzedawane ani udostępniane podmiotom
                  trzecim
                </p>
              </li>
            </ul>

            <h2>§20 Publiczne dane</h2>
            <ul>
              <li>
                <p>
                  Wszystkie dane swoje, lub swojego pieska użytkownik podaje dobrowolnie. Nie
                  zostaną one sprzedane podmiotom trzecim, niemniej dane będą w pełni dostępne dla
                  innych użytkowników serwisu. Jest to konieczne przy uczestnictwie w treningach
                  organizowanych przez aplikację w celu identyfikacji użytkownika. Jest to również
                  konieczne do identyfikacji uczestników w organizowanych zawodach. Tyczy się to
                  również wysłanych do aplikacji zdjęć.
                </p>
              </li>
            </ul>

            <h2>§21 Dane w przeglądarce</h2>
            <ul>
              <li>
                <p>
                  Agilix używa technologii Local Storage Object (LSO), zbliżonej zasadą działania do
                  plików cookies, mającej jednak nieco inne właściwości. Local Storage Object to
                  wydzielona część pamięci przeglądarki, służąca do przechowywania danych
                  zapisywanych przez serwisy. Dostęp do niej może uzyskać tylko strona internetowa
                  działająca w tej samej witrynie, z której dane zostały zapisane, jednak inaczej
                  niż w przypadku cookies, nie są one wysyłane przez przeglądarkę przy każdym
                  odwołaniu do serwera. Dane w Local Storage Object są długotrwale przechowywane
                  przez przeglądarkę i nie są usuwane po zamknięciu przeglądarki ani nie mają
                  określonego czasu ważności.
                </p>
              </li>
            </ul>

            <h2>§22 Kontaktowanie się poprzez aplikację</h2>
            <ul>
              <li>
                <p>
                  Do prawidłowego funkcjonowania aplikacji niezbędne jest, aby użytkownik
                  okazjonalnie otrzymywał wiadomości dotyczących wydarzeń odbywających się w
                  aplikacji. Wszystkie wiadomości są wysyłane poprzez aplikację, a autorzy
                  wiadomości nie mają dostępu do danych użytkowników.
                </p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Section>
  </PageWrapper>
);

export default PolitykaPrywatnosci;
