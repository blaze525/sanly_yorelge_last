# Haşing

Bu bölümde möhüm kriptografiki başlangyç _hashing_ düşünjesini we kiberhowpsuzlyk ugrundaky köp ulanylyşyny ara alyp maslahatlaşarys.

** Haşing näme? **

A _hash funksiýasy, giriş (ýa-da 'habar') alýan we adatça alty sanly san görnüşinde kesgitlenen ululykdaky baýtlary yzyna gaýtaryp berýän matematiki algoritmdir. Çykyşa _hash value_ ýa-da ýönekeý _hash_ diýilýär. Gowy hash funksiýasynyň käbir aýratynlyklary:

- _Deterministic_: Şol bir giriş elmydama şol bir hash çykyşyna getirer.
- _Efficient_: Haşy hasaplamak üçin alnan wagt mümkin boldugyça çalt bolmaly.
- _Awalanche Effect_: Girişdäki kiçijik üýtgeşiklik düýpgöter üýtgeşik netije çykarmaly.
- _ýeke-täk funksiýa_: Hasş çykyşyndan girişini ters inerener etmek hasaplap bolmajak bolup biler.
- _Collision Resistance_: Şol bir hash çykyşyny öndürýän iki dürli giriş tapmak gaty ähtimal däl.

** Adaty haşing algoritmleri **

Dürli güýçli we gowşak taraplary bolan giňden ulanylýan ýuwmak algoritmleri bar. Iň ýaýranlaryň arasynda:

- MD5 (Message Digest 5): 128 bitli hash bahasyny öndürýär. Çaknyşyk hüjümleriniň gowşaklygy sebäpli indi howpsuz hasap edilmeýär.
- SHA-1 (Howpsuz Haş algoritmi 1): 160 bitli hash bahasyny döredýär. MD5 ýaly, çaknyşyk hüjümleri sebäpli indi howpsuz hasap edilmeýär we basgançakdan aýrylýar.
- SHA-256 we SHA-512: SHA-2 maşgalasynyň bir bölegi, SHA-256 256 bitli hash bahasyny öndürýär, SHA-512 bolsa 512 bitli hash bahasyny döredýär. Bularyň ikisi hem giňden kabul edilýär we howpsuz hasaplanýar.

** Haşing programmalary **

Haşing köpugurly mehanizm bolup, kiberhowpsuzlykda köp maksatlara hyzmat edýär:

- _Data Integrity_: Hashing faýlyň ýa-da maglumatlaryň bir böleginiň üýtgedilmezligi ýa-da bozulmazlygy üçin ulanylyp bilner. Asyl we alnan maglumatlaryň hash bahasyny deňeşdirmek, olaryň gabat gelýändigini kesgitläp biler.

- _Password Saklaýyş_: Ulanyjylaryň parollaryny heş görnüşinde saklamak hüjümçilere, saklanan heşlere girip bilseler-de aç-açan parollary almagy kynlaşdyrýar.

- _Sanly gollar: Sanly gollar, habaryň ýa-da maglumatlaryň birliginiň dogrulygyny we dogrulygyny barlamak üçin köplenç kriptografiki hash funksiýalaryna bil baglaýarlar.

- _ Işiň subutnamasy_: Has funksiýalary hasaplaýyş kynçylyklaryny çözüp bilýänligi sebäpli, Bitcoin gazyp almakda ulanylýan ýaly ylalaşyk algoritmlerinde ulanylýar.

Sözümiň ahyrynda, ýuwmak maglumatlaryň bitewiligini üpjün etmekde we kiberhowpsuzlygyň dürli ugurlarynda howpsuzlygy üpjün etmekde möhüm usuldyr. Howpsuz ýuwmak algoritmlerine düşünmek we kabul etmek, islendik kiberhowpsuzlyk hünärmeni üçin möhüm ussatlykdyr.