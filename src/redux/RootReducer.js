import {combineReducers} from 'redux';
import {commonReducer} from 'src/modules/commons/Reducer';
import {homeReducer} from 'src/modules/home/Reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: [],
};

const AppReducers = combineReducers({
    commonReducer: persistReducer(persistConfig, commonReducer),
    homeReducer: persistReducer(persistConfig, homeReducer),
});
export default AppReducers;
