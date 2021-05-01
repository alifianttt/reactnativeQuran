import 'react-native-gesture-handler'
import React from 'react'
import { View, Text, TouchableOpacity, Button} from 'react-native'
import { connect } from 'react-redux'
class DetailHome extends React.Component{
    render(){
        return(
            <View>
                <Text> Detailmu</Text>
                {
                    this.props.subjects.all_subjects.map((subject, index) =>(
                        <Button
                        key={ subject}
                        title={ `Add ${ subject}`}
                        onPress={() => this.props.addSubject(index)}/>
                    ))
                }

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                    <Text>Back Home</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateProps = (state) => {
    const { subjects } = state
    return { subjects }
}
export default connect(mapStateProps)(DetailHome)