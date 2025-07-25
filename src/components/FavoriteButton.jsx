import useFavorites from '../hooks/useFavorites';

/**
 * Simple and elegant Favorite Button
 */
const FavoriteButton = ({ topic, size = 'md', className = '' }) => {
  const { isFavorite, toggleFavoriteStatus } = useFavorites();
  const favorited = isFavorite(topic.id);

  const handleToggle = (e) => {
    e.stopPropagation();
    toggleFavoriteStatus(topic);
  };

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  return (
    <button
      onClick={handleToggle}
      className={`
        p-1 rounded-full transition-all duration-200 hover:bg-gray-100 
        focus:outline-none focus:ring-2 focus:ring-red-300 group
        ${className}
      `}
      title={favorited ? 'Remove from favorites' : 'Add to favorites'}
    >
      <svg
        className={`
          ${sizeClasses[size]} transition-all duration-200 group-hover:scale-110
          ${favorited 
            ? 'text-red-500 fill-current' 
            : 'text-gray-400 hover:text-red-400'
          }
        `}
        fill={favorited ? 'currentColor' : 'none'}
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  );
};

export default FavoriteButton;
