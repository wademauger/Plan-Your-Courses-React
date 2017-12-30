import React from 'react';
import { observer } from 'mobx-react';
import {
  ButtonDropdown,
  Card,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { CoursePreview } from './CoursePreview';
import { FaPlusCircle } from 'react-icons/lib/fa';
import '../../styles/objects.CoursePrerequisites.scss';
import '../../styles/utilities.shadow.scss';
import '../../styles/utilities.fadeIn.scss';

export const Prerequisites = observer(({state, prereqs, colorScheme }) => (
  <Card className="prereq-box">
    {prereqs.map(req => (
      <CoursePreview
        key={req.id}
        type="prereq"
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
        <FaPlusCircle size={24}/>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem disabled>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Another Action</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  </Card>
));
