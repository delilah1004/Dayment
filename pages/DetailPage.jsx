import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function DetailPage({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      title: '디테일페이지',
      headerStyle: {
        backgroundColor: '#fff',
        shadowColor: '#fff',
      },
      headerTintColor: 'grey',
      headerShown: true,
      headerBackTitleVisible: false,
    });
    const unsubscrbie = navigation.addListener('focus', (e) => {
      console.log('디테일페이지 접속중');
    });
    return unsubscrbie;
  }, [navigation]);

  return (
    <View style={styles.contianer}>
      <Text> DetailPage </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
