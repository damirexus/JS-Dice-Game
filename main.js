var player_1 = '';
var player_2 = '';
var p1_score= 0;
var p2_score = 0;
var runda = 1;
var maxRunde = 5;

var start = document.getElementById('begin');
var k1 = document.getElementById('k1');
var k2 = document.getElementById('k2');

start.addEventListener('click', function () {
  player_1 = prompt('Unesite ime prvog igrača:');
  player_2 = prompt('Unesite ime drugog igrača:');
  document.getElementById('start').style.visibility = 'hidden';
  document.getElementById('start').style.display = 'none';
  document.getElementById('igra').style.visibility = 'visible';
  document.getElementById('igra').style.display = 'block';
  document.getElementById('player_1').innerHTML = player_1;
  document.getElementById('player_2').innerHTML = player_2;
});

k1.addEventListener('click', function() {
  kockica = Math.floor(Math.random()*6)+1;
  p1_score += kockica ;
  osveziRezultat(kockica, false);
  k1.disabled = true;
  k2.disabled = false;
});
k2.addEventListener('click', function() {
  kockica = Math.floor(Math.random()*6)+1;
  p2_score += kockica ;
  k2.disabled = true;
  k1.disabled = false;
  osveziRezultat(false, kockica);
  if (runda === maxRunde) {
    var tekst = getPobednik();
    alert(tekst);
    krajIgre();
    return;
  }
  runda++;
});

function osveziRezultat(k1, k2){
  if (k1 === 0 || k1) {
    document.getElementById('k_p1').innerHTML = k1;
  }
  if (k2 === 0 || k2) {
    document.getElementById('k_p2').innerHTML = k2;
  }
  document.getElementById('score').innerHTML = 'Ukupan rezultat '+ p1_score +':'+ p2_score;
  document.getElementById('runda').innerHTML = runda;

}

function getPobednik(){
  if (p1_score > p2_score) {
    document.getElementById('prvi_igrac').style.backgroundColor ='lightgreen';
    return "Pobednik je " + player_1;
  } else if (p2_score > p1_score) {
     document.getElementById('drugi_igrac').style.backgroundColor ='lightgreen';
     return "Pobednik je " + player_2;
  }
  return "Nerešeno";
}

function krajIgre(){
  runda = 1;
  p1_score = 0;
  p2_score = 0;
  document.getElementById('prvi_igrac').style.backgroundColor ='white';
  document.getElementById('prvi_igrac').style.borderRight = '3px solid gray';
  document.getElementById('drugi_igrac').style.backgroundColor ='white';
  document.getElementById('start').style.visibility = 'visible';
  document.getElementById('start').style.display = 'block';
  document.getElementById('igra').style.visibility = 'hidden';
  document.getElementById('igra').style.display = 'none';
  osveziRezultat(0, 0);
}
