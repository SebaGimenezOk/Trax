import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StackNavigator from './StackNavigator'
import LoginNavigator from './LoginNavigator'
import { colors } from '../constants/colors'


const BottomTab = createMaterialBottomTabNavigator()

function BottomTabNavigator() {
    return (
        <BottomTab.Navigator
            initialRouteName='Inicio'
            barStyle={{
                backgroundColor: colors.tertiary, height:60,justifyContent:'center'
            }}
            labeled={false}
            activeColor="#140821"
            inactiveColor="#140821"
            screenOptions={{
                headerShown:false,
            }}
           >
            <BottomTab.Screen
             name="Inicio"
              component={StackNavigator} 
              options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={30} />),
            }} />
            <BottomTab.Screen name="Login" component={LoginNavigator} options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={30} />),
            }} />
        </BottomTab.Navigator>
    )
}
export default BottomTabNavigator


