import { default as default_2 } from 'react';

export declare const InteractiveWalkthrough: default_2.FC<WalkthroughPlayerProps>;

declare interface WalkthroughData {
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

declare interface WalkthroughPlayerProps {
    demoData: WalkthroughData;
    className?: string;
}

export { }
