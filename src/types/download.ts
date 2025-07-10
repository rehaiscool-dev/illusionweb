export interface Platform {
  id: string;
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  version: string;
  downloadUrl?: string;
  status: 'Released' | 'Beta' | 'Not Released' | 'W.I.P' | 'Not In Development' | 'Discontinued';
  manualStatus?: boolean;
}

export interface DownloadStatus {
  isReleased: boolean;
  status: Platform['status'];
  displayText: string;
  color: string;
}
