# subnet maska

A ** subnet maska **, IP adresiniň tor bölegini öý eýesinden aýyrmak üçin "maska" hökmünde çykyş edýän Internet Protocol (IP) salgysynyň möhüm bölegi. Berlen IP adresiň içinde subnetiň araçägini kesgitlemek üçin ulanylýan 1-iň yzygiderliligini görkezýän 0-dan ybarat yzygiderliligi görkezýän 32 bitli san.

Subnet maskasynyň esasy maksady:

- Tor araçäklerini kesgitläň
- IP marşrutlaşdyrmagy ýeňilleşdiriň
- Uly IP torlaryny kiçi, dolandyrylýan subnet işlerine (subnetlere) bölüň

## Format

Subnet maskasy IP salgylary bilen birmeňzeş nokat-onluk formatda ýazylýar (ýagny nokatlar bilen bölünen dört oktet). Mysal üçin, A synp IP adresi üçin deslapky subnet maska "255.0.0.0", B synp üçin "255.255.0.0", C synp üçin "255.255.255.0".

## Kiberhowpsuzlygyň ähmiýeti

Subnet maskalaryna dogry düşünmek we düzmek kiberhowpsuzlykda möhümdir, sebäbi olar:

- Toruňyzyň dürli segmentlerini izolirlemäge kömek ediň, bu has uly howpsuzlyk gözegçiligine we çeşmeleriň has netijeli ulanylmagyna sebäp bolýar
- IP torlarynyň kiçi subnetlere bölünmegini ýeňilleşdiriň, soňra bir guramanyň içinde dürli bölümlere, toparlara ýa-da funksiýalara bellenip bilner.
- Gereksiz ýaýlym traffiginiň öňüni alyp, toruň netijeliligini ýokarlandyrmak
- Toruň umumy durnuklylygyny we gözegçilik mümkinçiliklerini gowulandyrmak

Dürli talaplar üçin degişli subnet maskasyny kesgitlemek üçin, onlaýn elýeterli dürli subnetting gurallaryny ulanyp bilersiňiz. Subnet maskalaryny dogry dolandyrmak ygtybarly, täsirli we gowy işleýän ulgamy saklamak üçin möhümdir.

- [Wildcard maskasy] (https://en.wikipedia.org/wiki/Wildcard_mask)