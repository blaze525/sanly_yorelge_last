# VLAN Hopping

VLAN atmak, ýerli ulgamda (LAN) VLAN magistral protokollarynyň gowşak ýerlerinden peýdalanýan umumy tor esasly hüjümdir. Bu hüjümiň maksady, beýleki VLAN-lara rugsatsyz girmek ýa-da VLAN-laryň arasynda bökmek arkaly toruň howpsuzlyk protokollaryndan aýlanyp geçmek.

## VLAN Hopping nähili işleýär

VLAN atmagyň iki esasy usuly bar:

- **Switch Spoofing:** Bu çemeleşmede, hüjümçi enjamyny wyklýuçatel hökmünde hereket edýär we hakyky tor wyklýuçateli bilen magistral baglanyşygyny döredýär. Magistral baglanyşyklary birnäçe VLAN-dan traffigi daşamak üçin niýetlenendigi sebäpli, hüjümçi magistralda rugsat edilen ähli VLAN-lardan traffige girip biler.

- **Iki gezek bellik etmek:** Bu usul birnäçe 802.1Q VLAN belligi bolan ramkalary ibermegi öz içine alýar. Goşmaça bellik goşmak bilen, hüjümçi wyklýuçateli bulaşdyryp, çarçuwany başga bir VLAN-a ugrukdyryp, şol VLAN-yň traffigine rugsatsyz girip biler.

## VLAN atmagyň öňüni almak

Toruňyzy VLAN hüjümlerinden goramak üçin aşakdaky iň oňat tejribäni durmuşa geçirmegi göz öňünde tutuň:

- **Ulanylmaýan portlary öçüriň:** Switçleriň ulanylmadyk portlary ýapyň we magistral portlarynyň ýerine giriş portlary hökmünde düzüň. Bu hüjümçiniň magistral baglanyşygyny döretmek mümkinçiligini çäklendirer.

- **Rugsat berlen VLAN-lary magistral baglanyşyklarynda sazlaň:** Rugsat berlen VLAN-lary aç-açan görkezmek bilen magistral baglanyşyklarynda amala aşyrylyp bilinjek VLAN-lary çäklendiriň. Bu hüjümçiniň magistral baglanyşygy arkaly birugsat VLAN-lara girmeginiň öňüni alar.

- **VLAN giriş gözegçilik sanawlaryny (VACL) ýerine ýetiriň:** VACL-ler VLAN derejesinde traffigi süzmek üçin ulanylyp bilner, birugsat traffigiň VLAN-a girmeginiň ýa-da çykmagynyň öňüni alar.

- **802.1Q Verli VLAN belligini işletmek:** Lokal VLAN belligini açmak we özboluşly, ulanylmadyk VLAN ID-ni ýerli VLAN hökmünde bellemek bilen, goşa bellik hüjümleriniň öňüni alyp bilersiňiz.

Bu howpsuzlyk amallaryny durmuşa geçirmek, toruňyzy VLAN bökmekden we tor esasly hüjümlerden goramakda möhüm ähmiýete eýe. Üstünlikli kiberhüjüm ähtimallygyny azaltmak üçin elmydama hüşgär boluň we toruňyzyň howpsuzlyk protokollaryny täzeläň.