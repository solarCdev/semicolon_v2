export default () => {
  return (
    <div>
      <div id="wrap1">
        <h1>SEMICOLON</h1>
        <span className="title" id="tit1">
          도담중 프로그래밍 동아리
        </span>
        <span className="title" id="tit2">
          Python, Javascript, C++
        </span>
      </div>
      <button className="btn">동아리에 참여하기</button>
      <div>
        <div id="bg">
          <div id="wrap2">
            <div className="set">
              <h2>
                이름은 왜<br />
                세미콜론일까?
              </h2>
              <p>
                {" "}
                ;(세미콜론)은 우리에게 익숙하지 않은 기호 이지만, 프로그래밍에서
                문장 끝에 ;을 쓰는 것 은 필수적입니다. 이를 통해 프로그래밍으로
                더 중요해지는 동아리라는 뜻을 가지게 되었습니다.
              </p>
            </div>
            <div className="set">
              <h2>
                아 프로그래밍
                <br />
                재미없어요...
              </h2>
              <p>
                {" "}
                문법을 배우는 것은 재미있는 것이 아닙니다. 솔직히 세상에
                컴퓨터에서 글씨나 쓰는 걸 좋아하는 사람이 있겠어요? 재미있는
                결과물을 보고 즐거워하는 것이 프로그래밍이 재미있는 이유입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="wrap3">
        <h2 id="tog">함께 만들 수 있는 것</h2>
        <ul>
          <li id="py">
            <h3>
              Python - 다용도 언어
              <br />
              <strong>(난이도: *)</strong>
            </h3>
            <ul>
              <li>오토 클리커</li>
              <li>웹 정보 수집기</li>
              <li>그 외 거의 모든 것</li>
            </ul>
          </li>
          <li id="js">
            <h3>
              Javascript - 웹 언어
              <br />
              <strong>(난이도: ***)</strong>
            </h3>
            <ul>
              <li>웹사이트 제작</li>
              <li>크롬 웹 도배기</li>
              <li>크롬 위에서 돌아가는 것들</li>
            </ul>
          </li>
          <li id="cpp">
            <h3>
              C++ - 정석적인 언어
              <br />
              <strong>(난이도: *****)</strong>
            </h3>
            <ul>
              <li>아두이노</li>
              <li>알고리즘 문제 풀이</li>
            </ul>
          </li>
        </ul>
      </div>
      <a href="https://www.naver.com">
        <button className="btn">동아리에 참여하기</button>
      </a>
      <div id="margin" />
    </div>
  );
};
