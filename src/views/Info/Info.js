import { View, Text } from "react-native";
import Header from "../../components/Header";

const Info = ({ navigation }) => {
   return (
      <View>
         <Header navigation={navigation} />
         <Text>Info</Text>
      </View>
   );
};

export default Info;
