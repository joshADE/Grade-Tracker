import PropTypes from 'prop-types';
import React, { Component } from 'react'
import { removeTerm } from '../redux'
import { connect } from 'react-redux';
import { StyledButtonDelete } from '../styles/components/programmapStyles';

export class RemoveTerm extends Component {
    handleClick = () => {
        if (this.props.courses.length <= 1){
            return;
        }
     
        //TODO: Should perform the delete function on each course in the term
        this.props.removeTerm();
    }

    render() {
        return (
            
        <StyledButtonDelete 
        type="button" 
        onClick={this.handleClick} 
        style={removeTermStyle}
        >
            Remove the last term
        </StyledButtonDelete>
        )
    }
}


// PropTypes
RemoveTerm.propType = {
    termNumber: PropTypes.number.isRequired,
    handleClickRemoveTerm: PropTypes.func.isRequired,
}

const removeTermStyle = {
    width:'100%',
};


const mapStateToProps = state => {
    return {
      courses: state.courses.courses
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      removeTerm: () => dispatch(removeTerm())
    }
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RemoveTerm);