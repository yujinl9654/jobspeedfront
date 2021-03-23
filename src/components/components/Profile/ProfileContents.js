import React from 'react';
import ProfileInputs from './ProfileInputs';
import ProfileGender from './ProfileGender';
import ProfileInputTel from './ProfileInputTel';
import ProfileTextarea from './ProfileTextarea';

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
};

export default function ProfileContents() {
  return (
    <div className="container">
      {/* 이름 */}
      <ProfileInputs name={'이름'} />

      {/* 성별 */}
      <div id="profileBottom" style={styles.profileBottom}>
        <div id="spBottom" style={styles.spBottom}>
          <span style={styles.span}>*</span>&nbsp;&nbsp;성별
        </div>
        <div>
          <ProfileGender />
        </div>
      </div>

      {/* 연락처 */}
      <div id="profileBottom" style={styles.profileBottom}>
        <div id="spBottom" style={styles.spBottom}>
          <span style={styles.span}>*</span>&nbsp;&nbsp;연락처
        </div>
        <div>
          <ProfileInputTel placeholder={'  Tel'} />
          <ProfileInputTel placeholder={'  Email'} />
          <ProfileInputTel placeholder={'  GitHub'} />
        </div>
      </div>
      {/* 희망 직군 */}
      <ProfileInputs name={'희망 직군'} />

      {/* 희망 연봉 */}
      <ProfileInputs name={'희망 연봉'} />

      {/* 보유 기술 */}
      <ProfileInputs name={'보유 기술'} />

      {/* 한 줄 소개 */}
      <ProfileTextarea />
    </div>
  );
}
