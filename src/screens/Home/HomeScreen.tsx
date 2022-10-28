import {useNavigation} from "@react-navigation/native";
import {Button, Text, View} from "react-native";
import React from "react";

export function HomeScreen() {
    const navigation = useNavigation()

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