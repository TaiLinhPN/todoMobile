import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, StyleSheet, Text, ImageBackground, Pressable} from 'react-native';
import {useEffect} from 'react';
import {fetechTodos} from '../components/TodoList/todoSlice';
import TodosList from '../components/TodoList';
import globalStyles from '../theme/globalStyle';
import themeSlice from './themeSlice';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../theme/colors';
const themes = [
  'https://i.pinimg.com/564x/a3/d9/43/a3d9430be39a860f0b065c85b78ab3b4.jpg',
  'https://i.pinimg.com/564x/63/eb/6e/63eb6ef56937ea79d9f6f0fda5179de6.jpg',
];
const HomeScreem = () => {
  const [numTheme, setNumthem] = useState(0)
  const theme = useSelector(state => state.theme);
  console.log(theme);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetechTodos());
  }, []);

  const onPressFunction = () => {
    if (numTheme > 0) {
      dispatch(themeSlice.actions.themeChange(themes[0]));
      setNumthem(0);
    }
    else {
      dispatch(themeSlice.actions.themeChange(themes[1]));
      setNumthem(numTheme+1);
      
    }
  };

  return (
    <ImageBackground source={theme} resizeMode="cover" style={styles.image}>
      <View style={globalStyles.app}>
        <TodosList />
      </View>
      <Pressable
        style={[
          theme.stutus
            ? {backgroundColor: color.black}
            : {backgroundColor: color.white},
          styles.toggleTheme,
        ]}
        onPress={onPressFunction}>
        <Icon1
          style={theme.stutus ? {color: color.white} : {color: color.black}}
          name="theme-light-dark"
          size={20}
        />
      </Pressable>
    </ImageBackground>
  );
};

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
export default HomeScreem;
