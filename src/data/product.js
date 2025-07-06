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
 }




  
];
