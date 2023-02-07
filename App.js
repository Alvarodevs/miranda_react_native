import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./src/views/Home";
import Details from "./src/views/Details";
import Info from "./src/views/Info";
import { View, StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen
               name="Home"
               component={Home}
               options={{
                  headerShown: false, 
               }}
            />
            <Stack.Screen
               name="Details"
               component={Details}
               options={{
                  headerShown: false, 
               }}
            />
            <Stack.Screen
               name="Info"
               component={Info}
               options={{
                  headerShown: false, 
               }}
            />
         </Stack.Navigator>
         
      </NavigationContainer>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: ""
   },
})