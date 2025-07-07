
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
    sub: [
      "Sneakers",
      "Loafers",
      "Rainboots",
      
    ],
  },
  
  //Facets for Kids Link
  { label: "Kids",
     path: "/kids",
     sub: [
      "Boys", 
      "Girls",
    ],
  },

  // Facets for Sales Link
  { label: "Sales", path: "/sales" ,
    sub:["Women","Men","Kids"],
  },
];
