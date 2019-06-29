import React from 'react';
import {render}from 'react-dom';
import {Counter} from './components/Counter';

import { counterApp } from './reducers';
import {createStore} from  'redux';

import {Provider} from 'react-redux';

const store= createStore(counterApp);

render(
    <Provider store={store}>
        <Counter />
    </Provider>
, document.getElementById('root'));