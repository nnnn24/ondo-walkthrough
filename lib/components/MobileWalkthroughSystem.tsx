/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
 
import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ChevronLeft, ChevronRight, Smartphone, Monitor, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useIsMobile } from './ui/use-mobile';
import { RichTextDisplay } from './ui/rich-text-display';

interface HighlightArea {
  x: number; // percentage from left
  y: number; // percentage from top
  width: number; // percentage width
  height: number; // percentage height
}

interface DeviceInfo {
  deviceName: string; // e.g., "iPhone 15 Pro"
  processTitle: string; // e.g., "eSIM Installation"
  deviceIcon?: string; // optional custom icon
}

interface MobileWalkthroughStep {
  id: string;
  title: string;
  description: string;
  screenshot: string; // URL to screenshot image
  highlightArea: HighlightArea;
  tooltipPosition?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
}

interface MobileWalkthroughConfig {
  steps: MobileWalkthroughStep[];
  deviceInfo: DeviceInfo;
  name?: string; // Walkthrough name
  description?: string; // Walkthrough description
}

interface ImageDimensions {
  width: number;
  height: number;
  aspectRatio: number;
  orientation: 'vertical' | 'horizontal';
}

interface MobileWalkthroughContextType {
  isActive: boolean;
  currentStep: number;
  totalSteps: number;
  steps: MobileWalkthroughStep[];
  deviceInfo: DeviceInfo | null;
  walkthroughName: string | null;
  walkthroughDescription: string | null;
  startWalkthrough: (config: MobileWalkthroughConfig | MobileWalkthroughStep[]) => void;
  nextStep: () => void;
  prevStep: () => void;
  endWalkthrough: () => void;
}

const MobileWalkthroughContext = createContext<MobileWalkthroughContextType | null>(null);

// Image dimensions cache to ensure consistent sizing for identical images
const imageDimensionsCache = new Map<string, ImageDimensions>();

export function MobileWalkthroughProvider({ children }: { children: React.ReactNode }) {
  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState<MobileWalkthroughStep[]>([]);
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);
  const [walkthroughName, setWalkthroughName] = useState<string | null>(null);
  const [walkthroughDescription, setWalkthroughDescription] = useState<string | null>(null);

  const startWalkthrough = (config: MobileWalkthroughConfig | MobileWalkthroughStep[]) => {
    // Support both old array format and new config object format
    if (Array.isArray(config)) {
      // Legacy format - just steps array
      setSteps(config);
      setDeviceInfo(null);
      setWalkthroughName(null);
      setWalkthroughDescription(null);
    } else {
      // New format - config object with steps and device info
      setSteps(config.steps);
      setDeviceInfo(config.deviceInfo);
      setWalkthroughName(config.name || null);
      setWalkthroughDescription(config.description || null);
    }
    setCurrentStep(0);
    setIsActive(true);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      endWalkthrough();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const endWalkthrough = () => {
    setIsActive(false);
    setCurrentStep(0);
    setSteps([]);
    setDeviceInfo(null);
    setWalkthroughName(null);
    setWalkthroughDescription(null);
  };

  return (
    <MobileWalkthroughContext.Provider
      value={{
        isActive,
        currentStep,
        totalSteps: steps.length,
        steps,
        deviceInfo,
        walkthroughName,
        walkthroughDescription,
        startWalkthrough,
        nextStep,
        prevStep,
        endWalkthrough,
      }}
    >
      {children}
      {isActive && <MobileWalkthroughOverlay />}
    </MobileWalkthroughContext.Provider>
  );
}

function MobileWalkthroughOverlay() {
  const context = useContext(MobileWalkthroughContext);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayStep, setDisplayStep] = useState(0);
  const [textOpacity, setTextOpacity] = useState(1);
  const [isTextScrollable, setIsTextScrollable] = useState(false);
  const [hasScrolledToTop, setHasScrolledToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [imageDimensions, setImageDimensions] = useState<ImageDimensions | null>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [viewportDimensions, setViewportDimensions] = useState({ width: 0, height: 0 });
  const [_imageRenderedWidth, setImageRenderedWidth] = useState(0);
  const [_stableCardWidth, setStableCardWidth] = useState(0);
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
  const [previousOrientation, setPreviousOrientation] = useState<'vertical' | 'horizontal' | null>(null);
  const [_stepOrientations, setStepOrientations] = useState<Map<number, 'vertical' | 'horizontal' | 'unknown'>>(new Map());
  const [_devicePattern, setDevicePattern] = useState<'all-vertical' | 'all-horizontal' | 'mixed' | 'unknown'>('unknown');
  const [isFirefox, setIsFirefox] = useState(false);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  if (!context) return null;

  const { currentStep, totalSteps, steps, deviceInfo, walkthroughName, walkthroughDescription, nextStep, prevStep, endWalkthrough } = context;
  const step = steps[displayStep];

  // Detect Firefox browser for scrollbar styling
  useEffect(() => {
    const isFirefoxBrowser = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    setIsFirefox(isFirefoxBrowser);
  }, []);

  // Get display name and description for header
  const getDisplayName = () => {
    if (walkthroughName?.trim()) {
      return walkthroughName;
    }
    if (deviceInfo?.deviceName?.trim()) {
      return deviceInfo.deviceName;
    }
    return 'Interactive Walkthrough';
  };

  const getDisplayDescription = () => {
    if (walkthroughDescription?.trim()) {
      return walkthroughDescription;
    }
    if (deviceInfo?.processTitle?.trim()) {
      return deviceInfo.processTitle;
    }
    return null;
  };

  // Track viewport dimensions for screen orientation detection and update image width
  useEffect(() => {
    const updateViewportDimensions = () => {
      setViewportDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      
      // Update rendered image width on resize
      if (imageRef.current && imageRef.current.offsetWidth > 0) {
        const newWidth = imageRef.current.offsetWidth;
        setImageRenderedWidth(newWidth);
        // Only update stable width if not transitioning
        if (!isTransitioning) {
          setStableCardWidth(newWidth);
        }
      }
    };

    updateViewportDimensions();
    window.addEventListener('resize', updateViewportDimensions);
    return () => window.removeEventListener('resize', updateViewportDimensions);
  }, [isTransitioning]);

  // Check if text content is scrollable (exceeds 4 rows)
  const checkScrollable = () => {
    const container = textContainerRef.current;
    if (container) {
      const isScrollable = container.scrollHeight > container.clientHeight;
      setIsTextScrollable(isScrollable);
      
      // If content is scrollable and we haven't scrolled to top yet for this step, do it
      if (isScrollable && !hasScrolledToTop) {
        requestAnimationFrame(() => {
          if (container && container.scrollTop > 0) {
            container.scrollTop = 0;
          }
        });
        setHasScrolledToTop(true);
      } else if (!isScrollable) {
        setHasScrolledToTop(false);
      }
    }
  };

  // Handle scroll progress tracking
  const handleScroll = () => {
    const container = textContainerRef.current;
    if (container) {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const maxScroll = scrollHeight - clientHeight;
      const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    }
  };

  // Pre-load and cache image dimensions
  const preloadImageDimensions = (imageUrl: string): Promise<ImageDimensions> => {
    return new Promise((resolve, reject) => {
      // Check cache first
      if (imageDimensionsCache.has(imageUrl)) {
        resolve(imageDimensionsCache.get(imageUrl)!);
        return;
      }

      const img = new Image();
      img.onload = () => {
        const aspectRatio = img.naturalWidth / img.naturalHeight;
        const orientation = aspectRatio > 1 ? 'horizontal' : 'vertical';
        
        const dimensions: ImageDimensions = {
          width: img.naturalWidth,
          height: img.naturalHeight,
          aspectRatio,
          orientation,
        };
        
        // Cache the dimensions
        imageDimensionsCache.set(imageUrl, dimensions);
        resolve(dimensions);
      };
      img.onerror = reject;
      img.src = imageUrl;
    });
  };

  // Function to analyze device pattern from step orientations
  const analyzeDevicePattern = (orientations: Map<number, 'vertical' | 'horizontal' | 'unknown'>): 'all-vertical' | 'all-horizontal' | 'mixed' | 'unknown' => {
    const validOrientations = Array.from(orientations.values()).filter(o => o !== 'unknown');
    
    if (validOrientations.length === 0) {
      return 'unknown';
    }
    
    const hasVertical = validOrientations.includes('vertical');
    const hasHorizontal = validOrientations.includes('horizontal');
    
    if (hasVertical && hasHorizontal) {
      return 'mixed';
    } else if (hasVertical) {
      return 'all-vertical';
    } else if (hasHorizontal) {
      return 'all-horizontal';
    } else {
      return 'unknown';
    }
  };

  // Enhanced function to check image orientation
  // const checkImageOrientation = (imageUrl: string, stepIndex: number): Promise<'vertical' | 'horizontal' | 'unknown'> => {
  //   return new Promise((resolve) => {
  //     if (!imageUrl.trim()) {
  //       resolve('unknown');
  //       return;
  //     }

  //     const img = new Image();
  //     img.onload = () => {
  //       const aspectRatio = img.naturalWidth / img.naturalHeight;
  //       // Consider images with aspect ratio > 1.2 as horizontal, < 0.8 as vertical
  //       let orientation: 'vertical' | 'horizontal' | 'unknown';
  //       if (aspectRatio > 1.2) {
  //         orientation = 'horizontal';
  //       } else if (aspectRatio < 0.8) {
  //         orientation = 'vertical';
  //       } else {
  //         // Square-ish images default to vertical (mobile-like)
  //         orientation = 'vertical';
  //       }
        
  //       // Update step orientations map
  //       setStepOrientations(prev => {
  //         const newOrientations = new Map(prev);
  //         newOrientations.set(stepIndex, orientation);
          
  //         // Recalculate device pattern
  //         const pattern = analyzeDevicePattern(newOrientations);
  //         setDevicePattern(pattern);
          
  //         return newOrientations;
  //       });
        
  //       resolve(orientation);
  //     };
  //     img.onerror = () => {
  //       resolve('unknown');
  //     };
  //     img.src = imageUrl;
  //   });
  // };

  // Handle image load and orientation detection
  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.target as HTMLImageElement;
    const aspectRatio = img.naturalWidth / img.naturalHeight;
    const orientation = aspectRatio > 1 ? 'horizontal' : 'vertical';
    
    const dimensions: ImageDimensions = {
      width: img.naturalWidth,
      height: img.naturalHeight,
      aspectRatio,
      orientation,
    };
    
    // Cache the dimensions
    if (step) {
      imageDimensionsCache.set(step.screenshot, dimensions);
    }
    setImageDimensions(dimensions);
    setIsImageLoaded(true);
    
    // Update step orientation tracking
    const enhancedOrientation: 'vertical' | 'horizontal' | 'unknown' = 
      aspectRatio > 1.2 ? 'horizontal' : aspectRatio < 0.8 ? 'vertical' : 'vertical';
    
    setStepOrientations(prev => {
      const newOrientations = new Map(prev);
      newOrientations.set(currentStep, enhancedOrientation);
      
      // Recalculate device pattern
      const pattern = analyzeDevicePattern(newOrientations);
      setDevicePattern(pattern);
      
      return newOrientations;
    });
    
    // Set the rendered width after a short delay to ensure layout is complete
    setTimeout(() => {
      if (img.offsetWidth > 0) {
        const newWidth = img.offsetWidth;
        setImageRenderedWidth(newWidth);
        
        // Update stable width only after transition is complete and image is stable
        setTimeout(() => {
          if (!isTransitioning) {
            setStableCardWidth(newWidth);
          }
        }, 100);
      }
    }, 100);
  };

  // Preload image dimensions when step changes
  useEffect(() => {
    if (step && step.screenshot) {
      setIsImageLoaded(false);
      setImageDimensions(null);
      setImageRenderedWidth(0); // Reset rendered width
      // Don't reset stableCardWidth during transition to prevent glitches
      
      // Check cache first, then preload if needed
      if (imageDimensionsCache.has(step.screenshot)) {
        const cachedDimensions = imageDimensionsCache.get(step.screenshot)!;
        setImageDimensions(cachedDimensions);
        setIsImageLoaded(true);
      } else {
        preloadImageDimensions(step.screenshot)
          .then((dimensions) => {
            setImageDimensions(dimensions);
            setIsImageLoaded(true);
          })
          .catch((error) => {
            console.error('Failed to preload image dimensions:', error);
            setIsImageLoaded(true); // Continue with fallback sizing
          });
      }
    }
  }, [step]);

  // Handle step transitions with smooth animations
  useEffect(() => {
    if (currentStep !== displayStep) {
      setIsTransitioning(true);
      setTextOpacity(0);
      setHasScrolledToTop(false); // Reset scroll flag for new step
      setScrollProgress(0); // Reset scroll progress for new step
      
      const timer = setTimeout(() => {
        setDisplayStep(currentStep);
        setTimeout(() => {
          setTextOpacity(1);
          setIsTransitioning(false);
          // Check scrollable after content loads and opacity transition completes
          setTimeout(checkScrollable, 100);
        }, 150);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [currentStep, displayStep]);

  // Check scrollable when step content changes
  useEffect(() => {
    if (step && !isTransitioning) {
      // Reset scroll flag when step changes
      setHasScrolledToTop(false);
      setScrollProgress(0);
      // Small delay to ensure content is rendered
      setTimeout(checkScrollable, 100);
    }
  }, [step, isTransitioning, textOpacity]);

  // PIXEL-PERFECT TOOLTIP POSITIONING WITH GLITCH-FREE WIDTH HANDLING
  const calculateTooltipPosition = () => {
    if (!imageRef.current || !imageContainerRef.current || !tooltipRef.current || !step) {
      return;
    }

    const imageElement = imageRef.current;
    const tooltip = tooltipRef.current;
    
    // Get actual rendered dimensions
    const imageRect = imageElement.getBoundingClientRect();
    
    // Calculate highlight area in actual pixels
    const highlightLeftPx = (step.highlightArea.x / 100) * imageRect.width;
    const highlightTopPx = (step.highlightArea.y / 100) * imageRect.height;
    const highlightWidthPx = (step.highlightArea.width / 100) * imageRect.width;
    const highlightHeightPx = (step.highlightArea.height / 100) * imageRect.height;
    
    const highlightRightPx = highlightLeftPx + highlightWidthPx;
    const highlightBottomPx = highlightTopPx + highlightHeightPx;
    const highlightCenterXPx = highlightLeftPx + (highlightWidthPx / 2);
    const highlightCenterYPx = highlightTopPx + (highlightHeightPx / 2);
    
    // Fixed gap in pixels - this is the key to consistent distances
    const GAP_PX = 20;
    
    // Determine tooltip sizing strategy BEFORE getting dimensions
    // MOBILE BROWSERS ALWAYS USE VERTICAL/MOBILE STRATEGY regardless of image orientation
    const shouldUseScreenshotWidthStrategy = isMobile || (imageDimensions && imageDimensions.orientation === 'vertical');
    const currentOrientation = imageDimensions?.orientation || 'vertical';
    
    // *** NEW FEATURE: Check if this is a wide screenshot on mobile browser ***
    const isWideScreenshotOnMobile = isMobile && imageDimensions && imageDimensions.orientation === 'horizontal';
    
    // Check if orientation changed to avoid width glitches
    const orientationChanged = previousOrientation !== null && previousOrientation !== currentOrientation;
    setPreviousOrientation(currentOrientation);
    
    
    
    // For horizontal screenshots (desktop), calculate the expected tooltip width
    let expectedTooltipWidth: number;
    let expectedTooltipHeight: number;
    
    if (shouldUseScreenshotWidthStrategy) {
      // Mobile browsers OR vertical images: Use 90% of image width for better mobile UX
      // This applies even to horizontal images when viewed on mobile devices
      expectedTooltipWidth = imageRect.width * 0.9;
      expectedTooltipHeight = 120; // Estimated height
    } else {
      // Desktop horizontal only: Use 20% of image width for precise positioning
      expectedTooltipWidth = imageRect.width * 0.2;
      expectedTooltipHeight = 120; // Estimated height
    }
    
    // Get current tooltip dimensions (might be wrong due to width not being set yet)
    const tooltipRect = tooltip.getBoundingClientRect();
    const actualTooltipHeight = tooltipRect.height > 0 ? tooltipRect.height : expectedTooltipHeight;
    
    // Use expected width for calculations to avoid timing issues
    const tooltipWidth = expectedTooltipWidth;
    const tooltipHeight = actualTooltipHeight;
    
    // Calculate available space in each direction (in pixels)
    const spaceAbove = highlightTopPx;
    const spaceBelow = imageRect.height - highlightBottomPx;
    const spaceLeft = highlightLeftPx;
    const spaceRight = imageRect.width - highlightRightPx;
    
    // Determine best position based on available space
    let position = step.tooltipPosition || 'auto';
    if (position === 'auto') {
      const requiredSpaceVertical = tooltipHeight + GAP_PX + 10; // 10px buffer
      const requiredSpaceHorizontal = tooltipWidth + GAP_PX + 10; // 10px buffer
      
      if (spaceBelow >= requiredSpaceVertical) {
        position = 'bottom';
      } else if (spaceAbove >= requiredSpaceVertical) {
        position = 'top';
      } else if (spaceRight >= requiredSpaceHorizontal) {
        position = 'right';
      } else if (spaceLeft >= requiredSpaceHorizontal) {
        position = 'left';
      } else {
        // Use the direction with the most space
        const maxSpace = Math.max(spaceAbove, spaceBelow, spaceLeft, spaceRight);
        if (maxSpace === spaceBelow) position = 'bottom';
        else if (maxSpace === spaceAbove) position = 'top';
        else if (maxSpace === spaceRight) position = 'right';
        else position = 'left';
      }
    }
    
    // Calculate tooltip position in pixels relative to the image
    let tooltipX = 0;
    let tooltipY = 0;
    
    switch (position) {
      case 'top':
        tooltipX = highlightCenterXPx - (tooltipWidth / 2);
        tooltipY = highlightTopPx - tooltipHeight - GAP_PX;
        break;
        
      case 'bottom':
        tooltipX = highlightCenterXPx - (tooltipWidth / 2);
        tooltipY = highlightBottomPx + GAP_PX;
        break;
        
      case 'left':
        // Mobile or vertical images: use constrained positioning for better UX
        if (!shouldUseScreenshotWidthStrategy) {
          // Desktop horizontal only: position tooltip with exact gap
          tooltipX = highlightLeftPx - tooltipWidth - GAP_PX;
          tooltipY = highlightCenterYPx - (tooltipHeight / 2);
        } else {
          // Mobile browsers (any image) OR vertical images: use safe positioning
          tooltipX = Math.max(10, highlightLeftPx - tooltipWidth - GAP_PX);
          tooltipY = highlightCenterYPx - (tooltipHeight / 2);
        }
        break;
        
      case 'right':
        // Mobile or vertical images: use constrained positioning for better UX
        if (!shouldUseScreenshotWidthStrategy) {
          // Desktop horizontal only: position tooltip with exact gap
          tooltipX = highlightRightPx + GAP_PX;
          tooltipY = highlightCenterYPx - (tooltipHeight / 2);
        } else {
          // Mobile browsers (any image) OR vertical images: use safe positioning
          tooltipX = Math.min(imageRect.width - tooltipWidth - 10, highlightRightPx + GAP_PX);
          tooltipY = highlightCenterYPx - (tooltipHeight / 2);
        }
        break;
    }
    
    // Apply boundary constraints to keep tooltip within image bounds
    const minX = 10;
    const maxX = imageRect.width - tooltipWidth - 10;
    const minY = 10;
    const maxY = imageRect.height - tooltipHeight - 10;
    
    // For horizontal positioning on desktop, be more strict about boundaries
    if (!shouldUseScreenshotWidthStrategy && (position === 'left' || position === 'right')) {
      // Don't constrain X for horizontal positioning - let it go outside if needed
      tooltipY = Math.max(minY, Math.min(maxY, tooltipY));
    } else {
      tooltipX = Math.max(minX, Math.min(maxX, tooltipX));
      tooltipY = Math.max(minY, Math.min(maxY, tooltipY));
    }
    
    // Convert to percentages for CSS positioning
    const leftPercent = (tooltipX / imageRect.width) * 100;
    const topPercent = (tooltipY / imageRect.height) * 100;
    
    // Calculate actual gap achieved
    // let actualGap = 0;
    // switch (position) {
    //   case 'top':
    //     actualGap = highlightTopPx - (tooltipY + tooltipHeight);
    //     break;
    //   case 'bottom':
    //     actualGap = tooltipY - highlightBottomPx;
    //     break;
    //   case 'left':
    //     actualGap = highlightLeftPx - (tooltipX + tooltipWidth);
    //     break;
    //   case 'right':
    //     actualGap = tooltipX - highlightRightPx;
    //     break;
    // }
    
    // GLITCH-FREE STYLE CALCULATION
    const newStyle: React.CSSProperties = {
      position: 'absolute',
      // Only transition position and opacity, NOT width
      transition: orientationChanged 
        ? 'none' // No transition when orientation changes to prevent glitches
        : 'top 0.6s cubic-bezier(0.4, 0, 0.2, 1), left 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      zIndex: 1000, // Very high z-index to ensure tooltip is above everything
      transform: 'none',
      // CRITICAL: Ensure pointer events work for tooltip content
      pointerEvents: 'auto',
    };
    
    // *** NEW FEATURE IMPLEMENTATION: Wide screenshot on mobile browser ***
    if (isWideScreenshotOnMobile) {
      // For wide screenshots on mobile browsers, position tooltip at bottom of viewport
      // but above the navigation area to avoid overlap
      
      // Calculate navigation area height: padding (16px * 2) + button height (~40px) + gap (~16px) = ~88px
      // Add some extra margin for safety = 100px
      const navigationAreaHeight = 100;
      
      // Position above navigation area
      newStyle.position = 'fixed';
      newStyle.bottom = `${navigationAreaHeight}px`;
      newStyle.left = '5%';
      newStyle.width = '90%';
      newStyle.right = 'auto';
      newStyle.top = 'auto';
      newStyle.maxWidth = 'none';
      newStyle.zIndex = 1001; // Even higher z-index for fixed positioning
      
    } else if (shouldUseScreenshotWidthStrategy) {
      // MOBILE BROWSERS (any image) OR vertical images: Use mobile-friendly sizing
      // This ensures horizontal images on mobile devices still get mobile-optimized tooltips
      newStyle.width = '90%';
      newStyle.left = '5%';
      newStyle.top = `${topPercent}%`;
      // Explicitly remove right property to avoid conflicts
      newStyle.right = 'auto';
      newStyle.maxWidth = 'none';
    } else {
      // DESKTOP horizontal images only: Use calculated positioning for precision
      newStyle.width = '20%';
      newStyle.left = `${leftPercent}%`;
      newStyle.top = `${topPercent}%`;
      // Explicitly remove right property to avoid conflicts
      newStyle.right = 'auto';
      newStyle.maxWidth = 'none';
    }
    
    
    setTooltipStyle(newStyle);
  };

  // Recalculate tooltip position when image loads or step changes
  useEffect(() => {
    if (isImageLoaded && !isTransitioning && step) {
      // Multiple attempts to ensure tooltip has correct width
      const calculateWithRetry = (attempt = 1) => {
        setTimeout(() => {
          calculateTooltipPosition();
          
          // For first attempt after orientation change, do immediate recalculation
          if (attempt === 1 && previousOrientation !== null) {
            setTimeout(calculateTooltipPosition, 50);
          }
          
          // Retry a few times to ensure width is set correctly
          if (attempt < 3) {
            calculateWithRetry(attempt + 1);
          }
        }, attempt === 1 ? 10 : 50 * attempt);
      };
      
      calculateWithRetry();
    }
  }, [isImageLoaded, isTransitioning, step, displayStep, imageDimensions, isMobile]);

  // Recalculate on window resize
  useEffect(() => {
    if (isImageLoaded && !isTransitioning) {
      const handleResize = () => {
        setTimeout(() => {
          calculateTooltipPosition();
        }, 100);
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [isImageLoaded, isTransitioning]);

  // UNIFIED IMAGE SIZING STRATEGY - Consistent for both orientations
  const getImageStyle = () => {
    // Use consistent fallback while dimensions are loading
    if (!imageDimensions || !isImageLoaded) {
      return {
        maxWidth: '90vw',
        maxHeight: '75vh',
        width: 'auto',
        height: 'auto',
        objectFit: 'contain' as const,
        visibility: 'hidden' as const, // Hide until dimensions are determined
      };
    }

    // UNIFIED BASE STYLE - Same for all orientations
    const baseStyle = {
      visibility: 'visible' as const,
      objectFit: 'contain' as const, // Always maintain aspect ratio
    };

    // Calculate available space with consistent padding
    const availableWidth = viewportDimensions.width * 0.9; // 90vw
    const availableHeight = viewportDimensions.height * 0.75; // 75vh

    // UNIFIED SIZING LOGIC - Same calculation for both orientations
    // This ensures consistent rendering behavior
    const widthBasedHeight = availableWidth / imageDimensions.aspectRatio;

    // Choose the constraint that fits within both limits
    let finalStyle;
    if (widthBasedHeight <= availableHeight) {
      // Width-constrained: image height fits within available height
      finalStyle = {
        ...baseStyle,
        width: `${availableWidth}px`,
        height: 'auto',
        maxWidth: '90vw',
        maxHeight: '75vh',
      };
    } else {
      // Height-constrained: image width fits within available width
      finalStyle = {
        ...baseStyle,
        width: 'auto',
        height: `${availableHeight}px`,
        maxWidth: '90vw',
        maxHeight: '75vh',
      };
    }

    
    return finalStyle;
  };

  // Handle tooltip click events to prevent propagation to overlay
  const handleTooltipClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Allow normal click behavior for tooltip content
  };

  if (!step) return null;

  const displayName = getDisplayName();
  const displayDescription = getDisplayDescription();

  // Calculate outer stroke dimensions and positioning with 6px border radius
  const getOuterStrokeStyle = () => {
    const strokeWidth = 2; // 2px stroke width - constant for both orientations
    
    // Expand the stroke area by strokeWidth pixels on all sides
    // by adjusting position and dimensions
    return {
      left: `calc(${step.highlightArea.x}% - ${strokeWidth}px)`,
      top: `calc(${step.highlightArea.y}% - ${strokeWidth}px)`,
      width: `calc(${step.highlightArea.width}% + ${strokeWidth * 2}px)`,
      height: `calc(${step.highlightArea.height}% + ${strokeWidth * 2}px)`,
    };
  };

  return (
    <div className="fixed inset-0 z-10000 bg-black/90 flex flex-col">
      {/* Header */}
      <div className="w-full p-4 flex-shrink-0 bg-black text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <div className="flex items-center gap-2">
                {imageDimensions?.orientation === 'horizontal' ? (
                  <Monitor className="h-5 w-5 text-white flex-shrink-0" />
                ) : (
                  <Smartphone className="h-5 w-5 text-white flex-shrink-0" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate">
                  <span className="font-medium text-white">{displayName}</span>
                </div>
                {displayDescription && (
                  <div className="text-sm text-gray-300 truncate">
                    <RichTextDisplay content={displayDescription} />
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <Button
                variant="ghost"
                size="default"
                onClick={endWalkthrough}
                title="End walkthrough"
                className="text-white hover:text-white hover:bg-gray-800"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Image container */}
      <div 
        ref={imageContainerRef}
        className="flex-1 flex items-center justify-center relative overflow-hidden mx-4"
      >
        <div className="relative overflow-hidden rounded-lg border-2 border-white">
          <ImageWithFallback
            ref={imageRef}
            src={step.screenshot}
            alt={`Step ${currentStep + 1}: ${step.title}`}
            className="rounded-lg shadow-2xl transition-opacity duration-300"
            style={{
              ...getImageStyle(),
              opacity: isImageLoaded ? 1 : 0,
            }}
            onLoad={handleImageLoad}
          />
          
          {/* Four-panel overlay system - background 90%, overlay 70% */}
          {isImageLoaded && (
            <>
              {/* Top overlay */}
              <div
                className="absolute bg-black/70 pointer-events-none transition-all duration-[600ms] cubic-bezier(0.4, 0, 0.2, 1) z-10"
                style={{
                  left: '0%',
                  top: '0%',
                  width: '100%',
                  height: `${step.highlightArea.y}%`,
                }}
              />
              
              {/* Bottom overlay */}
              <div
                className="absolute bg-black/70 pointer-events-none transition-all duration-[600ms] cubic-bezier(0.4, 0, 0.2, 1) z-10"
                style={{
                  left: '0%',
                  top: `${step.highlightArea.y + step.highlightArea.height}%`,
                  width: '100%',
                  height: `${100 - (step.highlightArea.y + step.highlightArea.height)}%`,
                }}
              />
              
              {/* Left overlay */}
              <div
                className="absolute bg-black/70 pointer-events-none transition-all duration-[600ms] cubic-bezier(0.4, 0, 0.2, 1) z-10"
                style={{
                  left: '0%',
                  top: `${step.highlightArea.y}%`,
                  width: `${step.highlightArea.x}%`,
                  height: `${step.highlightArea.height}%`,
                }}
              />
              
              {/* Right overlay */}
              <div
                className="absolute bg-black/70 pointer-events-none transition-all duration-[600ms] cubic-bezier(0.4, 0, 0.2, 1) z-10"
                style={{
                  left: `${step.highlightArea.x + step.highlightArea.width}%`,
                  top: `${step.highlightArea.y}%`,
                  width: `${100 - (step.highlightArea.x + step.highlightArea.width)}%`,
                  height: `${step.highlightArea.height}%`,
                }}
              />
            </>
          )}
          
          {/* Highlight area border with pink color and 6px border radius */}
          {isImageLoaded && (
            <div
              className="absolute border-2 pointer-events-none transition-all duration-[600ms] cubic-bezier(0.4, 0, 0.2, 1) z-20"
              style={{
                ...getOuterStrokeStyle(),
                borderColor: '#ED0C73', // Pink color for the highlight area stroke
                borderRadius: '6px', // 6px border radius for rounded corners
                boxShadow: '0 0 20px rgba(237, 12, 115, 0.3)', // Pink glow effect
              }}
            />
          )}
          
          {/* Tooltip with enhanced click handling */}
          {isImageLoaded && (
            <Card
              ref={tooltipRef}
              className="absolute bg-white border border-border shadow-xl tooltip-interactive"
              style={tooltipStyle}
              onClick={handleTooltipClick}
            >
              <div 
                className="p-4"
                style={{ pointerEvents: 'auto' }} // Explicitly enable pointer events for tooltip content
              >
                {/* Step counter at the top */}
                <div className="mb-3">
                  <span className="text-xs text-muted-foreground">
                    Алхам {currentStep + 1}/{totalSteps}
                  </span>
                </div>
                
                <div className="relative">
                  <div 
                    ref={textContainerRef}
                    className="max-h-24 text-sm leading-relaxed text-foreground tooltip-scrollbar tooltip-content"
                    style={{
                      opacity: textOpacity,
                      transition: 'opacity 0.3s ease-in-out',
                      pointerEvents: 'auto', // Ensure text content allows interactions
                    }}
                    onScroll={handleScroll}
                    data-firefox-scrollbar={isFirefox ? 'true' : undefined}
                  >
                    <RichTextDisplay content={step.description} />
                  </div>
                  
                  {/* Gradient overlay for scrollable text */}
                  {isTextScrollable && (
                    <div 
                      className="tooltip-gradient-overlay" 
                      style={{ pointerEvents: 'none' }} // Gradient overlay should not block clicks
                    />
                  )}
                </div>
                
                {/* Scroll progress indicator */}
                {isTextScrollable && (
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all duration-200 ease-out rounded-full"
                        style={{ width: `${scrollProgress * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {Math.round(scrollProgress * 100)}%
                    </span>
                  </div>
                )}
              </div>
            </Card>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-shrink-0 flex items-center justify-center gap-4 p-4 bg-black">
        <Button
          variant="secondary"
          onClick={prevStep}
          disabled={currentStep === 0}
          className="bg-white border-black text-black hover:bg-black hover:text-white disabled:bg-white disabled:text-black disabled:opacity-50"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Өмнөх
        </Button>
        
        <div className="flex items-center gap-2 px-4 py-2 bg-white border border-black rounded-lg shadow-sm text-sm font-medium text-black">
          {currentStep + 1} / {totalSteps}
        </div>
        
        <Button
          variant="secondary"
          onClick={nextStep}
          className={
            currentStep === 0 
              ? "first-step-glow" 
              : "bg-white border-black text-black hover:bg-black hover:text-white"
          }
        >
          {currentStep === totalSteps - 1 ? 'Дуусгах' : 'Дараах'}
          {currentStep !== totalSteps - 1 && <ChevronRight className="h-4 w-4 ml-1" />}
        </Button>
      </div>
    </div>
  );
}

export function useMobileWalkthrough(): MobileWalkthroughContextType {
  const context = useContext(MobileWalkthroughContext);
  if (!context) {
    throw new Error('useMobileWalkthrough must be used within a MobileWalkthroughProvider');
  }
  return context;
}
