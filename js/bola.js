function bola()
  {
    var angka1 = parseInt(document.getElementById("bola1").value);
    var angka2 = parseInt(document.getElementById("bola2").value);
    var angka3 = parseInt(document.getElementById("bola3").value);
    var pop = "Hasil Volume Bola : " + 3.14*angka1*angka2*angka3;
    alert (pop);
  }