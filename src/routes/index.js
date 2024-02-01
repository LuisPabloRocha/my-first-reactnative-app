import React from "react";
import { NavigationContainer } from '@react-navigation/native'; //Padre de la navegacion
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TodoListScreen from "../views/ToDoListScreen";
import HomeScreen from "../views/HomeScreen";
import LoginScreen from "../views/LoginScreen";

const Routes =()=>{
    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="ToDoList" component={TodoListScreen}/>   
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Routes;