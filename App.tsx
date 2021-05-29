import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';

import AppLoading from 'expo-app-loading';

import useCachedResources from './hooks/useCachedResources';

import Navigation from './src/navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!fontsLoaded) return <AppLoading />;

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
