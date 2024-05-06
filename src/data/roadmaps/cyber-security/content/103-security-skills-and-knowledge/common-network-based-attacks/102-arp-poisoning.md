# ARP zäherlenmesi (ARP Poisoning)

**ARP zäherlenmesi**, ARP zaýalamak ýa-da ARP keş keşinden zäherlenmek diýlip hem atlandyrylýar, kompýuter torunda Salgy çözmek protokolyny (ARP) ulanýan kiber hüjüm usulydyr. ARP, maglumat paketleriniň göz öňünde tutulan ulgam enjamyna dogry geçirilmegi üçin IP adresi degişli Media Access Control (MAC) adresine düzmek üçin jogapkärdir. Hüjümçi tor enjamlarynyň arasyndaky aragatnaşyklary kesmek, üýtgetmek ýa-da kesmek üçin ARP zäherlenmesini ulanyp biler.

**Bu nähili işleýär:**

- Hüjümçi, MAC salgysyny maksatly enjamyň IP serweri (serwer ýa-da şlýuz ýaly) baglanyşdyryp, tora galp ARP habarlaryny iberýär.
- Tordaky beýleki enjamlar, hüjümçiniň MAC adresini maksatly IP adresi üçin kanuny hasaplaýar we degişlilikde ARP tablisalaryny täzeleýär.
- Netijede, nyşana alynan enjam üçin niýetlenen maglumat paketleri hüjümçiniň ýerine iberilýär, bu bolsa toruň traffigini diňlemäge, üýtgetmäge ýa-da bozmaga mümkinçilik döredýär.

**Netijeler:**

ARP bilen zäherlenmek, çynlakaý howpsuzlyk meselelerine sebäp bolup biler:

- Maglumatlaryň syzmagy: Hüjümçiler tordaky enjamlaryň arasynda alyş-çalyş edilýän duýgur maglumatlary saklap bilerler.
- Orta hüjümler: Hüjümçiler zyýanly mazmuny goýup, tranzitde maglumatlary üýtgedip bilerler.
- Hyzmatdan ýüz öwürmek (DoS) hüjümleri: Hüjümçiler maksatly enjamy traffige suw joşmagy ýa-da ähli paketleri taşlamak bilen jogap bermezligi mümkin.

**Öňüni almak we azaltmak:**

Birnäçe strategiýa torlary ARP zäherlenmesinden goramaga kömek edip biler:

- Statik ARP ýazgylary: Hüjümçileriň ARP jogaplaryny ýalňyşmazlygy üçin statiki IP-to-MAC salgy kartalaryny belläň.
- ARP gözleg gurallary: Şübheli ARP traffigini barlamak ýa-da süzmek üçin Dinamiki ARP Barlagyny (DAI) ýa-da şuňa meňzeş aýratynlyklary goldaýan wyklýuçateller, diwar diwarlary ýa-da çozuşlary kesgitlemek / Öňüni alyş ulgamlary (IDS / IPS) ulanyň.
- IPsec ýa-da SSL / TLS: Diňlemek ýa-da töwekgelçiligi azaltmak üçin IPsec ýa-da SSL / TLS ýaly ygtybarly protokollar bilen tor enjamlarynyň arasynda traffigi şifrlemek.
- Yzygiderli gözegçilik: Anomaliýa ýa-da gapma-garşylyklar üçin tor trafigini we enjam ARP tablisalaryny yzygiderli gözegçilikde saklaň, belki-de Tor çozuşyny kesgitlemek ulgamlaryny (NIDS) ýa-da beýleki howpsuzlyk gurallaryny ulanyp bilersiňiz.