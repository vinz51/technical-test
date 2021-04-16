import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import users from './users';
import shifts from './shifts';
import saga from '../saga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    users,
    shifts
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(saga);

export default store;
