const expList = [1000, 2000, 5000, 7000, 8000, 9000, 10000];
const rankList = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

function showMessage(name, rank) {
  console.log(`O Herói de nome ${name} está no nível de ${rankList[rank]}.`);
}

function getUserRank(name, exp) {
  for (let i = 0; i < expList.length; i++) {
    if (exp <= expList[i]) {
      showMessage(name, i);
      break;
    } else if (i + 1 === expList.length) {
      showMessage(name, i + 1);
      break;
    }
  }
}

const hero = "Link";
const heroExp = 5001;

getUserRank(hero, heroExp);
