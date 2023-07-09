import React, {useEffect, useState} from 'react';

import {
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  // Alert
} from 'react-native';
import MyHeader from './components/MyHeader';

function MyCart({navigation}) {
  const [myTotal, setMyTotal] = useState(0);
  const calculateTotal = () => {
    let mainTotal = 0;
    myCartItems &&
      myCartItems.map((data, i) => {
        const totalPrice = data.price * data.qty;
        mainTotal = mainTotal + totalPrice;
      });
    setMyTotal(mainTotal);
  };
  const [myCartItems, setMyCartItems] = useState([
    {
      id: 1,
      name: 'Mobile',
      image: 'https://reactnative.dev/img/tiny_logo.png',
      price: 200,
      qty: 2,
    },
    {
      id: 2,
      name: 'Laptop',
      image: 'https://reactnative.dev/img/tiny_logo.png',
      price: 300,
      qty: 5,
    },
    {
      id: 3,
      name: 'Watch',
      image: 'https://reactnative.dev/img/tiny_logo.png',
      price: 900,
      qty: 1,
    },
  ]);
  useEffect(() => {
    calculateTotal();
  }, []);
  return (
    <View>
      <MyHeader />
      <ScrollView>
        <View style={styles.singleCartView}>
          <Text style={styles.singleCartLabel}>Sr No</Text>
          <Text style={styles.singleCartLabel}>Name</Text>
          <Text style={styles.singleCartLabel}>Image</Text>

          <Text style={styles.singleCartLabel}>Price</Text>
          <Text style={styles.singleCartLabel}>Qty</Text>
          <Text style={styles.singleCartLabel}>Total ₹</Text>
        </View>
        {myCartItems &&
          myCartItems.map((data, i) => {
            return (
              <View style={styles.singleCartView}>
                <Text style={styles.singleCartLabel}>{i + 1}</Text>
                <Text style={styles.singleCartLabel}>{data.name}</Text>
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: `${data.image}`,
                  }}
                />
                <Text style={styles.singleCartLabel}>{data.price}</Text>
                <Text style={styles.singleCartLabel}>{data.qty}</Text>
                <Text style={styles.singleCartLabel}>
                  {data.qty * data.price}₹
                </Text>
              </View>
            );
          })}
        <View style={styles.singleCartView}>
          <Text style={styles.singleCartLabel}>Total</Text>
          <Text style={styles.singleCartLabel} />
          <Text style={styles.singleCartLabel} />

          <Text style={styles.singleCartLabel} />
          <Text style={styles.singleCartLabel} />
          <Text style={styles.singleCartLabel}>{myTotal} ₹</Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          width: 200,
          height: 50,
          alignSelf: 'center',
          borderRadius: 20,
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('ThankYou');
        }}>
        <Text style={{color: 'white'}}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  singleCartView: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid black',
  },
  singleCartLabel: {
    paddingLeft: 20,
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
  },
  tinyLogo: {
    marginLeft: 20,
    width: 50,
    height: 50,
    // alignSelf: "center"
  },
});

export default MyCart;
