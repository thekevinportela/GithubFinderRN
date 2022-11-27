import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import {Loader} from '../components/Loader';
import {useGetOnboarding} from '../hooks/reactQueryHooks';
import useAuthStore from '../stores/auth';
import Main from './Main';
import Onboarding from './Onboarding';

const Navigation = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const isOnboarding = useAuthStore(state => state.isOnboarding);

  useEffect(() => {
    useAuthStore.persist.onFinishHydration(() => setIsHydrated(true));
  }, []);

  if (!isHydrated) {
    return <Loader />;
  }

  console.log(isOnboarding);

  return (
    <NavigationContainer>
      {isOnboarding ? <Onboarding /> : <Main />}
    </NavigationContainer>
  );
};

export default Navigation;
