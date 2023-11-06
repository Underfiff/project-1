const nama ="afif fahri";
let usia = 10;

let biodata = document.getElementById('biodata');

function generateBiodata() {
    let generasi;

    if(usia > 10 && usia < 18) {
        generasi ="generasi remaja";
    } 
    else if(usia >= 18 && usia <= 30) {
        generasi ='anda dewasa'
    }
    else if(usia >= 30) {
        generasi ='lu tua'
    }
    else if (usia > 2 && usia < 10) {
        generasi ='anda anak anak'
    }
    else {
        generasi ='lu masi bayi'
    }

    return biodata.innerHTML = generasi;

}

console.log(nama);
console.log(usia);

generateBiodata();