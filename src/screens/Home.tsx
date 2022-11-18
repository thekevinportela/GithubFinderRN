import {Box, Pressable, Text} from 'native-base';
import React, {useState} from 'react';
import {Keyboard} from 'react-native';
import {SearchBar} from '../components/SearchBar';
import {UserResults} from '../components/UserResults';

export type IHomeProps = {};

const Home: React.FC<IHomeProps> = ({}) => {
  const [search, setSearch] = useState('');

  return (
    <Pressable
      onPress={Keyboard.dismiss}
      bg={'black'}
      alignItems={'center'}
      width={'100%'}
      height={'100%'}>
      <Box alignItems={'center'} safeArea w={'100%'}>
        <SearchBar setSearch={setSearch} />
        <UserResults search={search} />
      </Box>
    </Pressable>
  );
};

export {Home};
