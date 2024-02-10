import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  RefreshControl,
  View,
} from 'react-native';

// Assets
import SearchIcon from '../../assets/media/svg/search-icon.svg';

// Styles
import globalStyles from '../../styles/global';
import styles from './styles';

// Components
import SingleNewsCard from '../../components/SingleNewsCard';

const News = () => {
  return (
    <View style={globalStyles.page}>
      <Text style={globalStyles.pageTitle}>News</Text>

      {/* Search Bar */}
      <View style={styles.searchbox}>
        <TextInput
          style={styles.searchInput}
          placeholder="Dogecoin to the Moon..."
          placeholderTextColor="#C1C1C1"
        />

        <TouchableOpacity>
          <SearchIcon width={25} height={25} fill="#C1C1C1" />
        </TouchableOpacity>
      </View>

      {/* News Feed */}
      <ScrollView
        style={styles.newsfeed}
        refreshControl={<RefreshControl refreshing={false} />}>
        <View style={styles.wrapper}>
          <SingleNewsCard />
          <SingleNewsCard />
          <SingleNewsCard />
          <SingleNewsCard />
          <SingleNewsCard />
          <SingleNewsCard />
        </View>
      </ScrollView>
    </View>
  );
};

export default News;
