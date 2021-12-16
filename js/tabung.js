function tabung()
  {
    var angka1 = parseInt(document.getElementById("tabung1").value);
    var angka2 = parseInt(document.getElementById("tabung2").value);
    var angka3 = parseInt(document.getElementById("tabung3").value);
    var pop = "Hasil Volume Tabung : " + 3.14*angka1*angka2*angka3;
    alert (pop);
  }