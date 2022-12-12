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
import {styles} from './style';

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
    <>
      <View
        style={[
          globalStyles.row,
          globalStyles.spaceBetween,
          {paddingTop: 8, paddingBottom: 8},
        ]}>
        <View style={globalStyles.row}>
          <CheckBox
            value={checked}
            tintColors={checked ? 'RGB(234 67 53)' : {}}
            onChange={() => toggleCheckbox(id)}
          />
          <Text
            style={{
              ...(checked
                ? {
                    textDecorationLine: 'line-through',
                    textDecorationStyle: 'solid',
                  }
                : {fontWeight: '700'}),
            }}>
            {name}
          </Text>
        </View>

        {deleted === false ? (
          <View>
            <Pressable
              style={styles.btn}
              onPress={() => handleUpdtaeDeleteTodo(id)}>
              <Icon
                name="minus-circle"
                size={20}
                color={checked ? 'red' : 'gray'}
              />
            </Pressable>
          </View>
        ) : (
          <View style={globalStyles.row}>
            <Pressable
              style={styles.btn}
              onPress={() => handleUpdtaeDeleteTodo(id)}>
              <Icon name="arrow-circle-o-left" size={20} color={'green'} />
            </Pressable>
            <Pressable style={styles.btn} onPress={() => handleDeleteTodo(id)}>
              <Icon
                name="minus-circle"
                size={20}
                color={checked ? 'red' : 'gray'}
              />
            </Pressable>
          </View>
        )}
      </View>
      <View style={styles.line}></View>
    </>
  );
};

export default Todo;
