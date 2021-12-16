function prisma()
  {
    var angka1 = parseInt(document.getElementById("prisma1").value);
    var angka2 = parseInt(document.getElementById("prisma2").value);
    var angka3 = parseInt(document.getElementById("prisma3").value);
    var pop = "Hasil Volume Prisma : " + 0.5*angka1*angka2*angka3;
    alert (pop);
  }