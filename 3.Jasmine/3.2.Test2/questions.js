let CreationTableauLangages =  () => {
    return new Array("Html","CSS","Java","PHP");
}

let CreationTableauNombres =  () => {
    return Array.from(Array(6).keys());
}

let RemplacementElement =  (langages) => {
    langages[2] = "Javascript";
    return langages;
}

let AjoutElementLangages =  (langages) => {
    langages.push("Ruby", "Python" );
    return langages;
}

let AjoutElementNombres =  (nombres) => {
    nombres.unshift(-2, -1);
    return nombres;
}

let SuppressionPremierElement =  (langages) => {
    langages.shift();
    return langages; 
}

let SuppressionDernierElement =  (langages) => {
    langages.pop();
    return langages;
}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {
    let reseaux_sociaux = 
    reseaux_sociaux_chaine.split(",");
    return reseaux_sociaux;
}

let ConversionTableauChaine =  (langages) => {
    let langages_chaine = langages.join(",");
    return langages_chaine;
}

let TriTableau =  (reseaux_sociaux) => {
    return reseaux_sociaux.sort();
}

let InversionTableau =  (langages) =>{
    return langages.reverse();
}
