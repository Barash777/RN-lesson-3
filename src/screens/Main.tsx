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
            <Button title={'To Users'} onPress={() => {
                navigation.navigate('Users')
            }}/>
        </View>
    );
}

function UsersScreen() {
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

function DetailsScreen() {
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

const Stack = createNativeStackNavigator();

export const Main = () => {
    return (
        <View style={styles.container}>
            <Stack.Navigator
                // initialRouteName={'Users'}
            >
                <Stack.Screen name={'Home'} component={HomeScreen}/>
                <Stack.Screen name={'Users'} component={UsersScreen}/>
                <Stack.Screen name={'Details'} component={DetailsScreen}/>
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
