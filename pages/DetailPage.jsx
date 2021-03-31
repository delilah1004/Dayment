import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';

import 'firebase/firestore';

import PostComponent from '../components/PostComponent';
import HeaderComponentWithBack from '../components/HeaderComponentWithBack';

export default function DetailPage({ navigation, route }) {
  const content = route.params.content;

  useEffect(() => {
    console.log('디테일페이지 접속중');
  }, []);

  return (
    <Container>
      <HeaderComponentWithBack />
      <Content>
        <PostComponent content={content} navigation={navigation} />
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({});
