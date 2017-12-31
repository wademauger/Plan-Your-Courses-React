import { CourseModel } from '../CourseModel';

export const swen101 = new CourseModel(
  'Software Engineering Seminar',
  'SWEN',
  '101',
  1,
  false,
  []
);

export const swen250 = new CourseModel(
  'Personal Software Engineering',
  'SWEN',
  '250',
  3,
  false,
  [swen101]
);

export const swen261 = new CourseModel(
  'Intro to Software Engineering',
  'SWEN',
  '261',
  4,
  false,
  [swen101, swen250]
);
