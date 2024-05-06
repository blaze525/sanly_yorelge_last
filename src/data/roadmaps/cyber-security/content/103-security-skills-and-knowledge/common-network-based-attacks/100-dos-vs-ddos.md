# DoS vs DDoS

Bu bölümde, maksatly ulgamlaryň elýeterliligine we işleýşine düýpli täsir edip biljek iki sany umumy ulgamlaýyn hüjüm, DoS (Hyzmatdan ýüz öwürmek) we DDoS (Hyzmatyň paýlanmagy ret edilmegi) arasyndaky tapawutlary ara alyp maslahatlaşarys.

## DoS (Hyzmatdan boýun gaçyrmak) hüjüm

DoS hüjümi kiber hüjümiň bir görnüşidir, hüjümçi maksatly ulgamy haýyşlar bilen basyp, kompýuter ýa-da tor çeşmesini göz öňünde tutulan ulanyjylara elýeterli etmezligi maksat edinýär, serweriň aşa ýüklenmegi sebäpli aslynda elýeterli bolmaz.

DoS hüjümlerinde ulanylýan käbir umumy usullar:

- **Flooding** - Hüjümçi nyşana almak ulgamyna köp sanly haýyş iberýär, jogap bermek ukybyny aşa köpeldýär we netijede ulgamy ýykýar.
- **Ping of Death**  - Hüjümçi ulgamyň çökmegine sebäp bolup biljek uly, näsaz ICMP paketini nyşana iberýär.

## DDoS (Hyzmatyň paýlanan ret edilmegi) hüjümi

DDoS hüjümi niýetindäki DoS hüjümine meňzeýär, ýöne hüjümi başlatmak üçin birnäçe kompýuter ýa-da enjam ulanýar (köplenç zyýanly programma üpjünçiligi tarapyndan zyýan çekýär). Köpçülikleýin "botnet" diýlip atlandyrylýan bu enjamlar nyşana ulgamyna gaty köp haýyş iberýär, bu hüjümi azaltmak we çeşmeleri goramak hasam kynlaşdyrýar.

DDoS hüjümlerinde ulanylýan käbir adaty usullar:

- **UDP Flood** - Ulanyjy Datagram Protokoly (UDP) paketlerini nyşana ulgamyna iberýän DDoS hüjümi, çeşmelerini sarp edip, netijede heläkçilige sebäp bolýar.
- **HTTP Flood** - Maksatnama serwerine köp sanly HTTP haýyşlaryny döredýän DDoS hüjümi, gaýtadan işleýiş kuwwatyndan ýokary bolup, haýallaşmagyna ýa-da ýykylmagyna sebäp bolýar.

## Esasy tapawutlar

- **Scale**: DoS hüjümleri bir hüjümçiniň çeşmesi bilen çäklendirilen hem bolsa, DDoS hüjümleri köp sanly hüjüm enjamyny öz içine alýar we olary nyşana almak ulgamyny agdarmakda we bozmakda has täsirli edýär.
- **Mitigasiýa**: DoS hüjümleri adatça has ýönekeý çäreler bilen ýeňilleşdirilip bilner, ýöne DDoS hüjümleri paýlanan we utgaşdyrylan tebigaty sebäpli köplenç has çylşyrymly goranyş strategiýalaryny talap edýär.

Sözümiň ahyrynda, DoS we DDoS hüjümleriniň ikisi hem çeşmelerini aşa köpeltmek arkaly maksatly ulgamyň elýeterliligini bozmagy maksat edinýär. Muňa garamazdan, olaryň esasy tapawutlary hüjümiň geriminde we çylşyrymlylygyndadyr, DDoS hüjümleri has güýçli we goranmak has kyn. Guramalar üçin ulgamlarynyň elýeterliligini we bitewiligini saklamak üçin bu hüjümleri ýüze çykarmak we azaltmak üçin ygtybarly howpsuzlyk çärelerini durmuşa geçirmek möhümdir.

- [DDOS hüjümi] (https://www.youtube.com/watch?v=PTJ6UZz1pPQ)