import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/Home';
import {Repo} from '../screens/Repo';
import {User} from '../screens/User';
import {Settings} from '../screens/Settings';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="HomeTabs">
      <Stack.Screen
        options={{headerShown: false}}
        name="HomeTabs"
        component={HomeTabs}
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

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={Home} />
      {/* <Tab.Screen name="Favorites" component={Favorites} /> */}
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};
