import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import List from './list';
import Home from './home'
import Cart from './cart'


const appStackNavigator = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions:{
                title:'Playlists Home',
                // headerStyle:{backgroundColor: '#eee'}    We can overwrite defaultNavigationOptions
            }
        },
        List: {
            screen:List,
            navigationOptions:{
                title:'Playlist Details',
            }
        },
        Cart: {
            screen:Cart
        }
    },
    {
        defaultNavigationOptions:{
            headerTintColor:'#444', // Text Color
            headerStyle:{backgroundColor: '#ddd'}
        }
    }
    // {
    //     initialRouteName:'Home'
    // }
)
export default createAppContainer(appStackNavigator)

