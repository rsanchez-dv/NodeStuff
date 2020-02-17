const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App',()=>{
    var db = {
        saveUser: expect.createSpy()
    };
    // Replaces the db variable in app.js with this new db variable with the spy
    app.__set__('db', db);

    it('Should call the spy correctly',()=>{
        var spy = expect.createSpy();
        // spy();
        // expect(spy).toHaveBeenCalled();
        spy('ASDF')
        expect(spy).toHaveBeenCalledWith('ASDF')
    })

    it('Should call saveUser with user object', () =>{
        var email = 'rsanchez92@live.com';
        var password = 'password123';
        app.handleSignup(email,password);
        expect(db.saveUser).toHaveBeenCalledWith({email,password});
    })
})