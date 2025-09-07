import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      backgroundColor: '#4A0000',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 75,
    },
    logoContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignSelf: 'center',
      marginBottom: 60,
      marginTop: 30,
      paddingTop: 20,
      paddingBottom: 10,
      backgroundColor: '#7A0000',
      width: '100%',
    },
    inputContainer: {
      width: '80%',
      flexDirection: 'column',
      alignItems: 'center',
    }
});

export default styles;