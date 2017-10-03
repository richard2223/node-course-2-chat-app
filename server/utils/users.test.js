const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {

  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [
      { id: '1', name: 'dick', room: 'node course'},
      { id: '2', name: 'nikki', room: 'react course'},
      { id: '3', name: 'dylan', room: 'node course'},
    ]
  })

  it('should add new user', () => {
    var users = new Users();
    var user = { id: '123', name: 'dick', room: 'the room' };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  })

  it('should return names for node course', () => {
    var userList = users.getUserList('node course');

    expect(userList).toEqual(['dick', 'dylan']);
  })

  it('should return names for react course', () => {
    var userList = users.getUserList('react course');

    expect(userList).toEqual(['nikki']);
  })

  it('should remove a user', () => {
    const userId = '1';
    expect(users.removeUser(userId).id).toBe(userId);
    expect(users.users.length).toBe(2);
  })

  it('should not remove user', () => {
    expect(users.removeUser('666')).toBeFalsy();
    expect(users.users.length).toBe(3);
  })

  it('should find user', () => {
    const userId = '2';
    expect(users.getUser(userId).id).toBe(userId);
  })

  it('should not find user', () => {
    expect(users.getUser('666')).toBeFalsy();
  })

});
