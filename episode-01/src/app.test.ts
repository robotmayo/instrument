import {expect} from 'chai';
import * as request from 'supertest';
import {} from 'mocha'; // Bring mocha globals into the context


import app from './app';

 describe('app', function(){
    describe('/', async function(){
        it('returns 200', async function(){
           const res = await request(app)
                .get('/');
            expect(res.status).to.equal(200);
        });
    })
 });
