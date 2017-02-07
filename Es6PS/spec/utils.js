


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
