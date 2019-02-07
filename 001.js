// Competencies: Conditional

/*
==============
Shop Till Drop
==============
Instruksi 
---------
Bu Tini sedang berbelanja di supermarket menggunakan debit card dengan sejumlah saldo.
Apa yang ia belanjakan menyesuaikan dengan beberapa kondisi:
Jika debit card tidak bernama (nama kosong), maka tampilkan di log "Tidak bisa belanja. Pulang lagi deh." Kemudian, hentikan program.
Jika saldo debit card dibawah 10.000, maka tampilkan di log "Tidak bisa belanja. Saldo minimal 10.000.". Kemudian, hentikan program.
Setelah saldo mencukupi, ibu Tini dihadapkan pilihan untuk membeli jenis daging sesuai uang yang tersedia:
- Jika saldo debit minimal 200.000, maka bu Tini akan membeli daging sapi. Ubah nilai shoppingBag dengan "Beef", dan kurangi saldo dengan nilai 200000.
- Jika saldo debit minimal 100.000 (dan dibawah 200.000), bu Tini akan membeli daging ikan. Ubah nilai ShoppingBag dengan "Fish", dan kurangi saldo dengan nilai 100000. 
- Jika saldo debit minimal 50.000 (dan dibawah 100.000), bu Tini akan membeli daging ayam. Ubah nilai ShoppingBag dengan "Chicken", dan kurangi saldo dengan nilai 50000.
- Jika saldo tidak memenuhi untuk pembelian ketiga nya, maka bu Tini akan membeli indomie. Ubah nilai ShoppingBag dengan "Indomie", dan kurangi saldo dengan nilai 10000.
Di akhir program, tampilkan di log "Ibu Tini membeli <nilai Shopping Bag> dan sisa uang: <nilai sisa saldo>"
*/

var debit = 10000 ;

var beef = 200000;
var fish = 100000;
var chicken = 50000;
var indomie = 10000;
var dagingsapi = 'Beef';
var dagingikan = 'Fish';
var dagingayam = 'Chicken';
var mie = 'Indomie';

if (debit === ''){
    console.log('Tidak bisa belanja. Pulang lagi deh.')
}else if (debit <= 10000){
    console.log('Tidak bisa belanja. Saldo minimal 10.000.')
}

if(debit === 200000){
    console.log(dagingsapi)
    console.log('Sisa Saldo ' + (debit - beef))
    console.log('Ibu Tini membeli ' + dagingsapi + ' dan sisa uang ' + (debit - beef))
}else if(debit === 100000 && debit <= 200000){
    console.log('Fish')
    console.log('Sisa Saldo ' + (debit - fish))
    console.log('Ibu Tini membeli ' + dagingikan + ' dan sisa uang ' + (debit - fish))
}else if(debit === 50000 && debit <= 100000){
    console.log('Chicken')
    console.log('Sisa Saldo ' + (debit - chicken))
    console.log('Ibu Tini membeli ' + dagingayam + ' dan sisa uang ' + (debit - chicken))
}else{
    console.log('Indomie')
    console.log('Sisa Saldo ' + (debit - indomie))
    console.log('Ibu Tini membeli ' + mie + ' dan sisa uang ' + (debit - indomie))
}
