(function() {

  angular
    .module('calendarApp')
    .factory('dateDataService', dateDataService);

    dateDataService.$inject = [];

    function dateDataService() {
      var service = {
        months: [
          {
            month: 'January',
            number: 0,
            days: 31
            weeks: [
              week_1: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              },
              week_2: {
                sunday: {
                  day_num: 3,
                  events: []
                },
                monday: {
                  day_num: 4,
                  events: []
                },
                tuesday: {
                  day_num: 5,
                  events: []
                },
                wednesday: {
                  day_num: 6,
                  events: []
                },
                thursday: {
                  day_num: 7,
                  events: []
                },
                friday: {
                  day_num: 8,
                  events: []
                },
                saturday: {
                  day_num: 9,
                  events: []
                }
              },
              week_3: {
                sunday: {
                  day_num: 10,
                  events: []
                },
                monday: {
                  day_num: 11,
                  events: []
                },
                tuesday: {
                  day_num: 12,
                  events: []
                },
                wednesday: {
                  day_num: 13,
                  events: []
                },
                thursday: {
                  day_num: 14,
                  events: []
                },
                friday: {
                  day_num: 15,
                  events: []
                },
                saturday: {
                  day_num: 16,
                  events: []
                }
              },
              week_4: {
                sunday: {
                  day_num: 17,
                  events: []
                },
                monday: {
                  day_num: 18,
                  events: []
                },
                tuesday: {
                  day_num: 19,
                  events: []
                },
                wednesday: {
                  day_num: 20,
                  events: []
                },
                thursday: {
                  day_num: 21,
                  events: []
                },
                friday: {
                  day_num: 22,
                  events: []
                },
                saturday: {
                  day_num: 23,
                  events: []
                }
              },
              week_5: {
                sunday: {
                  day_num: 24,
                  events: []
                },
                monday: {
                  day_num: 25,
                  events: []
                },
                tuesday: {
                  day_num: 26,
                  events: []
                },
                wednesday: {
                  day_num: 27,
                  events: []
                },
                thursday: {
                  day_num: 28,
                  events: []
                },
                friday: {
                  day_num: 29,
                  events: []
                },
                saturday: {
                  day_num: 30,
                  events: []
                }
              },
              week_5: {
                sunday: {
                  day_num: 31,
                  events: []
                },
                monday: {
                  day_num: 1,
                  events: []
                },
                tuesday: {
                  day_num: 2,
                  events: []
                },
                wednesday: {
                  day_num: 3,
                  events: []
                },
                thursday: {
                  day_num: 4,
                  events: []
                },
                friday: {
                  day_num: 5,
                  events: []
                },
                saturday: {
                  day_num: 6,
                  events: []
                }
              }
            ]
          },
          {
            month: 'February',
            number: 1,
            days: 28
            weeks: [
              week_1: {
                sunday: {
                  day_num: 31,
                  events: []
                },
                monday: {
                  day_num: 1,
                  events: []
                },
                tuesday: {
                  day_num: 2,
                  events: []
                },
                wednesday: {
                  day_num: 3,
                  events: []
                },
                thursday: {
                  day_num: 4,
                  events: []
                },
                friday: {
                  day_num: 5,
                  events: []
                },
                saturday: {
                  day_num: 6,
                  events: []
                }
              },
              week_2: {
                sunday: {
                  day_num: 7,
                  events: []
                },
                monday: {
                  day_num: 8,
                  events: []
                },
                tuesday: {
                  day_num: 9,
                  events: []
                },
                wednesday: {
                  day_num: 10,
                  events: []
                },
                thursday: {
                  day_num: 11,
                  events: []
                },
                friday: {
                  day_num: 12,
                  events: []
                },
                saturday: {
                  day_num: 13,
                  events: []
                }
              },
              week_3: {
                sunday: {
                  day_num: 14,
                  events: []
                },
                monday: {
                  day_num: 15,
                  events: []
                },
                tuesday: {
                  day_num: 16,
                  events: []
                },
                wednesday: {
                  day_num: 17,
                  events: []
                },
                thursday: {
                  day_num: 18,
                  events: []
                },
                friday: {
                  day_num: 19,
                  events: []
                },
                saturday: {
                  day_num: 20,
                  events: []
                }
              },
              week_4: {
                sunday: {
                  day_num: 21,
                  events: []
                },
                monday: {
                  day_num: 22,
                  events: []
                },
                tuesday: {
                  day_num: 23,
                  events: []
                },
                wednesday: {
                  day_num: 24,
                  events: []
                },
                thursday: {
                  day_num: 25,
                  events: []
                },
                friday: {
                  day_num: 26,
                  events: []
                },
                saturday: {
                  day_num: 27,
                  events: []
                }
              },
              week_5: {
                sunday: {
                  day_num: 28,
                  events: []
                },
                monday: {
                  day_num: 29,
                  events: []
                },
                tuesday: {
                  day_num: 1,
                  events: []
                },
                wednesday: {
                  day_num: 2,
                  events: []
                },
                thursday: {
                  day_num: 3,
                  events: []
                },
                friday: {
                  day_num: 4,
                  events: []
                },
                saturday: {
                  day_num: 5,
                  events: []
                }
              }
            ]
          },
          {
            month: 'March',
            number: 2,
            days: 31
            weeks: [
              week_1: {
                sunday: {
                  day_num: 28,
                  events: []
                },
                monday: {
                  day_num: 29,
                  events: []
                },
                tuesday: {
                  day_num: 1,
                  events: []
                },
                wednesday: {
                  day_num: 2,
                  events: []
                },
                thursday: {
                  day_num: 3,
                  events: []
                },
                friday: {
                  day_num: 4,
                  events: []
                },
                saturday: {
                  day_num: 5,
                  events: []
                }
              },
              week_2: {
                sunday: {
                  day_num: 6,
                  events: []
                },
                monday: {
                  day_num: 7,
                  events: []
                },
                tuesday: {
                  day_num: 8,
                  events: []
                },
                wednesday: {
                  day_num: 9,
                  events: []
                },
                thursday: {
                  day_num: 10,
                  events: []
                },
                friday: {
                  day_num: 11,
                  events: []
                },
                saturday: {
                  day_num: 12,
                  events: []
                }
              },
              week_3: {
                sunday: {
                  day_num: 13,
                  events: []
                },
                monday: {
                  day_num: 14,
                  events: []
                },
                tuesday: {
                  day_num: 15,
                  events: []
                },
                wednesday: {
                  day_num: 16,
                  events: []
                },
                thursday: {
                  day_num: 17,
                  events: []
                },
                friday: {
                  day_num: 18,
                  events: []
                },
                saturday: {
                  day_num: 19,
                  events: []
                }
              },
              week_4: {
                sunday: {
                  day_num: 20,
                  events: []
                },
                monday: {
                  day_num: 21,
                  events: []
                },
                tuesday: {
                  day_num: 22,
                  events: []
                },
                wednesday: {
                  day_num: 23,
                  events: []
                },
                thursday: {
                  day_num: 24,
                  events: []
                },
                friday: {
                  day_num: 25,
                  events: []
                },
                saturday: {
                  day_num: 26,
                  events: []
                }
              },
              week_5: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              }

            ]
          },
          {
            month: 'April',
            number: 3,
            days: 30
            weeks: [
              week_1: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              },
              week_2: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              },
              week_3: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              },
              week_4: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              }
            ]
          },
          {
            month: 'May',
            number: 4,
            days: 31
            weeks: [
              week_1: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              },
              week_2: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              },
              week_3: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              },
              week_4: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              }
            ]
          },
          {
            month: 'June',
            number: 5,
            days: 30
            weeks: [
              week_1: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              },
              week_2: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              },
              week_3: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              },
              week_4: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              }
            ]
          },
          {
            month: 'July',
            number: 6,
            days: 31
            weeks: [
              week_1: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              },
              week_2: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              },
              week_3: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              },
              week_4: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              }
            ]
          },
          {
            month: 'August',
            number: 7,
            days: 31
            weeks: [
              week_1: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              },
              week_2: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              },
              week_3: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              },
              week_4: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              }
            ]
          },
          {
            month: 'September',
            number: 8,
            days: 30
            weeks: [
              week_1: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              },
              week_2: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              },
              week_3: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              },
              week_4: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              }
            ]
          },
          {
            month: 'October',
            number: 9,
            days: 31
            weeks: [
              week_1: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              },
              week_2: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              },
              week_3: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              },
              week_4: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              }
            ]
          },
          {
            month: 'November',
            number: 10,
            days: 30
            weeks: [
              week_1: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              },
              week_2: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              },
              week_3: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              },
              week_4: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              }
            ]
          },
          {
            month: 'December',
            number: 11,
            days: 31
            weeks: [
              week_1: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              },
              week_2: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              },
              week_3: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              },
              week_4: {
                sunday: {
                  day_num: 27,
                  events: []
                },
                monday: {
                  day_num: 28,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  events: []
                },
                friday: {
                  day_num: 1,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  events: []
                }
              }
            ]
          }
        ]
      }
      return service;
    }

}());
