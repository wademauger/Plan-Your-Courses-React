import React from 'react';
import { Observer } from 'mobx-react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { Button, Card, CardHeader, CardBody } from 'reactstrap';
import { Term } from './Term';
import { RIEInput } from 'riek';
import { inlineValidate } from '../utils/inlineValidate';
import '../styles/objects.Year.scss';
import '../styles/utilities.InlineEdit.scss';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const yearQuery = gql`
  query YearQuery($yearId: ID!) {
    year(id: $yearId) {
      id
      title
      terms {
        id
      }
    }
  }
`;


const YearComponent = ({ data: { loading, error, year } }) => {
  if(loading) {
    return <p>Loading year...</p>;
  }

  if(error) {
    return <p>{error.message}</p>;
  }

  return (
    <Draggable
      draggableId={year.id}
      type="PLAN-YEAR"
    >
      {(draggableProvided, draggableSnapshot) => (
        <div>
          <div
            {...draggableProvided.dragHandleProps}
            className="year-box"
            ref={draggableProvided.innerRef}
            style={{
              ...draggableProvided.draggableStyle,
              cursor: draggableSnapshot.isDragging ? 'grabbing' : 'default',
              opacity: draggableSnapshot.isDragging ? '.5' : '1',
            }}
          >
            <Droppable droppableId={year.id} type="YEAR-TERM" direction="horizontal">
              {(droppableProvided, snapshot) => (
                <Observer>
                  {() => (
                    <Card className="year">
                      <CardHeader className="title">
                        <RIEInput
                          value={year.title}
                          change={({ title }) => { year.setTitle(title); }}
                          propName="title"
                          classEditing="year-title-editing inline-editing"
                          validate={inlineValidate}
                        />
                        <Button
                          color="link"
                          onClick={() => year.addTerm()}
                        >+</Button>
                      </CardHeader>
                      <div
                        className="YEAR-TERM-DROPPABLE"
                        ref={droppableProvided.innerRef}
                        style={{
                          backgroundColor: snapshot.isDraggingOver ? 'lightyellow' : 'white',
                        }}
                      >
                        <CardBody className="term-wrapper">
                          {year.terms.map((term) =>
                            <Term
                              key={term.id}
                              courses={term.courses}
                              term={term}
                            />
                          )}
                          {droppableProvided.placeholder}
                        </CardBody>
                      </div>
                    </Card>
                  )}
                </Observer>
              )}
            </Droppable>
          </div>
          {draggableProvided.placeholder}
        </div>
      )}
    </Draggable>
  );
};

export const Year = graphql(yearQuery, {
  options: (props) => ({
    variables: { yearId: props.year.id },
  }),
})(YearComponent);
