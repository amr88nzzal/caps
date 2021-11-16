'use strict';
const events = require('../events');

describe('Event Test Working', () => {
    let consoleSpy;
    let data = {
        storeName: 'LTUC',
        orderId: '2021-11',
        customer: 'Amr',
        adress: 'Amman',
    };
    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    test('pickUp time after 1 sec', async () => {
        events.emit('PickUp', data);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    })

    test('inTransit', async () => {
        events.emit('InTransit', data);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });
    test('Delivered', async () => {
        events.emit('Delivered', data);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });


});