import { faEllipsisVertical, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Users() {
  return (
    <div className="users">
      <div className="search">
        <label htmlFor="search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </label>
        <input id="search" type="text" placeholder="Search" className="input" />
      </div>
      <div className="recent">
          <div className="top">
              <span>Recent</span>
              <span><FontAwesomeIcon icon={faEllipsisVertical}/></span>
          </div>
      </div>
    </div>
  );
}

export default Users;
