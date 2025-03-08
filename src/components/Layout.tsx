
import StoryPage from "./StoryPage";
import { FaBatteryFull } from "react-icons/fa"; // Import battery icon

function Layout() {

  return (
    <>
      {/* Mobile-style status bar */}
      <div className="status-bar">
        <div className="time">{(new Date()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
        {/* placeholder for time */}
        <div className="instagram-logo">Instagram</div>
        <div className="battery">
          <FaBatteryFull size={20} />
        </div>
      </div>

      {/* Main Content */}
      <StoryPage />
    </>
  );
}

export default Layout;