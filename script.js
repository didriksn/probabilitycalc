function realProb() {
  let chance = document.getElementById("chance").value;
  let perms = document.getElementById("perms").value;
  let answer = document.getElementById("answer");

  if (chance < 0 || chance > 100 || perms < 1) {
    return;
  }

  let frac = (100 - chance) / 100;
  let calc = Math.pow(frac, perms);
  let ans = (1 - calc) * 100;
  
  if (ans < 100) {
    answer.innerHTML = ans;
  } else {
    answer.innerHTML = ">99.99999999999999"
  }
}