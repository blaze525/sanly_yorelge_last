# Subnettingiň esaslary

Subnetting, IP toruny subnets diýilýän kiçi kiçi torlara bölmek prosesi. IP adresleri has gowy ýerleşdirmäge mümkinçilik berýär we tor üçin has gowy gurama, gözegçilik we howpsuzlygy üpjün edýär. Bu ýerde, subnet etmegiň käbir esasy düşünjelerini we kiberhowpsuzlyk üçin näme üçin möhümdigini öwrenýäris.

## IP salgylary we subnet maskalary

IP adresi tordaky enjamlar üçin özboluşly kesgitleýji. Iki bölekden durýar: tor salgysy we ýer eýesi salgysy. Tor salgysy, enjamyň degişli toruny görkezýär, şol bir wagtyň özünde, salgy salgysy şol tordaky belli enjamy kesgitleýär.

Subnet maskalary IP adresiniň haýsy böleginiň tor salgysydygyny we haýsysynyň salgydygyny kesgitlemek üçin ulanylýar. Mysal üçin, "192.168.1.5" IP adresinde we "255.255.255.0" subnet maskasynda tor salgysy "192.168.1.0", öý salgysy "5".

## Näme üçin Subnetting?

Subnettingiň birnäçe artykmaçlygy bar, şol sanda:

- ** Toruň öndürijiligini gowulandyrmak **: Uly tory kiçi subnetlere bölmek dyknyşygy azaltmaga we umumy öndürijiligi ýokarlandyrmaga kömek edýär.
- ** Giňeldilen Howpsuzlyk **: Toruň dürli böleklerini izolirlemek bilen, elýeterliligi dolandyryp we howplaryň ýaýramagyny çäklendirip bilersiňiz.
- ** Has aňsat dolandyryş **: Kiçijik torlary dolandyrmak we goldamak has aňsat, sebäbi meseleleri yzarlamak we çeşmeler paýlamak has ýönekeý.

## Subnetting prosesi

Subnetting prosesi aşakdaky ädimleri öz içine alýar:

- ** Degişli subnet maskasyny saýlaň **: Talap edilýän subnetleriň we ýer eýeleriniň sanyna görä toruňyz üçin dogry subnet maskasyny kesgitläň. Näçe köp subnet gerek bolsa, IP adresiniň baş böleginden "karz" alarsyňyz.

- ** Tory Subnetlere bölüň **: IP adresiniň tor bölegini karz alnan bitleriň bahasyna köpeltmek arkaly subnet salgylaryny hasaplaň.

- ** Host çäklerini kesgitläň **: Ilkinji we iň soňky ulanylýan IP adreslerini kesgitläp, her setiň içindäki dogry host salgylaryny hasaplaň. Subnetdäki ilkinji adresiň tor salgysydygyny we iň soňky salgynyň ýaýlym üçin ulanylýandygyny ýadyňyzdan çykarmaň.

- ** IP adreslerini belläň **: IP adreslerini degişli setlerindäki enjamlara bölüň we enjamlary dogry subnet maskasy bilen sazlaň.

## Mysal

“255.255.255.0” subnet maskasy bolan “192.168.1.0” ulgamymyz bar öýdýän. Dört kiçi subnet döretmek isleýäris. Ine, muny nädip edip bileris:

- Ikilikdäki "255.255.255.0" "11111111.11111111.11111111.00000000". Dört sany subnet döretmek üçin ýer eýesinden 2 bit karz alyp bileris: "11111111.11111111.11111111.11000000", onluk formatda "255.255.255.192".

- Subnetlerimizde aşakdaky tor salgylary bolar:

   - "192.168.1.0"
   - "192.168.1.64"
   - "192.168.1.128"
   - "192.168.1.192"

- Her subnetiň içindäki dogry diapazonlar:

   - "192.168.1.1 - 192.168.1.62"
   - "192.168.1.65 - 192.168.1.126"
   - "192.168.1.129 - 192.168.1.190"
   - "192.168.1.193 - 192.168.1.254"

- IP salgylaryny bu öý eýesinden degişli subnetlerindäki enjamlara bölüň we enjamlary dogry subnet maskasy bilen sazlaň (`255.255.255.192`).

Toruňyzy dogry düzmek we goramak üçin subnettingiň esaslaryna düşünmek zerurdyr. Toruňyzy kiçi subnetlere netijeli bölmek bilen, öndürijiligi, guramaçylygy we howpsuzlygy optimizirläp bilersiňiz.