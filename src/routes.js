import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './App'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import MerchantPage from './containers/MerchantPage';
import TeamPage from './components/TeamPage';
import ContentEditorPage from './components/ContentEditorPage';
import AgileCommunity from './components/AgileCommunity';
import ArticleListContainer from './containers/ArticleListContainer';
import SampleContainer from './containers/SampleContainer';
import AdminContainer from './containers/AdminContainer';
import SingleArticleContainer from './containers/SingleArticleContainer';
import ContactUsContainer from './containers/ContactUsContainer';
import ContentEditorContainer from './containers/ContentEditorContainer';



export default (
    <Route path="/" component={App} >
        <IndexRoute component={HomePage} />
        <Route path="about" component = {AboutPage} />        
        <Route path="merchants" component = {MerchantPage} />
        <Route path="team" component = {TeamPage} />
        <Route path="content" component = {ContentEditorContainer} />
        <Route path="community" component = {AgileCommunity} />
        <Route path="home" component = {HomePage} />
        <Route path="articles" component = {ArticleListContainer} />
        <Route path="sample" component = {SampleContainer} />
        <Route path="admin" component = {AdminContainer} />
        <Route path="article/:id" component = {SingleArticleContainer}  />
        <Route path="contactus" component = {ContactUsContainer}  />

    </Route>
)

