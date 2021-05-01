import 'react-native-gesture-handler'
import React, {useState, useEffect} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ActivityIndicator} from 'react-native'
import { URL } from '../data/RemoteData'
const HomeList = ({navigation}) => {
    const [data, setData] = useState([])
    const [isLoad, setLoad] = useState(true)
    const getData = () => {
        Promise.all(
            fetch(URL)
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch((err) => console.error(err))
            .finally(() => setLoad(false))
        )
    }

    useEffect(() =>{
        getData()
         
    }, [])
    return(
        <View style={{ padding:10}}>
            {isLoad ? <ActivityIndicator
            size="large"
            color="green"/> : 
            
            <FlatList
            data={data}
            keyExtractor={({nomor}, index) => nomor}
            renderItem={({item}) => (
                <View style={styles.itemStyle}>
                    <TouchableOpacity onPress={() => navigation.navigate('Detail Surat',{idSurat: item.nomor, mpFile: item.audio})}>
                        <Text style={styles.txtItem}>({item.nama}) {item.asma}</Text>
                    </TouchableOpacity>
                </View>
            )}/>
            }
            
        </View>
    )
}

const styles = StyleSheet.create({
    itemStyle:{
        alignItems:'flex-end',
        paddingRight:5,
        marginBottom:5
    },

    txtItem:{
        fontSize:15
    }
})
export default HomeList