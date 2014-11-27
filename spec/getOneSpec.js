/**
 * Created by zk on 14-11-26.
 */
describe('getOne', function () {
    var getOne ;
    beforeEach(function () {
        getOne = new GetOne();
    })
    it('should return 1 when input 2', function () {
        expect(getOne.caculate(2)).toEqual(1);
    });
    it('should return 2 when input 2', function () {
        expect(getOne.caculate(3)).toEqual(2);
    });
    it('should return 4 when input 7', function () {
        expect(getOne.caculate(7)).toEqual(4);
    });
})