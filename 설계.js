// 1. 브래드 크럼브
// - 현재 폴더 경로
// - node디렉토리를 click 할 때 마다... node.name이 브래드 크럼브로 전달!

// 2. node
// 디렉 or 파일 표시 => data(파일 데이터)

// 3. 이미지
// - 띄우고 닫기
// - node를 click하는 순간 들어가기 (역시 같은 부모를 둠)
// - click 할 시 안에 있는 file or folder가 바껴야 함
// ===> 즉, useEffect가 click 할 때 호출이 돼야 함.
// ===> 그렇다는건 지금 click 할 때 state가 1개가 바껴야 하는 상황!

// 4. 로딩중
// - node를 click하는데, 뜰 동안 로딩중 띄우기
// - 역시 같은 부모....

// 5. 키보드 이벤트
// onKeyDowm
// onKeyUp
// onKeyPress : 더 이상 지원 안 돼! => 그리고 숫자키 영문키만 인식함
