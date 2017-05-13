import * as dotenv from 'dotenv';
dotenv.config();

import * as express from 'express'

import makeLogger from './util/logger';

const log = makeLogger('app', 'app');
const App = express();

App.get('/', function(req, res){
    res.send('Open faced sandwiches are lies'); 
});

App.listen(process.env.APP_PORT, function(){
    log.info('Listening on %s', process.env.APP_PORT);
});

