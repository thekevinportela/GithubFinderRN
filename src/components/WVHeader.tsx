import {useNavigation} from '@react-navigation/native';
import {Box, ChevronLeftIcon, CloseIcon, HStack, Icon, Text} from 'native-base';

export type IWVHeaderProps = {
  url: string;
};

const WVHeader: React.FC<IWVHeaderProps> = ({url}) => {
  const navigation = useNavigation();

  return (
    <HStack alignItems={'center'} bg={'black'} w={'100%'} h={'7%'}>
      <CloseIcon
        onPress={() => navigation.goBack()}
        color="white"
        ml="4"
        size="6"
        zIndex={100}
      />
      <Box w={'100%'} alignItems={'center'} position={'absolute'}>
        <Text fontWeight={'semibold'} color={'white'}>
          GH Finder
        </Text>
        <Text color={'#bbb'}>
          {url.length > 40 ? `${url.slice(8, 38)}...` : url.slice(8)}
        </Text>
      </Box>
    </HStack>
  );
};

export {WVHeader};
