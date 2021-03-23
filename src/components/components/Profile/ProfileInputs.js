import React from 'react';

const styles = {
  span: {
    color: 'red',
  },
  spBottom: {
    marginBottom: '15px',
  },
  inputText: {
    width: '100%',
    borderRadius: '27px',
    marginBottom: '10px',
    border: '1px solid silver',
  },
  profileBottom: {
    marginBottom: '40px',
  },
};

export default function ProfileInputs(props) {
  return (
    <div>
      <div id="profileBottom" style={styles.profileBottom}>
        <div id="spBottom" style={styles.spBottom}>
          <span style={styles.span}>* </span>&nbsp;{props.name}
        </div>
        <input id="inputText" type="text" style={styles.inputText} />
      </div>
    </div>
  );
}
