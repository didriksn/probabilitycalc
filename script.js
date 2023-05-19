const chance = document.getElementById("chance").value;
const perms = document.getElementById("perms").value;
const answer = document.getElementById("answer");  
const submit = document.getElementById("submit");

submit.addEventListener('click', function() {
  realProb()
})

function realProb() {
  if (chance < 0 || chance > 100 || perms < 1) return;

  const frac = (100 - chance) / 100;
  const calc = Math.pow(frac, perms);
  const ans = (1 - calc) * 100;
  
  if (ans < 100) answer.textContent = ans; 
  else if (ans == 100) answer.textContent = ">99.99999999999999"
}
