const monsterHealthBar = document.getElementById("monster-health");
const bonusLifeEl = document.getElementById("bonus-life");
const playerHealthBar = document.getElementById("player-health");

const attackBtn = document.getElementById("attack-btn");
const strongAttackBtn = document.getElementById("strong-attack-btn");
const healBtn = document.getElementById("heal-btn");
const logBtn = document.getElementById("log-btn");

function adjustHealthBars(maxLife) {
  monsterHealthBar.max = maxLife;
  monsterHealthBar.value = maxLife;
  playerHealthBar.max = maxLife;
  playerHealthBar.value = maxLife;
}
// attack
function doMonsterDamage(damage) {
  console.log( '--v-- initial monsterHealthBar.value: ' + monsterHealthBar.value);
  const randomDamage = Math.random() * damage;
  console.log('--v-- this is my random nr: '+ randomDamage);
  monsterHealthBar.value -= randomDamage;
  console.log('--v-- monsterHealthBar.value minus randomNr: '+monsterHealthBar.value + 'esto lleva la cuenta por separado para actualizar el bar');
  return randomDamage;
}
// get hurt
function doPlayerDamage(damage) {
  const dealtDamage = Math.random() * damage;
  playerHealthBar.value -= dealtDamage;
  return dealtDamage;
}

// heal myself
function healPlayer(healValue) {
  console.log('inherited playerHealthBar.value is ' + playerHealthBar.value);
  playerHealthBar.value += healValue;
  console.log('new playerHealthBar.value is ' + playerHealthBar.value);
}
// remove bonus life
function removeBonusLife() {
  bonusLifeEl.parentNode.removeChild(bonusLifeEl);
}

function setPlayerHealth(health) {
  playerHealthBar.value = health;
}

function resetGame(value) {
  playerHealthBar.value = value;
  monsterHealthBar.value = value;
  alert('Reset, Next round!')
}