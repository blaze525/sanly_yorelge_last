# SSL / TLS

**Secure Socket Layer (SSL)** we **Transport Layer Security (TLS)** torlardaky aragatnaşyk üçin howpsuzlygy we maglumatlaryň bitewiligini üpjün etmek üçin döredilen kriptografiki protokollardyr. Bu teswirnamalar, adatça, web traffigini üpjün etmek we kredit kartoçkalarynyň belgileri we giriş şahsyýetnamalary ýaly duýgur maglumatlaryň müşderileriň (meselem, web brauzerleri) we serwerleriň arasynda ygtybarly iberilmegini üpjün etmek üçin ulanylýar.

## SSL

SSL 1990-njy ýyllaryň ortalarynda Netscape tarapyndan işlenip düzüldi we birnäçe gezek gaýtalandy. SSLv3-iň soňky wersiýasy 1996-njy ýylda çykdy. SSL howpsuzlyk aladalary sebäpli 2015-nji ýylda ýatyryldy we häzirki zaman programmalarynda ulanmak maslahat berilmeýär.

## TLS

TLS SSL-iň mirasdüşeri we täze wersiýalary we täzelenmeleri bilen yzygiderli ösýär. Iň soňky wersiýasy TLS 1.3 2018-nji ýylda çykdy. TLS giňden ulanylýar we web traffigini üpjün etmek üçin standart hasaplanýar.

## SSL / TLS nähili işleýär

SSL / TLS müşderi bilen serweriň arasynda iberilýän maglumatlary şifrlemek arkaly işleýär, maglumatlaryň aňsatlyk bilen saklanmagyny ýa-da päsgel bermezligini üpjün edýär. Şifrlemek, kriptografiki algoritmleriň, esasy alyş-çalyşlaryň we sanly şahadatnamalaryň utgaşmasy arkaly gazanylýar.

SSL / TLS baglanyşygyny gurmagyň esasy ädimleri:

- ** El çarpmak: ** Müşderi we serwer ygtybarly baglanyşyk gurmak üçin "el çarpmak" diýilýän amal bilen meşgullanar. Bu amalyň dowamynda müşderi we serwer SSL / TLS-iň haýsy wersiýasyny ulanmalydygy barada ylalaşýarlar we aragatnaşygy üpjün etmek üçin ulanjak şifr toplumlaryny we kriptografiki algoritmleri saýlaýarlar.

- ** Açar alyş-çalyş: ** Müşderi we serwer şifrlemek açarlaryny döredýän we ygtybarly paýlaşýan esasy alyş-çalyş eder. Bu düwmeler, arasynda berilýän maglumatlary şifrlemek we şifrlemek üçin ulanylar.

- ** Şahadatnamany barlamak: ** Serwer köpçülige açary we serwer hakda maglumatlary öz içine alýan sanly şahadatnama berer. Müşderi, ygtybarly şahadatnama edarasy (CA) tarapyndan berilendigini we möhletiniň gutarmandygyny tassyklamak bilen şahadatnamanyň dogrulygyny barlaýar.

- ** Howpsuz aragatnaşyk: ** El çarpmak, açar alyş-çalyş we şahadatnamany barlamak tamamlanandan soň, müşderi we serwer paýlaşan şifrlemek düwmelerini ulanyp maglumatlary ygtybarly geçirip bilerler.

## SSL / TLS-iň artykmaçlyklary

- ** Ygtybarly aragatnaşyk: ** SSL / TLS, müşderileriň we serwerleriň arasynda maglumatlaryň iberilmegi üçin ygtybarly, şifrlenen tuneli üpjün edýär, duýgur maglumatlary diňlemekden, saklamakdan we bozmakdan goraýar.

- ** Autentifikasiýa: ** SSL / TLS serweri we käwagt müşderini tassyklamak üçin sanly şahadatnamalary ulanýar. Bu, aragatnaşyga gatnaşýan taraplaryň özleriniň kimdigini öňe sürmäge kömek edýär.

- ** Maglumatlaryň bütewiligi: ** SSL / TLS iberilýän maglumatlaryň bitewiligini saklap, gowşurylyş wagtynda alnan maglumatlaryň bozulmandygyny tassyklamak mehanizmlerini öz içine alýar.