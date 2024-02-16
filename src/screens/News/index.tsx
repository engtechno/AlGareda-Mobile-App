import React, {useEffect, useState} from 'react';
import {Text, RefreshControl, View, Alert, FlatList} from 'react-native';
import {useTranslation} from '../../../node_modules/react-i18next';

// Store
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {setNews, setTotalResults} from '../../store/appSlice';

// API
import {getNews} from '../../api/news.api';

// Styles
import useGlobalStyle from '../../hooks/useGlobalStyle';
import styles from './styles';

// Components
import SingleNewsCard from '../../components/SingleNewsCard';
import {ISingleNews} from '../../models/news.model';

// Models
import {NewsAPIParams} from '../../models/api.model';
import SearchBar from '../../components/SearchBar';

const News = () => {
  const dispatch = useAppDispatch();
  const {t} = useTranslation();
  const {globalStyles} = useGlobalStyle();

  const {news, searchText, totalResults, language} = useAppSelector(
    state => state.app,
  );

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

  const handleSearch = () => {
    if (searchText) {
      dispatch(setNews([]));
      fetchNews({q: searchText});
      return setPage(1);
    }

    fetchNews({language: language || 'en'});
  };

  useEffect(() => {
    if (language) fetchNews({language});
  }, [language]);

  useEffect(() => {
    handleSearch();
  }, [searchText]);

  return (
    <View style={globalStyles.page}>
      <Text style={globalStyles.pageTitle}>{t('NEWS_PAGE_TITLE')}</Text>

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
          <RefreshControl
            refreshing={loading}
            onRefresh={() => fetchNews({language: language || 'en'})}
          />
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
