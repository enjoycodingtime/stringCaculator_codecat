describe('string', function () {
    var stringCaculator;
    beforeEach(function () {
        stringCaculator = new StringCaculator();
    });
    it('should return 0', function () {
        expect(stringCaculator.add()).toEqual(0);
    });
    it('should return the sum of the arguments ', function () {
        expect(stringCaculator.add('1', '2')).toEqual(3);
    });
    it('should return the sum of the arguments', function () {
        expect(stringCaculator.add('1', '2', '3')).toEqual(6);
    });
    it('should return the sum of the arguments')
})