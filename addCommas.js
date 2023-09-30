// function addCommas(num) {
//     let numStr = num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
//     return numStr;

// }

function addCommasv1 (num, perNDigits=3, decPlaces=2) {
 
    if (decPlaces==0) { num = Math.round(num); }
   
    var cString = num.toString(),
        cDot = cString.indexOf("."),
        cWhole = "", cDec = "";
    if (cDot == -1) {
      cWhole = cString;
      cDec = 0;
    } else {
      cWhole = cString.substring(0, cDot);
      cDec = cString.substring(cDot+1);
    }
   
    var aComma = "", count = 0;
    if (cWhole.length > perNDigits) { for (let i=(cWhole.length-1); i>=0; i--) {
      aComma = cWhole.charAt(i) + aComma;
      count++;
      if (count == perNDigits && i!=0) {
        aComma = "," + aComma; 
        count = 0;
      }
    }} else { aComma = cWhole; }
   
    
    if (decPlaces==0) { cDec = ""; }
    else {
      cDec = +("0." + cDec);
      cDec = cDec.toFixed(decPlaces).toString().substring(1);
    }

    return aComma + cDec;
  }

module.exports = addCommasv1;