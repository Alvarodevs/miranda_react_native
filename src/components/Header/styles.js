import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container: {
      marginTop: 30,
      backgroundColor: "#000",
      height: 50,  
      width: "100%",
      paddingHorizontal: 20,
      //fontFamily: 'Archivo-Regular',
   },
   header:{
      backgroundColor: "#fff",
      padding: 10,
      marginTop: 15,
      flexDirection: "row",
      alignItems: "center",
   },
   
   logo:{
      width: 70,
      height: 70,
      backgroundColor: "#fff",
      shadowColor: '#8b8b8b',
      shadowOpacity: 0.4,
      shadowOffset: { width: -5, height: 10 },
      fontSize: 50,
      textAlign: "center",
   },
   title: {
      flexDirection: "column",
      color: "#000",
   },
   bold: {
      fontWeight: "bold",
   },
   text: {
      color: "#000",
      fontSize: 15,
      padding: 10,

   },
   check: {
      paddingLeft:50,
   }
});

export default styles;
