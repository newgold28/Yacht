import React, { useEffect, useRef } from 'react';

export const ScrollAnimation: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const frameCount = 300;
    
    const currentFrame = (index: number) => (
        `/ezgif-8dec68c1d681d523-jpg/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`
    );

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const context = canvas.getContext('2d');
        if (!context) return;

        const preloadImages = () => {
            for (let i = 1; i <= frameCount; i++) {
                const image = new Image();
                image.src = currentFrame(i);
            }
        };

        const img = new Image();
        img.src = currentFrame(1);
        
        img.onload = function() {
            canvas.width = 3840;
            canvas.height = 2160;
            
            context.imageSmoothingEnabled = true;
            context.imageSmoothingQuality = 'high';
            
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
        };

        const updateImage = (index: number) => {
            img.src = currentFrame(index);
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
        };

        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            // Ensure we calculate height correctly since the body height might change
            const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
            
            if (maxScrollTop <= 0) return;
            
            const scrollFraction = scrollTop / maxScrollTop;
            
            let frameIndex = Math.floor(scrollFraction * frameCount) + 1;
            if (frameIndex > frameCount) frameIndex = frameCount;
            if (frameIndex < 1) frameIndex = 1;
            
            requestAnimationFrame(() => updateImage(frameIndex));
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        preloadImages();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center -z-10 bg-black pointer-events-none overflow-hidden">
            <canvas 
                ref={canvasRef} 
                className="max-w-full max-h-full object-contain"
            />
        </div>
    );
};
