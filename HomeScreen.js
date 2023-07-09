import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// import {useDispatch} from 'react-redux';
// import {useSelector} from 'react-redux';
const HomeScreen = ({navigation}) => {
  // const dispatch = useDispatch();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hello, World!</Text>
      <TouchableOpacity
        style={{
          width: 400,
          backgroundColor: 'gray',
          height: 50,
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
        }}
        onPress={() => navigation.navigate('Second')}>
        <Text style={{color: 'black'}}>Click Here To Go Second Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
