import React from 'react';

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

import MyProductCard from './components/MyProductCard';

function Dashboard({navigation}) {
  return (
    <ScrollView>
      <MyHeader />
      <View style={styles.productList}>
        <MyProductCard navigation={navigation} />
        <MyProductCard navigation={navigation} />
        <MyProductCard navigation={navigation} />
        <MyProductCard navigation={navigation} />
        <MyProductCard navigation={navigation} />
        <MyProductCard navigation={navigation} />
        <MyProductCard navigation={navigation} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#9FE2BF',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  myLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#016690',
  },
  productList: {
    flex: 1,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
export default Dashboard;
