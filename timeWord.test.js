const timeWord = require('./timeWord');

describe('timeWord', () => {
    it('converts midnight to words', () => {
        expect(timeWord('00:00')).toBe('midnight');
    });

    it('converts 00:12 to words', () => {
        expect(timeWord('00:12')).toBe('twelve twelve am');
    });

    it('converts 01:00 to one o’clock am', () => {
        expect(timeWord('01:00')).toBe("one o’clock am");
    });

    it('converts 06:01 to six oh one am', () => {
        expect(timeWord('06:01')).toBe('six oh one am');
    });

    it('converts 06:10 to six ten am', () => {
        expect(timeWord('06:10')).toBe('six ten am');
    });

    it('converts 06:18 to six eighteen am', () => {
        expect(timeWord('06:18')).toBe('six eighteen am');
    });

    it('converts 06:30 to six thirty am', () => {
        expect(timeWord('06:30')).toBe('six thirty am');
    });

    it('converts 10:34 to ten thirty four am', () => {
        expect(timeWord('10:34')).toBe('ten thirty four am');
    });

    it('converts noon to words', () => {
        expect(timeWord('12:00')).toBe('noon');
    });

    it('converts 12:09 to twelve oh nine pm', () => {
        expect(timeWord('12:09')).toBe('twelve oh nine pm');
    });

    it('converts 23:23 to eleven twenty three pm', () => {
        expect(timeWord('23:23')).toBe('eleven twenty three pm');
    });
});


