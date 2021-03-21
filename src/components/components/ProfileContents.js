import React, { useState } from 'react';

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
  },
  profileBottom: {
    marginBottom: '40px',
  },
  checkBoxes: {
    margin: '0px 10px 15px 10px',
  },
  textarea: {
    width: '100%',
    borderRadius: '27px',
    border: '2px solid black',
  },
};

export default function ProfileContents(props) {
  const [formData, setFormData] = useState({
    gender: '',
  });

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container">
      {/* 이름 */}
      <div id="profileBottom" style={styles.profileBottom}>
        <div id="spBottom" style={styles.spBottom}>
          <span style={styles.span}>*</span> 이름
        </div>
        <input id="inputText" type="text" style={styles.inputText} />
      </div>
      {/* 성별 */}
      <div id="profileBottom" style={styles.profileBottom}>
        <div id="spBottom" style={styles.spBottom}>
          <span style={styles.span}>*</span> 성별
        </div>
        <div>
          <div style={styles.checkBoxes}>
            <div>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
                chacked={formData.gender === 'male'}
              />
              <label>&nbsp;&nbsp;남</label>
            </div>

            <div>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
                chacked={formData.gender === 'female'}
              />
              <label>&nbsp;&nbsp;여</label>
            </div>

            <div>
              <input
                type="radio"
                name="gender"
                value="noResponse"
                onChange={handleChange}
                chacked={formData.gender === 'female'}
              />
              <label>&nbsp;&nbsp;응답없음</label>
            </div>
          </div>
          <p>Gender : {formData.gender}</p>
        </div>
      </div>
      {/* 연락처 */}
      <div id="profileBottom" style={styles.profileBottom}>
        <div id="spBottom" style={styles.spBottom}>
          <span style={styles.span}>*</span> 연락처
        </div>
        <div>
          <input
            id="inputText"
            type="text"
            style={styles.inputText}
            placeholder="  Tel"
          />
          <input
            id="inputText"
            type="text"
            style={styles.inputText}
            placeholder="  Email"
          />
          <input
            id="inputText"
            type="text"
            style={styles.inputText}
            placeholder="  GitHub"
          />
        </div>
      </div>
      {/* 희망 직군 */}
      <div id="profileBottom" style={styles.profileBottom}>
        <div id="spBottom" style={styles.spBottom}>
          <span style={styles.span}>*</span> 희망 직군
        </div>
        <input id="inputText" type="text" style={styles.inputText} />
      </div>
      {/* 희망 연봉 */}
      <div id="profileBottom" style={styles.profileBottom}>
        <div id="spBottom" style={styles.spBottom}>
          <span style={styles.span}>*</span> 희망 연봉
        </div>
        <input id="inputText" type="text" style={styles.inputText} />
      </div>
      {/* 보유 기술 */}
      <div id="profileBottom" style={styles.profileBottom}>
        <div id="spBottom" style={styles.spBottom}>
          <span style={styles.span}>*</span> 보유 기술
        </div>
        <input id="inputText" type="text" style={styles.inputText} />
      </div>
      {/* 한 줄 소개 */}
      <div id="profileBottom" style={styles.profileBottom}>
        <div id="spBottom" style={styles.spBottom}>
          <span style={styles.span}>*</span> 한 줄 소개
        </div>
        <textarea cols="96" rows="3" style={styles.textarea}></textarea>
      </div>
    </div>
  );
}
