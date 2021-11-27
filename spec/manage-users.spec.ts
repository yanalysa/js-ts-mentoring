import { expect } from 'chai';
import {User} from "../src/model/user";

describe('manage user entity tests', function () {
    let semen: User;

    before('create new user', function (){
        semen = new User(21, 'Semen Sklyarenko');
    });

    it('should be able to update user name', function () {
        const expectedNewName = 'Mykhailo';
        semen.name = expectedNewName;

       expect(semen.name).to.equal(expectedNewName);
    });

    it('should be able to update user age', function () {

    });

    it('should be able to update entire user', function () {

    });
});