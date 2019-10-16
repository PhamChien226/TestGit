import React, { Component } from 'react'
import { Text, StyleSheet, View,Image,TouchableOpacity,Dimensions } from 'react-native'
import {Avatar, Badge} from 'react-native-elements';
import {AntDesign} from '@expo/vector-icons'

const Status = ()=>{
    return (
      <View>
        <View style={styles.status}></View>
        <Text style={{ color: "gray", margin: 5 }}>Đang hoạt động</Text>
      </View>
    );
}

let {width,height} = Dimensions.get('window')
export default class InfoMechantComponent extends Component {
    
    render() {
        //dung reat nativ elements
        //contact su dung buttonGruop
        return (
          <View style={styles.container}>
            <View style={styles.infoPersonalWrapper}>
              <View style={styles.infoPersonal}>
                <View>
                  <Avatar
                    rounded
                    source={{
                      uri: "https://randomuser.me/api/portraits/men/41.jpg"
                    }}
                    size="medium"
                  />

                  <Badge
                    status="success"
                    containerStyle={{ position: "absolute", top: 4, right: 4 }}
                  />
                </View>
                <Text style={styles.nameMerchant}>Vi Tính 126</Text>
                {/* neu  muon them status thi lam mot component Status roi truyen props status vao return
                  tuy vao ... */}
              </View>
              <TouchableOpacity style={styles.button} activeOpacity={1}>
                <Text style={styles.textButton}>Xem cửa hàng</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.infoMerchantWrapper}>
                  <View style={styles.infoMerchant}>
                    <Text style={{color:'gray',fontSize:13,paddingVertical:3}}>Cửa Hàng</Text>
                    <AntDesign name="home" size={25} color='#FFBA00'/>
                  </View>
                  <View style={{height:22,width:1,backgroundColor:'gray',marginTop:20}}></View>
                  <View style={styles.infoMerchant}>
                    <Text style={{color:'gray',fontSize:13,paddingBottom:3,}}>Phản hồi chat</Text>
                    <Text style={{fontWeight:'bold',fontSize:13}}>Thỉnh thoảng</Text>
                  </View>
            </View>

          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    height: 110,
    flexDirection: "column",
    padding: 5,
    marginHorizontal: 10,
    paddingBottom: 5,
    justifyContent: "flex-start",
    borderWidth: 1,
    borderBottomColor: "#c4c4c4",
    borderColor: "white"
  },
  infoPersonalWrapper:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:width*0.9
  },
  infoPersonal: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  nameMerchant: {
    fontWeight: "500",
    paddingLeft: 10
  },
  button: {
    height: 25,
    width: 100  ,
    backgroundColor: "#FFBA00",
    borderRadius: 10,
    marginTop:10
  },
  textButton: {
    alignSelf: "center",
    fontWeight:'500'
  },
  infoMerchantWrapper:{
    height:50,
    flexDirection:'row',
    paddingLeft:40,
    justifyContent:'space-around',
    // backgroundColor:"lightgreen"
  },
  infoMerchant:{
    justifyContent:"center",
    alignItems:'center'
  },
});
