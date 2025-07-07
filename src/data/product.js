// src/data/products.js
import noir from "../components/assets/Men/Ahletic_shoes/adidas_Noir.jpg";
import blanc from "../components/assets/Men/Ahletic_shoes/AdidasBlanc.jpg";
import red   from "../components/assets/Men/Ahletic_shoes/AdidasRed.jpg";
import brownloafers from "../components/assets/Men/Souliers/BrownSouliers.jpg";
import blackloafers from "../components/assets/Men/Souliers/SoulierNoir.jpg";
import beigeLoafers from "../components/assets/Men/Souliers/beigeloafer.jpg";
import blackHeels from "../components/assets/Women/Heels/BlackHeels.png";
import pinkHeels from "../components/assets/Women/Heels/PinkHeels.jpg";
import whiteHeels from "../components/assets/Women/Heels/WhiteHeels.jpg";
import adiBlanc from "../components/assets/Women/Athletic_Shoes/AdidasBlanc.jpg";
import adiNoir from "../components/assets/Women/Athletic_Shoes/adidas_Noir.jpg";
import adiRed from "../components/assets/Women/Athletic_Shoes/AdidasRed.jpg";
import sandalsB from "../components/assets/Women/Sandals/BrownSandals.jpg";
import sandalsY from "../components/assets/Women/Sandals/YellowSandals.jpeg";

export const products = [
  {
    id: 1,
    name: "Gazelle",
    brand: "Adidas",
    gender: "men",
    type: "sneakers",
    price: 150,
    img: noir,
    isNew: true,
  },
  {
    id: 2,
    name: "Superstar",
    brand: "Adidas",
    gender: "men",
    type: "sneakers",
    price: 160,
    salePrice: 90,
    img: blanc,
  },
  {
    id: 3,
    name: "Gazelle",
    brand: "Adidas",
    gender: "men",
    type: "sneakers",
    price: 240,
    img: red,
    isNew: true,
  },

  {
  id: 4,
  name: "Brown Leather Loafers",
  brand: "Clarks",
  gender: "men",                // or "women"/"kids"
  type: "loafers",
  price: 120,
  /* optional salePrice for discounts */
  salePrice: 115,
  img: brownloafers,
  /* optional flag for “New” badge */
  isNew: false                   // or false
  },

  {
  id: 5,
  name: "Black Leather Loafers",
  brand: "Clarks",
  gender: "men",                // or "women"/"kids"
  type: "loafers",
  price: 120,
  /* optional salePrice for discounts */
  salePrice: 110,
  img: blackloafers,
  /* optional flag for “New” badge */
  isNew: false                   // or false
 },

 {
  id: 6,
  name: "Beige Suede Loafers",
  brand: "Clarks",
  gender: "men",                // or "women"/"kids"
  type: "loafers",
  price: 170,
  /* optional salePrice for discounts */
  salePrice: 160,
  img: beigeLoafers,
  /* optional flag for “New” badge */
  isNew: true                   // or false
 },
  
{
  id:30,
  name:"Elegant Black Heels",
  brand:"Nicky",
  gender:"women",
  type:"heels",
  price:160,
  
  img:blackHeels
  
},

{
  id:31,
  name:"Elegant White Heels",
  brand :"Nicky",
  gender:"women",
  type:"heels",
  price:150,
  img:whiteHeels
},

{
  id:32,
  name:"Elegant Pink Heels",
  brand:"Nicky",
  gender:"women",
  type:"heels",
  price:150,
  salePrice:105, //30% sale
  img:pinkHeels
},

{
  id:33,
  name:"Gazelle",
  gender:"women",
  brand:"Adidas",
  type:"sneakers",
  price:150,
  img:adiNoir
},

{
  id:34,
  name:" Superstar",
  gender:"women",
  brand:"Adidas",
  type:"sneakers",
  price:160,
  salePrice:90,
  img: adiBlanc
},

{
  id:35,
  name:" Bloody",
  gender:"women",
  brand:"Adidas",
  type:"sneakers",
  price:240,
  isNew:true,
  img:adiRed
},

{
  id:36,
  name:"Fashion Brown Sandals",
  gender:"women",
  brand:"Hermes",
  type:"sandals",
  price:380,
  img:sandalsB
},

{
  id:37,
  name:"Fashion Yellow Sandals",
  gender:"women",
  brand:"Hermes",
  type:"sandals",
  price:380,
  salePrice:266, //30% sale
  img:sandalsY
}

];
