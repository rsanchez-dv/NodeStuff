const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;
describe('Server', () => {
    describe('GET /', () => {
        it('Should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        title: 'app response'
                    });
                })
                .end(done);
        });
    });
    describe('GET /users', () => {
        it('Should return an array of user objects', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Roberto Sanchez',
                        rank: '22'
                    })
                })
                .end(done);
        });
    })
})