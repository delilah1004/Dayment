import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigations/StackNavigator';

import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import Loading from './pages/Loading';

//파이어베이스 라이브러리
import * as firebase from 'firebase';
//파이어베이스 접속 키값
import apiKeys from './config/key';

export default function App() {
  console.disableYellowBox = true;
  const [ready, setReady] = useState(true);

  //파이어베이스 라이브러리 준비
  if (!firebase.apps.length) {
    console.log('Connected with Firebase');
    firebase.initializeApp(apiKeys.firebaseConfig);
  }

  const loadFont = () => {
    setTimeout(async () => {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
      await setReady(true);
    }, 1000);
  };

  useEffect(() => {
    loadFont();
  }, []);

  return ready ? (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  ) : (
    <Loading />
  );
}

const styles = StyleSheet.create({});
