import SideBar from "./SideBar";
import "./chat.css";
import Users from "./Users";

function Chat() {
  return (
    <div className="chatSec">
      <SideBar />
      <Users />
      <div className="message"></div>
    </div>
  );
}

export default Chat;
