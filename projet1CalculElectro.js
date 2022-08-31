let reloadWindow = true;

function verif(saisie) {
  if (isNaN(saisie)) {
    saisie = verif(prompt("Recommence, ce n'est pas un nombre!"));
  }
  return saisie;
}
function reload(saisie) {
  while (saisie != "o" && saisie != "n") {
    prompt("Erreur ... \n Voulez vous continuer à faire des calcul o/n");
  }
  if (saisie == "o") {
    reloadWindow = true;
  } else {
    reloadWindow = false;
    alert("Merci  d'avoir utilisé calculEleec =)");
  }
}

while (reloadWindow == true) {
  let choose = prompt(
    "Que voulez-vous calculez ? (puissance tapez(P), rendement moteur(Re), Tension(U ou V), Intensité (I))"
  );
  while (
    choose.toUpperCase() != "U" &&
    choose.toUpperCase() != "I" &&
    choose.toUpperCase() != "RE" &&
    choose.toUpperCase() != "P"
  ) {
    choose = prompt(
      //
      "Je n'es pas compris! Que voulez-vous calculez ? (puissance tapez(P), rendement moteur(Re), Tension(U), Intensité (I))"
    );
  }

  if (choose.toUpperCase() == "P") {
    // -----Puissance-------------------
    let tension = prompt("Tension Simple ?  oui ou non  'o/n'  ");

    while (tension.toLowerCase() != "o" && tension.toLowerCase() != "n") {
      tension = prompt(
        "Je n'es pas compris! Tension Simple (mono ou continue) ? 'o/n'"
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
    // ----Rendement
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
      while (eta < 0 || eta > 1) {
        U = verif(prompt("Ajouter Tension en Volt"));
        I = verif(prompt("Ajouter Intensité en Ampère"));
        cosPhi = verif(prompt("Ajouter Cos\u03c6 du moteur"));
        Pa = Math.round(U * I * Math.sqrt(3) * Math.cos(cosPhi));
        alert(`Calcul Puissance absorbé Pris en compte`);

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
  } else if (choose.toUpperCase() == "U") {
    // Tension

    let form = prompt("Connaissez vous la Résistance du circuit? o/n");
    while (form.toLowerCase() != "o" && form.toLowerCase() != "n") {
      prompt("Connaisser vous la Résistance du circuit? o/n");
    }
    if (form.toLowerCase() == "o") {
      let R = verif(prompt("Ajouter Résistance en Ohm"));
      let I = verif(prompt("Ajouter l'intensité en Ampère"));
      let U = R * I;
      alert(`calcul U = R x I -> U = ${R} x ${I}  résultat ${U.toFixed(1)}V`);
    } else if (form.toLowerCase() == "n") {
      let P = verif(prompt("Ajouter Puissance en Watt"));
      let I = verif(prompt("Ajouter l'intensité en Ampère"));
      let U = P / I;
      alert(`calcul U = P / I -> U = ${P} / ${I}  résultat ${U.toFixed(1)}V`);
    }
  } else if (choose.toUpperCase() == "I") {
    let P = verif(prompt("Ajouter Puissance en Watt"));
    let U = verif(prompt("Ajouter la Tension en Volt"));
    let I = P / U;
    alert(`calcul I = P / U -> I = ${P} / ${U}  résultat ${I.toFixed(1)}A`);
  }
  let reloadQuestion = reload(
    prompt("Voulez vous continuer à faire des calculs o/n")
  );
}
