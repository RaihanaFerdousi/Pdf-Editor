import { useRef, useState, useEffect } from 'react';
import { Canvas } from 'fabric';
import './ToolBar.css';

export default function ToolBar() {

    const canvasRef = useRef(null);
    const [canvas, setCanvas] = useState<Canvas | null>(null);

    useEffect(() => {
        if(canvasRef.current){
            const initCanvas = new Canvas(canvasRef.current, {
                width: 800,
                height: 600,
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
        <div className="">
            <canvas id='canvas' ref={canvasRef}/>
        </div>
    );
}