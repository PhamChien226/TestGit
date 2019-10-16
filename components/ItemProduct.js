import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class ItemProduct extends Component {
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
      <View>
        <Text> {subject} </Text>
        {/* <Text> {title} </Text> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({})

// import React, { Component } from 'react'
// import { Text, StyleSheet, View } from 'react-native'

// export default class ItemProduct extends Component {
//     render() {
//         const {
//           item: {
//             basics: { price,subject,city }
//           }
//         } = this.props;
//         console.log("Item : " + this.props.item.basics)
//         return (
//             <View style={{height:30,backgroundColor:'darkblue'}}>
//                 <Text>Title: </Text>
//                 <Text>City: {city} </Text>
//                 <Text> Gia la{price} </Text>
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({})
