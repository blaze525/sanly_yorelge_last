# Açar alyş-çalyş

Açar alyş-çalyş, esasy gurama hökmünde hem tanalýar, iki tarapyň arasynda habarlary şifrlemek we şifrlemek üçin ulanyp boljak umumy gizlin açary döredýän prosesdir. Bu açar, aragatnaşygyň ygtybarlylygyny üpjün edýär, üçünji taraplaryň diňlemeginiň we bozulmagynyň öňüni alýar. Saýlamak üçin dürli açar alyş-çalyş protokollary we algoritmler bar we bu bölümde iň möhümleriniň käbirine geçeris.

## Simmetrik vs Asimmetrik şifrlemek

Esasy alyş-çalyş usullaryna çümmezden ozal, simmetrik we asimmetrik şifrlemäni gysgaça tapawutlandyralyň:

- ** Simmetrik şifrlemek ** şifrlemek we şifrlemek üçin şol bir açary ulanýar. Mysal üçin, Advanced Encryption Standard (AES) we Üçünji Maglumatlary Şifrlemek Algoritmi (3DES) bar. Simmetrik şifrlemekdäki esasy kynçylyk, gatnaşyjylaryň arasynda açary ygtybarly paýlaşmakdyr.

- ** Asimmetrik şifrlemek **, açar kriptografiýasy hökmünde hem tanalýar, iki dürli açary ulanýar - şahsy açar we açyk açar. Şahsy açar gizlin saklanýar, açar bolsa erkin paýlanýar. Alyjynyň açyk açaryny ulanyp, habary şifrläp bilersiňiz we ony diňe degişli açar açyp bilýär. Asimmetrik şifrlemek algoritmlerine mysal hökmünde RSA we Elliptic egri kriptografiýasy (ECC) degişlidir.

## Diffie-Hellman açar alyş-çalşygy

Diffie-Hellman (DH) iki tarapa birek-biregi bilmezden umumy gizlin açar barada ylalaşmaga mümkinçilik berýän kriptografiki protokoldyr. Esasy alyş-çalyş köpçülikleýin kanalda bolup geçýär we modully arifmetikanyň we eksponentasiýanyň matematiki aýratynlyklaryna esaslanýar.

DH protokolynyň işleýşiniň gysgaça beýany:

- Iki tarap hem köpçülige mälim we tordaky ähli ulanyjylar tarapyndan ulanylyp bilinjek köp sanly "p" we "g" bazasy barada ylalaşýarlar.
- Her tarap şahsy gizlin açar döredýär: Alisa "a", Bob "b" döredýär. Bu açarlar gizlin bolmaly.
- Jemgyýetçilik gymmatlyklaryny hasaplaýarlar: Elisa "A = g ^ a mod p", Bob bolsa "B = g ^ b mod p" hasaplaýar. "A" we "B" ikisi hem köpçülikleýin kanal arkaly iberilýär.
- Paýlaşylan gizlin açar jemgyýetçilik gymmatlyklary bilen hasaplanýar: Alisa "s = B ^ a mod p", Bob bolsa "s = A ^ b mod p" hasaplaýar. Iki hasaplamada-da simmetrik şifrlemek üçin umumy açar hökmünde ulanyp boljak birmeňzeş baha "s" bolýar.

DH-iň howpsuzlygy Diskret Logarifm meselesiniň (DLP) kynlygyna baglydyr. Şeýle-de bolsa, DH adam arasynda aç-açan alyş-çalyş prosesine päsgel berip, ýerine açar açarlaryny berip bilýän adam arasynda (MITM) hüjümlere sezewar bolýar.

## Elliptik egrilik Diffi-Hellman (ECDH)

Elliptik egrilik Diffie-Hellman (ECDH), modully arifmetikanyň ýerine elliptik egrilik kriptografiýasyny ulanýan DH protokolynyň bir görnüşidir. ECDH DH-e meňzeş howpsuzlygy üpjün edýär, ýöne has gysga hasaplamalara we çeşmeleriň sarp edilmegine sebäp bolýan gysga açar uzynlygy bilen.

ECDH adaty DH protokolyna meňzeýär, ýöne elliptik egrilik amallary bilen:

- Iki tarap hem elliptik egrilik we egriniň esasy nokady "G" barada ylalaşýarlar.
- Her tarap şahsy gizlin açar döredýär: Alisa "a", Bob "b" döredýär.
- Jemgyýetçilik gymmatlyklaryny hasaplaýarlar: Elis "A = aG" nokadyny, Bob "B = bG" nokadyny hasaplaýar. "A" we "B" ikisi hem köpçülikleýin kanal arkaly iberilýär.
- Paýlaşylan gizlin açar jemgyýetçilik gymmatlyklaryny ulanyp hasaplanýar: Alisa "s = aB", Bob bolsa "s = bA" hasaplaýar. Bu hasaplamalar, simmetrik şifrlemek üçin umumy açar hökmünde ulanylyp bilinýän "s" nokadyna getirýär.

## Jemgyýetçilik açary infrastruktura we açar alyş-çalyş

Iş ýüzünde ygtybarly aç-açan alyş-çalyş köplenç köpçülige açyk infrastrukturany (PKI) ulanmagy öz içine alýar. PKI ulgamy, sanly şahadatnamalary berýän we tassyklaýan, Sertifikat edaralary (CAs) diýlip atlandyrylýan ynamdar häkimiýetleriň iýerarhiýasyndan durýar. Şahadatnamalar, açarlary we olaryň eýeçiligini tassyklamak üçin ulanylýar, ortadaky hüjümleri azaltmaga kömek edýär.

Esasy alyş-çalyş wagtynda taraplar biri-biriniň açarlaryny barlamak üçin şahadatnama alyşýarlar. Bu amal, köplenç simmetrik şifrlemek üçin umumy gizlin açary döretmek üçin DH ýa-da ECDH ýaly ygtybarly açar alyş-çalyş protokoly bilen ýerine ýetirilýär.

Sözümiň ahyrynda, esasy aragatnaşyk protokollary howpsuz aragatnaşygy üpjün etmekde möhüm rol oýnaýar. Esasy alyş-çalyşyň esaslaryna we onuň dürli mehanizmlerine düşünmek, ygtybarly kiberhowpsuzlyga ýetmekde uly kömek edip biler.