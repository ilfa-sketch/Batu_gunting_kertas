document.addEventListener("DOMContentLoaded", function() {
  // Kode JavaScript Anda di sini
  const player = document.querySelectorAll("ul li img")
 
 function pilComp(){
     const comp = Math.round(Math.random() *10)
     if (comp <= 3) return "batu"
     if (comp >= 3 && comp <= 6) return "gunting"
     return "kertas"
 }


function HasilAkhir(player,compu){
    if (player == compu) return "DRAW!"
    if (player == "batu") return (compu == "gunting") ? "WIN" : "LOSE";
    if (player == "gunting") return (compu == "kertas") ? "WIN" : "LOSE";
    if (player == "kertas") return (compu == "batu") ? "WIN" : "LOSE";
    
}

  for (var i = 0; i < player.length; i++) {
      player[i].addEventListener("click",function(){
    const pilcompu = pilComp();
    const pilplay = this.classList;
    const hasil = HasilAkhir(pilplay,pilcompu)
    const Hasil = document.querySelector(".info");
    Hasil.innerHTML = hasil;
    const imageComp = document.querySelector(".imgComp")
    imageComp.setAttribute("src",pilcompu +".png")
      })
    
    
  }
  
});
