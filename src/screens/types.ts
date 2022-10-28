import {NavigationProp, useNavigation} from "@react-navigation/native";

export type StackParamList = {
    Home: undefined
    Users: undefined
    Details: {
        id: number
        name: string
        isDone: boolean
    }
}

type UseNavigationType = NavigationProp<StackParamList>

export const useAppNavigation = () => useNavigation<UseNavigationType>()