import { ListGroup } from 'react-bootstrap';
import { BsGripVertical } from 'react-icons/bs'; 
import ModulesControls from './ModulesControls'; 
import ModuleControlButtons from './ModuleControlButtons'; 
import LessonControlButtons from './LessonControlButtons'; 

export default function Modules() {

  const modulesList = [
    {
      _id: "M101",
      name: "Week 1 - Introduction to Course & Web Development",
      lessons: [
        { _id: "L101", name: "LEARNING OBJECTIVES" },
        { _id: "L102", name: "Introduction to the course" },
        { _id: "L103", name: "Learn what is Web Development" },
        { _id: "L104", name: "READING" },
        { _id: "L105", name: "Full Stack Developer - Chapter 1 - Introduction" },
        { _id: "L106", name: "Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML" },
        { _id: "L107", name: "SLIDES" },
        { _id: "L108", name: "Introduction to Web Development" },
      ]
    },
    {
      _id: "M102",
      name: "Week 2 - Formatting User Interfaces with HTML",
      lessons: [
        { _id: "L201", name: "LEARNING OBJECTIVES" },
        { _id: "L202", name: "Learn how to create user interfaces with HTML" },
        { _id: "L203", name: "Deploy the assignment to Netlify" },
        { _id: "L204", name: "SLIDES" },
        { _id: "L205", name: "Introduction to HTML and the DOM" },
        { _id: "L206", name: "Formatting Web content with Headings and Lists and Tables" },
      ]
    },

  ];

  return (
    <div>
      <ModulesControls />
      <br /><br /><br /><br />
      <ListGroup className="rounded-0" id="wd-modules">
        {modulesList.map((module) => (
          <ListGroup.Item key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> 
              {module.name}
              <ModuleControlButtons /> 
            </div>
            {module.lessons && module.lessons.length > 0 && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson) => (
                  <ListGroup.Item key={lesson._id} className="wd-lesson p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> 
                    {lesson.name}
                    <LessonControlButtons /> 
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}