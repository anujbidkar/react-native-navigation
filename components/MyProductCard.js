import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  // Alert
} from 'react-native';

function MyProductCard({navigation}) {
  return (
    <View style={styles.cardView}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text style={styles.productName}>Product Name</Text>
      <Text style={styles.productName}>Product Price</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('MyCart');
        }}
        style={styles.myButton}>
        <Text style={styles.myLabel}>+ Card</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardView: {
    margin: 10,
    width: 200,
    height: 200,
    // flexbias: "50%",
    backgroundColor: '#CCEFF8',
  },
  tinyLogo: {
    marginTop: 10,
    width: '70%',
    height: '40%',
    alignSelf: 'center',
    borderRadius: 20,
  },
  productName: {
    padding: 5,
  },
  myLabel: {
    color: '#fff',
  },
  myButton: {
    alignItems: 'center',
    backgroundColor: '#2A5C99',
    padding: 10,
    width: '60%',
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 10,
  },
});
export default MyProductCard;
