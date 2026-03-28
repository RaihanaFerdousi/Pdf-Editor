import './Style.css';
import { FaRegCircle } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
import { RiTriangleLine } from "react-icons/ri";
import { IoPencil } from "react-icons/io5";
import { GiStraightPipe } from "react-icons/gi";
import { Canvas as FabricsCanvas, Rect } from 'fabric';
import { LuRectangleHorizontal } from 'react-icons/lu';

type ToolBarProps = {
  canvas: FabricsCanvas | null;
};

export default function ToolBar({ canvas }: ToolBarProps) {
  const addRectangle = () => {
    if (!canvas) return;

    const rect = new Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 150,
      height: 80
    });

    canvas.add(rect);
    canvas.renderAll();
  }

  return (
    <div className="layout-container">
      <aside className="sidebar-toolbar">
        <button
          onClick={addCircle}
          className="toolbar-button">
          <FaRegCircle />
        </button>

        <button
          onClick={addRectangle}
          className="toolbar-button">
          <LuRectangleHorizontal />
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