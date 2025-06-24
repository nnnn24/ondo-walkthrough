/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from 'react';

interface RichTextDisplayProps {
  content: string;
  className?: string;
}

export function RichTextDisplay({ content, className = '' }: RichTextDisplayProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // const stripHtml = (html: string): string => {
  //   const temp = document.createElement('div');
  //   temp.innerHTML = html;
  //   return temp.textContent || temp.innerText || '';
  // };

  // Check if content contains HTML
  const isHtml = /<[^>]*>/.test(content);

  // Enhanced clipboard functionality with multiple fallback methods
  const copyToClipboard = async (text: string): Promise<boolean> => {
    // Method 1: Legacy execCommand (more reliable, works without permissions)
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      textArea.style.opacity = '0';
      textArea.style.pointerEvents = 'none';
      textArea.setAttribute('readonly', '');
      textArea.setAttribute('aria-hidden', 'true');
      textArea.setAttribute('tabindex', '-1');
      
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      textArea.setSelectionRange(0, textArea.value.length);
      
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      
      if (successful) {
        console.log('Clipboard: Legacy method successful');
        return true;
      }
    } catch (error) {
      console.warn('Legacy clipboard method failed:', error);
    }

    // Method 2: Modern Clipboard API (as fallback)
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        console.log('Clipboard: Modern API successful');
        return true;
      }
    } catch (error) {
      console.warn('Modern clipboard API failed:', error);
    }

    // Method 3: Try selection API
    try {
      if (window.getSelection && document.createRange) {
        const range = document.createRange();
        const selection = window.getSelection();
        const tempDiv = document.createElement('div');
        tempDiv.textContent = text;
        tempDiv.style.position = 'fixed';
        tempDiv.style.left = '-999999px';
        tempDiv.style.top = '-999999px';
        tempDiv.setAttribute('aria-hidden', 'true');
        
        document.body.appendChild(tempDiv);
        range.selectNodeContents(tempDiv);
        selection?.removeAllRanges();
        selection?.addRange(range);
        
        const successful = document.execCommand('copy');
        document.body.removeChild(tempDiv);
        selection?.removeAllRanges();
        
        if (successful) {
          console.log('Clipboard: Selection API successful');
          return true;
        }
      }
    } catch (error) {
      console.warn('Selection API clipboard method failed:', error);
    }

    console.error('All clipboard methods failed');
    return false;
  };

  // Show notification message with enhanced styling
  const showNotification = (message: string, isError = false, isUrl = false) => {
    // Create a notification element
    const notification = document.createElement('div');
    
    if (isUrl) {
      // For URL notifications, make them more interactive
      notification.innerHTML = `
        <div style="margin-bottom: 8px; font-weight: 600;">
          ${isError ? '⚠️ Холбоос нээх боломжгүй' : '📋 Холбоос хуулагдлаа'}
        </div>
        <div style="font-size: 13px; word-break: break-all; background: rgba(255,255,255,0.1); padding: 6px 8px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.2);">
          ${message}
        </div>
        <div style="margin-top: 8px; font-size: 12px; opacity: 0.8;">
          ${isError ? 'Холбоосыг гараар хуулж ашиглана уу' : 'Холбоос амжилттай хуулагдлаа'}
        </div>
      `;
    } else {
      notification.textContent = message;
    }
    
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${isError ? '#dc2626' : '#059669'};
      color: white;
      padding: 16px 20px;
      border-radius: 8px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.15);
      z-index: 50000;
      font-size: 14px;
      font-weight: 500;
      max-width: 350px;
      min-width: 280px;
      word-wrap: break-word;
      animation: slideInFromRight 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      cursor: pointer;
      user-select: text;
      line-height: 1.4;
    `;
    
    // Add animation styles if not already present
    if (!document.querySelector('#rich-text-notification-styles')) {
      const style = document.createElement('style');
      style.id = 'rich-text-notification-styles';
      style.textContent = `
        @keyframes slideInFromRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOutToRight {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Click to dismiss
    notification.addEventListener('click', () => {
      notification.style.animation = 'slideOutToRight 0.3s ease-out';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    });
    
    // Auto remove after 6 seconds (longer for URL notifications)
    const autoRemoveDelay = isUrl ? 8000 : 5000;
    setTimeout(() => {
      if (notification.parentNode) {
        notification.style.animation = 'slideOutToRight 0.3s ease-out';
        setTimeout(() => {
          if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
          }
        }, 300);
      }
    }, autoRemoveDelay);
  };

  // Utility function to ensure URL has protocol
  const ensureProtocol = (url: string): string => {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      return `https://${url}`;
    }
    return url;
  };

  // Handle link clicks and ensure proper attributes, and process icons
  useEffect(() => {
    if (containerRef.current && isHtml) {
      const container = containerRef.current;
      const links = container.querySelectorAll('a');
      const icons = container.querySelectorAll('img.rich-text-icon');
      
      // Process icons to ensure proper styling
      icons.forEach(icon => {
        // Ensure proper classes and styles are applied
        if (!icon.classList.contains('rich-text-icon')) {
          icon.classList.add('rich-text-icon');
        }
        
        // Ensure inline styling for font-size scaling
        const imgElement = icon as HTMLImageElement;
        imgElement.style.display = 'inline';
        imgElement.style.height = '2em';
        imgElement.style.width = 'auto';
        imgElement.style.verticalAlign = 'bottom';
        imgElement.style.margin = '0 2px';
        imgElement.style.maxWidth = 'none';
        imgElement.style.border = 'none';
        imgElement.style.outline = 'none';
        imgElement.style.objectFit = 'contain';
        imgElement.style.imageRendering = 'auto';
        imgElement.style.pointerEvents = 'auto';
        
        // Add alt attribute if missing
        if (!imgElement.alt) {
          imgElement.alt = 'icon';
        }
      });
      
      // Process links
      links.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;

        // Calculate final URL for use in title and click handler
        const finalUrl = ensureProtocol(href);

        // Ensure links open in new tab/window
        if (!link.hasAttribute('target')) {
          link.setAttribute('target', '_blank');
        }
        if (!link.hasAttribute('rel')) {
          link.setAttribute('rel', 'noopener noreferrer');
        }
        
        // Add our custom class for styling if not present
        if (!link.classList.contains('rich-text-link')) {
          link.classList.add('rich-text-link');
        }
        
        // Add title attribute for better UX
        if (!link.hasAttribute('title')) {
          link.setAttribute('title', `Шинэ табд нээх: ${finalUrl}`);
        }
        
        // Enhanced click handler with better popup blocking handling
        const handleClick = async (e: Event) => {
          e.preventDefault(); // Always prevent default to control navigation
          e.stopPropagation(); // Prevent tooltip or other container events
          
          console.log('Link clicked:', finalUrl);
          
          let popupSuccessful = false;
          
          // Try to open in new window/tab
          try {
            const newWindow = window.open(finalUrl, '_blank', 'noopener,noreferrer');
            
            // Check if popup was blocked
            if (newWindow && !newWindow.closed && typeof newWindow.closed !== 'undefined') {
              // Successfully opened - focus the new window
              newWindow.focus();
              popupSuccessful = true;
              console.log('Popup opened successfully');
            } else {
              console.warn('Popup blocked for URL:', finalUrl);
            }
          } catch (error) {
            console.error('Error opening popup:', error);
          }

          // If popup failed, try clipboard
          if (!popupSuccessful) {
            console.log('Attempting clipboard fallback...');
            const copied = await copyToClipboard(finalUrl);
            
            if (copied) {
              showNotification(finalUrl, false, true);
            } else {
              // Both popup and clipboard failed - show URL for manual copying
              showNotification(finalUrl, true, true);
            }
          }
        };
        
        // Remove existing listeners to prevent duplicates
        const existingHandler = (link as any)._richTextClickHandler;
        if (existingHandler) {
          link.removeEventListener('click', existingHandler);
        }
        
        // Add new listener and store reference
        link.addEventListener('click', handleClick);
        (link as any)._richTextClickHandler = handleClick;
        
        // Enhanced touch/pointer events for better mobile support
        const handlePointerDown = (e: Event) => {
          e.stopPropagation();
          // Add active state styling
          link.style.transform = 'scale(0.98)';
        };
        
        const handlePointerUp = (e: Event) => {
          e.stopPropagation();
          // Remove active state styling
          link.style.transform = '';
        };
        
        // Clean up existing pointer handlers
        const existingPointerDown = (link as any)._richTextPointerDownHandler;
        const existingPointerUp = (link as any)._richTextPointerUpHandler;
        if (existingPointerDown) {
          link.removeEventListener('pointerdown', existingPointerDown);
        }
        if (existingPointerUp) {
          link.removeEventListener('pointerup', existingPointerUp);
        }
        
        // Add pointer handlers
        link.addEventListener('pointerdown', handlePointerDown);
        link.addEventListener('pointerup', handlePointerUp);
        link.addEventListener('pointerleave', handlePointerUp); // Reset on leave
        (link as any)._richTextPointerDownHandler = handlePointerDown;
        (link as any)._richTextPointerUpHandler = handlePointerUp;
        
        // Ensure proper cursor and accessibility
        link.style.cursor = 'pointer';
        link.style.pointerEvents = 'auto';
        
        // Add keyboard accessibility
        const handleKeyDown = (e: KeyboardEvent) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.stopPropagation();
            handleClick(e);
          }
        };
        
        // Clean up existing keyboard handler
        const existingKeyHandler = (link as any)._richTextKeyHandler;
        if (existingKeyHandler) {
          link.removeEventListener('keydown', existingKeyHandler);
        }
        
        link.addEventListener('keydown', handleKeyDown);
        (link as any)._richTextKeyHandler = handleKeyDown;
        
        // Ensure link is focusable
        if (!link.hasAttribute('tabindex')) {
          link.setAttribute('tabindex', '0');
        }
      });
      
      // Cleanup function
      return () => {
        const links = container.querySelectorAll('a');
        
        // No specific cleanup needed for icons as they don't have event listeners
        
        links.forEach(link => {
          const clickHandler = (link as any)._richTextClickHandler;
          const pointerDownHandler = (link as any)._richTextPointerDownHandler;
          const pointerUpHandler = (link as any)._richTextPointerUpHandler;
          const keyHandler = (link as any)._richTextKeyHandler;
          
          if (clickHandler) {
            link.removeEventListener('click', clickHandler);
            delete (link as any)._richTextClickHandler;
          }
          if (pointerDownHandler) {
            link.removeEventListener('pointerdown', pointerDownHandler);
            delete (link as any)._richTextPointerDownHandler;
          }
          if (pointerUpHandler) {
            link.removeEventListener('pointerup', pointerUpHandler);
            link.removeEventListener('pointerleave', pointerUpHandler);
            delete (link as any)._richTextPointerUpHandler;
          }
          if (keyHandler) {
            link.removeEventListener('keydown', keyHandler);
            delete (link as any)._richTextKeyHandler;
          }
        });
      };
    }
  }, [content, isHtml]);

  if (!content) {
    return null;
  }

  if (isHtml) {
    // Render HTML content with proper link handling
    return (
      <div
        ref={containerRef}
        className={`rich-text-display ${className}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  } else {
    // Render plain text with line breaks
    return (
      <div className={`rich-text-display ${className}`}>
        {content.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < content.split('\n').length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
    );
  }
}
