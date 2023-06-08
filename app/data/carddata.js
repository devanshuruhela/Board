import { AiOutlineLike } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import {TbTags} from 'react-icons/tb';
import { FiUser, FiUsers } from "react-icons/fi";

 export const cardData = [
   {
     id: 1,
     title: "Total Revenue",
     color: "#DDEFE0",
     numbers: "$2,129,430",
     icon: <RiMoneyDollarCircleLine size={20}/>
   },
   {
     id: 2,
     color: "#F4ECDD",
     title: "Total Transactions",
     numbers: "1,520",
     icon:<TbTags size={20}/>,
   },
   {
     id: 4,
     color:'#EFDADA',
     title: "Total Total Likes",
     numbers: "9,721",
     icon: <AiOutlineLike size={20}/>,
   },
   {
     id: 3,
     color:'#DEE0EF',
     title: "Total Users",
     numbers: "892",
     icon: <FiUsers size={20}/>,
   },
 ];