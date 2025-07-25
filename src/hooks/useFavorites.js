import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../features/favorites/favoritesSlice';

/**
 * Simple hook for managing favorites
 */
const useFavorites = () => {
  const dispatch = useDispatch();
  const { favoriteTopics } = useSelector(state => state.favorites);

  // Check if topic is favorited
  const isFavorite = (topicId) => {
    return favoriteTopics.some(fav => fav.id === topicId);
  };

  // Toggle favorite status
  const toggleFavoriteStatus = (topic) => {
    dispatch(toggleFavorite(topic));
  };

  // Get favorites by category
  const getFavoritesByCategory = (category) => {
    return favoriteTopics.filter(fav => fav.category === category);
  };

  return {
    favoriteTopics,
    isFavorite,
    toggleFavoriteStatus,
    getFavoritesByCategory
  };
};

export default useFavorites;
