# iptables

** IPTables ** Linux operasiýa ulgamynyň içinde paket süzgüç düzgünlerini sazlamak we dolandyrmak üçin buýruk setiri. Ulgam dolandyryjysyna gelýän we gidýän tor trafigini dolandyrýan firewall diwar düzgünlerini kesgitlemäge we dolandyrmaga mümkinçilik berýär. IPTables Linux ulgamlaryny üpjün etmek we torlaýyn traffigiň dogry akymyny üpjün etmek üçin möhüm guraldyr.

## IPTables nähili işleýär

IPTables Linux ýadrosyna ýerleşdirilen _Netfilter_ atly çarçuwada gurulýar. Netfilter, süzmek, üýtgetmek we gönükdirmek ýaly paketlerde dürli amallary üpjün edýär. IPTables bu amallardan çeşme IP adresi, barjak IP adresi, protokol we port belgileri ýaly dürli kriteriýalara esaslanýan düzgünleri kesgitlemek üçin ulanyjy üçin amatly interfeýs bermek arkaly peýdalanýar.

IPTables düzgünleri zynjyrlara düzýär, bu ýerde her zynjyr düzgünleriň sanawyndan durýar. Üç sany esasy zynjyr bar: Giriş, OUTPUT we FORWARD. Bu zynjyrlar, paketiň torda geçýän dürli tapgyrlaryny görkezýär:

- **INPUT**: lokal ulgam üçin niýetlenen gelýän paketlere ulanylýar.
- **OUTPUT**: lokal ulgamdan gelýän çykýan paketlere ulanylýar.
- **FORWARD**: lokal ulgam arkaly ugrukdyrylýan paketlere ulanylýar.

## IPTables-iň esasy ulanylyşy

Häzirki IPTables düzgünlerini sanamak üçin aşakdaky buýrugy ulanyň:

``
iptables -L
``

Belli bir zynjyra täze düzgün goşmak üçin zynjyryň ady we düzgün jikme-jiklikleri bilen "-A" baýdagyny ulanyň:

```
iptables -A INPUT -s 192.168.1.2 -j DROP
```

Bu buýruk, IP adresi 192.168.1.2-den gelýän ähli paketleri taşlaýan INPUT zynjyryna düzgün goşýar.

Belli bir zynjyrdan düzgüni aýyrmak üçin zynjyryň ady we düzgün belgisi bilen "-D" baýdagyny ulanyň:

```
iptables -D INPUT 3
```

Bu buýruk INPUT zynjyryndaky üçünji düzgüni aýyrýar.

Zynjyryň belli bir ýerine düzgün girizmek üçin zynjyryň ady, düzgün belgisi we düzgün jikme-jiklikleri bilen "-I" baýdagyny ulanyň:

```
iptables -I INPUT 2 -s 192.168.1.3 -j DROP
```

Bu buýruk, 192.168.1.3 IP adresinden gelýän ähli paketleri taşlaýan INPUT zynjyrynda 2-nji ýerde düzgün girizýär.

## IPTables düzgünlerini tygşytlamak we dikeltmek

Düzgüne görä, IPTables düzgünleri wagtlaýyn bolup, ulgam täzeden açylanda ýitiriler. Häzirki düzgünleri ýatda saklamak we olary dowam etdirmek üçin aşakdaky buýrugy ulanyň:

```
iptables-save > /etc/iptables/rules.v4
```

Saklanan faýldan düzgünleri dikeltmek üçin aşakdaky buýrugy ulanyň:

```
iptables-restore < /etc/iptables/rules.v4
```

## Netije

IPTables Linux ulgamlarynda paket süzgüç düzgünlerini dolandyrmak üçin güýçli guraldyr. Dogry konfigurasiýa bilen ulgamyňyzyň howpsuzlygyny ep-esli ýokarlandyryp, tor trafiginiň akymyny üpjün edip biler. IPTables-e düşünmek, kiber howplardan möhüm goragy üpjün etmek bilen, tor bilen baglanyşykly meseleleri anyklamaga we çözmäge kömek edip biler.