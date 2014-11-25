describe('string', function () {
    var stringCaculator;
    beforeEach(function () {
        stringCaculator = new StringCaculator();
    });
    it('should return 0 when hava no input', function () {
        expect(stringCaculator.add()).toEqual(0);
    });
    it('should return 0 when hava a enpty string input', function () {
        expect(stringCaculator.add('')).toEqual(0);
    });

    it('should return 1 the input "1"', function () {
        expect(stringCaculator.add('1')).toEqual(1);
    });
    it('should return 3 the input "1,2"', function () {
        expect(stringCaculator.add('1,2')).toEqual(3);
    });
    it('should return 13 the input "1,12"', function () {
        expect(stringCaculator.add('1,12')).toEqual(13);
    });
    it('should return  21 when input stirng is "1,2,3,4,5,6"', function () {
        expect(stringCaculator.add("1,2,3,4,5,6")).toEqual(21);
    });
    it('should return 6 when input string is  “1\n2,3”', function () {
        expect(stringCaculator.add( '1\n2,3')).toEqual(6)
    });
    it('should return 3 when input stirng is  "//;\n1;2"', function () {
        expect(stringCaculator.add("//;\n1;2")).toEqual(3)
    });
    it('should return  “negatives not allowed” when input sring include "-"', function () {
        expect(stringCaculator.add( '1,2,-3')).toEqual('negatives not allowed')
    });
    it('Numbers bigger than 1000 should be ignored, so adding 2 + 1001  = 2', function () {
        expect(stringCaculator.add('1,1001')).toEqual(1);
    })
})