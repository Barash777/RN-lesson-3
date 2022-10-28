import {Button, Text, View} from "react-native";
import React from "react";
import {DetailsPropsType, useAppNavigation} from "../types";

export function DetailsScreen({route}: DetailsPropsType) {
    const navigation = useAppNavigation()
    const {id, name, isDone} = route.params

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Details Screen</Text>
            <Text>{id}</Text>
            <Text>{name}</Text>
            <Text>{isDone ? 'true' : 'false'}</Text>
            <Button title={'To Home'} onPress={() => {
                navigation.navigate('Home')
            }}/>
        </View>
    );
}