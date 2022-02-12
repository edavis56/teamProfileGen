const employee = require('../employee');

const e1 = new employee('Aaron', '16251', 'aaronspeak@gmail.com');

describe('e1', () => {
    it('should return the name for the employee', () => {
    expect(employee.name).toBe('Aaron');
});


});