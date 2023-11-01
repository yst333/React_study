import React, { useEffect } from "react";
import AOS from "aos";
import "./css/aos.css";

// aos 라이브러리 적용 및 활용
// 1단계 : 터미널을 열고 다음의 커맨드를 입력 실행
// npm install aos --save
// 2단계 : AOS 활용 컴포넌트(aos, useEffect) 임포트
// import React, { useEffect } from "react";
// import AOS from "aos";
// 3단계 : AOS CSS 적용(예제에서는 css 폴더 생성 후에
//         AOS 공식 홈페이지 배포 aos.css 파일을 넣어주었음)
// import "./css/aos.css";
// 4단계 : useEffect 함수 활용 AOS 초기화 처리
// useEffect(() => {
//   AOS.init();
// })
// 5단계 : AOS 홈페이지에서 속성 및 설정 값 적용 확인
// https://michalsnik.github.io/aos/


const App = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  })


  return (
    <div>
      <p data-aos="fade-left">
          AOS - Animate on scroll library 활용 - 1 fade-left
          <br /> <hr />
        </p>
        <p data-aos="fade-right">
          AOS - Animate on scroll library 활용 - 2 fade-right
          <br /> <hr />
        </p>        
        <div
          data-aos="flip-right"
          style={{
            width: '40%',
            hieght: '40%',
            padding: '10px',
            backgroundColor: 'green',
            color: 'white',
            textAlign: 'center',
          }}
        >
          AOS - Animate on scroll library 활용 - 3 flip-right
        </div>
    </div>
  );
};

export default App;
