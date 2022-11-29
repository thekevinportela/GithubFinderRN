import {Box, Center, Text} from 'native-base';
import React from 'react';

export type IFavoritesProps = {};

const Favorites: React.FC<IFavoritesProps> = ({}) => {
  return (
    <Center flex={1} bg={'black'}>
      <Text color={'white'}>Favorites Go Here</Text>
    </Center>
  );
};

export {Favorites};
