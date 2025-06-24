import React from 'react'
import { MobileWalkthroughProvider } from './MobileWalkthroughSystem'
import { StandaloneDemoViewer } from './StandaloneDemoViewer'


export interface WalkthroughData {
  name?: string;
  description?: string;
  deviceInfo: {
    deviceName: string;
    processTitle: string;
  };
  steps: {
    id: string;
    title: string;
    description: string;
    screenshot: string;
    highlightArea: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
    tooltipPosition: 'auto' | 'top' | 'bottom' | 'left' | 'right';
  }[];
}

export interface WalkthroughPlayerProps {
  demoData: WalkthroughData
  className?: string
}

export const WalkthroughPlayer: React.FC<WalkthroughPlayerProps> = ({
  demoData,
  className
}) => {
  return (
    <div className={className}>
      <MobileWalkthroughProvider>
        <StandaloneDemoViewer demoData={demoData} />
      </MobileWalkthroughProvider>
    </div>
  )
}

export default WalkthroughPlayer
