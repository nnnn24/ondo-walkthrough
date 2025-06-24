import { useMobileWalkthrough } from './MobileWalkthroughSystem';
import { Play } from 'lucide-react';
import { Button } from './ui/button';

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

  const handleStartDemo = () => {
    if (demoData) {
      startWalkthrough(demoData);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Start Demo Button */}
      <div className="text-center">
        <Button
          size="lg"
          onClick={handleStartDemo}
          className="px-8 py-3"
        >
          <Play className="mr-2 h-5 w-5" />
          Start Interactive Walkthrough
        </Button>
      </div>
    </div>
  );
}
