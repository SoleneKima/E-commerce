// src/data/products.js
import noir from "../components/assets/Men/Ahletic_shoes/adidas_Noir.jpg";
import blanc from "../components/assets/Men/Ahletic_shoes/AdidasBlanc.jpg";
import red   from "../components/assets/Men/Ahletic_shoes/AdidasRed.jpg";
import brownloafers from "../components/assets/Men/Souliers/BrownSouliers.jpg";
import blackloafers from "../components/assets/Men/Souliers/SoulierNoir.jpg";
import beigeLoafers from "../components/assets/Men/Souliers/beigeloafer.jpg";
import blackrainboots from "../components/assets/Men/Boots/BlackBoots.jpg";
import bluerainboots from "../components/assets/Men/Boots/blueboots.jpg";
import brownrainboots from "../components/assets/Men/Boots/BrownBoots.jpg";
import blackbasketboys from "../components/assets/Kids/Boys/BlackBasketsKids.jpg";
import brownbasketboys from "../components/assets/Kids/Boys/BrownBasketKids.jpg";
import redsandalsboys from "../components/assets/Kids/Boys/boysredsandals.jpg";
import greensandalsboys from "../components/assets/Kids/Boys/boysgreensandals.jpg";
import dressshoesboys from "../components/assets/Kids/Boys/boysdressshoes.jpg";
import flipflopboys from "../components/assets/Kids/Boys/boysflipflop.jpg";
import pinkcrocsgirls from "../components/assets/Kids/Girls/girlscrocs.jpg";
import pinksandalsgirls from "../components/assets/Kids/Girls/GirlsPink.jpg";
import purplesandalsgirls from "../components/assets/Kids/Girls/GirlsPurple.jpg";
import weddingsandalsgirls from "../components/assets/Kids/Girls/girlsweddingsandals.jpg";
import pinkbasketgirls from "../components/assets/Kids/Girls/KidsBasketsPink.jpg";
import pinkrainbootsgirls from "../components/assets/Kids/Girls/pinkrainbootsgirls.jpg";



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
    isNew: false,
  },
  {
    id: 2,
    name: "Superstar",
    brand: "Adidas",
    gender: "men",
    type: "sneakers",
    price: 160,
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
  
  img: beigeLoafers,
  /* optional flag for “New” badge */
  isNew: true                   // or false
 },

 {
  id: 7,
  name: "Black Rainboots",
  brand: "Hunter",
  gender: "men",                // or "women"/"kids"
  type: "rainboots",
  price: 100,
  img: blackrainboots,
  /* optional flag for “New” badge */
  isNew: false                   // or false
 },


 {
  id: 8,
  name: "Blue Rainboots",
  brand: "Hunter",
  gender: "men",                // or "women"/"kids"
  type: "rainboots",
  price: 150,
  
  img: bluerainboots,
  /* optional flag for “New” badge */
  isNew: true                   // or false
 },
 
 
 {
  id: 9,
  name: "Brown Rainboots",
  brand: "Hunter",
  gender: "men",                // or "women"/"kids"
  type: "rainboots",
  price: 170,
  /* optional salePrice for discounts */
  salePrice: 120,
  img: brownrainboots,
  /* optional flag for “New” badge */
  isNew: false                   // or false
 },

 {
    id: 101,
    name:  "Black Baskets",
    brand: "Vans",
    gender:"kids",
    type:  "boys",
    price: 55,
    img:   blackbasketboys,
    isNew: false
  },

  {
    id: 102,
    name:  "Brown Baskets",
    brand: "Vans",
    gender:"kids",
    type:  "boys",
    price: 65,
    img:   brownbasketboys,
    isNew: true
  },

  {
    id: 103,
    name:  "Blue FlipFlops",
    brand: "Havianas",
    gender:"kids",
    type:  "boys",
    price: 75,
    salePrice: 65,
    img:   flipflopboys,
    isNew: false
  },

  {
    id: 104,
    name:  "Green Sandals",
    brand: "Versace",
    gender:"kids",
    type:  "boys",
    price: 95,
    img:   greensandalsboys,
    isNew: true
  },

  {
    id: 105,
    name:  "Red Sandals",
    brand: "SmallSteps",
    gender:"kids",
    type:  "boys",
    price: 45,
    img:   redsandalsboys,
    isNew: false
  },

  {
    id: 106,
    name:  "Black Dress Shoes",
    brand: "Coach",
    gender:"kids",
    type:  "boys",
    price: 105,
    img:   dressshoesboys,
    isNew: false
  },

  {
    id: 201,
    name:  "Purple Sandals",
    brand: "FunFeet",
    gender:"kids",
    type:  "girls",
    price: 27,
    salePrice: 20,
    img:   purplesandalsgirls,
    isNew: false
  },

  {
    id: 202,
    name:  "Pink Crocs",
    brand: "Crocs",
    gender:"kids",
    type:  "girls",
    price: 50,
    img:   pinkcrocsgirls,
    isNew: false
  },

  {
    id: 203,
    name:  "Pink Sandals",
    brand: "FunFeet",
    gender:"kids",
    type:  "girls",
    price: 27,
    salePrice: 20,
    img:   pinksandalsgirls,
    isNew: false
  },

  {
    id: 204,
    name:  "Wedding Sandals",
    brand: "Aldo",
    gender:"kids",
    type:  "girls",
    price: 70,
    img:   weddingsandalsgirls,
    isNew: true
  },

  {
    id: 205,
    name:  "Pink Basket",
    brand: "Vans",
    gender:"kids",
    type:  "girls",
    price: 50,
    img:   pinkbasketgirls,
    isNew: false
  },

  {
    id: 206,
    name:  "Pink Rainboots",
    brand: "EddyBower",
    gender:"kids",
    type:  "girls",
    price: 40,
    img:   pinkrainbootsgirls,
    isNew: true
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
} ];
