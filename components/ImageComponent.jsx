import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import ImageBlurLoading from 'react-native-image-blur-loading';

const imageWidth = Dimensions.get('window').width / 3;

export default function ImageComponent({ navigation, content }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DetailPage', { content });
      }}
      style={styles.container}
    >
      <ImageBlurLoading
        withIndicator
        thumbnailSource={{ uri: content.image }}
        source={{ uri: content.image }}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', alignSelf: 'center' },
  image: {
    width: imageWidth,
    height: imageWidth,
  },
});
