import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'native-base';

export default function TitleComponent({ content }) {
  return (
    // 제목
    <View
      style={[
        styles.shadowBox,
        { borderRadius: 10, alignSelf: 'center', marginVertical: 15 },
      ]}
    >
      <View
        style={{
          borderRadius: 10,
          borderColor: 'red',
          borderWidth: 2,
          paddingHorizontal: 10,
          paddingVertical: 5,
          margin: 5,
        }}
      >
        <Text numberOfLines={1} style={styles.title}>
          {content.title}
        </Text>
      </View>
    </View>
    // End of 제목
  );
}

const styles = StyleSheet.create({
  shadowBox: {
    backgroundColor: 'white',
    elevation: 10,
  },
  title: {
    fontWeight: '700',
    fontSize: 15,
    marginVertical: 5,
  },
});
