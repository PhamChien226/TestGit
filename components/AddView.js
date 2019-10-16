import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import InfoAddComponent from './InfoAddComponent'
import InfoMechantComponent from './InfoMechantComponent'
import LocationMerchant from './LocationMerchant'

export default class AddView extends Component {
    render() {
        return (
            <View style={styles.container}>
               <View style={{height:210,backgroundColor:'lightblue'}}></View>
               <InfoAddComponent/>
               <InfoMechantComponent/>
               <LocationMerchant/>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
