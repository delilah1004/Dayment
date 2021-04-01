import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Header, Left, Body, Right, Button, Title } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

const logo = require('../assets/logo.png');

export default function HeaderComponentWithBack({ navigation }) {
  return (
    <Header style={styles.header} transparent>
      <Button transparent onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" color="grey" size={26} />
      </Button>
      <Button transparent>
        <Image source={logo} style={styles.logoImage} />
      </Button>
      <Button transparent>
        <Ionicons name={'chevron-back'} color="transparent" size={26} />
      </Button>
    </Header>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    justifyContent: 'space-between',
  },
  logoImage: {
    width: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
