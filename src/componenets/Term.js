import React, { useState } from "react";
import { useDispatch } from "react-redux";

import PropTypes from "prop-types";
import { Droppable } from "react-beautiful-dnd";
import { changeStyle } from "../redux/index";
import AddCourse from "./AddCourse";
import Course from "./Course";

import {
  StyledTermRow,
  StyledMapHeading,
  StyledMapData,
} from "../styles/components/programmapStyles";

export const Term = ({
  isSelected,
  termNumber,
  courseList,
  filteredCourses,
  selectedCourse,
  handleClickEditCourse,
  handleClickDeleteCourse,
  handleClickSelectCourse,
  handleClickAddCourse,
  // focus
  toggleFocus,
}) => {
  const [editing, setEditing] = useState(false);
  const dispatch = useDispatch();

  return (
    <Droppable droppableId={`${termNumber}`} direction={"horizontal"}>
      {(provided) => (
        <StyledTermRow
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={isSelected ? "selected-term" : ""}
          scope="row"
        >
          <StyledMapHeading
            key={termNumber + "x" + -1}
            isEditing={editing}
          >
            {termNumber + 1}
            <br />
            <svg
              className="svg-icon"
              viewBox="0 0 20 20"
              onClick={() => {
                setEditing(!editing);

                // Give the UI time to update then readjust the focus element after
                setTimeout(() => dispatch(changeStyle()), 500);
              }}
            >
              <path
                fill="none"
                d="M19.404,6.65l-5.998-5.996c-0.292-0.292-0.765-0.292-1.056,0l-2.22,2.22l-8.311,8.313l-0.003,0.001v0.003l-0.161,0.161c-0.114,0.112-0.187,0.258-0.21,0.417l-1.059,7.051c-0.035,0.233,0.044,0.47,0.21,0.639c0.143,0.14,0.333,0.219,0.528,0.219c0.038,0,0.073-0.003,0.111-0.009l7.054-1.055c0.158-0.025,0.306-0.098,0.417-0.211l8.478-8.476l2.22-2.22C19.695,7.414,19.695,6.941,19.404,6.65z M8.341,16.656l-0.989-0.99l7.258-7.258l0.989,0.99L8.341,16.656z M2.332,15.919l0.411-2.748l4.143,4.143l-2.748,0.41L2.332,15.919z M13.554,7.351L6.296,14.61l-0.849-0.848l7.259-7.258l0.423,0.424L13.554,7.351zM10.658,4.457l0.992,0.99l-7.259,7.258L3.4,11.715L10.658,4.457z M16.656,8.342l-1.517-1.517V6.823h-0.003l-0.951-0.951l-2.471-2.471l1.164-1.164l4.942,4.94L16.656,8.342z"
              ></path>
            </svg>
          </StyledMapHeading>
          {courseList.map((course, ind) => {
            const isHighlightedCourse =
              filteredCourses.find((filteredCourse) => filteredCourse.code === course.code) !==
              undefined;

            const isSelectedCourse =
              selectedCourse && selectedCourse.code === course.code;

            return (
              <Course
                key={course.code}
                term={termNumber}
                courseIndex={ind}
                toggleFocus={toggleFocus}
                handleClickEditCourse={handleClickEditCourse}
                handleClickDeleteCourse={handleClickDeleteCourse}
                handleClickSelectCourse={handleClickSelectCourse}
                course={course}
                isSelected={isSelectedCourse}
                isHighlighted={isHighlightedCourse}
                isEditing={editing}
              />
            );
          })}
          {provided.placeholder}
          <StyledMapData key={termNumber + "x" + (courseList.length + 1)}>
            <AddCourse
              term={termNumber}
              handleClickAddCourse={handleClickAddCourse}
            />
          </StyledMapData>
        </StyledTermRow>
      )}
    </Droppable>
  );
};

// PropTypes
Term.propTypes = {
  isSelected: PropTypes.bool,
  toggleFocus: PropTypes.func.isRequired,
  courseList: PropTypes.array.isRequired,
  termNumber: PropTypes.number.isRequired,
  handleClickAddCourse: PropTypes.func.isRequired,
  handleClickEditCourse: PropTypes.func.isRequired,
  handleClickDeleteCourse: PropTypes.func.isRequired,
  handleClickSelectCourse: PropTypes.func.isRequired,
  selectedCourse: PropTypes.object,
  filteredCourses: PropTypes.array.isRequired,
};


export default Term;
