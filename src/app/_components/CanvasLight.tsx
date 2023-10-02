'use client'
import React, {useEffect, useRef} from 'react';
import {light1Svg} from '@/app/_components/lightSvg';

const CanvasLight = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const image = new Image();
    const context = ref.current!.getContext('2d')!;

    image.src = `data:image/svg+xml;base64,${window.btoa(light1Svg)}`;
    image.onload = () => {
      context.drawImage(image, 0, 0);
    };
  }, []);

  return (
    <canvas ref={ref} className="top-light-canvas" width="1920px" height="2400px"/>
  );
};

export default CanvasLight;
