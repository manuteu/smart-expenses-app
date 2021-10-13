import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  useFonts,
  Jost_300Light,
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
  Jost_700Bold,
} from '@expo-google-fonts/jost';

import AppLoading from 'expo-app-loading';

import useCachedResources from './hooks/useCachedResources';

// import Navigation from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/Navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const [fontsLoaded] = useFonts({
    Jost_300Light,
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
    Jost_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <StatusBar />
        <RootNavigator />
      </NavigationContainer>
    );
  }
}
