import SideBar from "./SideBar";
import "./chat.css";
import Users from "./Users";

function Chat() {
  return (
    <div className="chatSec">
      <SideBar />
      <Users />
    </div>
  );
}

export default Chat;
