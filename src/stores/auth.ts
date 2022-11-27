import AsyncStorage from '@react-native-async-storage/async-storage';
import create from 'zustand';
import {devtools, persist} from 'zustand/middleware';

interface AuthState {
  isOnboarding: boolean | null;
  setOnboarding: (val: boolean) => void;
}

const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      set => ({
        isOnboarding: true,
        setOnboarding: val => set({isOnboarding: val}),
      }),
      {
        name: 'isOnboarding',
        getStorage: () => AsyncStorage,
      },
    ),
  ),
);

export default useAuthStore;
