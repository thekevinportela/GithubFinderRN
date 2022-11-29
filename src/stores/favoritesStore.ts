import create, {State} from 'zustand';
import {subscribeWithSelector, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FavoriteItem} from '../types/types';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import useAuthStore from './auth';

type UseFavoritesState = {
  favorites: FavoriteItem[];
  addFavorite: (favorite: FavoriteItem) => void;
  deleteFavorite: (id: string) => void;
  setFavorites: (favoritesFromFirebase: []) => void;
};

const useFavoritesStore = create<UseFavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      setFavorites: favoritesFromFirebase => {
        set({
          favorites: favoritesFromFirebase,
        });
      },
      addFavorite: favorite => {
        firestore()
          .collection('favorites')
          .add({
            login: favorite.login,
            avatar_url: favorite.avatar_url,
            userID: favorite.userID,
          })
          .then(() => {
            console.log('Favorite added!');
          });
        set(state => ({favorites: [...state.favorites, favorite]}));
      },
      deleteFavorite: login => {
        firestore()
          .collection('favorites')
          .doc(login)
          .delete()
          .then(() => {
            console.log('Favorite Deleted');
          });
      },
    }),
    {
      name: 'favorites-storage', // unique name
      getStorage: () => AsyncStorage, // (optional) by default, 'localStorage' is used
    },
  ),
);

export function setFavoritesListener(uid: string) {
  function onResult(
    QuerySnapshot: FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>,
  ) {
    const list: any = [];
    QuerySnapshot.forEach(doc => {
      const {login, avatar_url, userID} = doc.data();
      list.unshift({
        login,
        avatar_url,
        userID,
      });
    });
    useFavoritesStore.getState().setFavorites(list);
  }

  function onError(error: Error) {
    console.error(error);
  }

  const unsubscribe = firestore()
    .collection('favorites')
    .where('userID', '==', uid)
    // .orderBy('postTime')
    .onSnapshot(onResult, onError);
}

export default useFavoritesStore;
