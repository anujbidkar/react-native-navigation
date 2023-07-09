import React from "react";

import {
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
  // Alert
} from "react-native";

function MyHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.myLabel}>My Company</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#9FE2BF",
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MyHeader;
