import React from 'react';
import { observer } from 'mobx-react';
import {
  ButtonDropdown,
  Card,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { Dropdown } from 'semantic-ui-react';
import { CoursePreview } from './CoursePreview';
import { FaPlusCircle } from 'react-icons/lib/fa';
import '../../styles/objects.CoursePrerequisites.scss';
import '../../styles/utilities.shadow.scss';
import '../../styles/utilities.fadeIn.scss';

export const Prerequisites = observer(({state, course, prereqs, colorScheme }) => (
  <Card className="prereq-box">
    {prereqs.map(req => (
      <CoursePreview
        key={req.id}
        type="prereq"
        parent={course}
        course={req}
        color={colorScheme.get(req.dept)}
      />
    ))}
    <ButtonDropdown
      className="shadow"
      isOpen={state.prereqPickerIsOpen}
      toggle={state.togglePrereqPicker}
    >
      <DropdownToggle>
        <FaPlusCircle size={24} />
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Add New Course</DropdownItem>
        <DropdownItem divider />
        <Dropdown
          placeholder="Search For Exisiting Course"
          fluid
          multiple
          search
          selection
          options={[
             { key: 'CSCI - 141', value: 'CS 1', text: 'CSCS-141' },
             { key: 'CSCI - 142', value: 'CS 2', text: 'CSCI-142' },
          ]}
        />
      </DropdownMenu>
    </ButtonDropdown>
  </Card>
));
