import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

// Styles
import styles from './styles';

// Store
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {setSearchText} from '../../store/appSlice';

// Assets
import SearchIcon from '../../assets/media/svg/search-icon.svg';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState('');

  const submitSearch = () => {
    dispatch(setSearchText(search));
  };

  const clearSearch = () => {
    dispatch(setSearchText(''));
    setSearch('');
  };

  return (
    <View style={styles.searchbox}>
      <TextInput
        onChangeText={text => setSearch(text)}
        style={styles.searchInput}
        placeholder="Dogecoin to the Moon..."
        placeholderTextColor="#C1C1C1"
        returnKeyType="search"
        value={search}
        onSubmitEditing={submitSearch}
        clearButtonMode="always"
      />

      <View style={styles.searchActions}>
        {search ? (
          <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
            <Text style={styles.clearText}>Clear</Text>
          </TouchableOpacity>
        ) : null}

        <TouchableOpacity onPress={submitSearch}>
          <SearchIcon width={25} height={25} fill="#C1C1C1" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;
