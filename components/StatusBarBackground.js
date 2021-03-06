import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Platform } from 'react-native';

class StatusBarBackground extends Component {
  render() {
    return (
      <View style={[styles.statusBarBackground, this.props.style || {}]} />
    );
  }
}

const white = '#fff';
const styles = StyleSheet.create({
  statusBarBackground: {
    height: Platform.OS === 'ios' ? 18 : 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
    backgroundColor: white,
  },
});

StatusBarBackground.propTypes = {
  style: PropTypes.object,
};

StatusBarBackground.defaultProps = {
  style: { backgroundColor: white },
};

module.exports = StatusBarBackground;
