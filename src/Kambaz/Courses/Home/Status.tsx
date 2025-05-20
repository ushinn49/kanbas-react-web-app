import { Button } from "react-bootstrap";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle, FaChartBar, FaRegBell } from "react-icons/fa"; 
import { BiImport } from "react-icons/bi"; 
import { LiaFileImportSolid } from "react-icons/lia"; 
import { GrAnnounce } from 'react-icons/gr'; 

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "300px" }}>
      <h2>Course Status</h2>
      <div className="d-grid gap-2"> 
        <Button variant="secondary" size="lg" className="text-start">
          <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish
        </Button>
        <Button variant="success" size="lg" className="text-start"> 
          <FaCheckCircle className="me-2 fs-5" /> Published
        </Button>
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <BiImport className="me-2 fs-5" /> Import Existing Content
        </Button>
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons
        </Button>
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <FaChartBar className="me-2 fs-5" /> Choose Home Page
        </Button>
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <i className="fas fa-stream me-2 fs-5"></i> View Course Stream
        </Button>
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <GrAnnounce className="me-2 fs-5" /> New Announcement
        </Button>
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <FaChartBar className="me-2 fs-5" /> New Analytics
        </Button>
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <FaRegBell className="me-2 fs-5" /> View Course Notifications
        </Button>
      </div>
    </div>
  );
}