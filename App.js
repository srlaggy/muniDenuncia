import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from "./screens/Start";
import Actions from "./screens/Actions";
//import Functions from "./screens/Functions";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Start} options={{headerShown: false}}/>
                <Stack.Screen name="Actions" component={Actions} options={{headerShown: false}}/>
                {/* <Stack.Screen name="Functions" component={Functions}/> */}
            </Stack.Navigator>
        </NavigationContainer>
        // <Start/>
    );
}
