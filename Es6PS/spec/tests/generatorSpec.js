

import {pause, asyncGenMethods, getStockPrice, executeTrade} from '../utils'

describe('generators', function () {
    it('should yield a value', function () {
        // arrange
        function *someGen () {
            yield 4
        }

        // act
        let iterator = someGen()

        // assert
        expect(iterator.next().value).toBe(4)
        expect(iterator.next().value).toBeUndefined()
    })

    it('should work run to completion with a for of loop', function () {
        // arrange
        function *someGen () {
            yield 1
            yield 5
            yield -20
            yield 45
        }

        // act
        let results = []
        for (let val of someGen()) {
            results.push(val)
        }

        // assert
        expect(results.find(num => num === 1)).toBe(1)
        expect(results.find(num => num === 5)).toBe(5)
        expect(results.find(num => num === -20)).toBe(-20)
        expect(results.find(num => num === 45)).toBe(45)
    })

    it('should yield with value parameters', function () {
        // arrange
        function *someGen (x) {
            let y = 2 * (yield (x + 1))
            return y
        }

        // act
        let iterator = someGen(5)
        let firstIt = iterator.next()
        let secondIt = iterator.next(2)

        // assert
        expect(firstIt.value).toBe(6)
        expect(firstIt.done).toBe(false)
        expect(secondIt.value).toBe(4)
        expect(secondIt.done).toBe(true)
    })

    it('should handle errors', function () {
        // arrange
        function *someGen () {
            try {
                let x = yield 4
            } catch (err) {
                // assert
                expect(err).toBe('things are a suckin')
            }
        }

        // act
        let iterator = someGen()
        let firstIt = iterator.next()
        iterator.throw('things are a suckin')

        // assert
        expect(firstIt.value).toBe(4)
    })

    it('should handle errors internally', function () {
        // arrange
        function *someGen (x) {
            try {
                let y = x.toUpperCase() // throw here
                yield y
            } catch (err) {
                // assert
                expect(err).toMatch(/TypeError/)
            }
        }

        // act
        let iterator = someGen()
        iterator.next(4)
    })

})

xdescribe('asnyc generators', function () {

    it('should handle asnyc', function (done) {
        function* main () {
            console.log('start')
            yield pause(500)
            console.log('middle')
            yield pause(500)
            console.log('end')
            done()
        }

        asyncGenMethods.runGenerator(main)
    })

    it('should work with data', function (done) {

        function* main() {
            let price = yield getStockPrice()
            price > 45 ? yield executeTrade() : console.log('trade not met')
            done()
        }

        asyncGenMethods.runGenerator(main)
    })

})