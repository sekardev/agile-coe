import courses from './courseReducer'
import { combineReducers } from 'redux';
import merchants from './merchantReducers'
import menus from './menuReducers'
import pagecontents from './pageContentReducers'
import carousels from './carouselReducers'
import articles from './articleReducers'
import visions from './visionReducers'
import highlights from './highlightReducers'
import agileTeams from './agileTeamReducer'
import events from './eventReducers'
import tables from './tableReducers'
import metrics from './metricReducers'

const rootReducer = combineReducers(
  {courses, merchants, menus,pagecontents,carousels 
    ,articles,visions,highlights,agileTeams , events,  tables,metrics}
)

export default rootReducer;