import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  RefreshControl,
  View,
  Alert,
  FlatList,
} from 'react-native';

// Store
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {setNews, setTotalResults} from '../../store/appSlice';

// API
import {getNews} from '../../api/news.api';

// Styles
import globalStyles from '../../styles/global';
import styles from './styles';

// Components
import SingleNewsCard from '../../components/SingleNewsCard';
import {ISingleNews} from '../../models/news.model';

// Models
import {NewsAPIParams} from '../../models/api.model';
import SearchBar from '../../components/SearchBar';

const News = () => {
  const dispatch = useAppDispatch();
  const {news, searchText, totalResults} = useAppSelector(state => state.app);

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchNews = async (options?: NewsAPIParams) => {
    setLoading(true);
    const res = await getNews(options);
    setLoading(false);

    if (res.status === 'error') return Alert.alert('Error', res.message);

    if (options?.page) {
      dispatch(setNews([...news, ...res.articles]));
    } else {
      dispatch(setNews(res.articles));
    }

    dispatch(setTotalResults(res.totalResults));
  };

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    dispatch(setNews([]));
    fetchNews({q: searchText});
    setPage(1);
  }, [searchText]);

  return (
    <View style={globalStyles.page}>
      <Text style={globalStyles.pageTitle}>News</Text>

      <SearchBar />

      {searchText && totalResults && (
        <Text style={styles.searchResultText}>
          About {totalResults} results for{' '}
          <Text style={styles.searchKeyword}>{searchText}</Text>.
        </Text>
      )}

      <FlatList<ISingleNews>
        style={styles.newsfeed}
        data={news}
        keyExtractor={item => item.title}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={fetchNews} />
        }
        renderItem={item => (
          <View style={styles.wrapper}>
            <SingleNewsCard data={item.item} />
          </View>
        )}
        onEndReached={() => {
          if (loading) return;

          setPage(page + 1);
          fetchNews({page: page + 1, q: searchText});
        }}
      />
    </View>
  );
};

export default News;
