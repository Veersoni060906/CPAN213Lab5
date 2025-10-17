import { Platform } from 'react-native';

// Detect which platform the app is running on
export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

// Define platform-specific color themes
export const PLATFORM_COLORS = {
  ios: {
    primary: '#007AFF',       // iOS blue
    background: '#f2f2f7',    // light grey background
    text: '#000000',          // black text
  },
  android: {
    primary: '#2196F3',       // Material blue
    background: '#f5f5f5',    // Android default grey
    text: '#212121',          // dark grey text
  },
};

// Helper function to get current platform’s colors
export const getCurrentPlatformColors = () => {
  return PLATFORM_COLORS[Platform.OS] || PLATFORM_COLORS.android;
};
