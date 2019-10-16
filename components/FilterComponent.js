import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import {AntDesign} from '@expo/vector-icons'

export default class FilterComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonFilter}
          onPress={() => {
           this.props.addProvincial();
          }}
        >
          <Text>Hồ Chí Minh</Text>
          <AntDesign name="caretdown" size={18} />
        </TouchableOpacity>

        <View style={{ width: 1, height: 20, backgroundColor: "gray" }}></View>

        <TouchableOpacity
          style={styles.buttonFilter}
          onPress={() => {
            alert("You onPress");
          }}
        >
          <Text>Đồ điện tử</Text>
          <AntDesign name="caretdown" size={18} />
        </TouchableOpacity>

        <View style={{ width: 1, height: 20, backgroundColor: "gray" }}></View>

        <TouchableOpacity
        style={[styles.buttonFilter, styles.detailFilter]}
          onPress={() => {
            alert("You onPress");
          }}
        >
          <Text>Lọc</Text>
          <AntDesign name="caretdown" size={18} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 50,
    flexDirection:'row',
    alignItems: "center",
    justifyContent: "space-around",
    borderBottomColor:'gray',
    borderWidth:0.5,
    borderColor:'white'
  },
  buttonFilter: {
      flexDirection:'row',
      justifyContent:"space-between",
      backgroundColor:'red'

  },
  detailFilter:{
      flex:0.15

  },
});
