# Kerberos

Kerberos, müşderi / serwer programmalary üçin güýçli tassyklamany üpjün etmek üçin döredilen tor tanamak protokolydyr. 1980-nji ýyllarda MIT tarapyndan işlenip düzüldi we Hadesiň derwezelerini goraýan grek mifologiýasyndan üç kelleli itiň adyny göterdi, bu protokolyň ähtimal duşmançylykly gurşawda ygtybarly tassyklanmagy üpjün etmek maksadyny alamatlandyrýar.

## Kerberos nähili işleýär

Kerberos, esasy paýlaýyş merkezi (KDC) atly ynamdar üçünji tarapa bil baglaýar. KDC tordaky her bir ulanyjy we hyzmat üçin gizlin açarlaryň maglumat bazasyny saklaýar. Protokol simmetrik açar kriptografiýasyny ulanýar, bu müşderiniň we serweriň birmeňzeş şifrlemek açaryny bilýändigini aňladýar.

Kerberosyň esasy maksady, ygtybarly maglumat alyşmak üçin müşderiniň we serweriň şahsyýetini biri-birine subut etmekdir. Muňa ýetmek üçin teswirnama biletleri ulanýar - müşderiniň şahsyýeti, serweriň şahsyýeti we umumy sessiýa açary barada maglumatlary öz içine alýan şifrlenen habarlary ulanýar.

Ine, Kerberos tanamaklyk işiniň ýokary derejeli gysgaça mazmuny:

- Müşderi ulanyjy adyny görkezip, KDC-den bilet soraýar.
- KDC bilet döredýär, müşderiniň gizlin açary bilen şifrleýär we müşderä yzyna iberýär.
- Müşderi bileti açýar we serwer bilen ygtybarly aragatnaşyk saklamak üçin ulanjak sessiýa açaryny alýar.
- Belli bir hyzmata girmek üçin müşderi KDC-den hyzmat biletini soraýar. Isleg biletini we maksatly serweriň kesgitleýjisini öz içine alýar.
- KDC hyzmat biletini döredýär, serweriň gizlin açary bilen şifrleýär we müşderä yzyna iberýär.
- Müşderi, şahsyýetini kesgitlemek üçin sessiýa açary bilen şifrlenen habar bilen birlikde serwere hyzmat biletini iberýär.
- Serwer hyzmat biletini açýar, sessiýa açaryny çykarýar we müşderiniň habaryny şifrlemek üçin ulanýar.
- Müşderiniň şahsyýetini barlandan soň, serwer talap edilýän hyzmata girmäge mümkinçilik berýär we hakykylygyny tassyklamak üçin kodlanan habar iberýär.

## Kerberosyň peýdalary

- ** Howpsuz **: Kerberos kodlanan biletleri ulanyp, güýçli tassyklamany üpjün edýär, hüjümçileriň saklanmagyny we galplaşdyrylmagyny kynlaşdyrýar.
- ** Merkezleşdirilen **: KDC ulanyjynyň elýeterliligini dolandyrmagy we goldamagy aňsatlaşdyrýan tanamaklyk dolandyryşyny merkezleşdirýär.
- ** Giňeldilip bilinýän **: Protokol uly ulgamlary goldamak üçin döredilip, kärhana gurşawy üçin meşhur saýlama bolýar.
- ** Bilelikdäki **: Kerberos, dürli platformalar we satyjylar tarapyndan goldanýan açyk standart.

## Çäklendirmeler

- ** KDC bil baglamak **: KDC şowsuzlygyň ýekeje nokady. Eger ol bozulsa ýa-da awtonom görnüşde bolsa, tordaky tanamaklyk kesiler.
- ** Wagt duýgur **: Kerberos serwerler bilen müşderileriň arasyndaky wagt tapawudyna duýgur. Sinhronlaşdyrylan sagatlar biletleriň dowamlylygyny takyk saklamak we hüjümleriň gaýtalanmagynyň öňüni almak üçin zerurdyr.
- ** Çylşyrymlylyk **: Protokol gurmak çylşyrymly bolup biler we gizlin açarlary dogry dolandyrmagy talap edýär.

Gysgaça aýtsak, Kerberos ygtybarly / giňden ulanylýan tanamak protokoly bolup, müşderi / serwer aragatnaşygyny ygtybarly üpjün edýär. Merkezleşdirilen dolandyryş we berk howpsuzlyk çäreleri, tassyklamak talaplaryny talap edýän guramalar üçin ajaýyp saýlawy edýär. Şeýle-de bolsa, ygtybarly we ygtybarly tanamak işini saklamak üçin seresaplylyk bilen dolandyrylmaly çäklendirmeleri we çylşyrymlylyklary bar.

- [Kerberos tanamak prosesi] (https://youtu.be/_44CHD3Vx-0)