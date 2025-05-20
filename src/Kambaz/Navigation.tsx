
import { Link, useLocation } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5"; 
import { LiaBookSolid, LiaCogSolid, LiaHddSolid, LiaClockSolid, LiaQuestionCircleSolid } from "react-icons/lia"; 
import { FaInbox, FaRegCircleUser, FaNetworkWired} from "react-icons/fa6";

export default function KambazNavigation() {
  const { pathname } = useLocation();


  const links = [
    { label: "Account", path: "/Kambaz/Account", icon: FaRegCircleUser },
    { label: "Dashboard", path: "/Kambaz/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Kambaz/Courses", icon: LiaBookSolid },
    { label: "Calendar", path: "/Kambaz/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Kambaz/Inbox", icon: FaInbox },
    { label: "History", path: "/Kambaz/History", icon: LiaClockSolid },
    { label: "Studio", path: "/Kambaz/Studio", icon: LiaHddSolid }, 
    { label: "Commons", path: "/Kambaz/Commons", icon: FaNetworkWired }, 
    { label: "Help", path: "/Kambaz/Help", icon: LiaQuestionCircleSolid },
    { label: "Labs", path: "/Labs", icon: LiaCogSolid }
  ];


  const neuLogoUrl = "/images/NEU.jpg"; 

  return (
    <ListGroup id="wd-kambaz-navigation" style={{ width: 120 }}
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2 vh-100">
      <ListGroup.Item id="wd-neu-link" as="a" 
        href="https://www.northeastern.edu/" target="_blank"
        className="bg-black border-0 text-center p-2">
        <img src={neuLogoUrl} width="75px" alt="NEU Logo" />
      </ListGroup.Item>

      {links.map((link) => {
        const isActive = pathname.includes(link.path) || (link.label === "Courses" && pathname.startsWith("/Kambaz/Courses"));
        const IconComponent = link.icon;
        return (
          <ListGroup.Item
            key={link.path}
            as={Link}
            to={link.path}
            id={`wd-${link.label.toLowerCase().replace(/\s+/g, '-')}-link`} 
            className={`text-center border-0 ${isActive ? "bg-white text-danger" : "bg-black text-white"} p-2`}
            style={{ borderRadius: '0' }} 
          >
            <IconComponent className={`fs-1 mb-1 ${isActive ? "text-danger" : "text-white"}`} 
                           style={{color: isActive ? 'red' : 'red', fontSize: '2em'}} 
                           {...(link.label === "Account" && {style: {color: isActive ? 'red' : 'white', fontSize: '2em'}})} 
            />
            <br />
            <span style={{fontSize: '0.8em'}}>{link.label}</span>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}