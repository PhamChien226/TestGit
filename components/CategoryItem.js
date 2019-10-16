import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default class CategoryItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                style={styles.button}
                onPress={()=>{
                    alert('You onPress')
                }}
                />
                {this.props.item.icon}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:50,
        width:50,
        backgroundColor:"#F2F2F2",
        borderRadius:25,
        padding:15,
        justifyContent:'center',
        alignItems:'center',
        
    },
    button:{
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        width:50,
        height:50,
        backgroundColor:"lightblue"
    }
})
