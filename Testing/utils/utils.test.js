const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
    describe('#add', () => {
        it('Should add two numbers', () => {
            var res = utils.add(22, 11);
            expect(res).toBeA('number').toBe(33);
        });

        it('Should async add two numbers', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            })
        });
    })
    describe('#square', () => {
        it('Should square a number', () => {
            var res = utils.square(2);
            expect(res).toBeA('number').toBe(4);
        });

        it('Should async square two numbers', (done) => {
            utils.asyncSquare(2, (square) => {
                expect(square).toBe(4).toBeA('number');
                done();
            });
        });
    })

    describe('#Object', () => {
        it('Should verify first and Last Name', () => {
            var user = {
                location: 'Los Angeles',
                age: 26
            };
            var res = utils.setName(user, 'Roberto Sanchez');
            expect(user).toInclude({
                firstName: 'Roberto',
                lastName: 'Sanchez'
            });
        });
    })
})
