import React, { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, Content } from 'native-base';
import ImageBlurLoading from 'react-native-image-blur-loading';

import 'firebase/firestore';
export default function DetailPage({ navigation, route }) {
  const content = route.params.content;

  useEffect(() => {
    console.log('디테일페이지 접속중');

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
  }, []);

  return (
    <Container>
      <Content
        contentContainerStyle={{
          alignItems: 'center',
          marginTop: 20,
        }}
      >
        <ImageBlurLoading
          withIndicator
          thumbnailSource={{ uri: content.image }}
          source={{ uri: content.image }}
          style={{ width: '90%', height: 200, borderRadius: 10 }}
        />
        <Text
          style={{
            fontSize: 25,
            fontWeight: '700',
            color: '#333',
            alignSelf: 'flex-start',
            marginLeft: 25,
            marginTop: 20,
          }}
        >
          {content.title}
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '700',
            color: 'grey',
            alignSelf: 'flex-start',
            marginLeft: 25,
            marginTop: 20,
          }}
        >
          {content.desc}
        </Text>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({});
