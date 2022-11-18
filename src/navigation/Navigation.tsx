import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/Home';
import {Onborading} from '../screens/Onborading';
import {User} from '../screens/User';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
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
