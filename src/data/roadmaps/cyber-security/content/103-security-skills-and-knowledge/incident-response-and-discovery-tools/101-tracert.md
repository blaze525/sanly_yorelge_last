# yzarlaýjy

"tracert" (Trace Route), iberijiden barmaly ýerine toruň üsti bilen paketleriň alýan ugruny görkezýän tor anyklaýyş guralydyr. Bu gural, torda gijä galmak meselesini ýüze çykarmaga we tor ýolundaky bökdençlikleriň, bökdençlikleriň ýa-da nädogry konfigurasiýalaryň bardygyny anyklamaga kömek edýär. Operasiýa ulgamlarynyň köpüsinde elýeterli bolan “tracert”, Windows-da Command Prompt ýa-da Linux we macOS-daky Terminal ýaly buýruk setiri interfeýsi (CLI) arkaly ýerine ýetirilip bilner.

## Tracert nähili işleýär

“Tracert” buýrugyny başlanyňyzda, dürli wagt-ýaşamak (TTL) bahalary barmaly ýerine ugradýar. Tor ýolundaky her bir marşrutizator ýa-da hop asyl TTL bahasyny 1-e çenli peseldýär. TTL 0-a ýetende, marşrutizator Internet Dolandyryş Habar Protokoly (ICMP) "Wagt geçdi" habaryny çeşmä iberýär. "tracert" paketiň her hopa ýetmek üçin näçe wagt sarp edendigini we maglumatlary okalýan görnüşde görkezýär. Amal, barmaly ýerine ýetýänçä ýa-da iň ýokary TTL bahasy geçýänçä dowam edýär.

## Tracert ulanmak

"Tracert" -i ulanmak üçin şu ýönekeý ädimleri ýerine ýetiriň:

- Buýruk buýrugyny (Windows) ýa-da terminaly (Linux / macOS) açyň.

- Maksadyň domen adyny ýa-da IP adresini yzarlaýan "yzarlaýjy" ýazyň we Enter basyň. Mysal üçin:

``
tracert example.com
``

- Yz, her hopuň, gijä galmagyň we hopuň IP adresiniň ýa-da çykyş adynyň jikme-jikliklerini görkezer.

## Tracert netijelerini düşündirmek

“Tracert” -iň çykyşy birnäçe maglumat sütünini öz içine alýar:

- Hop: Çeşmeden barmaly ýolda marşrutizatoryň sany.
- RTT1, RTT2, RTT3: Millisekuntda ölçelýän “Tegelek syýahat” wagty, bir paketiň enjamyňyzdan hopa we yza gaýdyp barmak wagtyny görkezýär. Her hop üçin üç dürli wagt görkezilýär (hersi aýratyn ICMP paketini ölçeýär).
- Host ady (islege görä) we IP adresi: Domen ady (bar bolsa) we belli hopuň IP adresi.

“Tracert” çykyşyna düşünmek, ýokary gijä galmak, marşrut aýlawlary ýa-da baryp bolmaýan ýerler ýaly potensial tor meselelerini kesgitlemäge kömek edýär.

## Çäklendirmeler we pikirler

“Tracert” ulanylanda ýatda saklamaly käbir çäklendirmeler we pikirler:

- Netijeler dinamiki marşrutlaşdyrma ýa-da tordaky ýük balansy sebäpli üýtgäp biler.
- Gorag diwarlary ýa-da marşrutizatorlar, ICMP paketlerini blokirlemek ýa-da TTL bahasyny peseltmek üçin düzülip bilner, doly däl ýa-da ýalňyş netijeleri berer.
- "tracert" belli bir tor konfigurasiýasynda her hopy tapyp bilmez.
- Linux / macOS ulgamlarynda şoňa meňzeş buýruga "traceroute" diýilýär.

Wakalara jogap bermekde we açyşda “tracert” ulanmak howpsuzlyk toparlaryna toruň ýol meselelerini seljermäge, bolup biljek päsgelçilikleri ýa-da problemaly halkalary tapmaga we tor infrastrukturasynyň işine düşünmäge kömek edýär.