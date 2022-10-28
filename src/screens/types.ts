import {NavigationProp, NavigatorScreenParams, useNavigation} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type BottomTabParamList = {
    Home: NavigatorScreenParams<NStackParamList>
    Users: undefined
    Details: undefined
}

export type NStackParamList = {
    Profile: undefined
    Settings: undefined
    Jobs: undefined
}

export type DetailsPropsType = NativeStackScreenProps<BottomTabParamList, 'Details'>

type UseNavigationType = NavigationProp<BottomTabParamList>

export const useAppNavigation = () => useNavigation<UseNavigationType>()