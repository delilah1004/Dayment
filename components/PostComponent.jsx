import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Grid } from 'react-native-easy-grid';
import { Text } from 'native-base';
import ImageBlurLoading from 'react-native-image-blur-loading';

const imageWidth = (Dimensions.get('window').width / 4) * 3;

export default function PostComponent({ content }) {
  return (
    // Post
    <View style={[styles.container, styles.shadowBox]}>
      {/* 사진 */}
      <View style={[styles.shadowBox, { padding: 6 }]}>
        <ImageBlurLoading
          withIndicator
          thumbnailSource={{ uri: content.image }}
          source={{ uri: content.image }}
          style={styles.image}
        />
      </View>
      {/* End of 사진 */}

      {/* 본문 */}
      <View style={[styles.border, { marginTop: 15 }]}>
        {/* Desc */}
        <Text style={[styles.desc]}>{content.desc}</Text>
      </View>
      <Text style={[styles.grey, styles.date]}>{content.date}</Text>
      {/* End of 본문 */}
    </View>
    // End of Post
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    alignSelf: 'center',
    alignItems: 'center',
  },
  shadowBox: {
    backgroundColor: 'white',
    elevation: 5,
  },
  border: {
    width: imageWidth + 10,
    minHeight: imageWidth / 2,
    borderColor: 'black',
    borderWidth: 2,
    padding: 5,
  },
  image: { width: imageWidth, height: imageWidth },
  desc: {
    fontSize: 13,
    textDecorationLine: 'underline',
    margin: 5,
  },
  date: {
    fontSize: 10,
    color: 'grey',
    marginTop: 10,
  },
  grey: { color: 'grey' },
});
