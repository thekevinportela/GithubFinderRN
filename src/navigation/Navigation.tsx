import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Loader} from '../components/Loader';
import {useGetOnboarding} from '../hooks/reactQueryHooks';
import {Home} from '../screens/Home';
import {Onborading} from '../screens/Onborading';
import {User} from '../screens/User';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {status, data} = useGetOnboarding();
  console.log(data);
  if (status === 'loading') {
    return <Loader />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={data !== null ? 'Home' : 'Onboarding'}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={({route}) => ({
            headerTitle: route.params,
            headerTintColor: '#fff',
            headerStyle: {backgroundColor: 'black'},
          })}
          name="User"
          component={User}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Onboarding"
          component={Onborading}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
