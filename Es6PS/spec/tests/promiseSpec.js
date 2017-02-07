

import {getOrder, getUser, getCompany, getCourse} from '../utils'

describe ('ES6 Promises', function () {

    it('should resolve', function (done) {
        let myPromise = new Promise(function (resolve, reject) {
            resolve()
        })

        myPromise.then(function () {
            done()
        })
    })

    it('should receive the resolved data', function (done) {
        let myPromise = new Promise(function (resolve, reject) {
            resolve(1)
        })
        
        myPromise.then(function (data) {
            expect(data).toBe(1)
            done()
        })
    })

    it('should fail when rejected', function (done) {
        let myPromise = new Promise(function (resolve, reject) {
            reject(Error('man this sucks'))
        })

        myPromise.then(function () {
            // success callback
        }, function (error) {
            expect(error.message).toBe('man this sucks')
            done()
        })
    })

    it('should fail with catch method', function (done) {
        let myPromise = new Promise(function (resolve, reject) {
            reject(Error('man this sucks'))
        })

        myPromise.catch(function (error) {
            expect(error.message).toBe('man this sucks')
            done()
        })
    })

    it('should compose when resolved with a promise', function (done) {
        let myPromise = new Promise(function (resolve, reject) {
            resolve(4)
        })
        let myPromise2 = new Promise(function (resolve, reject) {
            resolve(myPromise)
        })

        myPromise2.then(function (data) {
            expect(data).toBe(4)
            done()
        })
    })

    it('should have static resolve', function (done) {
        let myPromise = Promise.resolve(5)
        let myPromise2 = Promise.resolve(myPromise)

        myPromise2.then(function (data) {
            expect(data).toBe(5)
            done()
        })
    })

    it('should have static reject', function (done) {
        let myPromise = Promise.reject(Error('oh man'))

        myPromise.catch(function (error) {
            expect(error.message).toBe('oh man')
            done()
        })
    })

    it('should be asynchronous', function (done) {
        let async = false
        let myPromise = Promise.resolve()

        myPromise.then(function () {
            expect(async).toBe(true)
            done()
        })

        async = true
    })

    it('should be chainable', function (done) {
        getOrder(20).then(function (order) {
            return getUser(order.userId)
        }).then(function (user) {
            return getCompany(user.companyId)
        }).then(function (company) {
            expect(company.name).toBe('In your face')
            done()
        }).catch(function (error) {
            // handle error
        })
    })

    it('should execute after all promises with all', function (done) {
        let courseIds = [1,2,3]
        let promises = []

        for (let i = 0; i < courseIds.length; i++) {
            promises.push(getCourse(courseIds[i]))
        }
        Promise.all(promises).then(function (values) {
            expect(values.length).toBe(3)
            done()
        })
    })

    it('should execute after first resolve', function (done) {
        let courseIds = [1,2,3]
        let promises = []

        for (let i = 0; i < courseIds.length; i++) {
            promises.push(getCourse(courseIds[i]))
        }
        Promise.race(promises).then(function (firstValue) {
            expect(firstValue.name).toBeDefined()
            done()
        })
    })
})


















