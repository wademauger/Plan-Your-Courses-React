import React from 'react';
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter } from 'reactstrap';
import { ChromePicker } from 'react-color';
import { CoursePreview } from './CoursePreview';
import { observer } from 'mobx-react';
import '../../styles/objects.CourseModal.scss';

export const CourseModal = observer(({courseModalState}) => (
  <Modal
    isOpen={courseModalState.isOpen}
    toggle={courseModalState.toggleIsOpen.bind(courseModalState)}
    className="course-modal"
  >
    <Form
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          courseModalState.saveChanges.bind(courseModalState)();
        }
      }}
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        courseModalState.saveChanges.bind(courseModalState)();
      }}
    >
      <ModalHeader toggle={courseModalState.toggleIsOpen.bind(courseModalState)}>Edit Course</ModalHeader>
      <ModalBody>
        <div className="preview-modal-body">
          <div className="preview-modal-left">
            <div className="course-preview-wrap">
              <CoursePreview
                course={courseModalState.courseCopy}
                color={courseModalState.previewColor}
              />
            </div>
          </div>
          <div className="preview-modal-right">

            <FormGroup row>
              <Label for="deptInput" sm={4}>Department</Label>
              <Col sm={8}>
                <Input
                  autoFocus
                  name="dept"
                  id="deptInput"
                  onChange={courseModalState.handleDeptChange.bind(courseModalState)}
                  placeholder={courseModalState.courseCopy.dept}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="numInput" sm={4}>Course #</Label>
              <Col sm={8}>
                <Input
                  name="num"
                  id="numInput"
                  onChange={courseModalState.handleNumChange.bind(courseModalState)}
                  placeholder={courseModalState.courseCopy.num}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="titleInput" sm={4}>Course Title</Label>
              <Col sm={8}>
                <Input
                  name="title"
                  id="titleInput"
                  onChange={courseModalState.handleTitleChange.bind(courseModalState)}
                  placeholder={courseModalState.courseCopy.name}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="creditsInput" sm={4}># of Credits</Label>
              <Col sm={8}>
                <Input
                  type="number"
                  name="credits"
                  id="creditsInput"
                  innerRef={courseModalState.setCreditsInputRef.bind(courseModalState)}
                  onChange={courseModalState.handleCreditsChange.bind(courseModalState)}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="colorPicker" sm={4}>Color</Label>
              <Col sm={8}>
                <ChromePicker
                  id="colorPicker"
                  color={courseModalState.previewColor}
                  onChange={courseModalState.handleSelectColor.bind(courseModalState)}
                />
              </Col>
            </FormGroup>

          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button
          color="secondary"
          onClick={courseModalState.toggleIsOpen.bind(courseModalState)}
          type="button"
        >
          Cancel
        </Button>
        <Button
          color="primary"
          onClick={courseModalState.saveChanges.bind(courseModalState)}
          type="submit"
        >
          Save
        </Button>{' '}
      </ModalFooter>
    </Form>
  </Modal>
));
