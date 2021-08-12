// var btn = document.getElementById("btn");
// var btn2 = document.getElementsByTagName("button")
// var btn2 = document.getElementsByTagName("button")[1];
// var btn = document.getElementsByClassName("btn")
// var btn = document.getElementsByClassName("btn")[1]
// var btn = document.querySelector('ul li a')
// var btn = document.querySelectorAll('button')
// console.log(btn);


function deliveryCost(tshirt) {
    const costForSomeTshirt = 100;
    const costForManyTshirt = 80;
    const costForSomanyTshirt = 50;
    if (tshirt < 0) {
        return "input a positive number"
    } else {
        if (tshirt <= 100) {
            const someTshirtPrise = tshirt * costForSomeTshirt;
            return someTshirtPrise;
        } else if (tshirt <= 200) {
            const moreThanSomeTshirtPrise = 100 * costForSomeTshirt;
            const moreTshirt = tshirt - 100;
            const moreThanManyTshirtPrise = moreTshirt * costForManyTshirt;
            const totalTshirtPrise = moreThanSomeTshirtPrise + moreThanManyTshirtPrise;
            return totalTshirtPrise;
        } else {
            const moreThanSomeTshirtPrise = 100 * costForSomeTshirt;
            let more101to200 = 100 * costForManyTshirt;
            const moreTshirt = tshirt - 200;
            const moreThanManyTshirtPrise = moreTshirt * costForSomanyTshirt;
            const totalTshirtPrise = moreThanSomeTshirtPrise + more101to200 + moreThanManyTshirtPrise;
            return totalTshirtPrise;
        }
    }


}

const tshirtCount = deliveryCost('aaa');
console.log(tshirtCount);