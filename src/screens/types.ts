import {NavigationProp, useNavigation} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type StackParamList = {
    Home: undefined
    Users: undefined
    Details: {
        id: number
        name: string
        isDone: boolean
    }
}

export type DetailsPropsType = NativeStackScreenProps<StackParamList, 'Details'>

type UseNavigationType = NavigationProp<StackParamList>

export const useAppNavigation = () => useNavigation<UseNavigationType>()