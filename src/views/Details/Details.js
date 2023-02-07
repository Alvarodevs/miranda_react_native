import { Text, View } from "react-native";
import Header from '../../components/Header'

const Details = ({navigation}) => {
   return (
      <View>
      <Header navigation={navigation} />
         <Text>Details</Text>
      </View>
   );
};

export default Details;
