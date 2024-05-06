# tracert

"Trace Route" üçin gysga bolan Tracert, buýruk setiri bolup, belli bir ýere ýetmek üçin maglumat paketleri tarapyndan alnan ugry görkezip, tor birikmesi meselelerini anyklamaga kömek edýär. Alongoluň ugrundaky her bir hopy kesgitleýär we maglumat paketleriniň bir nokatdan beýlekisine gitmek üçin näçe wagt sarp edýändigini hasaplaýar. Tracert, tor aragatnaşygynda bolup biljek gijikdirmeleri ýa-da bökdençlikleri kesgitlemekde aýratyn peýdaly bolup biler.

## Tracert-i nähili ulanmaly?

- Windows kompýuteriňizde "Command Prompt" ýa-da Linux ýa-da macOS-da "Terminal" açyň.
- IP adresi ýa-da domen ady bolup bilýän maksatly maksat bilen yzarlanylýan "yzarlaýjy" ýazyň. Mysal üçin: `tracert example.com '

Çykyş, yzygiderli tertipde hoplaryň sanawyny görkezer, her setirde bir hop, IP adresi, host ady we maglumat paketleriniň şol nokada ýetmek üçin gezelenç wagty (millisekuntda) görkeziler.

## Tracert-ň işleýiş netijelerine düşündirmek

Gözegçilik buýrugynyň netijeleri seljerilende aşakdakylary göz öňünde tutuň:

- _Hops_: Maglumat paketleriniň barmaly ýerine ýetmek üçin edýän aýratyn ädimleri. Routeol aşa uzyn görünse, tor konfigurasiýasy ýa-da netijesiz marşrut ýoly bilen baglanyşykly bir mesele bolup biler.
- _ Gezelenç wagty (RTT) _: Maglumat paketleriniň çeşmeden barmaly ýerine we yza gaýdyp näçe wagt gerekdigini kesgitleýär. RTT yzygiderli ýokary bolsa ýa-da belli bir hopsyň arasynda ep-esli artsa, torda gijä galmak, päsgelçilik ýa-da dyknyşyk bolup biler.
- _Request Wagty Out_: Bu ýalňyşlygy görseňiz, maglumat paketiniň belli bir möhletde belli bir hopa ýetip bilmeýändigini aňladýar. Bu, birikmäniň näsazlygynyň, diwar diwarynyň blokirlemeginiň ýa-da paketiň ýitmeginiň alamaty bolup biler.

Şeýle-de bolsa, käbir marşrutizatorlaryň howpsuzlyk ýa-da doly däl ýa-da nädogry netijelere sebäp bolup biläýjek howpsuzlyk sebäpleri ýa-da ýol dolandyryşy sebäpli ICMP echo talaplaryny (yzarlaýjy tarapyndan ulanylýan paketler) ret etmek ýa-da ileri tutmak üçin düzülip bilinjekdigini unutmaň.

## Çäklendirmeler we alternatiwalar

Tracert näsazlyklary düzetmek üçin amatly gural bolsa-da, onuň käbir çäklendirmeleri bar:

- Diwar diwarlary ýa-da beýleki ulgam enjamlary tarapyndan süzülip ýa-da petiklenip bilinjek ICMP (Internet Control Message Protocol) paketlerine daýanýar.
- Netijelere ortaça öndürijiligiň hökmany suratda gysga möhletli tor dyknyşyklary ýa-da gijä galmagy täsir edip biler.
- Ulgam meseleleriniň esasy sebäpleri (meselem, enjamlaryň näsazlyklary, programma üpjünçiliginiň ýalňyş sazlamalary) barada çäkli düşünje berýär.

Has ösen ulgam näsazlyklaryny düzetmek we derňemek üçin beýleki gurallary göz öňünde tutup bilersiňiz:

- "ping": Belli bir öý eýesine ýa-da IP adrese esasy baglanyşygy we gijä galmagy barlamak.
- "nslookup" ýa-da "dig": DNS ýazgylaryny gözlemek, DNS meselelerini anyklamak ýa-da domen adynyň dogry çözgüdini barlamak.
- "mtr" (My Traceroute): Linux we macOS-da bar, her "hoperoute" we "ping" -iň işleýşini birleşdirýär, her hopuň ýerine ýetirişine real wagt, üznüksiz statistika berýär.