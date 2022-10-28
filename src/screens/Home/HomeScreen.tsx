import {Button, Text, View} from "react-native";
import React from "react";
import {useAppNavigation} from "../types";

export function HomeScreen() {
    const navigation = useAppNavigation()

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Text>Home Screen</Text>
            <Text>Home Screen</Text>
            <Button title={'To Users'} onPress={() => {
                navigation.navigate('Users')
            }}/>
        </View>
    );
}