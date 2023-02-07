import { View, Text } from "react-native";
import { useFonts } from "expo-font";
import styles from "./styles";

const Header = ({ navigation }) => {
   // const [loaded] = useFonts({
   //    Montserrat: require("../../../assets/fonts/Archivo-Regular.ttf"),
   // })

   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <Text style={styles.logo} onPress={() => navigation.navigate("Home")}>H</Text>

            <Text style={styles.title}>
               <Text style={[styles.text, styles.bold]}>HOTEL</Text>
               {"\n"}
               <Text style={styles.text}>MIRANDA</Text>
            </Text>
            <Text
               style={[styles.text, styles.check]}
               onPress={() => navigation.navigate("Details")}
            >
               Check in
            </Text>
            <Text
               style={styles.text}
               onPress={() => navigation.navigate("Info")}
            >
               Info
            </Text>
         </View>
      </View>
   );
};

export default Header;
