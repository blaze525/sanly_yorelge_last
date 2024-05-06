# route (Route)

"Route", kompýuteriňizdäki IP Route tablisasyny görmäge we dolandyrmaga mümkinçilik berýän buýruk setiri. Route tablisasynyň esasy wezipesi, IP paketlerini barmaly ýerine ibermegiň iň gowy ýoluny kesgitlemekdir. Bu tablisany dogry dolandyrmak tor dolandyryjylary üçin örän möhümdir, sebäbi kompýuteriňiziň tordaky beýleki enjamlar bilen netijeli aragatnaşyk gurmak ukybynda gönüden-göni rol oýnaýar.

## Route buýrugyny ulanmak

route buýrugy üçin sintaksis aşakdaky ýaly:

```
route [COMMAND] [OPTIONS]
```

Ine, "Route" bilen ulanyp boljak käbir esasy buýruklar:

- **route add** - Stola täze ugur goşýar
- **route delete** -  Stoldan Routey aýyrýar
- **route change** -  Tablisadaky belli bir ugry üýtgedýär
- **route get** - Belli bir ugur barada maglumat alýar
- **route show** - routhli Route tablisasyny görkezýär

Route tablisasyny üýtgetmek üçin administratiw artykmaçlyklaryň zerur bolup biljekdigini ýadyňyzdan çykarmaň.

## Route ulanylyşynyň mysallary

- ** Route tablisasyny görüň **

``
route -n
``

Bu buýruk barjak ýerini, şlýuzasyny we interfeýsini öz içine alýan san görnüşinde häzirki Route tablisasyny görkezer.

- ** Täze ugur goşuň **

```
sudo route add -net 192.168.2.0 netmask 255.255.255.0 gw 192.168.1.1
```

Bu buýruk, 255.255.255.0 netmask we 192.168.1.1 derwezesi bilen niýetlenen tor 192.168.2.0-a täze ugur goşýar.

- ** Bir ugry pozuň **

```
sudo route delete -net 192.168.2.0 netmask 255.255.255.0
```

Bu buýruk, 255.255.255.0 netmask bilen niýetlenen tor 192.168.2.0 ugry aýyrýar.

- ** Bar bolan ugry üýtgediň **

```
sudo route change -net 192.168.2.0 netmask 255.255.255.0 gw 192.168.1.2
```

Bu buýruk, 192.168.2.2 täze şlýuzasy bilen barmaly ugry 192.168.2.0 üýtgedýär.

## Netije

"Route" buýrugy, tor dolandyryjylary we kiberhowpsuzlyk bilen baglanyşykly islendik adam üçin möhüm guraldyr. IP Routelaşdyryş tablisasyna düşünmek we dolandyrmak, kompýuteriňiziň tordaky beýleki enjamlar bilen netijeli aragatnaşyk saklamagyny üpjün edip biler, şeýlelik bilen has ygtybarly we täsirli tor gurşawyna goşant goşar.