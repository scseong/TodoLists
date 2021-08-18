import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faSearch, faCog, faUser, faPlus } from "@fortawesome/free-solid-svg-icons";
import '../../styles/Header.css'

export default function Header() {
  return (
    <header className="app__header">
      <div className="header__logo">
        <FontAwesomeIcon icon={faCheckSquare} className="logo__icon header__icon" />
        <h1 className="app__name">ToDoList</h1>
      </div>
      <div className="header__search">
        <FontAwesomeIcon icon={faSearch} className="search__icon header__icon" />
        <input type="text" placeholder="Search" className="search__input" />
      </div>
      <div className="header__content">
        <FontAwesomeIcon icon={faPlus} className="plus__icon header__icon" />
        <FontAwesomeIcon icon={faUser} className="user__icon header__icon" />
        <FontAwesomeIcon icon={faCog} className="setting__icon header__icon" />
      </div>
    </header >
  )
}