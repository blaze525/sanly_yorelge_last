# Duzlaşdyrmak

Duzlamak kriptografiýa pudagynda möhüm düşünje. Bu, parollaryň ýa-da şoňa meňzeş duýgur maglumatlaryň howpsuzlygyny ýokarlandyrmak üçin ulanylýan usul, zalym güýç hüjümleri ýa-da sözlük hüjümleri ýaly haker synanyşyklaryndan goramak üçin goşmaça gorag gatlagyny goşmak arkaly ulanylýar.

Bu bölümde aşakdaky mowzuklara has çuňňur öwreneris:

- [Duzlamak näme?] (# Duzlamak näme)
- [Näme üçin duzlamak möhüm?] (# Näme üçin duzlamak möhüm)
- [Duzlamak nähili işleýär?] (# Duzlamak nähili işleýär)
- [Duzlamak üçin iň oňat tejribe] (# iň oňat tejribe-duzlamak üçin)

---

## Duzlamak näme?

A _salt_, ýuwulmazdan ozal ulanyjynyň paroly (ýa-da başga bir duýgur maglumatlar) bilen döredilýän we birleşdirilen tötänleýin maglumatlar setiridir. Duzyň esasy maksady, iki ulanyjy şol bir paroly ulansa-da, parolyň ýuwulan çykyşyny üýtgeşik etmekdir. Duzlar adatça her ulanyjy üçin tötänleýin döredilýändigi sebäpli, iki ulanyjynyň bir duzuň bolmagy ähtimallygy gaty az.

## Näme üçin duzlamak möhüm?

Aşakdaky sebäplere görä parol howpsuzlygyny ýokarlandyrmakda duzlamak möhümdir:

- ** Öňünden hasaplanan tablisalaryň ulanylmagynyň öňüni alýar: ** Hüjümçiler parol hasalaryny netijeli döwmek üçin köplenç älemgoşar stollary ýa-da gözleg tablisalary ýaly hasaplanan tablisalary ulanýarlar. Üýtgeşik duzlary girizmek bilen, bu tablisalar netijesiz bolýar, sebäbi goşulan duzuň netijesinde parol hashiniň üýtgemelerini hasaba almaýar.

- ** Sözlük hüjümlerinden goraýar: ** Duzlar birmeňzeş parollar üçin özboluşly parol heşlerini döredýänligi sebäpli, hüjümçiler bir wagtyň özünde birnäçe hasy döwmek üçin ýönekeý sözlük hüjümlerine bil baglap bilmeýärler. Muňa derek her köp duzlanan heşi aýratynlykda döwmäge synanyşmaly, bu bolsa has köp wagt talap edýär we serişde talap edýär.

## Duzlamak nähili işleýär?

Duzlamak amala aşyrylanda aşakdaky ädimleri ýadyňyzdan çykarmaň:

- ** Üýtgeşik duzuň emele gelmegi: ** Ulanyjy parolyny döredeninde ýa-da täzeläninde, kriptografiki taýdan ygtybarly tötänleýin generator ulanyp, özboluşly duz emele gelýär.

- ** Duz bilen paroly birleşdirmek: ** Döredilen duz, ulanyjynyň paroly bilen birleşmek ýa-da başga bir usul bilen birleşdirilýär.

- ** Duzy we paroly ýuwmak: ** Duzlanan parol, ygtybarly hash algoritmini ulanyp ýuwulýar we özboluşly hash çykaryşyny döredýär.

- ** Duz we ýuwulan paroly saklamak: ** Duz we ýuwulan parol, ulanyjynyň hasaby maglumatlary bilen birlikde maglumatlar bazasynda ygtybarly saklanýar. Geljekki tanamak synanyşyklarynda paroly barlamak üçin duz talap edilýär.

## Duzlamak üçin iň oňat tejribe

Bu teklip edilen iň oňat tejribe duzlamagyň netijeliligini ýokarlandyryp biler:

- ** Her ulanyjy üçin özboluşly duz ulanyň: ** Her ulanyjy üçin aýratyn duz öndürmek, birmeňzeş parollaryň özboluşly parol haslaryny bermegini üpjün edýär.

- ** Ygtybarly tötänleýin san generatoryny işlediň: ** Kriptografiki taýdan ygtybarly tötänleýin san generatoryny ulanmak nagşyň gaýtalanmagyny azaldýar we duzlaryň berkligini ýokarlandyrýar.

- ** Duzlary güýçli ýuwmak algoritmi bilen birleşdiriň: ** Düzmek, şifrlemek, skript ýa-da Argon2 ýaly kesgitlenen we ygtybarly ýuwmak algoritmi bilen jübütlemek, parol howpsuzlygyny ep-esli ýokarlandyryp biler.

- ** Burç etmegi göz öňünde tutuň: ** Duzlamakdan başga-da, goşmaça howpsuzlyk üçin _pepper_ - maglumatlar bazasyndan aýratyn saklanýan gizlin açary goşmagy göz öňünde tutuň. Parolyň, duzuň we burçuň birleşmesini ýuwmak, parolyň hash döwülmeginiň kynlygyny ep-esli ýokarlandyryp biler.

---

Gysgaça aýtsak, duzlamak her parol hashine özboluşly we tötänleýin element goşmak bilen parol howpsuzlygyny ýokarlandyrýan möhüm usuldyr. Bu goşmaça gorag gatlagy, dowamly haker tagallalary sebäpli ulanyjy şahsyýet maglumatlarynyň howpsuzlygyny üpjün edýän deslapky tablisalardan we sözlük hüjümlerinden goraýar. Iň oňat tejribe bilen jübütlenen duzlamak, kiberhowpsuzlyk landşaftynda hemişe ösýän howplardan berk gorag üpjün edip biler.