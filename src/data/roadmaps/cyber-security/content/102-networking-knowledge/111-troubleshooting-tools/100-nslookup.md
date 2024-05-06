# nslookup

** Nslookup **, Domain Name System (DNS) ýazgylary barada maglumat almak üçin döredilen tor dolandyryş dolandyryş buýruk setiridir. DNS, domen atlaryny IP adreslerine terjime etmek, ulanyjylara san IP adresleriniň ýerine adam okalýan atlary (meselem, www.example.com) ulanyp web sahypalaryna we çeşmelere girmäge mümkinçilik berýär.

## Ulanyş

- Domen atlarynyň konfigurasiýasyny barlamak üçin DNS serwerlerinden soraň
- Belli bir domen adynyň IP adresini tapyň
- DNS bilen baglanyşykly meseleleri we ýalňyşlyklary çözüň
- Domen üçin abraýly DNS serwerlerini kesgitläň

## Nähili ulanmaly

- ** Buýruk buýrugyny ýa-da terminaly açyň **: "Windows düwmesi + R" basyň, "cmd" ýazyň we Windows-da buýruk buýrugyny açmak üçin Enter basyň. MacOS ýa-da Linux-da Terminal açyň.

- ** Nslookup işledilýär **: Nslookup ulanyp başlamak üçin "nslookup" ýazyň we Enter basyň. Indi Nslookup re inimindedigiňizi görkezýän `>` soragyny görersiňiz.

- ** DNS sazgylaryny gözlemek **: Nslookup re Iniminde, domen adynyň yzyndaky ýazgy görnüşini ýazyp, dürli DNS ýazgylaryny sorap bilersiňiz. Mysal üçin, www.example.com sahypasynyň A (salgy) ýazgysyny tapmak üçin "A www.example.com" ýazyň. Nslookup re modeiminden çykmak üçin "çykyş" ýazyň.

## Köplenç ulanylýan ýazgy görnüşleri

Aşakda iň köp soralýan DNS ýazgy görnüşleri bar:

- **A**: 'Salgy' diýmekdir; domen ady bilen baglanyşykly IPv4 salgysyny görkezýär
- **AAAA**: 'Salgy', IPv6 üçin; domen ady bilen baglanyşykly IPv6 salgysyny görkezýär
- **NS**: 'Ady serwer' diýmekdir; belli bir domen üçin abraýly DNS serwerlerini yzyna berýär
- **MX**: 'Poçta alyş-çalşygy'; belli bir domen üçin e-poçta bilen işlemek üçin jogapkär poçta serwerini (lerini) yzyna berýär
- **CNAME**: 'Kanoniki ady' aňladýar; lakamynyň görkezýän domen adyny görkezýär
- **TXT**: 'Tekst' diýmekdir; howpsuzlyk syýasaty (meselem, SPF) ýaly domen bilen baglanyşykly bolup biljek goşmaça tekst maglumatlary yzyna berýär.

## Mysal üçin

Mysal üçin A (IPv4) ýazgysyny tapmak isleseňiz, şu ädimleri ýerine ýetiriň:

- Buýruk gyssagly ýa-da terminaly açyň
- "nslookup" ýazyň we Enter basyň
- "Mysal.com" ýazyň we Enter düwmesine basyň

Bu, mysal.com domen ady bilen baglanyşykly IPv4 salgysyny yzyna gaýtaryp berer.