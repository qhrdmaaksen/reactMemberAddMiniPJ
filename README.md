## (리액트) 멤버 리스트 미니 프로젝트

```JS

신규 회원 정보 추가

react-member-addPJ

신규 회원 정보 입력 및 출력 
1. 신규 회원 정보 입력
2. 신규 회원 정보 출력
3. 신규 회원 정보 인풋 유효성 검사
4. 유효성 위배 경고 모달 팝업 기능 추가

React CSS Html

Components
  Member 폴더 : 회원 정보 관련
    AddMember : 회원 정보 입력
    MemberList : 회원 정보 출력
  UI 폴더 : 회원 정보 입,출력 폼 및 버튼, 모달 관련
    Button : 사용될 버튼 컴포넌트
    Card : 입 출력 화면 form
    ErrorModal : 유효성 위배 경고 모달 팝업
    ModalOverlay : 멤버 정보 폼 오버레이 경고 팝업 
    Backdrop : 모달 밖 버튼 클릭 시 모달창 닫기 기능

Function
  AddMember.js
    AddMemberHandler : 입력된 이름 및 나이 유효성 검사
    onClickCloseBTN : ErrorModal Close
  App.js
    addMemberHandler : 이전 출력 기록 놔둔 채 새로운 신규 멤버 정보 리스트 출력

```

------------------
멤버 추가 첫 화면
------------------
![addMemberFirstView](https://user-images.githubusercontent.com/75942405/198368289-f0263d9a-644c-4631-8241-ff917cc006d4.png)
------------------
미 입력 시 경고 팝업
------------------
![addMemberModalPopup](https://user-images.githubusercontent.com/75942405/198368371-bf67a50c-e106-425a-a350-9d62b552e903.png)
------------------
예외 처리 유효성 검사 경고 팝업
------------------
![addMemberModal02](https://user-images.githubusercontent.com/75942405/198368369-6f5fcf06-e966-4dbc-932c-62c102f20e58.png)
------------------
멤버 추가 및 목록 화면
------------------
![addMemberList](https://user-images.githubusercontent.com/75942405/198368360-354172de-a8c7-44b4-82fb-2d8ccecaac0b.png)
