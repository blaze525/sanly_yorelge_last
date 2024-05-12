# nslookup

NSLookup, "Name Server Lookup" üçin gysga, domen atlary we IP adresleri bilen baglanyşykly maglumatlary almak üçin Domain Name System (DNS) -ni soramak üçin ulanylýan köpugurly ulgam dolandyryş buýruk setiridir. Bu gural Windows, MacOS we Linux paýlamalary ýaly operasiýa ulgamlarynyň köpüsinde ýerli görnüşde elýeterlidir.

## NSLookup ulanmak

NSLookup ulanmak üçin enjamyňyzda buýruk buýrugyny ýa-da terminaly açyň we soramak isleýän domen adyňyz ýa-da IP adresiňiz bilen "nslookup" buýrugyny giriziň. Mysal üçin:

``
nslookup example.com
``

## NSLookup-nyň aýratynlyklary

- **DNS ýazgy görnüşleriň gözlegi**: NSLookup A (IPv4 salgy), AAAA (IPv6 salgy), MX (poçta alyş-çalşygy), NS (at serwerleri) we başgalar ýaly dürli DNS ýazgy görnüşlerini goldaýar.

- ** Ters DNS gözlegi **: Belli bir IP adresi bilen baglanyşykly domen adyny tapmak üçin ters DNS gözleglerini amala aşyryp bilersiňiz. Mysal üçin:

   ``
   nslookup 192.0.2.1
   ``

- **Interaktiw däl režim**: NSLookup interaktiw däl režim girmän ýekeje soragy ýerine ýetirip biler. Munuň üçin, ýokarda aýdylyşy ýaly buýrugy ýerine ýetiriň.

- **Interaktiw režim**: Interaktiw režim, bir buýrukda birnäçe soragy ýerine ýetirmäge mümkinçilik berýär. Interaktiw režime girmek üçin terminalyňyzda hiç hili argument bolmazdan nslookup ýazyň.

## Çäklendirmeler

Peýdaly gural bolandygyna garamazdan, NSLookup-yň käbir çäklendirmeleri bar:

- DNSSEC (Domain Name System Security Extensions) üçin goldaw ýok.
- Käbir "Unix" esasly ulgamlarda köne ýa-da saklanmadyk, "dig" ýaly has döwrebap enjamlar bilen çalşylýar.

## Başga alternatiwalar

NSLookup-a käbir alternatiwalar:

- **dig**: "Domain Information Groper" DNS ýazgy görnüşleriniň köpüsini goldaýan we NSLookup-dan has giňişleýin maglumat berýän çeýe DNS kömekçi.

- **host**: Öňe we tersine gözlemek üçin öý eýesi bilen baglanyşykly maglumatlary berýän başga bir umumy DNS gözleg guraly.

## Netije

Gysgaça aýtsak, NSLookup tor dolandyryjylary we ulanyjylar üçin amatly DNS talap guralydyr. Ulanylyşy ýönekeý bolsa, baglanyşykly domen atlaryny, IP adreslerini we beýleki DNS maglumatlary tapmak üçin esasy funksiýany hödürleýär. Şeýle-de bolsa, has ösen zerurlyklar üçin gazmak ýa-da alyp barmak ýaly alternatiwalary ulanmagy göz öňünde tutuň.