import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import '../../styles/Sidebar.css'

export default function SideBar() {
  return (
    <div className="app__sidabar">
      <nav className="app__nav">
        <ul className="nav__itmes">
          <li className="nav__item"><FontAwesomeIcon icon={faInbox} className="nav__icon fa-fw" />Inbox</li>
          <li className="nav__item"><FontAwesomeIcon icon={faCalendar} className="nav__icon fa-fw" />Today</li>
          <li className="nav__item"><FontAwesomeIcon icon={faCalendarWeek} className="nav__icon fa-fw" />Next 7 days</li>
        </ul>

        <ul>
          <li>+ Add Project</li>
        </ul>
      </nav>
    </div>
  )
}