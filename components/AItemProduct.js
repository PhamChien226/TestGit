import React, { Component } from "react";
import { Text, StyleSheet, View, Image, Dimensions } from "react-native";
import { Entypo } from '@expo/vector-icons';

let { width, height } = Dimensions.get("window");
export default class AItemProduct extends Component {
  render() {
    const {
      item,
      item: {
        ad_id,
        list_id,
        list_time,
        account_id,
        account_oid,
        subject,
        body,
        date,
        account_name,
        shop_alias,
        category,
        area,
        area_name,
        region,
        region_name,
        company_ad,
        type,
        price,
        price_string,
        image,
        number_of_images,
        shop
      }
    } = this.props;
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri:
            image
          }}
          resizeMode="contain"
        />
        <View style={styles.infoAdd}>
          <Text style={styles.textTitle}>{subject}</Text>
          <Text style={styles.textPrice}>{price_string}</Text>
          <View style={styles.infoExtraWrapper}>
            <View style={styles.infoExtra}>
              <Text style={styles.textExtra}>icon </Text>
              {/* <Text style={styles.textExtra}>| Tin ưu tiên </Text> */}
              <Text style={styles.textExtra}> | {region_name}</Text>
            </View>
            <View style={styles.saveAdd}>
              <Entypo name="heart-outlined" size={20} color='red'/>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 120,
    width: width,
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 5,
    borderBottomColor:"#c4c4c4",
    borderWidth: 1,
    borderColor:"white"
  },
  image: {
    flex: 0.3,
    height: 110
  },
  infoAdd: {
    flex: 0.65,
    height:110,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  infoExtraWrapper:{
      flexDirection:'row',
      width:'100%',
      justifyContent:'space-between',
  },
  textTitle:{
      fontSize:18,
      // height:50  
  },
  textPrice:{
      fontSize:16,
      color:'red',
      fontWeight:'500'
  },
  infoExtra: {
    flexDirection: "row",
    alignItems: "center",
  },
  textExtra:{
      color:'#c4c4c4',
      fontWeight:'600'
  },
  saveAdd:{
      paddingLeft:10,

  }
});
