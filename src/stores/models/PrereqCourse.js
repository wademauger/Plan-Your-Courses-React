import { serializable, identifier, list, reference, getDefaultModelSchema } from 'serializr';
import { ID } from '../../utils/id';

export class PrereqCourse {

  @serializable
  dept;

  @serializable
  courseNum;

  @serializable(identifier())
  id;

  constructor(dept, courseNum) {
    this.dept = dept;
    this.courseNum = courseNum;
    this.id = ID();
  }

}
