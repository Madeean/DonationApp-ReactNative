import {
  Animated,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import globalStyles from '../../assets/styles/globalStyles.ts';
import React, {useEffect, useState} from 'react';
import Header from '../../assets/components/header/Header.tsx';
import {useDispatch, useSelector} from 'react-redux';
import style from './Style.ts';
import ScrollView = Animated.ScrollView;
import Search from '../../assets/components/search/Search.tsx';
import Tab from '../../assets/components/tab/Tab.tsx';
import {updateSelectedCategoryId } from "../../redux/reducers/Categories.ts";
import SingleDonationItem from '../../assets/components/singleDonationItem/SingleDonationItem.tsx';
import {updateSelectedDonationId} from '../../redux/reducers/Donations.ts';
import {Routes} from '../../navigation/Routes.ts';
import { logout } from "../../api/User.ts";
import { resetToInitialState } from '../../redux/reducers/User.ts';

function Home({navigation}) {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);
  const donations = useSelector(state => state.donations);
  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [donationItems, setDonationItems] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const categoryPageSize = 4;

  useEffect(() => {
    const items = donations.items.filter(value =>
      value.categoryIds.includes(categories.selectedCategoryId),
    );
    setDonationItems(items);
  }, [categories.selectedCategoryId]);

  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(
      pagination(categories.categories, categoryPage, categoryPageSize),
    );
    setCategoryPage(prev => prev + 1);
    setIsLoadingCategories(false);
  }, []);

  const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };

  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View>
            <Text style={style.headerIntroText}>Hello, </Text>
            <View style={style.username}>
              <Header title={user.displayName} />
            </View>
          </View>
          <View>
              <Image
                source={{uri: user.profileImage}}
                style={style.profileImage}
                resizeMode={'contain'}
              />
              <Pressable onPress={async () =>{
                dispatch(resetToInitialState())
                await logout()
              }}>
                <Header types={3} title={"Logout"} color={'#156cf7'} />
              </Pressable>
          </View>
        </View>
        <View style={style.searchBox}>
          <Search onSearch={() => {}} placeholder={'Search'} />
        </View>
        <Pressable style={style.highlightedImageContainer}>
          <View>
            <Image
              style={style.highlightedImage}
              source={require('../../assets/images/img_home.png')}
              resizeMode={'contain'}
            />
          </View>
        </Pressable>
        <View style={style.categoryHeader}>
          <Header title={'Select Category'} types={2} />
        </View>
        <View style={style.categories}>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingCategories) {
                return;
              }
              setIsLoadingCategories(true);
              let newData = pagination(
                categories.categories,
                categoryPage,
                categoryPageSize,
              );
              if (newData.length > 0) {
                setCategoryList(prevState => [...prevState, ...newData]);
                setCategoryPage(prevState => prevState + 1);
              }
              setIsLoadingCategories(false);
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            renderItem={({item}) => (
              <View style={style.categoryItem} key={item.categoryId}>
                <Tab
                  tabId={item.categoryId}
                  onPress={value => dispatch(updateSelectedCategoryId(value))}
                  title={item.name}
                  isInactive={item.categoryId !== categories.selectedCategoryId}
                />
              </View>
            )}
          />
        </View>
        {donationItems.length > 0 && (
          <View style={style.donationsItemsContainer}>
            {donationItems.map(value => {
              const categoryInformation = categories.categories.find(
                val => val.categoryId === categories.selectedCategoryId,
              );
              return (
                <View
                  key={value.donationItemId}
                  style={style.singleDonationItem}>
                  <SingleDonationItem
                    onPress={donationId => {
                      dispatch(updateSelectedDonationId(donationId));
                      navigation.navigate(Routes.DonationItemDetail, {
                        categoryInformation,
                      });
                    }}
                    donationItemId={value.donationItemId}
                    uri={value.image}
                    badgeTitle={categoryInformation.name}
                    donationTitle={value.name}
                    price={parseFloat(value.price)}
                  />
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
