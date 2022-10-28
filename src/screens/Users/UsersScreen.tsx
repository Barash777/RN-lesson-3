import {Button, Text, View} from "react-native";
import React from "react";
import {useAppNavigation} from "../types";

export function UsersScreen() {
    const navigation = useAppNavigation()

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Users Screen</Text>
            <Button title={'To Details'} onPress={() => {
                navigation.navigate('Details')
            }}/>
        </View>
    );
}