function verif(saisie) {
  if (isNaN(saisie)) {
    saisie = verif(prompt("Recommence, ce n'est pas un nombre!"));
  }
  return saisie;
}
let choose = prompt(
  // tension tapez(U ou V) / intensité tapez(I) / résitance tapez(R)/
  "Que voulez-vous calculez ? (puissance tapez(P), rendement(Re))"
);
while (
  //   choose.toUpperCase() != "U" &&
  //   choose.toUpperCase() != "V" &&
  //   choose.toUpperCase() != "I" &&
  choose.toUpperCase() != "RE" &&
  choose.toUpperCase() != "P"
) {
  choose = prompt(
    // tension tapez(U ou V) / intensité tapez(I) / résitance tapez(R)/
    "Je n'es pas compris! Que voulez-vous calculez ? (puissance tapez(P), rendement(Re))"
  );
}
// -----Puissance-------------------
if (choose.toUpperCase() == "P") {
  let tension = prompt("Tension Simple ? tapez 'o' pour oui  / 'n' pour non");

  while (tension.toLowerCase() != "o" && tension.toLowerCase() != "n") {
    tension = prompt(
      "Je n'es pas compris! Tension Simple (mono ou continue) ? o / n"
    );
  }

  if (tension.toLowerCase() == "o") {
    let U = verif(prompt("Ajouter Tension en Volt"));
    let I = verif(prompt("Ajouter Intensité en Ampère"));
    let P = 0;
    alert(`calcul P=U*I P = ${U}V x ${I}A résultat ${(P = U * I)}W`);
  } else {
    let U = verif(prompt("Ajouter tension en Volt"));
    let I = verif(prompt("Ajouter Intensité en Ampère"));
    let P = 0;
    P = U * I * Math.sqrt(3);
    alert(
      `calcul P=U*I*\u221a3 -> P = ${U}V x ${I}A x\u221a 3 \n résultat ${Math.round(
        P
      )}W`
    );
  }
} else if (choose.toUpperCase() == "RE") {
  let choosePa = prompt(
    "connaissez vous la puissance absorbé par le moteur? o/n"
  );
  while (choosePa.toLowerCase() != "o" && choosePa.toLowerCase() != "n") {
    prompt("connaissez vous la puissance absorbé par le moteur? o/n");
  }
  if (choosePa.toLowerCase() == "o") {
    let Pa = verif(prompt("Ajouter Puissance Absorbé en Watt"));
    let Pu = verif(prompt("Ajouter Puissance Utile en Watt"));
    let eta = Pu / Pa;
    alert(
      `calcul \u03b7 = Pu / Pa -> \u03b7= ${Pu}/${Pa} \n résultat ${eta.toFixed(
        1
      )}`
    );
  } else {
    let U = verif(prompt("Ajouter Tension en Volt"));
    let I = verif(prompt("Ajouter Intensité en Ampère"));
    let cosPhi = verif(prompt("Ajouter Cos\u03c6 du moteur"));
    let Pa = Math.round(U * I * Math.sqrt(3) * Math.cos(cosPhi));
    alert(`Calcul Puissance absorbé Prix en compte`);

    let Pu = verif(prompt("Ajouter Puissance Utile en Watt"));
    let eta = Pu / Pa;
    while (eta == 0 || eta > 1) {
      U = verif(prompt("Ajouter Tension en Volt"));
      I = verif(prompt("Ajouter Intensité en Ampère"));
      cosPhi = verif(prompt("Ajouter Cos\u03c6 du moteur"));
      Pa = Math.round(U * I * Math.sqrt(3) * Math.cos(cosPhi));
      alert(`Calcul Puissance absorbé Prix en compte`);

      Pu = verif(prompt("Ajouter Puissance Utile en Watt"));
      eta = Pu / Pa;
    }
    alert(
      `calcul Pa =  UxIx\u221a3xcos\u03c6 -> Pa = ${U} x ${I} x \u221a3 x cos${cosPhi} \n résultat ${Pa}
      \n
    calcul \u03b7 = Pu / Pa -> \u03b7= ${Pu}/${Pa} \n résultat ${eta.toFixed(
        1
      )}`
    );
  }
}
