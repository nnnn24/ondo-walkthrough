import { useMobileWalkthrough } from './MobileWalkthroughSystem';
import { useEffect } from 'react';

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

export function StandaloneDemoViewer({ demoData }: { demoData?: WalkthroughData }) {
  const { startWalkthrough } = useMobileWalkthrough();

  useEffect(() => {
    const handleStartDemo = () => {
      if (demoData) {
        startWalkthrough(demoData);
      }
    };

    handleStartDemo();
  }, [demoData])


  return (
    <></>
  );
}
