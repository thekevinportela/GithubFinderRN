import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Loader} from '../components/Loader';
import {useGetOnboarding} from '../hooks/reactQueryHooks';
import useAuthStore from '../stores/auth';
import Main from './Main';
import Onboarding from './Onboarding';

const Navigation = () => {
  const isOnboarding = useAuthStore(state => state.isOnboarding);
  console.log(isOnboarding);

  return (
    <NavigationContainer>
      {isOnboarding ? <Onboarding /> : <Main />}
    </NavigationContainer>
  );
};

export default Navigation;
