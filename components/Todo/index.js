// import {Checkbox, List} from '@ant-design/react-native';
import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import globalStyles from '../../theme/globalStyle';
import {useDispatch} from 'react-redux';
import {
  updateCompletedTodo,
  deleteTodo,
  updateDeletedTodo,
 
} from '../TodoList/todoSlice';
import { styles } from './style';

const Todo = ({name, completed, deleted, id}) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(completed);

  const toggleCheckbox = id => {
    console.log(id);
    dispatch(
      updateCompletedTodo({
        id: id,
        status: !checked,
      }),
    );
    setChecked(!checked);
  };

  const handleDeleteTodo = id => {
    console.log(id);
    dispatch(deleteTodo(id));
  };

  
  const handleUpdtaeDeleteTodo = id => {
    console.log(id);
    dispatch(
      updateDeletedTodo({
        id: id,
        status: !deleted,
      }),
    );
    
  };

  return (
    <View style={[globalStyles.row, globalStyles.spaceBetween]}>
      <View style={globalStyles.row}>
        <CheckBox value={checked} onChange={() => toggleCheckbox(id)} />
        <Text
          style={{
            ...(checked
              ? {
                  textDecorationLine: 'line-through',
                  textDecorationStyle: 'solid',
                }
              : {}),
          }}>
          {name}
        </Text>
      </View>

      {deleted ? (
        <Pressable
          style={styles.btn}
          onPress={() => handleUpdtaeDeleteTodo(id)}>
          <Icon name="minus-circle" size={20} color={checked ? 'red' : {}} />
        </Pressable>
      ) : (
        <View style={globalStyles.row}>
          <Pressable
            style={styles.btn}
            onPress={() => handleUpdtaeDeleteTodo(id)}>
            <Icon name="arrow-circle-o-left" size={20} color="green" />
          </Pressable>

          <Pressable style={styles.btn} onPress={() => handleDeleteTodo(id)}>
            <Icon name="minus-circle" size={20} color={checked ? 'red' : {}} />
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default Todo;
