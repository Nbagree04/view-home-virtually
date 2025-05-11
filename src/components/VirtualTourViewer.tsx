
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

interface VirtualTourViewerProps {
  tourUrl: string;
  thumbnailUrl: string;
}

const VirtualTourViewer = ({ tourUrl, thumbnailUrl }: VirtualTourViewerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showTour, setShowTour] = useState(false);

  const handleStartTour = () => {
    setShowTour(true);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="w-full rounded-lg overflow-hidden">
      {!showTour ? (
        <div 
          className="relative aspect-[16/9] bg-cover bg-center rounded-lg overflow-hidden"
          style={{ backgroundImage: `url(${thumbnailUrl})` }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
            <Button 
              onClick={handleStartTour}
              className="bg-realestate-teal hover:bg-realestate-blue text-white flex items-center gap-2"
            >
              <Camera className="h-4 w-4" />
              Start Virtual Tour
            </Button>
            <p className="text-white text-sm mt-2">Experience this property in immersive 3D</p>
          </div>
        </div>
      ) : (
        <div className="virtual-tour-container">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-realestate-teal"></div>
            </div>
          )}
          <iframe 
            src={tourUrl} 
            title="Virtual Property Tour" 
            allowFullScreen 
            onLoad={handleIframeLoad}
          />
        </div>
      )}
    </div>
  );
};

export default VirtualTourViewer;
