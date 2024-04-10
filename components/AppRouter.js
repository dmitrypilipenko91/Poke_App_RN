import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import PokeIdPage from "../pages/PokeIdPage";
import StartPage from "../pages/StartPage";

const Stack = createStackNavigator();

const AppRouter = () => {
    return(
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={StartPage}/>
                <Stack.Screen name="Poke" component={PokeIdPage}/>
            </Stack.Navigator>
    )
};

export default AppRouter;