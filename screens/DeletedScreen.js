import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import Deleted from '../components/TodoList/Deleted';
import {useSelector, useDispatch} from 'react-redux';


const DeletedScreen = () => {
  const theme = useSelector(state => state.theme);
  return (
    <ImageBackground source={theme} resizeMode="cover" style={styles.image}>
      <View>
        <Deleted />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  toggleTheme: {
    position: 'absolute',
    bottom: 50,
    right: 50,
    padding: 10,
    borderRadius: 50,
  },
});
export default DeletedScreen