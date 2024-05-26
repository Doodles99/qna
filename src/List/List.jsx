import "./List.css";

export const List = ({ className, ...props }) => {
  return (
    <div className={"list " + className}>
      <div className="list2">
        <div className="header">
          <div className="div">페이지 번호 </div>
          <div className="div2">제목 </div>
          <div className="div3">작성자 </div>
        </div>
        <div className="task">
          <div className="_1">1 </div>
          <div className="div4">적립 관련 오류 </div>
          <div className="div5">미스터 블루 </div>
          <div className="div6">신박한 닉네임 </div>
          <div className="gps">GPS 이상 </div>
          <div className="div7">환경부장관 </div>
          <div className="div8">경기 지역 추가 신설 </div>
          <div className="dot">
            <img className="more-horizontal" src="more-horizontal0.svg" />
          </div>
        </div>
        <div className="task2">
          <div className="_2">2 </div>
          <div className="dot2">
            <div className="div9">청소리 </div>
            <div className="div10">쓰레기통 재고량 </div>
            <div className="div11">환경맨 </div>
            <div className="div12">적립금 만료 기한 </div>
          </div>
        </div>
        <div className="task3">
          <div className="_3">3 </div>
          <div className="dot2">
            <div className="div9">화끈한 바지 </div>
            <div className="div10">포인트 교환 방법 </div>
            <div className="div11">내일은 적립왕 </div>
            <div className="div12">수수료 문의 </div>
          </div>
        </div>
        <div className="task4">
          <div className="_4">4 </div>
          <div className="dot2"></div>
        </div>
        <div className="task5">
          <div className="_5">5 </div>
          <div className="dot2">
            <div className="div13">지킴이 </div>
            <div className="qr">QR 인식 불가 </div>
          </div>
        </div>
        <div className="task6">
          <div className="_6">6 </div>
          <div className="dot2"></div>
        </div>
        <div className="task7">
          <div className="_7">7 </div>
          <div className="dot2"></div>
        </div>
        <div className="task8">
          <div className="_8">8 </div>
          <div className="dot2"></div>
        </div>
        <div className="task9">
          <div className="_9">9 </div>
          <div className="dot2">
            <div className="env-999">env999 </div>
            <div className="div14">너무 더러워요 </div>
          </div>
        </div>
        <div className="task10">
          <div className="_10">10 </div>
          <div className="dot2">
            <div className="recy-212">recy212 </div>
            <div className="div15">쓰레기통 고장 문의 </div>
          </div>
        </div>
        <div className="task11">
          <div className="dot2">
            <div className="_12">1 </div>
            <div className="_22">2 </div>
            <div className="_32">3 </div>
            <div className="_42">4 </div>
            <div className="_52">5 </div>
            <div className="_62">6 </div>
            <div className="_72">7 </div>
            <div className="div16">다음 </div>
            <div className="div17">이전 </div>
          </div>
        </div>
      </div>
      <div className="container"></div>
      <img className="filter" src="filter0.svg" />
      <div className="search">
        <img className="search2" src="search1.svg" />
        <div className="label">Search </div>
      </div>
      <div className="title">Title </div>
      <div className="status-bar-i-phone-x-or-newer">
        <img className="battery" src="battery0.svg" />
        <img className="wifi" src="wifi0.svg" />
        <img className="mobile-signal" src="mobile-signal0.svg" />
        <img className="left-side" src="left-side0.svg" />
      </div>
      <div className="i-phone-x-or-newer">
        <img className="battery2" src="battery1.svg" />
        <img className="wifi2" src="wifi1.svg" />
        <img className="mobile-signal2" src="mobile-signal1.svg" />
        <img className="left-side2" src="left-side1.svg" />
      </div>
      <div className="header2">
        <img className="icon-chevron-left" src="icon-chevron-left0.svg" />
        <div className="title2">Title </div>
      </div>
      <div className="i-phone-x-or-newer">
        <img className="battery3" src="battery2.svg" />
        <img className="wifi3" src="wifi2.svg" />
        <img className="mobile-signal3" src="mobile-signal2.svg" />
        <img className="left-side3" src="left-side2.svg" />
      </div>
      <div className="header3">
        <img className="icon-chevron-left2" src="icon-chevron-left1.svg" />
        <div className="qn-a">QnA </div>
      </div>
      <div className="home-indicator">
        <div className="home-indicator2"></div>
      </div>
      <div className="button">
        <div className="div18">글쓰기 </div>
      </div>
    </div>
  );
};
