import { View, Text } from "react-native";
import Header from "../../components/Header";
import styles from "./styles";

const Home = ({ navigation }) => {
   return (
      <View>
         <Header navigation={navigation} />
            <Text>Home</Text>
      </View>
   );
};

export default Home;
