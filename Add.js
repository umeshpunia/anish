import { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
  ActivityIndicator,
  View,
} from "react-native";

import firebase from "./firebase";

export default function Add() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  async function addUser() {
    try {
      const dbRef = firebase.firestore().collection("rn");
      let res=await dbRef.add({ name, mobile });
      console.log(res)
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <View>
      <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder={"Name"}
            value={name}
            onChangeText={(val) => setName(val, "name")}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder={"Mobile"}
            value={mobile}
            onChangeText={(val) => setMobile(val, "mobile")}
          />
        </View>

        <View style={styles.button}>
          <Button title="Add User" onPress={addUser} color="#19AC52" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});
