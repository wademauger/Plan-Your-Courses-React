import { action, observable } from 'mobx';
import { CourseModel } from './CourseModel';

export class CourseModalState {

  @observable
  isOpen;

  @observable
  courseRef;

  @observable
  colorSchemeRef;

  @observable
  courseCopy;

  @observable
  colorCopy;

  creditsInputRef;

  constructor(colorScheme) {
    this.isOpen = false;
    this.courseCopy = new CourseModel();
    this.courseRef = new CourseModel();
    this.colorSchemeRef = colorScheme;
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
    this.colorCopy = this.colorSchemeRef.find(thisColor => thisColor.dept === course.dept).color;
  }

  handleDeptChange(changeEvent) {
    const newDept = changeEvent.target.value.toUpperCase();

    console.log(newDept, this.colorSchemeRef);
    // This will be undefined if there is no
    // Department with this code, otherwise it
    // will reference that Department's color str
    const deptColorRef = this.colorSchemeRef.find(
      thisColor => thisColor.dept = newDept
    );
    console.log(deptColorRef)
    if (deptColorRef) {
      this.colorCopy = deptColorRef.color;
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
    this.colorCopy = color.hex;
  }

}
