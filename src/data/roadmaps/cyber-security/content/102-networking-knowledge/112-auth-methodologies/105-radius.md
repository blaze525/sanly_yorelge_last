# RADIUS - Remote Authentication Dial-In User Service

** RADIUS ** (Remote Authentication Dial-In User Service), tora birikýän ulanyjylar üçin merkezleşdirilen tassyklamany, ygtyýarnamany we buhgalter hasabatyny (AAA) dolandyrmagy hödürleýän giňden ulanylýan müşderi-serwer protokoly. 1991-nji ýylda işlenip düzülen RADIUS, ulanyjynyň hakykylygyny we konfigurasiýa maglumatyny tordaky enjamlar we serwerleriň arasynda geçirmäge mümkinçilik berýär.

## RADIUS nähili işleýär

RADIUS müşderi bilen serweriň arasynda aragatnaşyk üçin Ulanyjy Maglumat protokolyny (UDP) ulanýar. Ulanyjy tora birikmäge synanyşanda, müşderi (VPN serweri ýa-da simsiz giriş nokady ýaly) tassyklamak haýyşyny RADIUS serwerine ugradýar. Soňra serwer ulanyjynyň maglumatlar bazasyna garşy ulanyjynyň şahsyýet maglumatlaryny barlaýar ýa-da haýyşy başga bir tanamak serwerine ugradýar.

Üstünlikli tassyklanylandan soň, RADIUS serweri ** Access-Accept ** habaryny, şeýle hem ulanyjylara mahsus giriş syýasatlaryny (VLAN ýumuşlary ýa-da firewall düzgünleri ýaly) yzyna iberýär. Hakyky tanamak şowsuz bolsa, serwer ** Giriş-ret etmek ** habaryny iberýär. Mundan başga-da, RADIUS ulanyjy işjeňligini yzarlaýar we hasabat berýär, ony AAA-nyň buhgalter hasabaty üçin jogapkär edýär.

## RADIUS-yň peýdalary

- ** Merkezleşdirilen dolandyryş **: RADIUS dolandyryjylara ulanyjynyň hakykylygyny we syýasatlaryny merkezi bir ýerden dolandyrmaga mümkinçilik berýär. Bu iri we dürli torlaryň dolandyrylyşyny ep-esli aňsatlaşdyrýar.

- ** Göwrümlilik **: RADIUS serwerleri müňlerçe ulanyjy we enjam üçin tassyklamany dolandyryp, iri guramalar üçin amatly bolar.

- ** Çeýeligi **: Giňden ýaýran standart bolmak bilen, RADIUS marşrutizatorlar, wyklýuçateller, VPN şlýuzalary we simsiz giriş nokatlary ýaly dürli enjamlar bilen utgaşýar. Şeýle hem, LDAP ýa-da Active Directory ýaly beýleki tanamak hyzmatlary bilen birleşmäge mümkinçilik berýär.

- ** Howpsuzlyk **: RADIUS maglumatlaryň bozulmagy bilen baglanyşykly töwekgelçilikleri azaldyp, geçiriş wagtynda parollary şifrleýär. Mundan başga-da, tor howpsuzlygyny has-da güýçlendirmek üçin dürli giriş syýasatlaryny durmuşa geçirip biler.

## RADIUS we TACACS 

Beýleki bir meşhur AAA protokoly Terminal Access Controller Access-Control System Plus (TACACS +). RADIUS we TACACS + ikisi hem meňzeş işlemegi üpjün etse-de, görnükli tapawutlar bar:

- RADIUS tanamaklygy we awtorizasiýany birleşdirýär, TACACS + olary bölýär, has çeýeligi we has granuliki gözegçiligi üpjün edýär.
- RADIUS aragatnaşyk üçin UDP ulanýar, TACACS + bolsa TCP ulanýar, paketleriň ygtybarly we sargyt edilmegini üpjün edýär.
- TACACS + ähli ýük göterijisini şifrleýär, RADIUS bolsa paroly şifrleýär.

Guramalar, aýratyn talaplaryna, tor sazlamasyna we enjamyň sazlaşyklylygyna esaslanyp RADIUS we TACACS + arasynda saýlap bilerler.

Sözümiň ahyrynda, RADIUS ygtybarly we täsirli AAA çarçuwasyny durmuşa geçirmekde, howpsuzlygy we berjaý edilmegi üpjün etmek bilen tor dolandyryşyny ýönekeýleşdirmekde möhüm rol oýnaýar.