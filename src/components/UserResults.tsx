import {Box} from 'native-base';
import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useUsers} from '../hooks/reactQueryHooks';
import {Loader} from './Loader';
import {UserItem} from './UserItem';

export type IUserResultsProps = {
  search: string;
};

const UserResults: React.FC<IUserResultsProps> = ({search}) => {
  const {status, data, refetch} = useUsers(search);

  useEffect(() => {
    if (search !== '') {
      refetch();
    }
  }, [search]);

  if (status === 'loading') {
    return <Loader />;
  }

  return (
    <Box width={'100%'}>
      {search !== '' && (
        <FlatList
          pointerEvents="auto"
          scrollEnabled
          contentInset={{bottom: 450, top: 0}}
          data={data}
          renderItem={({item}) => <UserItem user={item} />}
          keyExtractor={item => item.id}
        />
      )}
    </Box>
  );
};

export {UserResults};
