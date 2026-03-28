import './ToolBar.css';
import { FaRegCircle } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
import { RiTriangleLine } from "react-icons/ri";
import { IoPencil } from "react-icons/io5";
import { GiStraightPipe } from "react-icons/gi";


export default function ToolBar() {
  return (
    <div className="layout-container">
      <aside className="sidebar-toolbar">
        <button 
          className="toolbar-button">
          <FaRegCircle/>
        </button>

        <button className="toolbar-button">
          <FaRegSquare />
        </button>

        <button className="toolbar-button">
          <RiTriangleLine />
        </button>

        <button className="toolbar-button">
          <IoPencil />
        </button>

        <button className='toolbar-button'>
          <GiStraightPipe />
        </button>
      </aside>
    </div>
  );
}