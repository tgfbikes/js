

let sequence
function runGenerator (generator) {
    sequence = generator()
    sequence.next()
}

function resumeGenerator (value) {
    sequence.next(value)
}

export const getOrder = function (orderId) {
    return Promise.resolve({userId: 20})
}

export const getUser = function (userId) {
    return Promise.resolve({companyId: 21})
}

export const getCompany = function (companyId) {
    return Promise.resolve({name: 'In your face'})
}

export const getCourse = function (courseId) {
    let courses = {
        1: {
            name: 'something'
        },
        2: {
            name: 'something else'
        },
        3: {
            name: 'something else again'
        }
    }

    return Promise.resolve(courses[courseId])
}

export const asyncGenMethods = {
    runGenerator,
    resumeGenerator
}

export const pause = function (time) {
    setTimeout(function () {
        console.log(`paused for ${time}ms`)
        asyncGenMethods.resumeGenerator()
    }, time)
}

export const getStockPrice = function () {
    setTimeout(function() {
        asyncGenMethods.resumeGenerator(50)
    }, 500);
}

export const executeTrade = function () {
    setTimeout(function() {
        console.log('trade completed')
        asyncGenMethods.resumeGenerator()
    }, 500);
}