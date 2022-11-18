import {Input, Icon, Box} from 'native-base';
import {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

export type ISearchBarProps = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar: React.FC<ISearchBarProps> = ({setSearch}) => {
  const [user, setUser] = useState('');

  return (
    <Box w={'80%'} mt={4} mb={10}>
      <Input
        onSubmitEditing={() => {
          setSearch(user);
        }}
        focusOutlineColor={'white'}
        borderColor={'white'}
        outlineColor={'white'}
        accessibilityIgnoresInvertColors
        tintColor={'white'}
        colorScheme={'white'}
        placeholderTextColor={'#aaa'}
        selectionColor={'white'}
        color={'white'}
        cursorColor={'white'}
        textDecorationColor={'white'}
        placeholder="Search Github Users"
        width="100%"
        borderRadius="xl"
        py="3"
        px="1"
        fontSize="14"
        value={user}
        onChangeText={text => setUser(text)}
        InputLeftElement={
          <Icon
            m="2"
            ml="3"
            size="6"
            color="white"
            as={<AntDesign name="github" />}
          />
        }
        InputRightElement={
          <Icon
            onPress={() => {
              setSearch('');
              setUser('');
            }}
            m="2"
            mr="3"
            size="4"
            color="gray.400"
            as={<AntDesign name="closecircleo" />}
          />
        }
      />
    </Box>
  );
};

export {SearchBar};
