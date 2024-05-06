# MITM

_Man-In-The-Middle (MITM) _ hüjümi, zyýanly aktýor alyş-çalyş maglumatlaryny diňlemek ýa-da manipulirlemek maksady bilen iki tarapyň razylygyny almazdan aragatnaşygy kesende ýüze çykýar. Bu usul bilen hüjüm edijiler duýgur maglumatlary ogurlap, berlen maglumatlary ýoýup ýa-da rugsatsyz gözegçilik ýa-da ygtyýar almak üçin gatnaşyjy taraplary görkezip bilerler.

## 4.1 MITM hüjümleriniň görnüşleri

MITM hüjümleriniň käbir ýaýran görnüşleri:

- **IP bozmak:** Hüjüm eden adam bilen baglanyşyk gurmak üçin başga bir enjamyň IP adresini görkezýär.
- **DNS Spoofing:** Hüjümçi pidany göz öňünde tutulan ýerine derek zyýanly web sahypasyna gönükdirmek üçin DNS ýazgylaryny üýtgedýär.
- **ARP spoofing:** Hüjümçi nyşanyň ARP keşini MAC (Media Access Control) adresini pidanyň IP adresi bilen baglanyşdyrmak üçin hüjümçiniň enjamy arkaly tor trafigini gönükdirýär.
- **SSL we TLS interfeýsi:** Hüjümçi pidanyň we web serweriniň arasynda kodlanan SSL / TLS aragatnaşygyny saklaýar we şifrleýär, duýgur maglumatlara girýär.

## 4.2 Öňüni almak we azaltmak strategiýalary

MITM hüjümleriniň töwekgelçiligini azaltmak üçin işläp düzüjiler, dolandyryjylar we ulanyjylar şu öňdebaryjy tejribä eýermelidirler:

- **HTTPS we şifrlemek ulanyň:** HTTPS, SSL ýa-da TLS ýaly ygtybarly aragatnaşyk protokollaryny ulanyp, ähli duýgur maglumatlary şifrlemegi unutmaň.
- **Şahadatnamalary tassyklaň:** Howpsuz birikmeler üçin sanly şahadatnamalary barlamak üçin Şahadatnama edarasyny (CA) ulanyň.
- **HSTS-i durmuşa geçiriň:** Brauzerleri diňe HTTPS birikmelerini ulanmaga mejbur edýän howpsuzlyk syýasaty, HTTP berk transport howpsuzlygy (HSTS) ýerleşdiriň.
- **Howpsuz DNS:** DNS ýazgylarynyň bitewiligini we hakykylygyny üpjün etmek üçin DNS Howpsuzlyk giňeltmelerini (DNSSEC) ulanyň.
- **Tor bölünişigini açyň:** Segment torlary we zyýanly aktýorlaryň duýgur maglumatlara ýa-da ulgamlara girmeginiň öňüni almak üçin olaryň arasyndaky girişi çäklendiriň.
- **Programma üpjünçiligini we programma üpjünçiligini yzygiderli täzeläň:** Belli gowşaklyklary azaltmak üçin ähli ulgamlary, amaly programmalary we enjamlary täzeläň.
- **Ulanyjylara bilim beriň:** Ulanyjylara MITM hüjümlerini tanamaga we öňüni almaga kömek etmek üçin habarlylyk okuwyny we goldaw çeşmelerini beriň.

MITM hüjümlerine düşünmek we degişli öňüni alyş çärelerini durmuşa geçirmek bilen, kiber howplaryň bu görnüşleriniň pidasy bolmak howpuny ep-esli azaldyp bilersiňiz.