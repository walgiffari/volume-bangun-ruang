function kerucut()
  {
    var angka1 = parseInt(document.getElementById("kerucut1").value);
    var angka2 = parseInt(document.getElementById("kerucut2").value);
    var angka3 = parseInt(document.getElementById("kerucut3").value);
    var pop = "Hasil Volume Kerucut : " + 0.33*angka1*angka2*angka3;
    alert (pop);
  }