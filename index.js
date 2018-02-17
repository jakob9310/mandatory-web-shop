/* let product1 = {
    productName:"Sneaker",
    price:300,
    description:"An good looking shoe.",
    eyeColor:"blue"
};

let product2 = {
    productName:"Sneaker",
    price:300,
    description:"An good looking shoe.",
    eyeColor:"blue"
};

let product3 = {
    productName:"Sneaker",
    price:300,
    description:"An good looking shoe.",
    eyeColor:"blue"
};

let product4 = {
    productName:"Sneaker",
    price:300,
    description:"An good looking shoe.",
    eyeColor:"blue"
};

let product5 = {
    productName:"Sneaker",
    price:300,
    description:"An good looking shoe.",
    eyeColor:"blue"
};

let product6 = {
    productName:"Sneaker",
    price:300,
    description:"An good looking shoe.",
    eyeColor:"blue"
};

*/

let elem = document.createElement("img");
elem.setAttribute("height", "250");
elem.setAttribute("width", "250");
elem.setAttribute("alt", "Adidas Original");
document.getElementById("image1").appendChild(elem);


let elem2 = document.createElement("img");
elem2.setAttribute("height", "250");
elem2.setAttribute("width", "250");
elem2.setAttribute("alt", "Adidas Original");
document.getElementById("image2").appendChild(elem2);


let elem3 = document.createElement("img");
elem3.setAttribute("height", "250");
elem3.setAttribute("width", "250");
elem3.setAttribute("alt", "Adidas Original");
document.getElementById("image3").appendChild(elem3);
elem3.src = 'images/sko3.jpg';

let elem4 = document.createElement("img");
elem4.setAttribute("height", "250");
elem4.setAttribute("width", "250");
elem4.setAttribute("alt", "Adidas Original");
document.getElementById("image4").appendChild(elem4);
elem4.src = 'images/sko4.jpg';

let elem5 = document.createElement("img");
elem5.setAttribute("height", "250");
elem5.setAttribute("width", "250");
elem5.setAttribute("alt", "Adidas Original");
document.getElementById("image5").appendChild(elem5);
elem5.src = 'images/sko5.jpg';

let elem6 = document.createElement("img");
elem6.setAttribute("height", "250");
elem6.setAttribute("width", "250");
elem6.setAttribute("alt", "Adidas Original");
document.getElementById("image6").appendChild(elem6);
elem6.src = 'images/sko6.jpg';



let product1 = [
    "Adidas Originals",
    699,
    "Adidas Originals shoes",
    elem.src = 'images/sko.jpg'
];

let product2 = [
    "Vans",
    499,
    "Old School",
    elem2.src = 'images/sko2.jpg'
];

let product3 = [
    "Nike Sportswear",
    449,
    "DUALTONE RACER"
];

let product4 = [
    "Lacoste",
    599,
    "RIBERAC"
];

let product5 = [
    "Nike Sportswear",
    649,
    "AIR MAX 90"
];

let product6 = [
    "Michael Kors",
    349,
    "ZIA-ENDINE TAYLOR"
];

let pName1 = product1[0];
let pPrice1 = product1[1];
let pDesc1 = product1[2];

let pName2 = product2[0];
let pPrice2 = product2[1];
let pDesc2 = product2[2];

let pName3 = product3[0];
let pPrice3 = product3[1];
let pDesc3 = product3[2];

let pName4 = product4[0];
let pPrice4 = product4[1];
let pDesc4 = product4[2];

let pName5 = product5[0];
let pPrice5 = product5[1];
let pDesc5 = product5[2];

let pName6 = product6[0];
let pPrice6 = product6[1];
let pDesc6 = product6[2];

document.getElementById("name1").innerHTML = pName1;
document.getElementById("price1").innerHTML = pPrice1 + ":-";
document.getElementById("description1").innerHTML = pDesc1;

document.getElementById("name2").innerHTML = pName2;
document.getElementById("price2").innerHTML = pPrice2 + ":-";
document.getElementById("description2").innerHTML = pDesc2;

document.getElementById("name3").innerHTML = pName3;
document.getElementById("price3").innerHTML = pPrice3 + ":-";
document.getElementById("description3").innerHTML = pDesc3;

document.getElementById("name4").innerHTML = pName4;
document.getElementById("price4").innerHTML = pPrice4 + ":-";
document.getElementById("description4").innerHTML = pDesc4;

document.getElementById("name5").innerHTML = pName5;
document.getElementById("price5").innerHTML = pPrice5 + ":-";
document.getElementById("description5").innerHTML = pDesc5;

document.getElementById("name6").innerHTML = pName6;
document.getElementById("price6").innerHTML = pPrice6 + ":-";
document.getElementById("description6").innerHTML = pDesc6;



function validateForm() {
    var fName = document.forms["checkoutForm"]["firstName"].value;
    var lName = document.forms["checkoutForm"]["lastName"].value;
    var email = document.forms["checkoutForm"]["email"].value;
    var address = document.forms["checkoutForm"]["address"].value;
    var zip = document.forms["checkoutForm"]["zip"].value;
    var city = document.forms["checkoutForm"]["city"].value;

    if (fName === "") {
        alert("First Name must be filled out");
        return false;
    }
    if (lName === "") {
        alert("Last Name must be filled out");
        return false;
    }
    if (email === "") {
        alert("Email must be filled out");
        return false;
    }
    if (address === "") {
        alert("Address must be filled out");
        return false;
    }
    if (zip === ""){
        alert("Zip must be filled out");
        return false;
    }
    if (city === "") {
        alert("City must be filled out");
        return false;
    }

}
