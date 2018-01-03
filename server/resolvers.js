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

module.exports = {
  Query: {
    plans: () => {
      return dummyPlans;
    },

    plan: (root, { id }) => {
      return dummyPlans.find(plan => plan.id === id);
    },
  },
};
