const ATTACK_VALUE = 10;
const ATTACK_VALUE_STRONG = 14;
const ATTACK_VALUE_MONSTER = 20;
const HEAL_VALUE = 6;

const inputValue = prompt('pick up live span', '100')

let maxLife = parseInt(inputValue);

if (isNaN(maxLife) || maxLife <= 0) {
  maxLife = 100;
}
let monsterHealth = maxLife;
let playerHealth = maxLife;
let hasBonusLife = true;

//aqui va la cantidad de vida que tenemos
adjustHealthBars(maxLife);

//inflinge daño al monster
function ATTACK() {
  battle(ATTACK_VALUE);
}

function strongATTACK() {
  battle(ATTACK_VALUE_STRONG);
}

function heal() {
  let healValue;
  if (playerHealth >= maxLife - HEAL_VALUE) {
    healValue = maxLife - playerHealth;
    console.log("you cant heal more than your maxLife");
  } else {
    healValue = HEAL_VALUE;
  }
  console.log(healValue + " <- heal value" + " ---> start healing process!!!");
  healPlayer(healValue);
  playerHealth += healValue; //health le añado la cantidad de vida que me corresponde
  getHurt();
  checkWinner();
}

function battle(value) {
  calculateMonsterAttack(value);
  getHurt();
  checkWinner();
}

function calculateMonsterAttack(value) {
  console.log(
    "this is initial monsterHealth that comes from maxLife: " + monsterHealth
  );
  console.log("start damage");
  let damage = doMonsterDamage(value);
  console.log("damage const get back: " + damage);
  monsterHealth -= damage; // monsterHealth tengo que quitarle la vida
  console.log(
    " => new monsterHealth: " + monsterHealth + "esto lleva la cuenta de vida"
  );
}

function getHurt() {
  const initialPlayerHealth = playerHealth;
  const damage = doPlayerDamage(ATTACK_VALUE_MONSTER);
  playerHealth -= damage; // me han atacado, reducir la vida
  if (playerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    playerHealth = initialPlayerHealth;
    console.log(
      "You would be death but your BonusLife saved you" + playerHealth
    );
    setPlayerHealth(initialPlayerHealth);
  }
}

function checkWinner() {
  if (monsterHealth <= 0 && playerHealth > 0) {
    console.log("you won");
  } else if (playerHealth <= 0 && monsterHealth > 0) {
    console.log("you lost");
  } else if (playerHealth <= 0 && monsterHealth <= 0) {
    console.log("you have a draw");
  }
  if (monsterHealth <= 0 || playerHealth <= 0) {
    reset();
  }
}

function reset() {
  monsterHealth = maxLife;
  playerHealth = maxLife;
  resetGame(maxLife);
}

attackBtn.addEventListener("click", ATTACK);
strongAttackBtn.addEventListener("click", strongATTACK);
healBtn.addEventListener("click", heal);
