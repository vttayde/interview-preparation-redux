import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteTopics: []
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    // Toggle favorite status - simplified
    toggleFavorite: (state, action) => {
      const topic = action.payload;
      const existingIndex = state.favoriteTopics.findIndex(fav => fav.id === topic.id);
      
      if (existingIndex >= 0) {
        state.favoriteTopics.splice(existingIndex, 1);
      } else {
        state.favoriteTopics.push({
          id: topic.id,
          title: topic.title,
          category: topic.category,
          path: topic.path,
          addedAt: new Date().toISOString()
        });
      }
    },

    // Clear all favorites
    clearAllFavorites: (state) => {
      state.favoriteTopics = [];
    }
  }
});

export const { toggleFavorite, clearAllFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
