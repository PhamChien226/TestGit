import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity,FlatList } from 'react-native'
import ItemProduct from './ItemProduct'
import AItemProduct from './AItemProduct'

 let urlAPI='https://gateway.chotot.com/v1/public/ad-listing?app_id=android&cg=5000&limit=20&o=0'
export default class RequestComponent extends Component {
    state= {
        listitem:[]
      }
      onPress = async () => {
        const response =  await fetch(urlAPI)
        const dataJson = await response.json();
        // console.log(dataJson)
        console.log(dataJson.ads)
        this.setState({
          listitem: dataJson.ads
        })
      };

      postRegister =async() =>{
    const respond = await fetch("https://chotot-recommendersys.appspot.com/logging/create", {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "adlist_id": 1,
        "ad_placement": "top",
        "ad_position": 2,
        "ad_source": "stickyad",
        "user_fingerprint": "9fsdasfdasdfas",
        "event_client_time": "2019-09-26T22:30:12",
        "event_server_time": "2019-09-26T22:31:00",
        "page_name": "ADLISTING",
        "page_number": 1,
        "page_device": "HANDY",
        "filter_brand": null,
        "filter_main_category_id": null,
        "filter_category_id": null, 
        "filter_keyword": null,
        "filter_price": "1200000-3000000",
        "filter_region_id": 13000,
        "filter_area_id": null,
        "filter_adtype": null
    }
    )
    });
    console.log(respond)
  }
    
    // renderItem =(item)=>{
    //     return (
    //       // <ItemProduct item = {item.item}/>
    //       <AItemProduct item = {item.item}/>
    //     )
    //   }
    render() {
        
        
        return (
          <View style={styles.container}>
            <TouchableOpacity onPress={this.postRegister}>
              <Text>Request</Text>
            </TouchableOpacity>
            {/* <FlatList
              data={this.state.listitem}
              renderItem={({item,index}) => {
                  return (
                      <AItemProduct item={item} index={index} transparent={this} >

                      </AItemProduct>
                  )
              }}
            //   keyExtractor ={(item,index) => item.}
            /> */}
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
})
     