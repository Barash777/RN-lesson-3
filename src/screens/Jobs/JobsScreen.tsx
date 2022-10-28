import React from 'react';
import {useAppNavigation} from "../types";
import {Button, Text, View} from "react-native";

export const JobsScreen = () => {
    const navigation = useAppNavigation()

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Jobs Screen</Text>
            {/*<Button title={'To Details'} onPress={() => {
                navigation.navigate('Details', {id: 1, isDone: true, name: 'Kalinara'})
            }}/>*/}
        </View>
    );
};