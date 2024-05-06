# Public vs Private IP salgylary

IP salgylary barada aýdylanda, olar iki esasy görnüşe bölünýär: Public IP salgylary we Private IP salgylary. Bularyň ikisi hem aragatnaşykda möhüm rol oýnaýar; garamazdan, dürli maksatlara hyzmat edýärler. Olary has ýakyndan gözden geçireliň:

## Public IP salgylary

Public IP adresi, enjama ýa-da tora bellenen dünýäde özboluşly IP adresi. IP adresiniň bu görnüşine internet arkaly baryp bolýar we enjamlara dünýäniň islendik ýerinde ýerleşýän beýleki enjamlar, serwerler we torlar bilen aragatnaşyk saklamaga mümkinçilik berýär.

Public IP salgylarynyň käbir esasy aýratynlyklary:

- Internet arkaly marşrut.
- Internet bellenen sanlar gullugy (IANA) tarapyndan bellendi.
- Adatça bir gurama ýa-da internet hyzmatyny üpjün edijä (ISP) berilýär.
- statiki (hemişelik) ýa-da dinamiki bolup biler (wagtal-wagtal üýtgeýär).

Mysal üçin: "72.14.207.99"

## Private IP salgylary

Private IP adresleri, beýleki tarapdan, ýerli ulgamlarda (LAN) ulanylýar we internetde görünmeýär. Bu salgylar guramanyň, öýüň ýa-da ýerli ulgamyň içinde içerki ulanmak üçin saklanýar. Olary köplenç kompýuter, printer ýa-da smartfon ýaly bir ulgamdaky enjamlar üçin marşrutizator ýa-da tor dolandyryjysy belleýär.

Private IP adresleriniň käbir esasy aýratynlyklary:

- Internetde yzygiderli däl (köpçülikleýin IP adresleri bilen habarlaşmak üçin Network Address Translator (NAT)).
- Routerler ýa-da tor dolandyryjylary ýaly ýerli ulgam enjamlary tarapyndan bellendi.
- Dürli Private torlarda gaýtadan ulanylýar (sebäbi olar dünýä derejesinde üýtgeşik däl).
- Statik ýa-da dinamiki (toruň konfigurasiýasyna baglylykda).

Private IP adresi:

- "10.0.0.0" -dan "10.255.255.255" -e çenli (A synp)
- "172.16.0.0" -dan "172.31.255.255" -e çenli (B synp)
- "192.168.0.0" -dan "192.168.255.255" -e çenli (C synp)

Mysal: `192.168.1.100`

Gysgaça aýtsak, köpçülige açyk IP salgylar internet arkaly aragatnaşyk üçin ulanylýar, Private IP adresler bolsa ýerli ulgamlaryň içinde ulanylýar. IP salgylarynyň bu iki görnüşiniň arasyndaky tapawuda düşünmek, tor birikmesiniň we kiberhowpsuzlygyň esaslaryna düşünmek üçin zerurdyr.