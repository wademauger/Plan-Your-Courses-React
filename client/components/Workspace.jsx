import React from 'react';
import { inject, observer } from 'mobx-react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Plan } from './Plan';
import { CourseModal } from './editCourseModal/CourseModal';
import { Trash } from './Trash';
import '../styles/objects.Workspace.scss';
import '../styles/utilities.grab.scss';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const planQuery = gql`
  query PlanQuery($planId: ID!) {
    plan(id: $planId) {
      id
      title
      years
    }
  }
`;

const PlanWithData = graphql(planQuery, {
  options: (props) => ({
    variables: { planId: 1 },
  }),
})(Plan);

export const Workspace = inject('store')(observer(({ store }) => (
  <div className="workspace">
    <DragDropContext
      onDragEnd={store.mainPlan.handleDragDrop.bind(store.mainPlan)}
    >
      <PlanWithData />
      <CourseModal />
      <Trash />
    </DragDropContext>
  </div>
)));

Workspace.displayName = 'Workspace';
