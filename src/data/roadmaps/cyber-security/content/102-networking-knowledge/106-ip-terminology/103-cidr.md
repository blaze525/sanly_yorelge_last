# CIDR

CIDR, ýa-da Klassyz domenara marşrutlaşdyrma, IP adresleri paýlamagyň we Internet Protocol paketlerini Klassiki IP adresiniň köne usuly bilen deňeşdirilende has çeýe we täsirli usulda ugrukdyrmagyň usulydyr. 1990-njy ýyllaryň başynda işlenip düzülen CIDR, IPv4 salgylarynyň könelmegini haýallatmaga we marşrut tablisalarynyň göwrümini azaltmaga kömek edýär, netijede internetiň has gowy işlemegine we ulalmagyna sebäp bolýar.

## CIDR nähili işleýär

CIDR adaty A, B we C synp shemalaryny üýtgeýän uzynlykdaky subnet maskasyna (VLSM) mümkinçilik berýän ulgam bilen çalyşmak arkaly öz maksatlaryna ýetýär. CIDR-de, IP adresi we subnet maskasy, _CIDR belligi_ diýlip atlandyrylýan ýeke birlik hökmünde ýazylýar.

CIDR belligi şuňa meňzeýär: "192.168.1.0 / 24". Bu ýerde "192.168.1.0" IP adresi, "/ 24" bolsa subnet maskasyny görkezýär. Çyzgydan (/) sana _prefix uzynlygy_ diýilýär, bu subnet maskasynyň näçe bitiniň 1 (bitmask) bolmalydygyny görkezýär. Subnet maskasynyň galan bölekleri 0-a düzüldi.

Mysal üçin, "/ 24" prefiks uzynlygy "255.255.255.0" subnet maskasyna gabat gelýär, sebäbi ilkinji 24 bit 1-e gabat gelýär, bu subnetdäki jemi 256 IP adresi üpjün edýär, bu IP-leriň 254-si bar enjamlar (Birinji we soňky IP degişlilikde tor salgysy we ýaýlym salgysy üçin saklanýar).

## CIDR-iň artykmaçlyklary

- ** Netijeli IP paýlanyşy: ** CIDR IPv4 salgylaryny has köp granulirlemäge mümkinçilik berýär, biderek IP boşlugyny azaldýar.
- ** marşrutlaşdyryş tablisasynyň ululygynyň azalmagy: ** CIDR birnäçe marşrut marşrutyny bir marşrut tablisasynyň girişine birleşdirýän marşrutlary jemlemäge mümkinçilik berýär.
- ** marşrutlaşdyryş täzelenmeleriniň azalmagy: ** Marşrutizatorlara has umumylaşdyrylan marşrut maglumatlary paýlaşmaga rugsat bermek bilen, marşrut täzelenmeleriniň sany ep-esli azalýar, toruň durnuklylygyny ýokarlandyrýar we marşrutizatoryň iş ýüküni azaldýar.

## IPv6-da CIDR

Şeýle hem, CIDR IPv6 salgy ulgamynda möhüm rol oýnaýar, bu ýerde IPv6-nyň ägirt uly salgy giňişligini netijeli dolandyrmakda CIDR belligini we adresi jemlemek has möhüm bolup durýar.

Sözümiň ahyrynda, CIDR häzirki zaman IP ulgam ulgamlarynyň möhüm bölegi bolup, IP adres giňişligini has gowy ulanmaga mümkinçilik berýär we internetiň umumy göwrümini we işleýşini gowulandyrýar. Tor dolandyryjylary we howpsuzlyk hünärmenleri üçin CIDR-ä berk düşünmek möhümdir, sebäbi IP torlaryny sazlamakda, dolandyrmakda we üpjün etmekde möhüm rol oýnaýar.