import React from 'react';
import {GridSvg, Light1Svg, Light1WideSvg} from '@/assets/svg';
import '@/app/styles/_top-light.scss';


const TopLight = () => {
  return (
    <div className="top-light">
      <Light1Svg className="top-light__light" />
      <Light1WideSvg className="top-light__light-wide" preserveAspectRatio="none" />
      <GridSvg className="top-light__grid" />
    </div>
  );
};

export default TopLight;
