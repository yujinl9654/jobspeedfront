import React from 'react';
import axios from 'axios';

export const postMember = () => {
  axios.get('http://localhost:8080/SignUp').then((response) => {
    alert(response.data.data);
  });
};

export default function Data(props) {
  return (
    <>
      <div></div>
    </>
  );
}
