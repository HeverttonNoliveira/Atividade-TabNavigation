import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SplashScreen from "./components/SplashScreen";
import HomeScreen from "./components/HomeScreen";
import ProdScreen from "./components/ProdScreen";

import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default props => {
    return(
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                <Tab.Navigator initialRouteName="Spash"
                 screenOptions={
                    ({route}) =>(
                        {
                            tabBarIcon:({ focused, color, size}) => {
                                let iconName;

                                if(route.name === 'Início'){
                                    iconName = focused
                                    ? 'planet'
                                    : 'planet-outline';
                                }else if(route.name === 'Catálago'){
                                    iconName = focused
                                    ? 'home'
                                    : 'home-outline';
                                }else if(route.name === 'Produto'){
                                    iconName = focused
                                    ? 'pricetag'
                                    : 'pricetag-outline';
                                }

                                return <Icon name={iconName} size={24} color={color} />
                            },
                            tabBarActiveTintColor: '#0E46A3',
                            tabBarInactiveTintColor: 'gray',
                        }
                    )
                }
                >
                    <Tab.Screen name="Início" component={SplashScreen} options={{headerTitleAlign:"center"}}/>
                    <Tab.Screen name="Catálago" component={HomeScreen} options={{headerTitleAlign:"center"}}/>
                    <Tab.Screen name="Produto" component={ProdScreen} options={{headerTitleAlign:"center"}}/>
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}