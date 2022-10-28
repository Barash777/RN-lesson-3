import React from 'react';
import {StyleSheet, Text, View, Button} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useNavigation} from "@react-navigation/native";

function HomeScreen() {
    const navigation = useNavigation()
    
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Text>Home Screen</Text>
            <Text>Home Screen</Text>
            <Button title={'to Users'} onPress={() => {
            }}/>
        </View>
    );
}

function UsersScreen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Users Screen</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

export const Main = () => {
    return (
        <View style={styles.container}>
            <Stack.Navigator>
                <Stack.Screen name={'Home'} component={HomeScreen}/>
                <Stack.Screen name={'Users'} component={UsersScreen}/>
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
