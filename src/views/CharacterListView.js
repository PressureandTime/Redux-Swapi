import React from 'react';
import { connect } from 'react-redux';

import { CharacterList } from '../components';
import { fetchData } from '../actions';
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    if (this.props.fetching) {
      return <p>loading</p>;

      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = reducers => {
  return {
    characters: reducers.charsReducer.characters,
    fetching: reducers.charsReducer.fetching,
    error: reducers.charsReducer.error,
  };
};
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {fetchData /* action creators go here */}
)(CharacterListView);
