import {SafeAreaView} from 'react-native';
import globalStyles from '../../assets/styles/globalStyles.ts';
import React from 'react';
import Search from '../../assets/components/search/Search.tsx';

function Home() {
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <Search
        onSearch={value => {
          console.log(value);
        }}
      />
    </SafeAreaView>
  );
}

export default Home;
