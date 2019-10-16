import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity,Dimensions } from 'react-native';
import {EvilIcons} from '@expo/vector-icons'

let {width} = Dimensions.get('window')
export default class InfoAddComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textTitle}>DELL 5547, RAM 8G, ssd256, bán hoặc gì đố chơi game</Text>
                <Text style={styles.textPrice}>5.999.999 đ</Text>
                <Text style={styles.textExtra}>3 ngày trước</Text>
                <TouchableOpacity style={styles.button} activeOpacity={1}>
                    <Text style={styles.textButton}>Lưu Tin</Text>
                    <EvilIcons name="heart" size={25} color="red"/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:100,
        flexDirection:'column',
        padding:5,
        marginHorizontal:10,
        paddingBottom:5,
        justifyContent:'flex-start',
        borderWidth:1,
        borderBottomColor:'#c4c4c4',
        borderColor:"white"
    },
    textTitle:{
        fontSize:18,
        height:50,
        fontWeight:'bold'
    },
    textPrice:{
        fontSize:16,
        color:'red',
        fontWeight:'500'
    },
    textExtra:{
        color:'#c4c4c4',
        fontWeight:'300'
    },
    button:{
        position:'absolute',
        top :50,
        left:width *0.75    ,
        right:0,
        bottom:0,
        flexDirection:'row',
        height:30,
        width:90,
        borderColor:'red',
        borderRadius:10,
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center'
    },
    textButton:{
        color:'red',
        alignSelf:"center"
    }

})
