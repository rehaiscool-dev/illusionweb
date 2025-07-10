import { Platform, DownloadStatus } from '../types/download';

export const getDownloadStatus = (platform: Platform): DownloadStatus => {
  //manual status
  if (platform.manualStatus) {
    return getStatusInfo(platform.status);
  }

  const hasUrl = platform.downloadUrl && platform.downloadUrl.trim() !== '';
  
  if (hasUrl) {
    return getStatusInfo('Released');
  } else {
    return getStatusInfo('Not In Development');
  }
};

const getStatusInfo = (status: Platform['status']): DownloadStatus => {
  switch (status) {
    case 'Released':
      return {
        isReleased: true,
        status: 'Released',
        displayText: 'Available Now',
        color: 'text-green-400'
      };
    case 'Beta':
      return {
        isReleased: true,
        status: 'Beta',
        displayText: 'Beta Version',
        color: 'text-yellow-400'
      };
    case 'W.I.P':
      return {
        isReleased: false,
        status: 'W.I.P',
        displayText: 'Work in Progress',
        color: 'text-blue-400'
      };
    case 'Not Released':
      return {
        isReleased: false,
        status: 'Not Released',
        displayText: 'Coming Soon',
        color: 'text-gray-400'
      };
    case 'Not In Development':
      return {
        isReleased: false,
        status: 'Not In Development',
        displayText: 'Not Planned',
        color: 'text-gray-500'
      };
    case 'Discontinued':
      return {
        isReleased: false,
        status: 'Discontinued',
        displayText: 'No Longer Supported',
        color: 'text-red-400'
      };
    default:
      return {
        isReleased: false,
        status: 'Not Released',
        displayText: 'Coming Soon',
        color: 'text-gray-400'
      };
  }
};
