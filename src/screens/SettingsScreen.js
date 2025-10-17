import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  Switch,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Alert,
} from 'react-native';
import PlatformButton from '../components/PlatformButton';
import { getCurrentPlatformColors, isIOS } from '../utils/platform';

const SettingsScreen = () => {
  const colors = getCurrentPlatformColors();

  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    locationServices: false,
  });

  const toggleSetting = key => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const renderSettingRow = (title, description, value, settingKey) => (
    <View style={styles.settingRow}>
      <View style={styles.settingInfo}>
        <Text style={[styles.settingTitle, { color: colors.text }]}>{title}</Text>
        <Text style={[styles.settingDescription, { color: colors.text }]}>{description}</Text>
      </View>
      <Switch
        value={value}
        onValueChange={() => toggleSetting(settingKey)}
        trackColor={{ false: '#767577', true: colors.primary }}
        thumbColor={isIOS ? '#ffffff' : value ? colors.primary : '#f4f3f4'}
      />
    </View>
  );

  const handleSave = () => {
    Alert.alert('Settings Saved', 'Your preferences have been updated!');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar
        barStyle={isIOS ? 'dark-content' : 'light-content'}
        backgroundColor={isIOS ? undefined : colors.primary}
      />

      {/* Header */}
      <View
        style={[
          styles.header,
          { backgroundColor: isIOS ? colors.background : colors.primary },
        ]}
      >
        <Text style={[styles.headerTitle, { color: isIOS ? colors.text : '#ffffff' }]}>
          Settings
        </Text>
      </View>

      {/* Settings list */}
      <ScrollView contentContainerStyle={styles.content}>
        {renderSettingRow('Notifications', 'Receive app notifications', settings.notifications, 'notifications')}
        {renderSettingRow('Dark Mode', 'Use dark theme interface', settings.darkMode, 'darkMode')}
        {renderSettingRow('Location Services', 'Allow access to your location', settings.locationServices, 'locationServices')}

        <View style={styles.buttonContainer}>
          <PlatformButton title="Save Settings" onPress={handleSave} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  content: {
    padding: 16,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
  settingInfo: {
    flex: 1,
    marginRight: 10,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  settingDescription: {
    fontSize: 13,
    opacity: 0.6,
  },
  buttonContainer: {
    marginTop: 24,
  },
});

export default SettingsScreen;
