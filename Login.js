import React, {useState} from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  // Alert
} from 'react-native';

function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');
  const [selectedEmail, setSelectedEmail] = useState('admin@admin.com');
  const [selectedPassword, setSelectedPassword] = useState('admin');

  const checkLogin = () => {
    setErrorText('');
    console.log('checkLogin clicked');
    if (password.length === 0) {
      setErrorText('Please Enter An Password');
    } else if (email.length === 0) {
      setErrorText('Please Enter An Email');
    } else if (password !== selectedPassword) {
      setErrorText('Please Enter Correct Password');
    } else if (email !== selectedEmail) {
      setErrorText('Please Enter Correct Email ID');
    } else {
      navigation.navigate('Dashboard');
      console.log('Login sucess');
    }
  };

  return (
    <View>
      <View style={styles.mainView}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text style={styles.myLogo}>My Company</Text>
      </View>
      <View style={styles.mainView}>
        <Text>Email ID</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Enter Email ID"
          keyboardType="email"
        />
      </View>

      <View style={styles.mainView}>
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Enter Password"
          keyboardType="text"
          secureTextEntry={true}
        />
      </View>
      {errorText.length > 0 && (
        <View style={styles.ErrorView}>
          <Text style={styles.ErrorText}>{errorText} </Text>
        </View>
      )}

      <View style={styles.mainView}>
        <TouchableOpacity onPress={checkLogin} style={styles.myButton}>
          <Text style={styles.myLabel}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  mainView: {
    padding: 10,
  },
  myButton: {
    alignItems: 'center',
    backgroundColor: '#2A5C99',
    padding: 10,
  },
  myLabel: {
    color: '#fff',
  },
  tinyLogo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  myLogo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#20B3AB',
    textAlign: 'center',
    marginTop: 20,
  },
  ErrorView: {
    backgroundColor: '#FFA895',
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    // height:50
  },
  ErrorText: {
    color: 'black',
  },
});

export default Login;
