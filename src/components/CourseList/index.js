import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function addCourseAction(title) {
  return { type: 'ADD_COURSE', title };
}

export default function CourseList() {
  let qty = 2;
  const courses = useSelector(state => state.data.slice(0, qty), [qty]);
  const dispatch = useDispatch();

  function addCourse() {
    dispatch(addCourseAction('NodeJs'));
  }

  return (
    <>
      <ul>
        { courses.map(course => <li key={course}>{course}</li>) }
      </ul>
      <button onClick={addCourse}>
        Add course
      </button>
    </>
  );
};