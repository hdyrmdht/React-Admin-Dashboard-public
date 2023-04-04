// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  
} from "@iconscout/react-unicons";


// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon:UilClipboardAlt,
    heading: "Dashboard",
  },
  {
    icon:  UilEstate,
    heading: "Warehouses",
  },
  {
    icon: UilUsersAlt,
    heading: "Supervisor",
  },
  {
    icon: UilPackage,
    heading: 'Products'
  },
 
];

// Analytics Cards Data
export const cardsData = [
  
  {
    title: "Warehouse 8",
    state: "deleted",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    
    
    png:UilClipboardAlt,
 
  },
  {
    title: "Warehouse 3",
    state: "added",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
   
    png: UilClipboardAlt,
  
  },
  {
    title: "Warehouse 5",
    state: "added",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
   
    png: UilClipboardAlt,
  
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
