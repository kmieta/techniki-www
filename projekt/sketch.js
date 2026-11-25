function szkic(p) {
  let dane;
  let kontener;

  p.preload = function () {
    dane = p.loadJSON('bunnies.json');
  };

  p.setup = function () {
    kontener = document.getElementById('wykres');
    p.createCanvas(kontener.clientWidth, 650);
    dane.push(30);
  };



new p5(szkic, 'wykres'); 
}