import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import {  friendsReducer} from './friends/slice';
import { petsReducer } from './pets/slice';
import { noticesReducer } from './notices/slice';
import { newsReducer } from './news/slice';


const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

export const store = configureStore({
  reducer: {
    notices: noticesReducer,
    news: newsReducer,
    pets: petsReducer,
    friends: friendsReducer
  },
  middleware});

export const persistor = persistStore(store);
