import {createSlice} from '@reduxjs/toolkit';


const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    uri: 'https://i.pinimg.com/originals/a3/d9/43/a3d9430be39a860f0b065c85b78ab3b4.jpg',
    stutus: true,
  },

  reducers: {
    themeChange: (state, action) => {
          state.uri = action.payload;
          state.stutus = !state.stutus
    },
  },
});

export default themeSlice;