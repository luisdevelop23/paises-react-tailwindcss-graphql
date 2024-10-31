export const flagNotFound = (name) => {
    let emoji = name.toLowerCase().replace(/\s+/g, "-");
  
    // console.log("Checking flag for:", emoji); // Verifica qué emoji se está procesando
  
    switch (emoji) {
      case "hong-kong":
        return "twemoji:flag-hong-kong-sar-china";
      case "u.s.-minor-outlying-islands":
        return "twemoji:flag-us-outlying-islands";
      case "east-timor":
        return "twemoji:flag-for-flag-timor-leste";
      case "são-tomé-and-príncipe":
        return "twemoji:flag-for-flag-sao-tome-and-principe";
      case "saint-pierre-and-miquelon":
        return "twemoji:flag-st-martin";
      case "saint-martin":
        return "twemoji:flag-for-flag-sint-maarten";
      case "czech-republic":
        return "twemoji:flag-czechia";
      case "republic-of-the-congo":
        return "twemoji:flag-congo-kinshasa";
      case "democratic-republic-of-the-congo":
        return "twemoji:flag-congo-brazzaville";
      case "cocos-[keeling]-islands":
        return "twemoji:flag-cocos-keeling-islands";
      case "bonaire"://?
        return "twemoji:flag-for-flag-caribbean-netherlands";
      case "saint-barthélemy":
        return "twemoji:flag-for-flag-st-barthelemy";
      case "åland":
        return "twemoji:flag-aland-islands";
      case "saint-lucia":
        return "twemoji:flag-st-lucia";
    case "ivory-coast":
        return "openmoji:flag-cte-divoire";
    case "myanmar-[burma]":
        return "twemoji:flag-myanmar-burma";
    case "réunion":
        return "twemoji:flag-reunion";
    case "u.s.-virgin-islands":
        return "twemoji:flag-us-virgin-islands";
    case "heard-island-and-mcdonald-islands":
        return "twemoji:flag-heard-and-mcdonald-islands";
    case "south-georgia-and-the-south-sandwich-islands":
        return "twemoji:flag-for-flag-south-georgia-and-south-sandwich-islands";
    }
    return `twemoji:flag-${emoji}`;
  };
  

/*
åland"
saint-barthélemy"
bonaire"
cocos-[keeling]-islands"
democratic-republic-of-the-congo"
republic-of-the-congo"
czech-republic"
hong-kong"
saint-martin"
saint-pierre-and-miquelon"
são-tomé-and-príncipe"
east-timor"
u.s.-minor-outlying-islands"

Åland
U.S. Minor Outlying Islands
East Timor
São Tomé and Príncipe
Saint Pierre and Miquelon
Saint Martin
Czech Republic
Democratic Republic of the Congo
Republic of the Congo
Cocos [Keeling] Islands
Bonaire
Saint Barthélemy



: 

*/
