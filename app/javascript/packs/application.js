/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

console.log('Hello World from Webpacker')

// Import all the modules
import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, Switch } from 'react-router'
import * as Sem from 'semantic-ui-react';
import Marked from 'marked';
import CodeMirror from 'react-codemirror';
import CodeMirrorRuby from 'codemirror/mode/ruby/ruby';

// Semantic CSS built with gulp (see readme)
require('../../../vendor/semantic/dist/semantic.css');

import DatePicker from 'react-datepicker';
import moment from 'moment';

// for opal/hyperloop modules to find React and others they must explicitly be saved
// to the global space, otherwise webpack will encapsulate them locally here
global.React = React;
global.ReactDOM = ReactDOM;
// global.Router = Router;
// global.Route = Route;
// global.Switch = Switch;
global.Sem = Sem;
global.Marked = Marked;
global.ReactCodeMirror = CodeMirror;
global.CodeMirrorRuby = CodeMirrorRuby;
global.DatePicker = DatePicker
global.moment = moment
