import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

function ToDo({ text, onBtmClick, id }) {
  return (
    <>
      <li>
        <Link to={`/${id}`}>
          {text}
          <button onClick={onBtmClick}>DEL</button>
        </Link>
      </li>
    </>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtmClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
