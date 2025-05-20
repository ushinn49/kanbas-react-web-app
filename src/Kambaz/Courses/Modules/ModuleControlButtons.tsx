import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from 'react-icons/bs'; // Icon for the plus sign
import GreenCheckmark from "./GreenCheckmark"; // Assuming GreenCheckmark is in the same directory

export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <BsPlus className="fs-4 me-2" /> {/* Added BsPlus icon as per description */}
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}