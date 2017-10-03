const expect = require('expect');

var { generateMessage, generateLocationMessage } = require ('./message');

describe('generateMessage', () => {

  it ('should generate the correct message object', () => {

    var from = 'dick';
    var text = 'helo';
    var message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, text});

  });

});

describe('generateLocationMessage', () => {

  it ('should generate the correct location object', () => {

    var from = 'dick';
    var latitude = '-1.1';
    var longitude = '1.1';
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    var message = generateLocationMessage(from, latitude, longitude);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, url});

  });

});
