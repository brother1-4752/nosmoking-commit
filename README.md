- [ ] "금연을 결심했던 강렬한 순간을 기록하세요."

/ : HOME
/join : 회원가입
/login : 로그인

/user/:id(\\d+) : 메인페이지
/user/:id(\\d+)/journal : 금연일지 전체목록(연속 몇 스트립인지도 크게 출력)
/user/:id(\\d+)/journal/write : 금일 금연일지 작성화면
/user/:id(\\d+)/journal/:number(\\d+) : number에 해당하는 금연일지 화면
/user/:id(\\d+)/videoletter : 나에게 영상편지
/user/:id(\\d+)/videoletter/upload : 영상편지 업로드
/user/:id(\\d+)/videoletter/edit : 영상편지 수정
/user/:id(\\d+)/videoletter/delete : 영상편지 삭제
/user/:id(\\d+)/voicerecording : 나에게 음성녹음
/user/:id(\\d+)/voicerecording/upload : 음성녹음 등록
/user/:id(\\d+)/voicerecording/delete : 음성녹음 삭제

# 기능

1. 금연 N계명
2. 특정 시간주기로 자신이 쓴 N계명 중 랜덤으로 알림전송
3. 금연을 결심한 강렬한 순간을 영상편지나 음성메세지로 저장
