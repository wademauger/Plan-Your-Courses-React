import React from 'react';
import { observer } from 'mobx-react';
import { FaTimesCircle } from 'react-icons/lib/fa';
import '../../styles/objects.Course.scss';
import '../../styles/objects.CoursePreview.scss';
import '../../styles/utilities.shadow.scss';
import '../../styles/utilities.center.scss';

export const CoursePreview = observer(({course, color, type}) => (
  <li
    className={'course shadow center ' + type}
    style={{ backgroundColor: color }}
  >
    <i className="fa fa-exclamation prereq-warning-badge"></i>
    {type === 'prereq' ?
        <div
          className="deleteButton fade"
          onClick={() => {console.log('deleting a prereq')}}
        >
          <FaTimesCircle size={24}/>
        </div>: null
    }
    <div className="wrapper">
      <div className="header-background"></div>
      <h5 className="header-text">{course.dept} {course.num}</h5>
      <div className="details">
        <p className="name">{course.name}</p>
        <p className="credits">[{course.credits}]</p>
      </div>
    </div>
  </li>
));
