/**
 * Created by zk on 14-11-26.
 */
describe('delete repeat item', function () {
    var delete_repeat ;
    beforeEach(function () {
        delete_repeat = new DeleteRepeat();
    })
    it('should return [1,2,3,4] when given [1,1,2,3,4]', function () {
        expect(delete_repeat.f([1,1,2,3,4])).toEqual([1,2,3,4]);
    })
})