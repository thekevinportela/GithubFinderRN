import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/Home';
import {Repo} from '../screens/Repo';
import {User} from '../screens/User';
// import {Home} from '../screens/Home';
// import {Repo} from '../screens/Repo';
// import {User} from '../screens/User';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
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
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
        name="Repo"
        component={Repo}
      />
    </Stack.Navigator>
  );
};

export default Main;
