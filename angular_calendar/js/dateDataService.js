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
            days: 31,
            weeks: {
              week_1: {
                sunday: {
                  day_num: 27,
                  not_in_month: true,
                  events: []
                },
                monday: {
                  day_num: 28,
                  not_in_month: true,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  not_in_month: true,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  not_in_month: true,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  not_in_month: true,
                  events: [
                    'New Years Eve'
                  ]
                },
                friday: {
                  day_num: 1,
                  events: [
                    'New Years Day'
                  ]
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
              week_6: {
                sunday: {
                  day_num: 31,
                  events: []
                },
                monday: {
                  day_num: 1,
                  not_in_month: true,
                  events: []
                },
                tuesday: {
                  day_num: 2,
                  not_in_month: true,
                  events: []
                },
                wednesday: {
                  day_num: 3,
                  not_in_month: true,
                  events: []
                },
                thursday: {
                  day_num: 4,
                  not_in_month: true,
                  events: []
                },
                friday: {
                  day_num: 5,
                  not_in_month: true,
                  events: []
                },
                saturday: {
                  day_num: 6,
                  not_in_month: true,
                  events: []
                }
              }
            }
          },
          {
            month: 'February',
            number: 1,
            days: 28,
            weeks: {
              week_1: {
                sunday: {
                  day_num: 31,
                  not_in_month: true,
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
                  events: [
                    'Valentines Day'
                  ]
                },
                monday: {
                  day_num: 15,
                  events: [
                    'Presidents Day'
                  ]
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
                  not_in_month: true,
                  events: []
                },
                wednesday: {
                  day_num: 2,
                  not_in_month: true,
                  events: []
                },
                thursday: {
                  day_num: 3,
                  not_in_month: true,
                  events: []
                },
                friday: {
                  day_num: 4,
                  not_in_month: true,
                  events: []
                },
                saturday: {
                  day_num: 5,
                  not_in_month: true,
                  events: []
                }
              }
            }
          },
          {
            month: 'March',
            number: 2,
            days: 31,
            weeks: {
              week_1: {
                sunday: {
                  day_num: 28,
                  not_in_month: true,
                  events: []
                },
                monday: {
                  day_num: 29,
                  not_in_month: true,
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
                  events: [
                    'Day Light Savings Time'
                  ]
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
                  events: [
                    'Easter Sunday'
                  ]
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
                  not_in_month: true,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  not_in_month: true,
                  events: []
                }
              }
            }
          },
          {
            month: 'April',
            number: 3,
            days: 30,
            weeks: {
              week_1: {
                sunday: {
                  day_num: 27,
                  not_in_month: true,
                  events: []
                },
                monday: {
                  day_num: 28,
                  not_in_month: true,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  not_in_month: true,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  not_in_month: true,
                  events: []
                },
                thursday: {
                  day_num: 31,
                  not_in_month: true,
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
                  events: [
                    'Thomas Jefferson\'s Birthday'
                  ]
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
              }
            }
          },
          {
            month: 'May',
            number: 4,
            days: 31,
            weeks: {
              week_1: {
                sunday: {
                  day_num: 1,
                  events: []
                },
                monday: {
                  day_num: 2,
                  events: []
                },
                tuesday: {
                  day_num: 3,
                  events: []
                },
                wednesday: {
                  day_num: 4,
                  events: []
                },
                thursday: {
                  day_num: 5,
                  events: []
                },
                friday: {
                  day_num: 6,
                  events: []
                },
                saturday: {
                  day_num: 7,
                  events: []
                }
              },
              week_2: {
                sunday: {
                  day_num: 8,
                  events: [
                    'Mothers Day'
                  ]
                },
                monday: {
                  day_num: 9,
                  events: []
                },
                tuesday: {
                  day_num: 10,
                  events: []
                },
                wednesday: {
                  day_num: 11,
                  events: []
                },
                thursday: {
                  day_num: 12,
                  events: []
                },
                friday: {
                  day_num: 13,
                  events: []
                },
                saturday: {
                  day_num: 14,
                  events: []
                }
              },
              week_3: {
                sunday: {
                  day_num: 15,
                  events: []
                },
                monday: {
                  day_num: 16,
                  events: []
                },
                tuesday: {
                  day_num: 17,
                  events: []
                },
                wednesday: {
                  day_num: 18,
                  events: []
                },
                thursday: {
                  day_num: 19,
                  events: []
                },
                friday: {
                  day_num: 20,
                  events: []
                },
                saturday: {
                  day_num: 21,
                  events: []
                }
              },
              week_4: {
                sunday: {
                  day_num: 22,
                  events: []
                },
                monday: {
                  day_num: 23,
                  events: []
                },
                tuesday: {
                  day_num: 24,
                  events: []
                },
                wednesday: {
                  day_num: 25,
                  events: []
                },
                thursday: {
                  day_num: 26,
                  events: []
                },
                friday: {
                  day_num: 27,
                  events: []
                },
                saturday: {
                  day_num: 28,
                  events: []
                }
              },
              week_5: {
                sunday: {
                  day_num: 29,
                  events: []
                },
                monday: {
                  day_num: 30,
                  events: [
                    'Memorial Day'
                  ]
                },
                tuesday: {
                  day_num: 31,
                  events: []
                },
                wednesday: {
                  day_num: 1,
                  not_in_month: true,
                  events: []
                },
                thursday: {
                  day_num: 2,
                  not_in_month: true,
                  events: []
                },
                friday: {
                  day_num: 3,
                  not_in_month: true,
                  events: []
                },
                saturday: {
                  day_num: 4,
                  not_in_month: true,
                  events: []
                }
              }
            }
          },
          {
            month: 'June',
            number: 5,
            days: 30,
            weeks: {
              week_1: {
                sunday: {
                  day_num: 29,
                  not_in_month: true,
                  events: []
                },
                monday: {
                  day_num: 30,
                  not_in_month: true,
                  events: []
                },
                tuesday: {
                  day_num: 31,
                  not_in_month: true,
                  events: []
                },
                wednesday: {
                  day_num: 1,
                  events: []
                },
                thursday: {
                  day_num: 2,
                  events: []
                },
                friday: {
                  day_num: 3,
                  events: []
                },
                saturday: {
                  day_num: 4,
                  events: []
                }
              },
              week_2: {
                sunday: {
                  day_num: 5,
                  events: []
                },
                monday: {
                  day_num: 6,
                  events: []
                },
                tuesday: {
                  day_num: 7,
                  events: []
                },
                wednesday: {
                  day_num: 8,
                  events: []
                },
                thursday: {
                  day_num: 9,
                  events: []
                },
                friday: {
                  day_num: 10,
                  events: []
                },
                saturday: {
                  day_num: 11,
                  events: []
                }
              },
              week_3: {
                sunday: {
                  day_num: 12,
                  events: []
                },
                monday: {
                  day_num: 13,
                  events: []
                },
                tuesday: {
                  day_num: 14,
                  events: []
                },
                wednesday: {
                  day_num: 15,
                  events: []
                },
                thursday: {
                  day_num: 16,
                  events: []
                },
                friday: {
                  day_num: 17,
                  events: []
                },
                saturday: {
                  day_num: 18,
                  events: []
                }
              },
              week_4: {
                sunday: {
                  day_num: 19,
                  events: [
                    'Fathers Day'
                  ]
                },
                monday: {
                  day_num: 20,
                  events: []
                },
                tuesday: {
                  day_num: 21,
                  events: []
                },
                wednesday: {
                  day_num: 22,
                  events: []
                },
                thursday: {
                  day_num: 23,
                  events: []
                },
                friday: {
                  day_num: 24,
                  events: []
                },
                saturday: {
                  day_num: 25,
                  events: []
                }
              },
              week_5: {
                sunday: {
                  day_num: 26,
                  events: []
                },
                monday: {
                  day_num: 27,
                  events: []
                },
                tuesday: {
                  day_num: 28,
                  events: []
                },
                wednesday: {
                  day_num: 29,
                  events: []
                },
                thursday: {
                  day_num: 30,
                  events: []
                },
                friday: {
                  day_num: 1,
                  not_in_month: true,
                  events: []
                },
                saturday: {
                  day_num: 2,
                  not_in_month: true,
                  events: []
                }
              }
            }
          },
          {
            month: 'July',
            number: 6,
            days: 31,
            weeks: {
              week_1: {
                sunday: {
                  day_num: 26,
                  not_in_month: true,
                  events: []
                },
                monday: {
                  day_num: 27,
                  not_in_month: true,
                  events: []
                },
                tuesday: {
                  day_num: 28,
                  not_in_month: true,
                  events: []
                },
                wednesday: {
                  day_num: 29,
                  not_in_month: true,
                  events: []
                },
                thursday: {
                  day_num: 30,
                  not_in_month: true,
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
                  events: [
                    'Independence Day'
                  ]
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
              week_6: {
                sunday: {
                  day_num: 31,
                  events: []
                },
                monday: {
                  day_num: 1,
                  not_in_month: true,
                  events: []
                },
                tuesday: {
                  day_num: 2,
                  not_in_month: true,
                  events: []
                },
                wednesday: {
                  day_num: 3,
                  not_in_month: true,
                  events: []
                },
                thursday: {
                  day_num: 4,
                  not_in_month: true,
                  events: []
                },
                friday: {
                  day_num: 5,
                  not_in_month: true,
                  events: []
                },
                saturday: {
                  day_num: 6,
                  not_in_month: true,
                  events: []
                }
              }
            }
          },
          {
            month: 'August',
            number: 7,
            days: 31,
            weeks: {
              week_1: {
                sunday: {
                  day_num: 31,
                  not_in_month: true,
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
                  day_num: 30,
                  events: []
                },
                wednesday: {
                  day_num: 31,
                  events: []
                },
                thursday: {
                  day_num: 1,
                  not_in_month: true,
                  events: []
                },
                friday: {
                  day_num: 2,
                  not_in_month: true,
                  events: []
                },
                saturday: {
                  day_num: 3,
                  not_in_month: true,
                  events: []
                }
              }
            }
          },
          {
            month: 'September',
            number: 8,
            days: 30,
            weeks: {
              week_1: {
                sunday: {
                  day_num: 28,
                  not_in_month: true,
                  events: []
                },
                monday: {
                  day_num: 29,
                  not_in_month: true,
                  events: []
                },
                tuesday: {
                  day_num: 30,
                  not_in_month: true,
                  events: []
                },
                wednesday: {
                  day_num: 31,
                  not_in_month: true,
                  events: []
                },
                thursday: {
                  day_num: 1,
                  events: []
                },
                friday: {
                  day_num: 2,
                  events: []
                },
                saturday: {
                  day_num: 3,
                  events: []
                }
              },
              week_2: {
                sunday: {
                  day_num: 4,
                  events: []
                },
                monday: {
                  day_num: 5,
                  events: [
                    'Labor Day'
                  ]
                },
                tuesday: {
                  day_num: 6,
                  events: []
                },
                wednesday: {
                  day_num: 7,
                  events: []
                },
                thursday: {
                  day_num: 8,
                  events: []
                },
                friday: {
                  day_num: 9,
                  events: []
                },
                saturday: {
                  day_num: 10,
                  events: []
                }
              },
              week_3: {
                sunday: {
                  day_num: 11,
                  events: []
                },
                monday: {
                  day_num: 12,
                  events: []
                },
                tuesday: {
                  day_num: 13,
                  events: []
                },
                wednesday: {
                  day_num: 14,
                  events: []
                },
                thursday: {
                  day_num: 15,
                  events: []
                },
                friday: {
                  day_num: 16,
                  events: []
                },
                saturday: {
                  day_num: 17,
                  events: []
                }
              },
              week_4: {
                sunday: {
                  day_num: 18,
                  events: []
                },
                monday: {
                  day_num: 19,
                  events: []
                },
                tuesday: {
                  day_num: 20,
                  events: []
                },
                wednesday: {
                  day_num: 21,
                  events: []
                },
                thursday: {
                  day_num: 22,
                  events: []
                },
                friday: {
                  day_num: 23,
                  events: []
                },
                saturday: {
                  day_num: 24,
                  events: []
                }
              },
              week_5: {
                sunday: {
                  day_num: 25,
                  events: []
                },
                monday: {
                  day_num: 26,
                  events: []
                },
                tuesday: {
                  day_num: 27,
                  events: []
                },
                wednesday: {
                  day_num: 28,
                  events: []
                },
                thursday: {
                  day_num: 29,
                  events: []
                },
                friday: {
                  day_num: 30,
                  events: []
                },
                saturday: {
                  day_num: 1,
                  not_in_month: true,
                  events: []
                }
              }
            }
          },
          {
            month: 'October',
            number: 9,
            days: 31,
            weeks: {
              week_1: {
                sunday: {
                  day_num: 25,
                  not_in_month: true,
                  events: []
                },
                monday: {
                  day_num: 26,
                  not_in_month: true,
                  events: []
                },
                tuesday: {
                  day_num: 27,
                  not_in_month: true,
                  events: []
                },
                wednesday: {
                  day_num: 28,
                  not_in_month: true,
                  events: []
                },
                thursday: {
                  day_num: 29,
                  not_in_month: true,
                  events: []
                },
                friday: {
                  day_num: 30,
                  not_in_month: true,
                  events: []
                },
                saturday: {
                  day_num: 1,
                  events: []
                }
              },
              week_2: {
                sunday: {
                  day_num: 2,
                  events: []
                },
                monday: {
                  day_num: 3,
                  events: []
                },
                tuesday: {
                  day_num: 4,
                  events: []
                },
                wednesday: {
                  day_num: 5,
                  events: []
                },
                thursday: {
                  day_num: 6,
                  events: []
                },
                friday: {
                  day_num: 7,
                  events: []
                },
                saturday: {
                  day_num: 8,
                  events: []
                }
              },
              week_3: {
                sunday: {
                  day_num: 9,
                  events: []
                },
                monday: {
                  day_num: 10,
                  events: [
                    'Columbus Day'
                  ]
                },
                tuesday: {
                  day_num: 11,
                  events: []
                },
                wednesday: {
                  day_num: 12,
                  events: []
                },
                thursday: {
                  day_num: 13,
                  events: []
                },
                friday: {
                  day_num: 14,
                  events: []
                },
                saturday: {
                  day_num: 15,
                  events: []
                }
              },
              week_4: {
                sunday: {
                  day_num: 16,
                  events: []
                },
                monday: {
                  day_num: 17,
                  events: []
                },
                tuesday: {
                  day_num: 18,
                  events: []
                },
                wednesday: {
                  day_num: 19,
                  events: []
                },
                thursday: {
                  day_num: 20,
                  events: []
                },
                friday: {
                  day_num: 21,
                  events: []
                },
                saturday: {
                  day_num: 22,
                  events: []
                }
              },
              week_5: {
                sunday: {
                  day_num: 23,
                  events: []
                },
                monday: {
                  day_num: 24,
                  events: []
                },
                tuesday: {
                  day_num: 25,
                  events: []
                },
                wednesday: {
                  day_num: 26,
                  events: []
                },
                thursday: {
                  day_num: 27,
                  events: []
                },
                friday: {
                  day_num: 28,
                  events: []
                },
                saturday: {
                  day_num: 29,
                  events: []
                }
              },
              week_6: {
                sunday: {
                  day_num: 30,
                  events: []
                },
                monday: {
                  day_num: 31,
                  events: [
                    'Halloween'
                  ]
                },
                tuesday: {
                  day_num: 1,
                  not_in_month: true,
                  events: []
                },
                wednesday: {
                  day_num: 2,
                  not_in_month: true,
                  events: []
                },
                thursday: {
                  day_num: 3,
                  not_in_month: true,
                  events: []
                },
                friday: {
                  day_num: 4,
                  not_in_month: true,
                  events: []
                },
                saturday: {
                  day_num: 5,
                  not_in_month: true,
                  events: []
                }
              }
            }
          },
          {
            month: 'November',
            number: 10,
            days: 30,
            weeks: {
              week_1: {
                sunday: {
                  day_num: 30,
                  not_in_month: true,
                  events: []
                },
                monday: {
                  day_num: 31,
                  not_in_month: true,
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
                  events: [
                    'Thanksgiving'
                  ]
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
                  day_num: 1,
                  not_in_month: true,
                  events: []
                },
                friday: {
                  day_num: 2,
                  not_in_month: true,
                  events: []
                },
                saturday: {
                  day_num: 3,
                  not_in_month: true,
                  events: []
                }
              }
            }
          },
          {
            month: 'December',
            number: 11,
            days: 31,
            weeks: {
              week_1: {
                sunday: {
                  day_num: 27,
                  not_in_month: true,
                  events: []
                },
                monday: {
                  day_num: 28,
                  not_in_month: true,
                  events: []
                },
                tuesday: {
                  day_num: 29,
                  not_in_month: true,
                  events: []
                },
                wednesday: {
                  day_num: 30,
                  not_in_month: true,
                  events: []
                },
                thursday: {
                  day_num: 1,
                  events: []
                },
                friday: {
                  day_num: 2,
                  events: []
                },
                saturday: {
                  day_num: 3,
                  events: []
                }
              },
              week_2: {
                sunday: {
                  day_num: 4,
                  events: []
                },
                monday: {
                  day_num: 5,
                  events: []
                },
                tuesday: {
                  day_num: 6,
                  events: []
                },
                wednesday: {
                  day_num: 7,
                  events: []
                },
                thursday: {
                  day_num: 8,
                  events: []
                },
                friday: {
                  day_num: 9,
                  events: []
                },
                saturday: {
                  day_num: 10,
                  events: []
                }
              },
              week_3: {
                sunday: {
                  day_num: 11,
                  events: []
                },
                monday: {
                  day_num: 12,
                  events: []
                },
                tuesday: {
                  day_num: 13,
                  events: []
                },
                wednesday: {
                  day_num: 14,
                  events: []
                },
                thursday: {
                  day_num: 15,
                  events: []
                },
                friday: {
                  day_num: 16,
                  events: []
                },
                saturday: {
                  day_num: 17,
                  events: []
                }
              },
              week_4: {
                sunday: {
                  day_num: 18,
                  events: []
                },
                monday: {
                  day_num: 19,
                  events: []
                },
                tuesday: {
                  day_num: 20,
                  events: []
                },
                wednesday: {
                  day_num: 21,
                  events: []
                },
                thursday: {
                  day_num: 22,
                  events: []
                },
                friday: {
                  day_num: 23,
                  events: []
                },
                saturday: {
                  day_num: 24,
                  events: [
                    'Christmas Eve'
                  ]
                }
              },
              week_5: {
                sunday: {
                  day_num: 25,
                  events: [
                    'Christmas'
                  ]
                },
                monday: {
                  day_num: 26,
                  events: []
                },
                tuesday: {
                  day_num: 27,
                  events: []
                },
                wednesday: {
                  day_num: 28,
                  events: []
                },
                thursday: {
                  day_num: 29,
                  events: []
                },
                friday: {
                  day_num: 30,
                  events: []
                },
                saturday: {
                  day_num: 31,
                  events: []
                }
              }
            }
          }
        ]
      }
      return service;
    }

}());
