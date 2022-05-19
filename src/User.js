import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import userImg from "./img/267513079_1346936529074555_5231013764367827969_n 3.png";
function User() {
  return (
    <div className="user">
      <img src={userImg} alt="" />
      <div className="text">
        <span>Emir</span>
        <br />
        <span>We are hiring !</span>
      </div>
      <div className="seen">
        <FontAwesomeIcon icon={faCheckDouble} />
      </div>
    </div>
  );
}

export default User;
