import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Select from 'react-select'

export class SideView extends Component {

    constructor(props){
        super(props);
        this.state = {
            prereqCourses:[],
            coreqCourses:[],

        };
    }
    
    // New onChange(for 'react-select' component)
    onChange = (value, { name, action, removedValue }) => {
        switch (action) {
          case 'remove-value':
            break;
          case 'pop-value':
            break;
          case 'clear':
            break;
            default:
        }
        
        this.setState({ 
            [name]: value 
        });
    }

    // Transforms a course into a format used by 'react-select'
    getSelectOption = (course) => {
        return {value: course.code, label: course.code };
    }
    // Transforms from 'react-select' option format to course code
    getValueFromSelectOption = (option) => {
        return option.value;
    }

    onSubmit = (e) => {
        e.preventDefault();
        // Notify the user that their changes have been set
        this.props.sendNotification("Changes set");
        
        // New onSubmit code
        // must extract the value from the react-select components
        const code = this.props.selectedCourse.code;
        console.log("submitted");
        
        let pC = this.state.prereqCourses || [];


        console.log("prereq");
        const prs = pC.map(option => this.getValueFromSelectOption(option));
        console.log(prs);
        this.props.handleClickEditPrereq(code, prs);
        

        let cC = this.state.coreqCourses || [];

        console.log("coreq");
        const crs = cC.map(option => this.getValueFromSelectOption(option));
        
        console.log(crs);
        this.props.handleClickEditCoreq(code, crs);
        
    }

    

    
    // this doesn't get called after a user deletes a course
    // only componentWillUpdate gets called
    componentWillReceiveProps(newProps){
        console.log("Inside componentWillReceiveProps");
        console.log(this.props);
        console.log(newProps);
        
        
        // Only update the state (and then the UI) if the component
        // receives a new set of props
        console.log("Are the oldProp and newProp equal?");
        if (!this.equal(this.props, newProps)){
            this.updateState(newProps);
        }
    }
    


    equal(first, second){
        const result = JSON.stringify(first) === JSON.stringify(second);
        console.log("result: " + result);
        return result;
    }

    

    updateState(newProps){

        const {selectedCourse, prereq, coreq, courses, selectedTerm} = newProps;

        
        if (!selectedCourse) return;

        let selectedPrereqList = prereq[selectedCourse.code];
        if (!selectedPrereqList){
            selectedPrereqList = [];
        }

        console.log("selectedPrereqList");
        console.log(selectedPrereqList);
        
        let selectPrereq = courses.slice(0, selectedTerm);
        let selectOptionsPrereq = [].concat.apply([], selectPrereq); // flatten the 2d array
        
        // get the full course details of the courses that are prereq
        selectOptionsPrereq = selectOptionsPrereq
        .filter(course => {
            return course.code !== selectedCourse.code && selectedPrereqList.includes(course.code);
        });
        


        let selectedCoreqIndex = coreq
        .findIndex(cl => (cl.findIndex(c => c === selectedCourse.code) >= 0));
        

        let selectedCoreqList;
        if (selectedCoreqIndex < 0){
            selectedCoreqList = [];
        }else{
            selectedCoreqList = coreq[selectedCoreqIndex];
        }

        console.log("selectedCoreqList");
        console.log(selectedCoreqList);

        
        // get the full course details of the courses that are coreq
        console.log(selectedTerm);
        let selectOptionsCoreq = courses[selectedTerm];
        if (selectOptionsCoreq == null){
            selectOptionsCoreq = [];
        }
        selectOptionsCoreq = selectOptionsCoreq
        .filter(course => {
            return course.code !== selectedCourse.code && selectedCoreqList.includes(course.code) ;
        });
        

        
        this.setState({
            prereqCourses: selectOptionsPrereq.map(c => this.getSelectOption(c)),
            coreqCourses: selectOptionsCoreq.map(c => this.getSelectOption(c)),
        });
        
            
        
    }



    render() {
        const shouldShow = (this.props.selectedCourse !== null);
        
        if (!shouldShow){
            return (
                <div style={sideViewStyle}>
                    <h2>Advanced Course Edit</h2>
                    <p>You must select a course first</p>
                </div>
            );
        }
        
        
        const {courses, selectedTerm, selectedCourse} = this.props;


        // get the available options for the prereq courses
        let selectPrereq = courses.slice(0, selectedTerm);
        let selectOptionsPrereq = [].concat.apply([], selectPrereq); // flatten the 2d array
        
        selectOptionsPrereq = selectOptionsPrereq
        .map((course) =>{
            return this.getSelectOption(course);
        });
        
        


        // get the available options for the coreq courses
        let selectOptionsCoreq = courses[selectedTerm];
        
        if (selectOptionsCoreq == null){
            selectOptionsCoreq = [];
        }
        selectOptionsCoreq = selectOptionsCoreq
        .filter(course => {
            return course.code !== selectedCourse.code;
        })
        .map(course =>{
            return this.getSelectOption(course);
        });
        


       
        const form = 
                <form
                onSubmit={this.onSubmit}
                sytle={formStyle}
                className="sideViewForm"
                >
                    <h3>For course: {(shouldShow)?this.props.selectedCourse.code:""}</h3>
                    
                    
                    <div>
                        <label>Prerequisites</label>
                        <br/>
                        <input 
                            className="btnShow"
                            style={buttonShowStyle}
                            type="button" 
                            value="Highlight Pre-requisites" 
                            onClick={this.props.handleClickShowPrereq.bind(this, selectedCourse.code)}

                        />
                        <Select 
                            
                            styles={customStyles}
                            onChange={this.onChange}
                            name="prereqCourses"
                            isMulti 
                            options={selectOptionsPrereq}
                            value={this.state.prereqCourses}
                        />
                    </div>

                    <div>
                        <label>Corequisites</label>
                        <br/>
                        <input 
                            className="btnShow"
                            style={buttonShowStyle}
                            type="button" 
                            value="Highlight Co-requisites"
                            onClick={this.props.handleClickShowCoreq.bind(this, selectedCourse.code)}
                        />
                        <Select 
                            
                            styles={customStyles}
                            onChange={this.onChange}
                            name="coreqCourses"
                            isMulti 
                            options={selectOptionsCoreq}
                            value={this.state.coreqCourses}
                        />
                    </div>
                
                    <div style={{textAlign:'center', fontWeight:'bold'}}>
                        Remember to click accept changes after making changes
                    </div>
                            
                                    
                                
                    <input className="btn btn-save" type="submit" value="Accept Changes"/>
                </form>
                ;




        return (
            <div style={sideViewStyle}>
                
                <h2>Advanced Course Edit</h2>
                
                {
                    form
                }
            </div>
        );
        
    }
}   


// PropTypes
SideView.propType = {
    sendNotification: PropTypes.func.isRequired,
    handleClickEditCourse: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    selectedTerm: PropTypes.number.isRequired,
    selectedCourse: PropTypes.object.isRequired,
    prereq: PropTypes.array.isRequired,
    coreq: PropTypes.array.isRequired,
    handleClickEditPrereq: PropTypes.func.isRequired,
    handleClickEditCoreq: PropTypes.func.isRequired,
}

const sideViewStyle = {
    background: 'lightgrey',
    width: '100%',
    textAlign: 'center',
    border: '2px solid grey',    
    overflowY: 'scroll',
    height: '100%', 
}

const buttonShowStyle = {
    
}


const formStyle = {
    border: 'none',
    margin: '0 auto',
}

// Custom style for 'react-select', uses Emotion JS
const customStyles = {
    container: (provided, state) => ({
        ...provided,
        // none of react-select's styles are passed to <Control />
        width: 'auto',
        margin: '10px 25%',
      }),

      control: (provided, state) => ({
        ...provided,
        overflowY: 'scroll',
        height: 30,
      }),


}


export default SideView