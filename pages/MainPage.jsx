import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';

import HeaderComponent from '../components/HeaderComponent';
import CardComponent from '../components/CardComponent';
// import { firebase_db } from '../config/key';

const diary = db.collection('diary');

export default function MainPage({ navigation }) {
  useEffect(() => {
    const unsubscrbie = navigation.addListener('focus', (e) => {
      console.log('메인페이지 접속중');
    });
    // firebase_db
    //   .ref('/tip')
    //   .once('value')
    //   .then((snapshot) => {
    //     let tip = snapshot.val();
    //   });
    return unsubscrbie;
  }, [navigation]);

  return (
    <Container>
      <HeaderComponent />
      {diary.map((content, i) => {
        return (
          <CardComponent content={content} key={i} navigation={navigation} />
        );
      })}
    </Container>
  );
}

const styles = StyleSheet.create({});
