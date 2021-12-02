import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from "./screens/Start";
import Actions from "./screens/Actions";
import Functions from "./screens/Functions";
import Form from "./screens/Form";
import Form2 from "./screens/Form2";
import MyProblems from "./screens/MyProblems";
import ReadProblem from "./screens/ReadProblem";
import ReadComments from "./screens/ReadComments";
import UpdateProblem from "./screens/UpdateProblem";
import DeleteProblem from "./screens/DeleteProblem";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Start} options={{headerShown: false}}/>
                <Stack.Screen name="Actions" component={Actions} options={{headerShown: false}}/>
                <Stack.Screen name="Functions" component={Functions} options={{headerShown: false}}/>
                <Stack.Screen name="Form" component={Form} options={{headerShown: false}}/>
                <Stack.Screen name="Form2" component={Form2} options={{headerShown: false}}/>
                <Stack.Screen name="MyProblems" component={MyProblems} options={{headerShown: false}}/>
                <Stack.Screen name="ReadProblem" component={ReadProblem} options={{headerShown: false}}/>
                <Stack.Screen name="ReadComments" component={ReadComments} options={{headerShown: false}}/>
                <Stack.Screen name="UpdateProblem" component={UpdateProblem} options={{headerShown: false}}/>
                <Stack.Screen name="DeleteProblem" component={DeleteProblem} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
