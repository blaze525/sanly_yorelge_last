# ping

** Ping ** ulanyjylara iki enjamyň, adatça çeşme kompýuteriniň we serwer ýa-da başga bir kompýuter ýaly uzakdaky enjamyň arasyndaky baglanyşygy barlamaga kömek edýän esasy ulgam guralydyr. "Ping" ady, signal iberilýän we obýektiň bardygyny barlamak üçin jogap garaşylýan sonar terminologiýasyndan gelýär.

Ping buýrugy, maksatly öý eýesine Internet Dolandyryş Habar Protokoly (ICMP) Echo Talap paketlerini ibermek we ICMP Echo Jogapyna garaşmak arkaly işleýär. Birnäçe haýyş ibermek we haýyşy ibermek bilen jogap almagyň arasyndaky wagt aralygyny hasaplamak bilen, gural tor birikmesiniň hili we ygtybarlylygy barada gymmatly maglumatlary berýär.

## Ping ulanmak

Ping buýrugyny ulanmak üçin buýruk buýrugyny ýa-da terminal penjiresini açyň we nyşanyň nyşanynyň IP adresi ýa-da host ady bilen "ping" ýazyň. Mysal üçin:

```
ping example.com
```

## Ping netijelerini düşündirmek

Ping buýrugynyň çykyşy aşakdaky maglumatlary görkezer:

- ** Iberilen **: Maksatly enjama iberilen paketleriň sany.
- ** Alnan **: Maksatly enjamdan alnan paketleriň sany (birikmek üstünlikli bolsa).
- ** ostitirilen **: Baglanyşykda näsazlygy görkezýän maksatly enjama ýetmedik paketleriň sany.
- ** Minimal, Maksimum we Ortaça gezelenç wagty (RTT) **: Bir paketiň çeşme enjamyndan barmaly ýerine we yzyna gaýdyp gelmek üçin näçe wagt sarp ediljekdigini görkezýär.

## Ping bilen näsazlyklary düzetmek

Ping, tor birikdiriş meselelerini anyklamak we näsazlyklary düzetmek üçin aýratyn peýdalydyr. Kömek edip biljek käbir umumy ssenariýalar:

- Uzakdaky enjamyň işjeňdigini ýa-da jogap berýändigini barlamak.
- Toruň gijä galmagyny ýa-da haýal tor birikmelerini kesgitlemek.
- marşrutlaşdyryş meselelerini we paket ýitgilerini çözmek.
- Domen atlarynyň IP adreslerine çözgüdini barlamak.

Ping buýrugyna düşünmek we ulanmak arkaly ulanyjylar durnukly we ygtybarly onlaýn tejribäni üpjün etmek üçin tor bilen baglanyşykly dürli meseleleri anyklap we çözüp bilerler.

Käbir enjamlaryň ýa-da serwerleriň ICMP haýyşlaryna jogap bermezlik üçin düzülip bilinjekdigini ýadyňyzdan çykarmaň, ping buýrugyny ulananyňyzdan soň hiç hili jogap ýa-da "Wagtyň geçmegi" habary bolmaz. Bu özüňi alyp barmak, adatça bolup biljek howplaryň ýa-da hüjümleriň öňüni almak üçin düzülendir, şonuň üçin näsazlyklary düzetmek bilen ýüzbe-ýüz bolsaňyz gorkmaň.