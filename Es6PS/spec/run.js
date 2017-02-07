

import Jasmine from 'jasmine'

let jasmine = new Jasmine()

jasmine.loadConfigFile('spec/support/jasmine.json')

jasmine.onComplete((passed) => {
    passed
        ?
            console.log('All tests have passed...yippee')
        :
            console.log('Everything is broke, you suck')
})
jasmine.execute()