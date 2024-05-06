# tcpdump

Tcpdump ulgamyňyzdaky tor trafigine gözegçilik etmäge we saklamaga mümkinçilik berýän güýçli buýruk setiri paket analizatorydyr. Bu kömek, tor birikdiriş meselelerini çözmek we tor protokollaryny seljermek üçin peýdalydyr. Tcpdump paket sözbaşylaryny belli bir ulgam interfeýsinde ýa-da belli bir portda görkezip we görkezip biler.

## Esasy aýratynlyklar

- Paketleri hakyky wagtda alyň
- Alnan paketleri adam tarapyndan okalýan görnüşde görkeziň
- Paketleri bir faýla ýazyň we saklanan paket faýllaryny okaň
- IP adresleri, protokol ýa-da port ýaly aýratyn şertlere esaslanýan paketleri süzüň

## Esasy ulanyş

Tcpdump ulanyp başlamak üçin terminaly / buýruk setirini açyň we aşakdaky buýrugy giriziň:

`` bash
tcpdump -i islendik
``

Bu buýruk ähli tor interfeýslerinde paketleri ele alar. Çykyş çeşmesini we barjak IP adreslerini, port belgilerini we paketiň uzynlygyny görkezer.

## Umumy Tcpdump buýruklary

Dürli meseleler üçin käbir möhüm tcpdump buýruklary:

- ** Belli bir interfeýsine gözegçilik **: Belli bir tor interfeýsine gözegçilik etmek üçin, "<INTERFACE>" gözegçilik etmek isleýän interfeýsiňiziň ady bilen çalşyň:

   `` bash
   tcpdump -i <INTERFACE>
   ``

- ** Aýratyn paketleriň sanyny alyň: ** Belli bir mukdarda paket almak üçin, "-c" opsiýasyny ulanyň, soň bolsa almak isleýän paketleriňiziň sany:

   `` bash
   tcpdump -i islendik -c 10
   ``

- ** Alnan paketleri bir faýla ýazdyryň: ** Tcpdump ele alnan paketleri goşmaça derňew üçin faýla ýazdyryp biler. Paketleri faýlda saklamak üçin faýlyň adyndan soň "-w" opsiýasyny ulanyň:

   `` bash
   tcpdump -i any -w capture.pcap
   ``

- ** Surata alnan paketleri süzüň **: Alnan paketleri IP adresleri, protokol ýa-da port belgileri ýaly dürli parametrler boýunça süzüp bilersiňiz. Süzgüjiň käbir mysallary:

   - Paketleri belli bir IP adrese alyň:

     `` bash
     tcpdump -i islendik host 192.168.1.1
     ``

   - Belli bir port bilen baglanyşykly paketleri alyň:

     `` bash
     tcpdump -i islendik port 80
     ``

   - Paketleri protokol arkaly alyň (meselem, icmp, tcp ýa-da udp):

     `` bash
     tcpdump -i islendik icmp
     ``

Tcpdump süzgüçleri we ösen opsiýalary barada resmi resminamalaryndan ýa-da terminalyňyza "man tcpdump" ýazyp bilersiňiz. Tcpdump islendik ulgam dolandyryjysy üçin bahasyna ýetip bolmajak guraldyr we islendik ulgam meseleleriniň köküne çykmaga kömek eder.