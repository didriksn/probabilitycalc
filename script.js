const chance = document.getElementById("chance");
const perms = document.getElementById("perms");
const answer = document.getElementById("answer");  
const submit = document.getElementById("submit");

function realProb() {
  if (chance.value < 0 || chance.value > 100 || perms.value < 1) return;

  const frac = (100 - chance.value) / 100;
  const calc = Math.pow(frac, perms.value);
  const ans = (1 - calc) * 100;
  
  if (ans < 100) answer.textContent = ans; 
  else if (ans == 100) answer.textContent = ">99.99999999999999"
}

submit.addEventListener('click', realProb);
