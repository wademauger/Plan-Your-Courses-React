import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

class DragDropMaster extends React.Component {
  render() {
    return (
      <DragDropContext
        onDragEnd={this.handleDragDrop.bind(this.props.plan)}
      >
        <div>{this.props.children}</div>
      </DragDropContext>
    );
  }

  handleDragDrop(result) {
    switch(result.type) {
      case 'PLAN-YEAR':
        this.onDragYearEnd(result);
        break;
      case 'YEAR-TERM':
        //onDragTermEnd(result);
        break;
      case 'TERM-COURSE':
        //onDragCourseEnd(result);
        break;
      default:
        // I dunno, cry about it?
        return;
    }
  }

  onDragYearEnd(result) {
    if (!result.destination) {
      return; // The year was dropped in its current location
    }

    const targetYear = this.findYear(result.draggableId);
    const targetPlan = result.destination.droppableId === 'TRASH' ? null : this.props.plan;
    const sourcePlan = this.props.plan;

    sourcePlan.years.splice(targetYear.yearIndex, 1);
    if(targetPlan) {
      targetPlan.years.splice(result.destination.index, 0, targetYear.yearRef);
    }
  }

  findYear(yearId) {
    this.props.plan.years.forEach((thisYear, yearIndex) => {
      if (thisYear.id === yearId) {
        return { yearRef: thisYear, yearIndex: yearIndex };
      }
    });
    return null;
  }
};

export default DragDropMaster;
