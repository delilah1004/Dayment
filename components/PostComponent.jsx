import React from 'react';
import { Dimensions, StyleSheet, View, ImageBackground } from 'react-native';
import { Text, Container, Grid, Content } from 'native-base';
import ImageBlurLoading from 'react-native-image-blur-loading';

import dot from '../assets/background_dot.png';

const imageWidth = (Dimensions.get('window').width / 3) * 2;

export default function PostComponent({ content }) {
  return (
    <Container>
      <ImageBackground source={dot} style={styles.background} />
      <Content>
        {/* 제목 */}
        <View
          style={[
            styles.shadowBox,
            { marginTop: 20, borderRadius: 10, alignSelf: 'center' },
          ]}
        >
          <View
            style={{
              borderRadius: 10,
              borderColor: 'red',
              borderWidth: 2,
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
          >
            <Text numberOfLines={1} style={styles.title}>
              {content.title}
            </Text>
          </View>
        </View>
        {/* End of 제목 */}

        <View style={styles.container}>
          {/* 사진 */}
          <View style={styles.shadowBox}>
            <ImageBlurLoading
              withIndicator
              thumbnailSource={{ uri: content.image }}
              source={{ uri: content.image }}
              style={styles.image}
            />
          </View>
          {/* End of 사진 */}

          {/* 본문 */}
          <View style={[{ borderRadius: 10 }, styles.shadowBox]}>
            <View
              style={{
                width: imageWidth,
                minHeight: imageWidth / 2,
                borderColor: 'black',
                borderWidth: 2,
                borderRadius: 10,
                padding: 5,
                marginVertical: 5,
              }}
            >
              {/* Desc */}
              <Text style={[styles.desc]}>{content.desc}</Text>
            </View>
            <Text style={[styles.grey, styles.date]}>{content.date}</Text>
          </View>
          {/* End of 본문 */}
        </View>
      </Content>
    </Container>
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
  image: { width: imageWidth, height: imageWidth },
  shadowBox: {
    backgroundColor: 'white',
    padding: 5,
    margin: 10,
    elevation: 10,
  },
  container: {
    backgroundColor: 'white',
    padding: 5,
    marginVertical: 10,
    elevation: 5,
    alignSelf: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 15,
    marginVertical: 5,
  },
  desc: {
    fontSize: 13,
    textDecorationLine: 'underline',
    marginVertical: 5,
  },
  date: {
    fontSize: 10,
    color: 'grey',
    margin: 5,
  },
  grey: { color: 'grey' },
});
