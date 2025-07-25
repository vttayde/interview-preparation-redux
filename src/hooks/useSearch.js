import { useState, useEffect, useMemo } from 'react';
import { SEARCH_DATA, SEARCH_CONFIG } from '../constants/searchConstants';

export const useSearch = () => {
    const [query, setQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    // Debounced search results
    const searchResults = useMemo(() => {
        if (!query.trim()) return [];

        const searchTerm = query.toLowerCase();
        return SEARCH_DATA.filter(item => 
            item.title.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm) ||
            item.category.toLowerCase().includes(searchTerm) ||
            item.content.toLowerCase().includes(searchTerm)
        ).slice(0, SEARCH_CONFIG.MAX_RESULTS);
    }, [query]);

    // Debounce search to avoid too many searches
    useEffect(() => {
        if (!query) {
            setIsSearching(false);
            return;
        }

        setIsSearching(true);
        const timeoutId = setTimeout(() => {
            setIsSearching(false);
        }, SEARCH_CONFIG.DEBOUNCE_DELAY);

        return () => clearTimeout(timeoutId);
    }, [query]);

    const handleSearch = (searchQuery) => {
        setQuery(searchQuery);
    };

    return {
        query,
        searchResults,
        isSearching,
        handleSearch
    };
};

export default useSearch;
