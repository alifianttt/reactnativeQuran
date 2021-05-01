import React, { useState, useEffect} from 'react'
import 'react-native-gesture-handler'
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator} from 'react-native'
import {URL} from '../data/RemoteData'
const Login = ({ navigation }) => {

    const getLoad = () => {
        Promise.all(
            fetch(URL)
            .finally(() => navigation.navigate('Home'))
        )
    }
    useEffect(() => {
        getLoad()
    })
    return(
        <View style={styles.container}>
            <View>
            <Image source={require('../assets/kaligrafi.png')} style={styles.image}/>
            </View>
            <View >
                {/* <TouchableOpacity style={styles.btnLogin}
                onPress={() => navigation.navigate('Home')}>
                    <Text style={{ color:'#fff', }}>NEXT</Text>
                </TouchableOpacity> */}

                <ActivityIndicator
                size="large"
                color="red"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
    },
    wrappInput: {
        borderRadius: 10,
        margin: 10,
        borderWidth:0.5
    },
    image:{
        width:190,
        height:190
    },
    btnLogin:{
        alignItems:'center',
        backgroundColor:'red',
        borderRadius:10,
        paddingLeft:10,
        paddingRight:10,
        paddingTop:5,
        paddingBottom:5,
        width: 60
    }
})
export default Login