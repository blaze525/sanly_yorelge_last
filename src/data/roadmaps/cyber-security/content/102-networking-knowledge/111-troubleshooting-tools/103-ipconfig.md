# ipconfig

** IPConfig **, Windows operasiýa ulgamlarynda elýeterli buýruk setiridir. IP adresi, subnet maskasy we deslapky şlýuz ýaly kompýuteriň häzirki tor konfigurasiýa sazlamalaryny görkezmek üçin ulanylýar. Bu gural ulanyjylara ulgamyň baglanyşyklary barada möhüm maglumatlary bermek arkaly tor birikmesi meselelerini anyklamaga we çözmäge kömek edýär.

## IPConfig ulanmak

IPConfig ulanmak üçin Command Prompt ýa-da PowerShell açyň we aşakdaky buýrugy giriziň:

``
ipconfig
``

Bu buýruk ulgamyňyzdaky ähli işjeň ulgam birikmeleri üçin tor konfigurasiýa jikme-jikliklerini görkezer.

## IPConfig opsiýalary

IPConfig-de has giňişleýin maglumat berip biljek ýa-da dürli meseleleri ýerine ýetirip bilýän birnäçe wariant bar:

- **/ all**: Bu opsiýa, DHCP (Dynamic Host Configuration Protocol) serweri we kärende maglumatlary ýaly ähli ulgam birikmeleri üçin doly konfigurasiýa maglumatlary görkezýär.

   ``
   ipconfig / all
   ``

- **/release** Bu buýruk, görkezilen tor adapteri ýa-da hiç biri görkezilmedik bolsa, ähli tor adapterleri üçin DHCP serwerinden alnan IP adresi çykarýar.

  ```
  ipconfig /release
  ```

- **/renew**:  Bu buýruk, görkezilen tor adapteri ýa-da hiç biri görkezilmedik bolsa ähli tor adapterleri üçin DHCP serwerinden täze IP adresi soraýar.

  ```
  ipconfig /renew
  ```

- **/ flushdns**: Bu opsiýa soňky DNS talaplaryny we degişli IP adreslerini saklaýan DNS (Domain Name System) çözüji keşini arassalaýar.

   ``
   ipconfig / flushdns
   ``

- **/ registerdns**: Bu buýruk ähli DHCP kärendesini täzeleýär we ulgamyňyz üçin DNS atlaryny gaýtadan hasaba alýar.

  ```
  ipconfig /registerdns
  ```

- **/ displaydns**: Bu opsiýa, ýakynda çözülen domen atlaryny we IP adreslerini görmäge mümkinçilik berýän DNS çözüji keş keşbini görkezýär.

   ``
   ipconfig / displaydns
   ``

- **/setclassid**: Bu buýruk, görkezilen tor adapteri üçin DHCP synp ID-ni üýtgetmäge mümkinçilik berýär.

   ``
   ipconfig / setclassid
   ``

- **/ showclassid**: Bu opsiýa görkezilen tor adapteri üçin DHCP synp ID-ni görkezýär.

   ``
   ipconfig / showclassid
   ``

Sözümiň ahyrynda, IPConfig Windows ulgamlaryndaky ulgam birikmelerini dolandyrmak we näsazlyklary düzetmek üçin güýçli we amatly guraldyr. Tor konfigurasiýa sazlamalaryny görmäge we üýtgetmäge, IP adreslerini kärendesine almaga we DNS çözüji keşi bilen aňsat aragatnaşyk saklamaga mümkinçilik berýär.