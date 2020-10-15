import React, { Component } from 'react';
import { Text } from 'react-native';

export default class ErrorBoundary extends Component {
  state = { error: false };

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { error: true };
  }

  render() {
    if (this.state.error) {
      return <Text>{error}</Text>;
    }

    return this.props.children;
  }
}
