import { StyleSheet } from "react-native";
import color from "../../theme/colors";

export const styles = StyleSheet.create({
 
  todoList: {
    backgroundColor: color.white,
    borderRadius: 15,
    padding: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5.84,

    elevation: 6,
  },
});
