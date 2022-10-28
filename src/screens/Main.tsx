import React from 'react';
import {StyleSheet, View} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeScreen} from "./Home/HomeScreen";
import {UsersScreen} from "./Users/UsersScreen";
import {DetailsScreen} from "./Details/DetailsScreen";
import {StackParamList} from "./types";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createDrawerNavigator} from "@react-navigation/drawer";

// const Stack = createNativeStackNavigator<StackParamList>();
// const Stack = createBottomTabNavigator<StackParamList>();
const Stack = createDrawerNavigator<StackParamList>();

export const Main = () => {
    return (
        <View style={styles.container}>
            <Stack.Navigator
                // initialRouteName={'Users'}
            >
                <Stack.Screen name={'Home'} component={HomeScreen}/>
                <Stack.Screen name={'Users'} component={UsersScreen}/>
                <Stack.Screen name={'Details'} component={DetailsScreen}/>
            </Stack.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
