import {useNavigation} from "@react-navigation/native";
import {Button, Text, View} from "react-native";
import React from "react";

export function DetailsScreen() {
    const navigation = useNavigation()

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Details Screen</Text>
            <Button title={'To Home'} onPress={() => {
                navigation.navigate('Home')
            }}/>
        </View>
    );
}