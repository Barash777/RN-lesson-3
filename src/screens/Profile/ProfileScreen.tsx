import React from 'react';
import {useAppNavigation} from "../types";
import {Button, Text, View} from "react-native";

export const ProfileScreen = () => {
    const navigation = useAppNavigation()

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Profile Screen</Text>
            <Button title={'To Settings'} onPress={() => {
                navigation.navigate('Home', {screen: 'Settings'})
            }}/>
            <Button title={'To Jobs'} onPress={() => {
                navigation.navigate('Home', {screen: 'Jobs'})
            }}/>
        </View>
    );
};

//navigation.navigate('Name')
//navigation.navigate('Name1')
//navigation.navigate('Name2')

//navigation.navigate('Home', { screen: 'Profile' })
//navigation.navigate('Home', { screen: 'Home' })
//navigation.navigate('Home', { screen: 'Jobs' })

//navigation.navigate('Home', { screen: 'Profile', {screen: 'Name5'} })
//navigation.navigate('Home', { screen: 'Home', {screen: 'Name6'} })
//navigation.navigate('Home', { screen: 'Jobs', {screen: 'Name7'} })