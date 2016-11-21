var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('main');
var Weather = require('weather');
var About = require('about');
var Examples = require('examples');

//load foundation 
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation()

//app css
require('style!css!applicationStyles')

ReactDOM.render(
    <Router history={hashHistory}>
        <Router path="/" component={Main}>
            <Route path="about" component={About}/>
            <Route path="examples" component={Examples} />
            <IndexRoute component={Weather}/>
        </Router>
    </Router>,
    document.getElementById('app')
);
  