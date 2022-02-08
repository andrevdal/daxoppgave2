const fodselsdato = document.getElementById("fodselsdatoInput");
const isKvinne = document.getElementById("genderInput");
const wowRace = document.getElementById("wowRaceInput");
const antallGangerRettetGeirSinProg = document.getElementById(
  "antallGangerRettetGeirSinProgInput"
);
const treningPerUke = document.getElementById("treningPerUkeInput");
const McTjukkasPerManed = document.getElementById("McTjukkasPerManedInput");
const hasFrokostForSkole = document.getElementById("hasFrokostForSkoleInput");
const hasDrivingFemalePartner = document.getElementById(
  "hasDrivingFemalePartnerInput"
);
const hasMaleDrivingPartner = document.getElementById(
  "hasMaleDrivingPartnerInput"
);
const isSpillerItimen = document.getElementById("isSpillerItimenInput");
const form = document.querySelector("form");

function calculateAge(
  isKvinne,
  wowRace,
  antallGangerRettetGeirSinProg,
  treningPerUke,
  McTjukkasPerManed,
  hasFrokostForSkole,
  hasDrivingFemalePartner,
  hasMaleDrivingPartner,
  isSpillerItimen
) {
  let calculatedAge;
  if (isKvinne == 0) {
    calculatedAge = 81.7;
  } else {
    calculatedAge = 76.1;
  }

  if (wowRace) calculatedAge -= 10.2; //To much sitting still..
  calculatedAge -= McTjukkasPerManed * 4.666;
  calculatedAge = calculatedAge - antallGangerRettetGeirSinProg * 1.2;
  calculatedAge = calculatedAge + treningPerUke * 1.2;
  calculatedAge += hasFrokostForSkole * 4.19;
  calculatedAge -= isSpillerItimen * 4.21;
  calculatedAge += hasDrivingFemalePartner * 3.75;
  calculatedAge -= hasMaleDrivingPartner * 3.71;
  calculatedAge -= isSpillerItimen * 4.62;

  return calculatedAge;
}

//Complete the formulae
//You are supposed to calculate time and date of death, down to the minute!
function calculateExactTimeOfDeath(
  fodselsdato,
  isKvinne,
  wowRace,
  antallGangerRettetGeirSinProg,
  treningPerUke,
  McTjukkasPerManed,
  hasFrokostForSkole,
  hasDrivingFemalePartner,
  hasMaleDrivingPartner,
  isSpillerItimen
) {
  let achievedAge = calculateAge(
    isKvinne,
    wowRace,
    antallGangerRettetGeirSinProg,
    treningPerUke,
    McTjukkasPerManed,
    hasFrokostForSkole,
    hasDrivingFemalePartner,
    hasMaleDrivingPartner,
    isSpillerItimen
  );
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  calculateExactTimeOfDeath(
    fodselsdato.value,
    isKvinne.value,
    wowRace.value,
    antallGangerRettetGeirSinProg.value,
    treningPerUke.value,
    McTjukkasPerManed.value,
    hasFrokostForSkole.checked,
    hasDrivingFemalePartner.checked,
    hasMaleDrivingPartner.checked,
    isSpillerItimen.checked
  );
});
