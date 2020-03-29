import React, { Component } from 'react'
import {View, Text, TouchableOpacity, FlatList} from 'react-native'

class home extends Component {
    constructor(props){
        super(props)
        this.playlists = ([
            {title: 'Bollywood' , rating: 6 , songs:'109' ,key:1},
            {title: 'Punjabi' , rating: 10 , songs:'57' ,key:2},
            {title: 'US Pop' , rating: 8 , songs:'123' ,key:3}
        ])
    }
    render() {
        return (
            <View style={{justifyContent:'space-evenly', width:'100%', height:'100%'}}>
                <Text style={{alignSelf:'center'}}>
                    Hello Welcome to the Home page
                </Text>
                <FlatList
                data={this.playlists}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("List",item)}>
                        <Text> {item.title} </Text>
                    </TouchableOpacity>
                )
            }
                />
            </View>
        )
    }
}

export default home
 