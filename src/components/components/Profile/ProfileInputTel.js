import React from 'react';

const styles = {
  inputText: {
    width: '100%',
    borderRadius: '27px',
    marginBottom: '10px',
    border: '1px solid silver',
  },
};

export default function ProfileContents(props) {
  return (
    <input
      id="inputText"
      type="tel"
      style={styles.inputText}
      placeholder={props.placeholder}
    />
  );
}
