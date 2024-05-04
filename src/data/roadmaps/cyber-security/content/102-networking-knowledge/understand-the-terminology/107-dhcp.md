# DHCP

** Dinamiki Host Konfigurasiýa Protokoly (DHCP) **, IP adreslerini tordaky enjamlara awtomatiki bellemäge mümkinçilik berýän tor protokolydyr. IP torunyň möhüm bölegi bolup, IP esasly tor arkaly aragatnaşyk gurmak üçin enjamlary sazlamak işini ýönekeýleşdirmegi maksat edinýär.

## DHCP-iň esasy aýratynlyklary

- ** Awtomatiki IP adresi bellemek **: DHCP, zerur IP adresleri awtomatiki usulda enjamlar bilen üpjün edip, iki gezek salgylanmak howpuny azaldyp, el bilen IP adresi bellemek zerurlygyny aradan aýyrýar.
- ** Tor konfigurasiýasy **: IP salgylaryndan başga-da, DHCP subnet maska, deslapky şlýuz we DNS serwer maglumatlary ýaly beýleki möhüm ulgam maglumatlary hem berip biler.
- ** IP adresi gaýtadan ulanmak **: Enjam tordan çykanda ýa-da IP adresi zerur bolmasa, DHCP adresi gaýtadan ulanmaga we başga enjama bellemäge mümkinçilik berýär.
- ** Kärende dowamlylygy **: DHCP belli bir döwür üçin "kärende" diýilýän IP adresleri belleýär. Kärende möhleti gutarandan soň, enjam täze IP adresi talap etmeli ýa-da häzirki salgysyny täzelemeli.

## DHCP nähili işleýär

DHCP prosesi dört esasy ädimden ybarat:

- ** DHCP Discover **: Tora goşulmak isleýän enjam (müşderi) DHCP serwerini tapmak üçin "DHCP Discover" habary hökmünde belli ýaýlym habaryny iberýär.
- ** DHCP Teklip **: "DHCP Discover" ýaýlymyny alandan soň, DHCP serweri müşderi üçin zerur ulgam konfigurasiýa maglumatlary (meselem, IP adresi) öz içine alýan ýeke-täk "DHCP Teklip" habary bilen jogap berýär.
- ** DHCP haýyşy **: Müşderi teklibi alýar we IP adresi belligini we beýleki ulgam maglumatlaryny tassyklamak üçin "DHCP haýyşy" habaryny iberýär.
- ** DHCP Minnetdarlyk (ACK) **: Netijede, DHCP serweri IP adresi we tor sazlamalarynyň üstünlikli bellenilendigini tassyklaýan "ACK" habaryny iberýär. Müşderi indi tor arkaly habarlaşmak üçin bölünen IP adresi ulanyp biler.

## Kiberhowpsuzlygyň ähmiýeti

DHCP-e düşünmek tor hünärmenleri we kiberhowpsuzlyk hünärmenleri üçin möhümdir, sebäbi hüjümiň wektory bolup biler. Duşmanlar tordaky gödek DHCP serwerlerini gurmak, ortada adam hüjümleri etmek ýa-da hyzmatdan ýüz öwürmek arkaly DHCP-den peýdalanyp bilerler. Netijede, DHCP serwerlerini goramak, anomaliýalar üçin tor trafigine gözegçilik etmek we güýçli tanamak we ygtyýarnama usullaryny ulanmak tor howpsuzlygyny saklamak üçin möhüm tejribe.