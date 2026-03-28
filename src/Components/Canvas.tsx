import { useRef, useState, useEffect } from 'react';
import { Canvas as FabricCanvas } from 'fabric';
import ToolBar from './ToolBar';

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [canvas, setCanvas] = useState<FabricCanvas | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const initCanvas = new FabricCanvas(canvasRef.current, {
        width: 1125,
        height: 1200,
      });

      initCanvas.backgroundColor = 'white';
      initCanvas.renderAll();
      setCanvas(initCanvas);

      return () => {
        initCanvas.dispose();
      };
    }
  }, []);

  return (
    <div>
      <ToolBar canvas={canvas} />
      <canvas ref={canvasRef} />
    </div>
  );
}