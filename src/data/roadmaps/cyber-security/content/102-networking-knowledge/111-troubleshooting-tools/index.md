# Näsazlyklary düzetmek üçin gurallar

Bu bölümde, tor bilen baglanyşykly meseleleri anyklamak we çözmek üçin ulanyp boljak dürli näsazlyklary düzetmek gurallaryny ara alyp maslahatlaşarys. Bu gurallara berk düşünmek, ygtybarly we täsirli ulgamy saklamak üçin möhümdir.

## Ping

"Ping", tor eýesiniň elýeterliligini barlamak üçin ulanylýan esasy buýruk setiridir. ICMP Echo Talap paketlerini maksatly öý eýesine iberýär we ICMP Echo Jogapyna garaşýar. Maksatly öý eýesi elýeterli bolsa, gezelenç wagt statistikasy bilen paketleri yzyna alarsyňyz.

Ulanylyşy: "ping [maksatly host / IP]"

## Traceroute / tracert

"traceroute" (Linux) we "tracert" (Windows), paketleriň torda alyp barýan ýoluny görkezmek üçin ulanylýan buýruk setir gurallarydyr. Olar marşrut meselelerini, gijä galmagy we paket ýitgilerini kesgitlemäge kömek edip bilerler.

Ulanylyşy: "yzarlaýjy [maksatly host / IP]" ýa-da "yzarlaýjy [maksatly host / IP]"

## Gözleg

"nslookup", host maglumaty ýa-da IP adresi çözmek üçin Domain Name System (DNS) serwerlerini soramak üçin ulanylýan ulgam dolandyryş buýruk setiridir.

Ulanylyşy: "nslookup [hostname]"

## Netstat

"Netstat" buýrugy, tor birikmelerini, marşrut tablisalaryny we tor interfeýsiniň statistikasyny görkezýän köpugurly buýruk setiridir. Möhüm baglanyşyklary, açyk portlary we diňleýiş hyzmatlaryny kesgitlemäge kömek edip biler.

Ulanylyşy: "netstat [-options]"

## Nmap

"Nmap" (Network Mapper), tor açmak we howpsuzlyk barlagy üçin açyk çeşme guraldyr. Açyk portlary, işleýän hyzmatlary gözläp we toruň gowşak ýerlerini kesgitläp biler.

Ulanylyşy: `nmap [-options] [maksatly host / IP]`

## Wireshark

"Wireshark", real wagtda tor trafigini ele almaga we derňemäge mümkinçilik berýän giňden ulanylýan tor protokol analizatorydyr. Näsazlyklary düzetmekde we howpsuzlyk derňewinde kömek edýän paketler, teswirnamalar we toruň özüni alyp barşy barada jikme-jik maglumat berýär.

Göçürip almak üçin baglanyşyk: [https://www.wireshark.org/download.html)(https://www.wireshark.org/download.html)

Bu näsazlyklary düzetmek gurallaryna we olaryň ulanylyşyna düşünmek, tor meselelerini has netijeli çözmäge we ygtybarly IT infrastrukturasyny saklamaga kömek eder. Toruňyzy dolandyranyňyzda howpsuzlygy we işlemegi deňleşdirmegi ýatdan çykarmaň. Gowy kiber arassaçylygy bilen meşgullanmak, iň soňky howplar bilen täzelenmek we toruňyzyň howpsuzlygyna yzygiderli baha bermek potensial hüjümçilerden bir ädim öňde durmaga kömek eder.