import { action, observable } from 'mobx';
import { CourseModel } from './CourseModel';

export class CourseModalState {

  @observable
  isOpen;

  @observable
  courseRef;

  @observable
  planRef;

  @observable
  courseCopy;

  @observable
  previewColor;

  creditsInputRef;

  constructor(plan) {
    this.isOpen = false;
    this.courseCopy = new CourseModel();
    this.courseRef = new CourseModel();
    this.planRef = plan;
  }

  @action toggleIsOpen(course) {
    if (!this.isOpen) {
      // if it hadn't been opened, initialize first
      this.init(course);
    }
    this.isOpen = !this.isOpen;
  }

  @action init(course) {
    this.courseRef = course;
    this.courseCopy = observable(new CourseModel(
      course.name,
      course.dept,
      course.num,
      course.credits,
      course.prereqs
    ));
    this.previewColor = this.planRef.colorScheme.get(course.dept);
  }

  handleDeptChange(changeEvent) {
    const newDept = changeEvent.target.value.toUpperCase();
    const deptColorRef = this.planRef.colorScheme.get(newDept);
    if (deptColorRef) {
      this.previewColor = deptColorRef;
    }
    this.courseCopy.setDept(newDept);
  }

  handleNumChange(changeEvent) {
    this.courseCopy.setNum(changeEvent.target.value);
  }

  handleTitleChange(changeEvent) {
    this.courseCopy.setName(changeEvent.target.value);
  }

  setCreditsInputRef(ref) {
    this.creditsInputRef = ref;
    if (this.creditsInputRef) {
      this.creditsInputRef.value = parseInt(this.courseRef.credits);
    }
  }

  handleCreditsChange(changeEvent) {
    const newCredits = parseInt(changeEvent.target.value);
    this.courseCopy.setCredits(newCredits);
  }

  handleSelectColor(color) {
    this.previewColor = color.hex;
  }

  @action.bound saveChanges() {
    this.courseRef.setName(this.courseCopy.name);
    this.courseRef.setDept(this.courseCopy.dept);
    this.courseRef.setNum(this.courseCopy.num);
    this.courseRef.setCredits(this.courseCopy.credits);
    this.courseRef.setPrereqs(this.courseCopy.prereqs);
    this.planRef.colorScheme.set(this.courseRef.dept, this.previewColor);
    this.isOpen = false;
  }

}
