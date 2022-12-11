import React from 'react';

import {View, Text} from 'react-native';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fetechTodos} from '../components/TodoList/todoSlice';
import TodosList from '../components/TodoList';
import globalStyles from '../theme/globalStyle';

const HomeScreem = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetechTodos());
  }, []);
  return (
    <View style={globalStyles.app} >
          <TodosList />
    </View>
  );
};

export default HomeScreem;
