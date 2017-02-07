

describe ('Making sure ES6 is working for tests', function () {

    it('should let me use Jasmine', function () {
        let a = 24
        expect(a).toBe(24)
    })

    it('should let me use ES6 stuff', function () {
        const add = (a, b) => a + b
        const someArray = [1,2,3,4,5]

        let result = someArray.reduce(add)

        expect(result).toBe(15)
    })
})