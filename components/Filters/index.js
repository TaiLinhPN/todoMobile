import React, {useEffect, useState} from 'react';
import RadioButtonRN from 'radio-buttons-react-native';
import {Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import globalStyles from '../../theme/globalStyle';
import {styles} from './style';
import filtersSlite from './filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import color from '../../theme/colors';

const data = [
  {
    label: 'All',
  },
  {
    label: 'Done',
  },
  ,
  {
    label: 'To do',
  },
];

const Filter = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const [statusCompleted, setStatusCompleted] = useState('All');
  const theme = useSelector(state => state.theme);

  const handlenputSearch = e => {
    setSearchText(e.nativeEvent.text);
    dispatch(filtersSlite.actions.searchFilterChange(e.nativeEvent.text));
  };

  const dandleStatusCompleted = e => {
    console.log(e.label);
    setStatusCompleted(e.label);
    dispatch(filtersSlite.actions.statusFilterChange(e.label));
  };

  clear = () => {
    setSearchText('aaaaa');
  };

  return (
    <View>
      <Text
        style={[
          theme.stutus ? {color: color.white} : {color: color.black},

          styles.header,
        ]}>
        Search
      </Text>
      <View style={[globalStyles.row, globalStyles.containerInput]}>
        <Icon style={styles.iconSearch} name="search" size={20} color="gray" />
        <TextInput
          style={[styles.input, {flex: 1}]}
          onChange={handlenputSearch}
          value={searchText}
        />
      </View>
      <Text
        style={[
          theme.stutus ? {color: color.white} : {color: color.black},

          styles.header,
        ]}>
        Filter By Status
      </Text>

      <RadioButtonRN
        initial={1}
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: -20,
          borderRadius: 50,
        }}
        boxStyle={{
          width: '25%',
          borderWidth: 0,
          backgroundColor: 'none',
          color: 'green',
        }}
        textStyle={[
          {paddingLeft: 8},
          theme.stutus ? {color: color.white} : {color: color.black},
        ]}
        circleSize={10}
        deactiveColor={'#95BADF'}
        data={data}
        selectedBtn={e => dandleStatusCompleted(e)}
      />
    </View>
  );
};

export default Filter;
