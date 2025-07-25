import { Link } from 'react-router-dom';
import useFavorites from '../hooks/useFavorites';
import FavoriteButton from '../components/FavoriteButton';

/**
 * Clean and simple Favorites Page
 */
const Favorites = () => {
  const { favoriteTopics, getFavoritesByCategory } = useFavorites();

  if (favoriteTopics.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="mb-6">
              <svg className="mx-auto h-20 w-20 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">My Favorites</h1>
            <p className="text-lg text-gray-600 mb-8">No favorites yet! Start exploring topics and save your favorites for quick access.</p>
            <Link
              to="/dashboard"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Explore Topics
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Group favorites by category
  const categories = [...new Set(favoriteTopics.map(fav => fav.category))].sort();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl font-bold text-gray-900">My Favorites</h1>
            <Link
              to="/dashboard"
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              ← Back to Topics
            </Link>
          </div>
          <p className="text-lg text-gray-600">
            {favoriteTopics.length} favorite topic{favoriteTopics.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Favorites Grid */}
        <div className="space-y-8">
          {categories.map(category => {
            const categoryFavorites = getFavoritesByCategory(category);
            
            return (
              <div key={category} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center mb-6">
                  <span className="text-2xl mr-3">{getCategoryIcon(category)}</span>
                  <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
                  <span className="ml-3 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {categoryFavorites.length}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categoryFavorites.map(favorite => (
                    <div
                      key={favorite.id}
                      className="group border border-gray-200 rounded-xl p-4 hover:shadow-lg hover:border-blue-300 transition-all duration-200 bg-gradient-to-br from-white to-gray-50"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-gray-900 flex-1 group-hover:text-blue-600 transition-colors">
                          {favorite.title}
                        </h3>
                        <FavoriteButton 
                          topic={favorite} 
                          size="sm"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          Added {new Date(favorite.addedAt).toLocaleDateString()}
                        </span>
                        <Link
                          to={favorite.path}
                          className="inline-flex items-center px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                          Study →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Clean category icons
const getCategoryIcon = (category) => {
  const icons = {
    'HTML': '🌐',
    'CSS': '🎨', 
    'JavaScript': '⚡',
    'React.js': '⚛️',
    'TypeScript': '📘',
    'Node.js': '🟢',
    'Database': '🗄️',
    'Projects': '🚀',
    'Introduction': '📚',
    'Interview': '❓'
  };
  return icons[category] || '📄';
};

export default Favorites;
