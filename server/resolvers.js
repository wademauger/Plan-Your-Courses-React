const SE = require('./SEED');
const dummyPlans = [
  {
    id: '1',
    title: 'Dummy Plan 1',
    years: [],
  },
  {
    id: '2',
    title: 'Dummy Plan 2',
    years: [],
  }
];

dummyPlans.push(SE);

module.exports = {
  Query: {
    plans: () => {
      return dummyPlans;
    },

    plan: (root, { id }) => {
      return dummyPlans.find(plan => plan.id === id);
    },

    year: (root, { id }) => {
      return SE.years.find(year => year.id === id);
    },

    term: (root, { id }) => {
      let result;
      SE.years.forEach((year) => {
        let term = year.terms.find(term => term.id === id);
        if(term) {
          result = term;
        }
      });
      return result;
    },

    course: (root, { id }) => {
      let result;
      SE.years.forEach((year) => {
        year.terms.forEach((term) => {
          let course = term.courses.find(course => course.id === id);
          if(course) {
            result = course;
          }
        });
      });
      return result;
    },
  },
};
