# Port skanerleri

Port skanerleri näsazlyklary düzetmek we kiberhowpsuzlyk şertlerinde möhüm gurallardyr. Maksatly ulgamda açyk ýa-da ýapyk tor portlaryny kesgitlemek üçin niýetlenendir. Tor portlary, enjamda işleýän dürli programmalar we hyzmatlar üçin aragatnaşyk nokady bolup hyzmat edýär we bu portlaryň ýagdaýyny bilmek, potensial howpsuzlyk gowşaklyklaryny ýüze çykarmaga ýa-da belli hyzmatlaryň göz öňünde tutulyp işleýändigini tassyklamaga kömek edip biler.

Bu bölümde port skanerleriniň aşakdaky taraplaryny öwreneris:

- ** Port skanerleri näme üçin möhüm **
- ** Port skanerleriniň görnüşleri **
- ** Meşhur port skaner gurallary **

## Näme üçin port skanerleri möhüm?

Port skanerleri aşakdaky ýagdaýlarda kömek edip biler:

- ** Açyk portlary kesgitlemek: ** Açyk portlar, goragsyz galsa ulgamyňyzy hüjümlere sezewar edip biler. Port skaneri haýsy tor portlarynyň açykdygyny we ygtybarly bolmalydygyny kesgitlemäge kömek edip biler.
- ** Rugsat berilmedik hyzmatlary tapmak: ** Açyk portlary gözlemek, toruňyzda birugsat programmalaryň işleýändigini ýa-da ýokdugyny anyklamaga kömek edip biler, sebäbi bu hyzmatlar siziň bilmeýän portlaryňyzy açyp biler.
- ** Gorag diwarynyň düzgünlerini barlamak: ** Port skanerleri, diwar gorag düzgünleriňiziň täsirli we dogry düzülendigini hem barlap biler.
- ** Tor meselelerini çözmek: ** Açyk we ýapyk portlary ýüze çykarmak bilen port skanerleri tor problemalaryny anyklamaga we amaly programmalaryňyzyň we hyzmatlaryňyzyň kadaly işlemegine kömek edip biler.

## Port skanerleriniň görnüşleri

Port skanerleriniň üç esasy görnüşi bar:

- ** TCP birikmesi: ** Bu skaner, skaner bilen maksatly enjamyň arasynda doly TCP baglanyşygyny başlaýar. Üç taraplaýyn el çarpmagy goşmak bilen, TCP birikmesini gurmagyň ähli prosesi geçýär. Gözlegiň bu görnüşi takyk, ýöne has aňsat kesgitlenýär.
- ** TCP SYN ýa-da Halfarym açyk skaner: ** Bu skaner maksatly enjama diňe SYN paketini (birikmäni başlamak haýyşy) iberýär. Maksatly enjam SYN / ACK paketi bilen jogap berse, port açyk hasaplanýar. Gözlegiň bu görnüşi has çalt we az kesgitlenýär, sebäbi doly baglanyşyk gurmaýar.
- ** UDP skaneri: ** Bu skaner, adatça akym we real wagt aragatnaşyk programmalary üçin ulanylýan Ulanyjy Datagram Protokoly (UDP) portlaryny nyşana alýar. UDP paketlerini maksatly enjama iberýär, jogap bolmasa, port açyk hasaplanýar. Gözlegiň bu görnüşi has takyk bolup biler, sebäbi käbir enjamlar UDP zondlaryna jogap bermezligi mümkin.

## Meşhur port skaner gurallary

Ine, meşhur we giňden ulanylýan port skaner gurallary:

- ** Nmap: ** Nmap (Network Mapper), köp taraply we güýçli erkin, açyk çeşme guraldyr. TCP Connect, TCP SYN we UDP skanerleri ýaly dürli görnüşli skanerleri hödürleýär.
- ** Masscan: ** Masscan, ýokary tizlikli port skaneridir, adatça birnäçe minudyň içinde tutuş internedi skanirlemek ukyby sebäpli uly göwrümli skaner üçin ulanylýar.
- ** Gaharly IP skaner: ** Ulanyjy üçin amatly we täze başlanlar üçin amatly platforma port skaneri. TCP we UDP skanerini hem goldaýar.

Port skanerlerini elmydama jogapkärçilikli we diňe öz ulgamlaryňyzda ýa-da skanerden geçirmäge rugsat beren ýeriňizde ulanmagy ýatdan çykarmaň. Rugsat berilmedik port skaneri kanuny we ahlak taýdan bolup biler.