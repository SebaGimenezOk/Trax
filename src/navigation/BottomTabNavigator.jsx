import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StackNavigator from './StackNavigator'
import LoginNavigator from './LoginNavigator'
import { Profile, SearchInput } from '../screens/ index';
import { colors } from '../constants/colors'
import SearchNavigator from './SearchNavigator';
import AntDesign from '@expo/vector-icons/AntDesign'
import ProfileNavigator from './ProfileNavigator';


const BottomTab = createMaterialBottomTabNavigator()

function BottomTabNavigator() {
    return (
        <BottomTab.Navigator
            initialRouteName='Inicio'
            barStyle={{
                backgroundColor: colors.tertiary, height: 60, justifyContent: 'center'
            }}
            labeled={false}
            activeColor="#140821"
            inactiveColor="#140821"
            screenOptions={{
                headerShown: false,
            }}
        >
            <BottomTab.Screen
                name="Inicio"
                component={StackNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={30} />),
                }} />

            <BottomTab.Screen
                name="Search"
                component={SearchNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="boombox" color={color} size={30} />),
                }} />

            <BottomTab.Screen
                name="Profile"
                component={ProfileNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="alien" color={color} size={30} />),
                }} />



        </BottomTab.Navigator>
    )
}
export default BottomTabNavigator


