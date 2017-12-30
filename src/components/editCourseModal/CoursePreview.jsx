import React from 'react';
import { observer } from 'mobx-react';
import '../../styles/objects.Course.scss';
import '../../styles/objects.CoursePreview.scss';
import '../../styles/utilities.shadow.scss';
import '../../styles/utilities.center.scss';

export const CoursePreview = observer(({course, colorScheme, defaultColor}) => (
  <li
    className="course shadow center course-preview"
    style={{ backgroundColor: colorScheme.get(course.dept) || defaultColor }}
  >
    <i className="fa fa-exclamation prereq-warning-badge"></i>
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
