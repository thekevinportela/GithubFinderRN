import AsyncStorage from '@react-native-async-storage/async-storage';
import create from 'zustand';
import {devtools, persist} from 'zustand/middleware';

interface AuthState {
  isOnboarding: boolean;
  setOnboarding: () => void;
}

const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      set => ({
        isOnboarding: true,
        setOnboarding: () => set(() => ({isOnboarding: false})),
      }),
      {
        name: 'isOnboarding',
        getStorage: () => AsyncStorage,
      },
    ),
  ),
);

export default useAuthStore;
