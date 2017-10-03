const expect = require('expect');

var { generateMessage } = require ('./message');

describe('generateMessage', () => {

  it ('should generate the correct message object', () => {

    var from = 'dick';
    var text = 'helo';
    var message = generateMessage(from, text);

    expect(message).toMatchObject({from, text});
    expect(typeof message.createdAt).toBe('number');

  });

});
