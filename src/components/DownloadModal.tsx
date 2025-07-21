import React, { useState } from 'react';
import { X, Download, Monitor, CheckCircle, Smartphone } from 'lucide-react';
import { Platform } from '../types/download';
import { getDownloadStatus } from '../utils/downloadUtils';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('');
  const [isDownloading, setIsDownloading] = useState(false);

  const platforms: Platform[] = [
    {
      id: 'windows',
      name: 'Windows',
      icon: Monitor,
      version: '2.0.0',
      downloadUrl: 'https://loot-link.com/s?gR8ZLz58', // Empty means W.I.P
      status: 'Released',
      manualStatus: true
    },
    {
      id: 'android',
      name: 'Android',
      icon: Smartphone,
      version: '1.0.0',
      downloadUrl: '', // Empty means W.I.P
      status: 'Not In Development',
      manualStatus: true
    }
  ];

  const selectedPlatformData = platforms.find(p => p.id === selectedPlatform);
  const canDownload = selectedPlatformData ? getDownloadStatus(selectedPlatformData).isReleased : false;

  if (!isOpen) return null;

  const handlePlatformSelect = (platform: string) => {
    setSelectedPlatform(platform);
  };

  const handleDownload = async () => {
    if (!selectedPlatform) return;
    
    setIsDownloading(true);
    
    setTimeout(() => {
      if (selectedPlatformData?.downloadUrl) {
        // Real download
        const link = document.createElement('a');
        link.href = selectedPlatformData.downloadUrl;
        link.download = `Illusion-${selectedPlatformData.name}-v${selectedPlatformData.version}.${selectedPlatformData.id === 'windows' ? 'exe' : 'apk'}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        // Simulate download for demo
      }
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setIsDownloading(false);
      onClose();
      setSelectedPlatform('');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-b from-illusion-dark to-illusion-accent/50 border border-illusion-primary/30 rounded-2xl p-8 max-w-md w-full relative fade-in-up shadow-2xl shadow-illusion-primary/20">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white smooth-transition hover:bg-illusion-primary/20 rounded-full p-1"
        >
          <X size={20} />
        </button>

        <div className="text-center">
          <div className="bg-gradient-to-r from-illusion-primary to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-illusion-primary/30">
            <Download className="text-white" size={28} />
          </div>

          <h2 className="text-2xl font-bold text-white mb-2">Download Illusion</h2>
          <p className="text-gray-400 mb-8 text-sm">Select your platform to continue</p>

          <div className="space-y-3 mb-8">
            {platforms.map((platform) => {
              const status = getDownloadStatus(platform);
              const IconComponent = platform.icon;
              
              return (
                <button
                  key={platform.id}
                  onClick={() => handlePlatformSelect(platform.id)}
                  className={`w-full p-4 rounded-xl border smooth-transition flex items-center space-x-4 ${
                    selectedPlatform === platform.id
                      ? 'border-illusion-primary bg-illusion-primary/10 shadow-lg shadow-illusion-primary/20'
                      : 'border-illusion-primary/20 hover:border-illusion-primary/40 hover:bg-illusion-primary/5'
                  }`}
                >
                  <div className="bg-illusion-primary/20 p-2 rounded-lg">
                    <IconComponent className="text-illusion-primary" size={20} />
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-semibold text-white text-sm">{platform.name}</div>
                    <div className="text-xs text-gray-400">Version {platform.version}</div>
                    <div className={`text-xs ${status.color} font-medium`}>{status.displayText}</div>
                  </div>
                  {selectedPlatform === platform.id && (
                    <CheckCircle className="text-illusion-primary" size={20} />
                  )}
                </button>
              );
            })}
          </div>

          <button
            onClick={handleDownload}
            disabled={!selectedPlatform || isDownloading || !canDownload}
            className={`w-full py-3 rounded-xl font-semibold smooth-transition flex items-center justify-center space-x-2 ${
              selectedPlatform && !isDownloading && canDownload
                ? 'bg-gradient-to-r from-illusion-primary to-purple-500 text-white hover:shadow-lg hover:shadow-illusion-primary/30 hover:scale-105'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isDownloading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                <span>Downloading...</span>
              </>
            ) : !canDownload && selectedPlatform ? (
              <>
                <span>Not Available</span>
              </>
            ) : (
              <>
                <Download size={18} />
                <span>Download Now</span>
              </>
            )}
          </button>
          
          {selectedPlatform && !canDownload && (
            <p className="text-xs text-gray-500 text-center mt-2">
              This platform is currently {getDownloadStatus(selectedPlatformData!).displayText.toLowerCase()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;
