import React, { Component } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

class cart extends Component {
    render() {
        return (
            <View style={{justifyContent:'space-evenly'}}>
            <Text>
                Cart
            </Text>
            <TouchableOpacity style={{alignItems:'center', alignSelf:'center'}}><Text>
               Cart Items </Text></TouchableOpacity>
        </View>
        )
    }
}

export default cart
