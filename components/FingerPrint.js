import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
// import DeviceInfo from "react-native-device-info";
// import { getUniqueId, getManufacturer } from "react-native-device-info";
import { AsyncStorage } from "react-native";
import * as Random from "expo-random";
// import {Constants} from 'expo'

export default class FingerPrint extends Component {
  constructor(props) {
    super(props);

    this.state = {
        isloading:false,
      deviceId: "chua co"
    };
  }

  _storeData = async () => {
    var randomString = require("random-string");
    var uniqueId = randomString({ length: 20 });
    console.log("set unique id");
    try {
      await AsyncStorage.setItem("@idtest5", uniqueId);
      setTimeout(() => {
        this.setState({
          isloading: false
        });
        
    }, 3000);
      //   this.setState()
    } catch (error) {
      // Error saving data
    }
  };
  componentDidMount = async () => {
    //   const value = await AsyncStorage.getItem("@idtest");
    //   console.log("value: "+value)
    console.log("component Did mount")
    this.setState({
        isloading: true
      });
    
    try {
        console.log("kiểm tra Id")
      const value = await AsyncStorage.getItem("@idtest5");
      console.log("value: " + value);
      if (value !== null) {
        // We have data!!
        setTimeout(() => {
            this.setState({
              isloading: false
            });
                  
              }, 3000);
      } else {
        this._storeData();
      }
    } catch (error) {
      // Error retrieving data
    }
    console.log("End Did mount")
    // this.setState({
    //   deviceId: value
    // });
};
  onPress = async () => {
    // await AsyncStorage.removeItem('@idDevice')
    try {
      // const value = await AsyncStorage.getItem("@idDevice");
      // await AsyncStorage.setItem("@idtest", "uniqueId");
      const value = await AsyncStorage.getItem("@idtest5");
      console.log("value: " + value);
      if (value !== null) {
        // We have data!!
        //   console.log(value);
        //   console.log(object)
        this.setState({
          deviceId: value
        });
      } else {
        this._storeData();
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  render() {
      console.log("render")
    //   console.log(this.state.deviceId)
    if (this.state.isloading == true)
      return (
        <View style={styles.container}>
          <Text>show Splash</Text>
        </View>
      );
    else
      return (
        <View style={styles.container}>
          <Text>show Category</Text>
        </View>
      );
    // return (
    //   <View style={styles.container}>
    //     <TouchableOpacity onPress={this.onPress}>
    //       <Text>Get Id Android</Text>
    //     </TouchableOpacity>
    //     <Text>{this.state.deviceId}</Text>
    //   </View>
    // );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 15
  }
});
