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
import { SketchPicker } from 'react-color';
import { CoursePreview } from './CoursePreview';
import { observer } from 'mobx-react';
import '../../styles/objects.CourseModal.scss';

export const CourseModal = observer(({courseModalState}) => (
  <Modal
    isOpen={courseModalState.isOpen}
    toggle={courseModalState.toggleIsOpen.bind(courseModalState)}
    className="course-modal"
  >
    <ModalHeader toggle={courseModalState.toggleIsOpen.bind(courseModalState)}>Edit Course</ModalHeader>
    <ModalBody>
      <div className="preview-modal-body">
        <div className="preview-modal-left">
          <div className="course-preview-wrap">
            <CoursePreview course={courseModalState.courseCopy} color={courseModalState.colorCopy} />
          </div>
        </div>
        <div className="preview-modal-right">
          <Form>

            <FormGroup row>
              <Label for="deptInput" sm={4}>Department</Label>
              <Col sm={8}>
                <Input
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
                <SketchPicker
                  id="colorPicker"
                  color={courseModalState.colorCopy}
                  onChange={courseModalState.handleSelectColor.bind(courseModalState)}
                />
              </Col>
            </FormGroup>

          </Form>
        </div>
      </div>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={() => {}}>Do Something</Button>{' '}
      <Button color="secondary" onClick={() => {}}>Cancel</Button>
    </ModalFooter>
  </Modal>
));
