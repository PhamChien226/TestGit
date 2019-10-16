import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
// import AItemProduct from './components/AItemProduct' 
import RequestComponent from './components/RequestComponent' 
import AddView from './components/AddView' 
import FingerPrint from './components/FingerPrint' 
import FilterComponent from './components/FilterComponent' 
import FilterCategory from './components/FilterCategory' 
import ModalProvincial from './components/ModalProvincial' 

export default class App extends Component {

  addProvincial=()=>{
    this.refs.addModal.showAddModal();
  }
  render() {
    return (
      <View style={styles.container}>
        <RequestComponent/>
        {/* <AddView/> */}
        {/* <FingerPrint/> */}
        {/* <FilterComponent addProvincial={this.addProvincial}/> */}
        {/* <FilterCategory/> */}
        {/* <ModalProvincial ref={'addModal'} transparent={this}/> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:15,
    backgroundColor:"#fff"
  }
})

// import * as React from 'react';
// import { Button, Image, View } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import Constants from 'expo-constants';
// import * as Permissions from 'expo-permissions';

// export default class ImagePickerExample extends React.Component {
//   state = {
//     image: null,
//   };

//   render() {
//     let { image } = this.state;

//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button
//           title="Pick an image from camera roll"
//           onPress={this._pickImage}
//         />
//         {image &&
//           <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
//       </View>
//     );
//   }

//   componentDidMount() {
//     this.getPermissionAsync();
//   }

//   getPermissionAsync = async () => {
//     if (Constants.platform.ios) {
//       const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
//       if (status !== 'granted') {
//         alert('Sorry, we need camera roll permissions to make this work!');
//       }
//     }
//   }

//   _pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//     });

//     console.log(result);

//     if (!result.cancelled) {
//       this.setState({ image: result.uri });
//     }
//   };
// }
// import React from "react";
// import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";
// import { Rating, AirbnbRating } from "react-native-elements";
// import ItemProduct from './components/ItemProduct'

// urlAPI = 'https://chotot-recommendersys.appspot.com/tech?page=0&category=laptop&city=ha-no-i&min_price=5000000&max_price=10000000&fbclid=IwAR2U1krLKBhxOLN5CbhpH-bpRdYtz-XtsFoLOGf4dOo7MpBRnoTSyMJge50'
// export default class App extends React.Component {

  // state= {
  //   // listitem:[]
  // }
  // onPress = async () => {
  //   // const response = await fetch(
  //   //   "https://chotot-recommendersys.appspot.com/register",
  //   //   {
  //   //     method: "POST",
  //   //     headers: {
  //   //       Accept: "application/json",
  //   //       "Content-Type": "application/json"
  //   //     },
  //   //     body: JSON.stringify({
  //   //       phone: "1041",
  //   //       password: "abc"
  //   //     })
  //   //   }
  //   // );
  //   const response =  await fetch(urlAPI)
  //   const dataJson = await response.json();
  //   this.setState({
  //     listitem: dataJson.ads_list_infor
  //   })
  // };

  // renderItem =(item)=>{
  //   return (
  //     <ItemProduct item = {item.item}/>
  //   )
  //   // console.log(item.item.basics.city);
  //   // <Text>test</Text>
  // }
//   render() {
//     return (
//       <View style={styles.container}>
        
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     paddingTop:20
//   }
// });
//  // ratingCompleted(rating) {
//   //   console.log("Rating is: " + rating)
//   // }
//  {/* <AirbnbRating
//           count={5}
//           // reviews={["Terrible", "Bad", "Meh", "OK", "Good"]}
//           defaultRating={0}
//           size={20}
//           showRating={false}
//         />

//         {/* <Rating
//           showRating
//           onFinishRating={this.ratingCompleted}
//           style={{ paddingVertical: 10 }}
//         /> */} 


//       //REquet
//       // <TouchableOpacity onPress={this.onPress}>
//       //     <Text>Request</Text>
//       //   </TouchableOpacity>
//       //     <FlatList
//       //     data={this.state.listitem}
//       //     renderItem={this.renderItem}
//       //     // keyExtractor ={(item,index) => this.item.item.basics.price}
//       //     />