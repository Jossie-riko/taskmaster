import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.taskmaster.app',
  appName: 'TaskMaster',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;npm install @capacitor/core @capacitor/cli