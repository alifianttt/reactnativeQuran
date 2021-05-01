import 'react-native-gesture-handler'
import React, {useState, useEffect} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, ScrollView} from 'react-native'
import { URLDetail} from '../data/RemoteData'
import { exp } from 'react-native-reanimated'
import Sound from 'react-native-sound'
const DetailSurat = ({route, navigation}) => {
    const [detail, setDetail] = useState([])
    const [isLoad, setLoad] = useState(true)
    const [isPlay, setPlay] = useState(true)
    let audioFile = route.params.mpFile
    let files = audioFile.replace('http', 'https')

    const getSurah = () => {
        Promise.all(
            fetch(`${URLDetail}${route.params.idSurat}`)
            .then((res) => res.json())
            .then((json) => setDetail(json))
            .finally(() => setLoad(false))
        )
    }
    
    let soundFile = new Sound(files, Sound.MAIN_BUNDLE, (e) =>{
        if(e){
            console.log('Failed to load', e)
            return
        }

        
    })
    const playTrack =  () => {
        isPlay ? soundFile.play((succes) => {
            if(succes){
                console.log('succes play')
            } else {
                console.log('failed play')
            }
        }) : soundFile.pause()
        return () => setPlay(isPlay ? false : true)
    }
    
    useEffect(() =>{
        getSurah()
    }, [])

    const play = () => {
        soundFile.play((succes) => {
            if(succes){
                console.log('succes play')
            } else {
                console.log('fail play')
            }
        })
    }
    return(
        <View style={{ padding: 10}}>
            {isLoad ? <ActivityIndicator
            size="large"
            color="green"/> : 
            <View>
            
            <TouchableOpacity onPress={() => playTrack()}>
                <Text>{ isPlay ? 'Play' : 'Pause'}</Text>
            </TouchableOpacity>

            <FlatList
            data={detail}
            keyExtractor={({nomor}, index) => nomor}
            renderItem={({item}) => (
                <View>
                    <Text style={{ fontSize:23 }}>{item.ar}</Text>
                    <Text>{item.id}</Text>
                </View>
            )}/>
            </View>
            }

            
        </View>
    )
}

export default DetailSurat