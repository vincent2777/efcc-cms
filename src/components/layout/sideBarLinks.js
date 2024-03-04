import { AiFillBook, AiFillFileZip, AiOutlineDashboard, AiOutlineUser } from "react-icons/ai";
import { MdListAlt, MdOutlineGavel, MdOutlineSettings } from "react-icons/md";
import { PiChartLine } from "react-icons/pi";

 const menu = {
  superAdmin: [
    { name: "Dashboard", link: "/dashboard", icon: AiOutlineDashboard },
    { name: "Case Management", link: "/case-management", icon: MdOutlineGavel },
    { name: "Case list", link: "/cause-list", icon: MdListAlt },
    { name: "Trainings", link: "/trainings", icon: AiFillBook },
    { name: "Reports", link: "/reports", icon: PiChartLine },
    { name: "Users", link: "/user-management", icon: AiOutlineUser },
    { name: "Set-up", link: "/set-up", icon: MdOutlineSettings },
  ],
  chairman: [
    { name: "Dashboard", link: "/dashboard", icon: AiOutlineDashboard },
    { name: "Case Management", link: "/case-management", icon: MdOutlineGavel },
    { name: "Case list", link: "/cause-list", icon: MdListAlt },
    { name: "Reports", link: "/reports", icon: PiChartLine },
    { name: "Profile Settings", link: "/set-up", icon: MdOutlineSettings },
  ],
  directorLegal: [
    { name: "Dashboard", link: "/dashboard", icon: AiOutlineDashboard },
    { name: "Case Management", link: "/case-management", icon: MdOutlineGavel },
    { name: "Case list", link: "/cause-list", icon: MdListAlt },
    { name: "Reports", link: "/reports", icon: PiChartLine },
    { name: "Profile Settings", link: "/set-up", icon: MdOutlineSettings },
  ],
  headOfLegal: [
    { name: "Dashboard", link: "/dashboard", icon: AiOutlineDashboard },
    { name: "Case Management", link: "/case-management", icon: MdOutlineGavel },
    { name: "Case list", link: "/cause-list", icon: MdListAlt },
    { name: "Reports", link: "/reports", icon: PiChartLine },
    { name: "User", link: "/user-management", icon: AiOutlineUser },
    { name: "Profile Settings", link: "/set-up", icon: MdOutlineSettings },
  ],
  zonalCommandant: [
    { name: "Dashboard", link: "/dashboard", icon: AiOutlineDashboard },
    { name: "Case Management", link: "/case-management", icon: MdOutlineGavel },
    { name: "Case list", link: "/cause-list", icon: MdListAlt },
    { name: "Documents", link: "/documents", icon: AiFillFileZip },
    { name: "Reports", link: "/reports", icon: PiChartLine },
    { name: "User", link: "/user-management", icon: AiOutlineUser },
    { name: "Profile Settings", link: "/set-up", icon: MdOutlineSettings },
  ],

};


export default menu;
