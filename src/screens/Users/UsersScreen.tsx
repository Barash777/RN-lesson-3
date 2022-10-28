import {useNavigation} from "@react-navigation/native";
import {Button, Text, View} from "react-native";
import React from "react";

export function UsersScreen() {
    const navigation = useNavigation()

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Users Screen</Text>
            <Button title={'To Details'} onPress={() => {
                navigation.navigate('Details')
            }}/>
        </View>
    );
}