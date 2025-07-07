
export const navLinks = [
  { label: "Home", path: "/" },          // no dropdown yet
  
  //Facets for Women Link
  { label: "Women", 
    path: "/women",
    sub: ["New","Heels","Sneakers","Sandals"],
  },
  
  // Facets for Men Link
  {
    label: "Men",
    path: "/men",
    sub: ["New","Sneakers","Loafers", "Boots","Dress Shoes" ],
  },
  
  //Facets for Kids Link
  { label: "Kids", path: "/kids" },

  // Facets for Sales Link
  { label: "Sales", path: "/sale" ,
    sub:["Women","Men","Kids"],
  },
];
