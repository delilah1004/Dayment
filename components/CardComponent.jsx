import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import { Icon, Text, Card, CardItem } from 'native-base';
import ImageBlurLoading from 'react-native-image-blur-loading';

const image = require('../assets/background2.png');

export default function CardComponent({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DetailPage');
      }}
      style={styles.container}
    >
      <Card style={styles.card} transparent>
        <CardItem transparent>
          <ImageBlurLoading
            withIndicator
            thumbnailSource={image}
            source={image}
            style={styles.image}
          />
        </CardItem>
        <CardItem style={{ marginTop: -10 }}>
          <Grid>
            <Col>
              <Text numberOfLines={1} style={styles.title}>
                오늘의 일기 제목
              </Text>
              <Text style={[styles.grey, styles.writer]}>2021.03.29</Text>
            </Col>
            {/* <Col size={2}>
              <Grid>
                <Col>
                  <Icon name="chatbox-outline" style={styles.grey} />
                </Col>
                <Col>
                  <Icon name="heart-outline" style={styles.grey} />
                </Col>
              </Grid>
            </Col> */}
          </Grid>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', alignSelf: 'center' },
  card: {
    width: '100%',
    alignSelf: 'center',
  },
  image: { height: 200, width: '100%', borderRadius: 10 },
  grey: { color: 'grey' },
  writer: { fontSize: 12, color: 'grey', marginLeft: 10 },
  title: { fontWeight: '700', fontSize: 15, marginLeft: 10 },
});
