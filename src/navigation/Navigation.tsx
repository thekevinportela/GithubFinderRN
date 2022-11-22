import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Loader} from '../components/Loader';
import {useGetOnboarding} from '../hooks/reactQueryHooks';
import Main from './Main';
import Onboarding from './Onboarding';

const Navigation = () => {
  const {status, data} = useGetOnboarding();
  console.log('DATA', data);
  if (status === 'loading') {
    return <Loader />;
  }

  return (
    <NavigationContainer>
      {data === null ? <Onboarding /> : <Main />}
    </NavigationContainer>
  );
};

export default Navigation;
