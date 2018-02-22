// Preload Images
let elem = document.createElement("img");
elem.setAttribute("height", "250");
elem.setAttribute("width", "250");
elem.setAttribute("alt", "Adidas Original");
document.getElementById("image1").appendChild(elem);

let elem2 = document.createElement("img");
elem2.setAttribute("height", "250");
elem2.setAttribute("width", "250");
elem2.setAttribute("alt", "Nike Sportswear");
document.getElementById("image2").appendChild(elem2);

let elem3 = document.createElement("img");
elem3.setAttribute("height", "250");
elem3.setAttribute("width", "250");
elem3.setAttribute("alt", "Nike Sportswear");
document.getElementById("image3").appendChild(elem3);

let elem4 = document.createElement("img");
elem4.setAttribute("height", "250");
elem4.setAttribute("width", "250");
elem4.setAttribute("alt", "Lacoste");
document.getElementById("image4").appendChild(elem4);

let elem5 = document.createElement("img");
elem5.setAttribute("height", "250");
elem5.setAttribute("width", "250");
elem5.setAttribute("alt", "Nike Sportswear");
document.getElementById("image5").appendChild(elem5);

let elem6 = document.createElement("img");
elem6.setAttribute("height", "250");
elem6.setAttribute("width", "250");
elem6.setAttribute("alt", "Michael Kors");
document.getElementById("image6").appendChild(elem6);

// Product Arrays
let products = [
    {
        name: "Adidas Originals",
        price: 699,
        description: "Adidas Originals shoes",
        image: "images/sko.jpg"
},
{
        name: "Vans",
        price: 499,
        description: "Old School",
        image: 'images/sko2.jpg'
},

{
        name: "Nike Sportswear",
        price: 449,
        description: "DUALTONE RACER",
        image: 'images/sko3.jpg'
},

{
        name: "Lacoste",
        price: 599,
        description: "RIBERAC",
        image: "images/sko4.jpg"
},

{
        name: "Nike Sportswear",
        price: 649,
        description: "AIR MAX 90",
        image: "images/sko5.jpg"
},

{
        name: "Michael Kors",
        price: 349,
        description: "ZIA-ENDINE TAYLOR",
        image: "images/sko6.jpg"
}];

// Put objects from array into HTML
document.getElementById("name1").innerHTML = products[0].name;
document.getElementById("price1").innerHTML = products[0].price + ":-";
document.getElementById("description1").innerHTML = products[0].description;
elem.src=products[0].image;
//document.getElementById("image1").innerHTML = `<img src=${products[0].image}>`;

document.getElementById("name2").innerHTML = products[1].name;
document.getElementById("price2").innerHTML = products[1].price + ":-";
document.getElementById("description2").innerHTML = products[1].description;
elem2.src=products[1].image;

document.getElementById("name3").innerHTML = products[2].name;
document.getElementById("price3").innerHTML = products[2].price + ":-";
document.getElementById("description3").innerHTML = products[2].description;
elem3.src=products[2].image;

document.getElementById("name4").innerHTML = products[3].name;
document.getElementById("price4").innerHTML = products[3].price + ":-";
document.getElementById("description4").innerHTML = products[3].description;
elem4.src=products[3].image;

document.getElementById("name5").innerHTML = products[4].name;
document.getElementById("price5").innerHTML = products[4].price + ":-";
document.getElementById("description5").innerHTML = products[4].description;
elem5.src=products[4].image;

document.getElementById("name6").innerHTML = products[5].name;
document.getElementById("price6").innerHTML = products[5].price + ":-";
document.getElementById("description6").innerHTML = products[5].description;
elem6.src=products[5].image;