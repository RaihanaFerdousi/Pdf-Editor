import ToolBar from "./Components/ToolBar";
import Canvas from "./Components/Canvas";

export default function App() {
  return (
    <div style={{ display: "flex" }}>
      <ToolBar/>
      <Canvas/>
    </div>
  );
}