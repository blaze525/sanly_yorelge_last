# Faýllarda CRUD ýerine ýetirmek

Islendik ulgamda ýa-da programmada faýllar bilen işleýän wagtyňyz, ygtybarly kiberhowpsuzlyk çärelerini durmuşa geçirmek üçin CRUD amallaryna düşünmek we ýerine ýetirmek (Dörediň, okaň, täzeläň we pozuň).

## Faýl döretmek

- ** Windows **: Gurlan tekst redaktoryny (Notepad) ýa-da ýörite faýl döretmek programma üpjünçiligini ulanyp täze faýllar döredip bilersiňiz. Şeýle hem has çalt faýl döretmek üçin PowerShell buýruklaryny ulanyp bilersiňiz. Faýl ýolundan soň "Täze element" buýrugy faýl döredýär.

   ``
   Täze element-ýol "C: \ Mysal \ example.txt" -ItemType "faýly"
   ``

- ** Linux **: Windows-dan tapawutlylykda faýl döretmek adatça terminal arkaly amala aşyrylýar. "Touch" buýrugy islenýän katalogda faýl döretmäge kömek edýär.

   ``
   /example/example.txt degiň
   ``

## Faýl okamak

- ** Windows **: Notepad, Wordpad we ş.m. ýaly adaty faýl okyjylaryny ulanyp bir faýly okap bilersiňiz ýa-da PowerShell buýruklaryny ulanyp bilersiňiz. "Get-Content" buýrugy faýl mazmunyny üpjün edýär.

   ``
   Mazmuny al -Path "C: \ Mysal \ example.txt"
   ``

- ** Linux **: Linux-da faýlyň mazmunyny okamagyň iň köp ýaýran usuly "pişik" buýrugydyr.

   ``
   pişik / mysal / mysal.txt
   ``

## Faýl täzelenmesi

- ** Windows **: Faýly täzelemek, ozal agzalan tekst redaktorlaryny ýa-da PowerShell ulanyp bolýar. "Set-Content" ýa-da "Goşmaça mazmun" buýruklary faýly täzelemek üçin peýdalydyr.

   ``
   Set-Content -Path "C: \ Mysal \ example.txt" -Göçürmek "Täzelenen mazmun"
   Goşmaça mazmun -Path "C: \ Mysal \ example.txt" -Göçürilen "Goşulan mazmun"
   ``

- ** Linux **: Linux faýllary täzelemek üçin "nano" ýa-da "vim" ýaly içerki tekst redaktorlaryny ulanýar. Ativea-da bolmasa, "echo" buýrugy faýla mazmun goşup biler.

   ``
   echo "Goşulan mazmun" >> /example/example.txt
   ``

## Faýly öçürmek

- ** Windows **: Faýly öçürmek faýla sag basmak we 'Öçürmek' saýlamak ýa-da PowerShell buýruklaryny ulanmak arkaly amala aşyrylýar. Faýl ýolundan soň "Remove-Item" buýrugy bir faýly pozup biler.

   ``
   Aýyrmak-element-ýol "C: \ Mysal \ example.txt"
   ``

- ** Linux **: "rm" buýrugy Linux-da bir faýly pozmaga mümkinçilik berýär.

   ``
   rm /example/example.txt
   ``

Bu CRUD amallaryny özleşdirmek bilen, kiberhowpsuzlyk bilimleriňizi artdyryp, täsirli hadysalara jogap we faýl dolandyryş strategiýalaryny durmuşa geçirip bilersiňiz.