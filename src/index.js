import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import  {Router, browserHistory} from 'react-router'
import './index.css';
import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker';
import routes from './routes';
import { loadMenus } from './action/menuActions';
import { loadContents } from './action/pageContentActions';
import { loadCarousel } from './action/carouselActions';
import { loadArticle } from './action/articleActions';
import { loadVision } from './action/visionActions';
import { loadHighlights } from './action/highlightActions';
import { loadAgileTeams   } from './action/agileTeamAction';
import { loadEvents   } from './action/eventActions';
import { loadTables } from './action/tableActions';
import { loadMetrics } from './action/metricActions';

const store = configureStore();

store.dispatch(loadMenus());
store.dispatch(loadContents());
store.dispatch(loadCarousel());
store.dispatch(loadArticle());
store.dispatch(loadVision());
store.dispatch(loadHighlights());
store.dispatch(loadAgileTeams());
store.dispatch(loadEvents());
store.dispatch(loadTables());
store.dispatch(loadMetrics());

ReactDOM.render(
    <Provider store = {store} >
<Router history={browserHistory} routes={routes} /> 
</Provider>
,document.getElementById('root'));
registerServiceWorker();
