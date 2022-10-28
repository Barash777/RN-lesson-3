import {View} from "react-native";
import React from "react";
import {NStackParamList, useAppNavigation} from "../types";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {JobsScreen} from "../Jobs/JobsScreen";
import {ProfileScreen} from "../Profile/ProfileScreen";
import {SettingsScreen} from "../Settings/SettingsScreen";

const Stack = createNativeStackNavigator<NStackParamList>();

export function HomeScreen() {
    const navigation = useAppNavigation()

    return (
        <View style={{flex: 1}}>
            <Stack.Navigator>
                <Stack.Screen name={'Profile'} component={ProfileScreen}/>
                <Stack.Screen name={'Jobs'} component={JobsScreen}/>
                <Stack.Screen name={'Settings'} component={SettingsScreen}/>
            </Stack.Navigator>
        </View>
    );
}