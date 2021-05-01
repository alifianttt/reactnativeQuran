import 'react-native-gesture-handler'
import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import { createStackNavigator} from '@react-navigation/stack'
import Home from './Home'
import DetailHome from './DetailHome'

const Stack = createStackNavigator()

const HomeStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Home"
            component={ Home }/>
            <Stack.Screen
            name="DetailHome"
            component={ DetailHome }/>
        </Stack.Navigator>
    )
}

export default HomeStack