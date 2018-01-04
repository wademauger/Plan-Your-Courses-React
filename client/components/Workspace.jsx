import React from 'react';
import { inject, observer } from 'mobx-react';
import { Plan } from './Plan';
import DragDropMaster from './DragDropMaster';
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
      years {
        id
      }
    }
  }
`;



const WorkspaceComponent = ({ data: { loading, error, plan } }) => {
  if(loading) {
    return <p>Loading...</p>;
  }

  if(error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="workspace">
      <DragDropMaster plan={ plan }>
        <Plan plan={ plan } />
        <CourseModal />
        <Trash />
      </DragDropMaster>
    </div>
  );
};

WorkspaceComponent.displayName = 'Workspace';


export const Workspace = graphql(planQuery, {
  options: (props) => ({
    variables: { planId: 'SEED' },
  }),
})(WorkspaceComponent);
