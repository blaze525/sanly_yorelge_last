# nmap

** Nmap ** (Network Mapper) açyk çeşme tor skaneri bolup, kompýuter torundaky öý eýelerini we hyzmatlaryny tapmak üçin kiberhowpsuzlykda giňden ulanylýar. Nmap, açyk portlary, işleýän hyzmatlary we beýleki howpsuzlyk gowşaklyklaryny kesgitlemek üçin torlary netijeli öwrenmäge we skanirlemäge mümkinçilik berýär.

## Nmap-nyň aýratynlyklary

- ** Host açyşy **: Nmap, ICMP eho haýyşlary, TCP SYN / ACK zondlary we ARP skanerleri ýaly dürli usullary ulanyp, tordaky öý eýelerini tapmagy aňsatlaşdyrýar.

- ** Porty skanirlemek **: Nmap maksatly öý eýelerinde açyk portlary kesgitläp biler, bu howpsuzlyk howpunyň gowşak taraplaryny ýüze çykaryp biler we giriş synagy wagtynda möhüm maglumatlary berip biler.

- ** Hyzmat we wersiýany kesgitlemek **: Nmap maksatly öý eýelerinde işleýän hyzmatlaryň adyny we wersiýasyny kesgitläp biler. Bu maglumatlar köne ýa-da howpsuzlyk kemçiliklerini bilýän programma üpjünçiligini kesgitlemäge kömek edýär.

- ** Operasiýa ulgamyny kesgitlemek **: Nmap, belli bir ulgamyň gowşak taraplaryna esaslanyp hüjüm strategiýaňyzy düzmek üçin peýdaly bolup biljek maksatly öý eýesiniň operasiýa ulgamy barada akylly çaklamalar edip biler.

- ** ripazgyly **: Nmap-da ulanyjylara awtomatlaşdyrmak we işleýşini giňeltmek üçin ýörite skriptleri ýazmaga mümkinçilik berýän içerki skript hereketlendirijisi (NSE) bar.

## Nmap-ny nädip ulanmaly

Nmap, Windows, Linux we macOS ýaly dürli platformalarda gurnalyp bilner. Gurlandan soň, Nmap islenýän skaner görnüşine baglylykda dürli opsiýalar we baýdaklar bilen buýruk setiriniň üsti bilen ulanylyp bilner.

Mysal üçin, ýönekeý host we port açyşyny ýerine ýetirmek üçin aşakdaky buýruk ulanylyp bilner:

`` bash
nmap -sn -p 80,443 192.168.0.0/24
``

Bu buýruk görkezilen IP diapazonynda ("192.168.0.0 / 24") "ping skaneri" (`-sn`) ýerine ýetirer we 80 we 443 açyk portlary barlar.

## Üns beriň

- Nmap kiberhowpsuzlyk hünärmenleri üçin gymmatly gural bolsa-da, zyýanly hüjümçiler tarapyndan potensial nyşanalar barada maglumat ýygnamak üçin hem ulanylyp bilner. Nmap-ny jogapkärçilikli ulanmak we diňe skanirlemäge rugsat berýän ulgamlarda we ulgamlarda ulanmak möhümdir.

- Uly torlary skanirlemek ep-esli traffigi döredip biler we maksatly öý eýeleriniň işine täsir edip biler. Skanerleriňizi ýerlikli düzmek we torda bolup biljek näsazlyklary ýadyňyzdan çykarmak möhümdir.

Has giňişleýin maglumat we ulanylyş mysallary üçin [resmi Nmap resminamalaryna] serediň (https://nmap.org/book/man.html).