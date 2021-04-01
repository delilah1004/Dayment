import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';

import 'firebase/firestore';

import PostComponent from '../components/PostComponent';
import HeaderComponentWithBack from '../components/HeaderComponentWithBack';

import dot from '../assets/background_dot.png';
import TitleComponent from '../components/TitleComponent';

export default function DetailPage({ navigation, route }) {
  const content = route.params.content;

  useEffect(() => {
    console.log('디테일페이지 접속중');
  }, []);

  return (
    <>
      <HeaderComponentWithBack navigation={navigation} />
      <Container>
        <ImageBackground source={dot} style={[styles.background]} />
        <Content>
          <TitleComponent content={content} />
          <PostComponent content={content} navigation={navigation} />
        </Content>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    opacity: 0.7,
  },
});
