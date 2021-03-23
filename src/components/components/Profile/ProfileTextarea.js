import React from 'react';

const styles = {
  span: {
    color: 'red',
  },
  spBottom: {
    marginBottom: '15px',
  },
  profileBottom: {
    marginBottom: '40px',
  },
  textarea: {
    width: '100%',
    borderRadius: '27px',
    border: '1px solid silver',
    resize: 'none',
  },
  result: {
    position: 'relative',
    top: '-40px',
    right: '1px',
    width: '50px',
    border: 'none',
    textAlign: 'right',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'silver',
  },
};

function calc() {
  document.getElementById('result').value = document.getElementById(
    'content'
  ).value.length;
}
export default function ProfileContents() {
  return (
    <div id="profileBottom" style={styles.profileBottom}>
      <div id="spBottom" style={styles.spBottom}>
        <span style={styles.span}>*</span>&nbsp;&nbsp;한 줄 소개
      </div>
      <textarea
        id="content"
        cols="96"
        rows="3"
        style={styles.textarea}
        onKeyDown={calc}
        onKeyUp={calc}
        onKeyPress={calc}
      />
      <div
        style={{
          textAlign: 'right',
        }}
      >
        {' '}
        <input
          id="result"
          type="number"
          value="0"
          readOnly
          style={styles.result}
        />
      </div>
    </div>
  );
}
