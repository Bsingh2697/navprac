import React, { Component } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

class list extends Component {
    render() {
        const {navigation} = this.props
        console.log(this.props)
        return (
                <View style={{justifyContent:'space-evenly'}}>
                <Text>
                    Playlist Below:
                </Text>
                <TouchableOpacity style={{backgroundColor:'red'}}>
                    <Text> Song: {navigation.getParam('title')} </Text>
                    <Text> Rating: {navigation.getParam('rating')} </Text>
                    <Text> Songs: {navigation.getParam('songs')} </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default list
