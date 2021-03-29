import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Header, Left, Icon, Right, Button } from 'native-base';

const logo = require('../assets/logo.png');

export default function HeaderComponent() {
  return (
    <Header style={styles.header} transparent>
      <Left>
        <Button transparent>
          <Image source={logo} style={styles.logoImage} />
        </Button>
      </Left>
      <Right>
        <Icon name="ellipsis-horizontal" style={{ color: 'deeppink' }} />
      </Right>
    </Header>
  );
}

const styles = StyleSheet.create({
  header: {
    marginVertical: 5,
    justifyContent: 'center',
  },
  logoImage: {
    width: 100,
    resizeMode: 'contain',
  },
});
