import React from 'react';
import { Course } from '../Course';
import { CourseModel } from '../../stores/models/CourseModel';
import { Store } from '../../stores/Store.js';
import { shallow, mount, render } from 'enzyme';

jest.mock('react-beautiful-dnd', () => ({
  droppable: ({ children }) => (<div>
    {children}
  </div>),
}));

describe('<Course />', () => {
	it('Should render with a default Course Model', () => {

		const myCourseModel = new CourseModel('SW Architectures & Requirements', 'SWEN', '444', 3);
    const myStore = new Store();

		const wrapper = shallow(<Course course={myCourseModel} store={myStore} />);
    expect(wrapper.find('.header-text').text()).toBe(`${myCourseModel.dept} ${myCourseModel.num}`);
	});
});
