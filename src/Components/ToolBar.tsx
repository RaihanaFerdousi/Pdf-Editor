import './Style.css';
import { FaRegCircle, FaRegStar } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
import { RiTriangleLine } from "react-icons/ri";
import { IoPencil } from "react-icons/io5";
import { GiStraightPipe } from "react-icons/gi";
import { Canvas as FabricsCanvas, Rect, Circle, Triangle, Polygon} from 'fabric';

type ToolBarProps = {
  canvas: FabricsCanvas | null;
};

export default function ToolBar({ canvas }: ToolBarProps) {

const addCircle = () => {
  if (!canvas) return;

  const circle = new Circle({
    left: 150,
    top: 150,
    fill: 'purple',
    radius: 50,
  });

  canvas.add(circle);
  canvas.renderAll();
}

const addSquare = () => {
  if (!canvas) return;
  const square = new Rect({
    left: 150,
    top: 150,
    fill: 'blue',
    width: 100,
    height: 100
  });
  canvas.add(square);
  canvas.renderAll();
}

const addStar = () => {
  if (!canvas) return;

  const points = [];
  const numPoints = 5;
  const outerRadius = 50;
  const innerRadius = 25; 
  const centerX = 0;
  const centerY = 0;

  for (let i = 0; i < numPoints * 2; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const angle = (Math.PI * i) / numPoints;
    points.push({
      x: centerX + radius * Math.sin(angle),
      y: centerY - radius * Math.cos(angle),
    });
  }

  const star = new Polygon(points, {
    left: 150,
    top: 150,
    fill: 'gold',
    strokeWidth: 2,
  });

  canvas.add(star);
  canvas.renderAll();
};

const addTriangle = () => {
  if (!canvas) return;

  const triangle = new Triangle({
    left: 150,
    top: 150,
    fill: 'yellow',
    width: 100,
    height: 100
  });

  canvas.add(triangle);
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
          onClick={addSquare}
          className="toolbar-button">
          <FaRegSquare />
        </button>

        <button
          onClick={addStar}
          className="toolbar-button">
          <FaRegStar />
        </button>

        <button 
          onClick={addTriangle}
          className="toolbar-button">
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