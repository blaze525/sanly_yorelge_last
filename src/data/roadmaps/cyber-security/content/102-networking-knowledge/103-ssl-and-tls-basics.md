# SSL we TLS esaslary

Security Socket Layer (SSL) we Transport Layer Security (TLS), kompýuter torunyň üsti bilen ygtybarly aragatnaşyk üpjün etmek üçin döredilen kriptografiki protokollardyr. Giriş şahsyýetnamasy, maliýe maglumatlary we şahsy ulanyjy maglumatlary ýaly onlaýn ýaýradylan duýgur maglumatlary goramakda möhüm rol oýnaýarlar.

## Security Socket Layer (SSL)

SSL TLS-den öňki bolup, ilkinji gezek 1990-njy ýyllarda girizildi. Müşderi (adatça web brauzeri) bilen iberilýän maglumatlaryň şahsy we ygtybarly bolmagyny üpjün etmek üçin serweriň arasynda kodlanan baglanyşyk döredýär. SSL howpsuz aragatnaşygy ýola goýmak we goldamak üçin simmetrik we asimmetrik şifrlemek usullarynyň, sanly şahadatnamalaryň kombinasiýasyny ulanýar.

## Transport Layer Security (TLS)

TLS SSL-iň kämilleşdirilen we has ygtybarly görnüşi, TLS 1.0 SSL 3.0-e täzelenme hökmünde goýberildi. Şu gollanmanyň häzirki wersiýasy TLS 1.3. TLS SSL-de bar bolan gowşak goralanlyklary çözüp, has ygtybarly we çeýe howpsuzlyk çarçuwasyny üpjün edýär. Howpsuz web aragatnaşygy barada pikir alyşylanda köp adam henizem SSL-e ýüz tutsa-da, SSL-iň könelişendigini we TLS-iň ygtybarly aragatnaşyk üçin iň oňat tejribe standartdygyny bellemelidiris.

## Esasy komponentler

- ** Şifrlemek **: SSL we TLS şifrlemek arkaly maglumatlary goramak üçin güýçli algoritmleri ulanýarlar, degişli açar açarlary bolmazdan hiç kimiň okap bilmejekdigini üpjün edýärler.
- ** Autentifikasiýa **: SSL / TLS sanly şahadatnamalar müşderileriň we serwerleriň şahsyýetini barlaýar, ynam we hakykylygy üpjün edýär.
- ** Bütewilik **: Bu howpsuzlyk protokollary, müşderiler bilen serwerleriň arasynda iberilýän maglumatlaryň geçiriş wagtynda bozulmazlygyny üpjün etmek üçin habary tassyklamak kodlaryny ulanýarlar.

## Handshake prosesi

SSL we TLS ygtybarly baglanyşyk döretmek üçin "el çarpyşma" diýlip atlandyrylýan birnäçe ädim ätýärler:

- ** Müşderi salam **: Müşderi goldanýan kriptografiki algoritmler, tötänleýin sanlar we sessiýa maglumatlary bilen habar ibermek bilen el çarpmak işine başlaýar.
- ** Serwer salam **: Serwer saýlanan kriptografiki algoritmleri, tötänleýin sanlar we sanly şahadatnamasy bilen jogap berýär. Islege görä, serwer özara tassyklamak üçin müşderiniň şahadatnamasyny sorap biler.
- ** Müşderini barlamak **: Müşderi serweriň şahadatnamasyny barlaýar we talap edilse özüni iberip biler. Soňra baş ussat syryny döredýär, serweriň açyk açary bilen şifrleýär we serwere iberýär.
- ** Açar nesil we alyş-çalyş **: Müşderi we serwer ikisi hem baş syry we paýlaşylan tötänleýin sanlary ulanyp baş syr we sessiýa açarlaryny döredýärler. Bu düwmeler iberilen maglumatlary şifrlemek we şifrlemek üçin ulanylýar.
- ** Ygtybarly birikme **: Düwmeler çalşylandan soň, müşderi we serwer kesgitlenen şifrlemek we düwmeler arkaly ygtybarly aragatnaşyk gurup bilerler.

Howpsuz aragatnaşyk, duýgur maglumatlary dolandyrýan islendik gurama üçin möhümdir. SSL we TLS tranzitdäki maglumatlary goramagyň diregi bolup hyzmat edýär we onlaýn aragatnaşyklaryň gizlinligini, bitewiligini we hakykylygyny üpjün etmekde möhüm rol oýnaýar.