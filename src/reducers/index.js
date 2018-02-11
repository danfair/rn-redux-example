import { combineReducers } from 'redux';

import user from './user';
import users from './users';
import repos from './repos';
import stars from './stars';

const rootReducer = combineReducers({ user, users, repos, stars });

export default rootReducer;