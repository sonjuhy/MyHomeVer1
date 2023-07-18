# MyHome Project

📱 IoT + 안드로이드

📅 2021.01 ~ 2021.07

🤵🏻 개인 프로젝트

## 담당 직무

---

Android, Backend, Server

## 참여 인원

---

Android,Backend,Server 1명 

ESP8266 핀 포트 확인 1명

## 담당 업무

---

- Android
    - 전등 ON/OFF 컨트롤
    - 전등 컨트롤 예약
    - 파일 서버에 파일 업&다운로드
- Switch(ESP8266)
    - 기존 서버에서 개인 서버로 통신 서버 변경
    - MQTT 통신 추가
    - 펌웨어 온라인 업데이트 기능 추가
- Server(PHP)
    - REST ful Server 대체용
- Server(Python)
    - MQTT, Scheduler 용 서버
      
## 개요

---

20년도 더 된 집에서 원격으로 전등을 ON/OFF 컨트롤 하고 예약까지 한다면  어떨까 그리고 추후 지원하는 기기를 늘려 최대한 많은 부분을 원격으로 상태 확인, 컨트롤 하길 원해 시작한 프로젝트

## 구상

---

- 원격 클라이언트 : 안드로이드
    - 가족 구성원 모두 갤럭시 스마트폰을 사용하므로 한번 개발하면 모두 사용 가능한
        
        안드로이드 플랫폼을 선택
        
    - IoT 컨트롤 뿐만 아니라 파일 서버, 날씨, 일정 공유 또한 한 어플내에 가능하도록 올인원 플랫폼으로 제작하고자 함
    
- 서버 : 우분투
    - 공부하는 김에 OS 설치부터 서버 설정까지 다 해보기 위해 무료 OS이면서 국내 포럼이 큰 편인 Ubuntu 18.04 LTS 버전 선택
    - 가족 구성원만 사용 가능한 파일 서버를 만들어 사진, 영상 등 정보를 최대 10TB 까지 지원
- iot : 전등 스위치
    - 도시가스 밸브, 방범문 도어락 과 같이 안전과 직결된 부분보다 안전 문제에 대해 비교적 안전하고 가장 사용성이 높은 전등 스위치부터 도전

## 기능 요구사항

---

| 기능명 | 카테고리 | 작동 결과 | 설명 |
| --- | --- | --- | --- |
| 회원가입 | 회원 | 회원가입 신청 | 서비스 사용을 위한 회원가입 |
| 로그인 | 회원 | 유저 정보 리턴 | 가입된 회원 정보 가져오기 |
| 자동 로그인 | 회원 | 자동 로그인 켜기 | 자동로그인 기능 활성화 |
| 로그아웃 | 회원 | 로컬 유저 정보 삭제 | 현재 기기에 저장된 유저 정보 삭제 |
| 메인 화면 날씨 | 날씨 | 저장된 위치 날씨 정보제공 | 메인 화면에 날씨 정보 간소화 제공 |
| 상세 날씨 | 날씨 | 저장된 위치 날씨 정보제공 | 날씨 세부 정보 제공 |
| 날씨 위치 저장 | 날씨 | 표시 원하는 위치 저장 | 원하는 날씨 위치 정보 저장 |
| 메인 화면 날씨 정보 표시 | 날씨 | 메인 화면 날씨 표시 ON/OFF | 메인화면에 보이는 날씨 정보 ON/OFF |
| 메인화면 전등 컨트롤 | IoT(전등) | 메인 화면에서 전등 컨트롤 | 메인 화면에서 전등 컨트롤할 패널 |
| 메인화면 전등 즐겨찾기 | IoT(전등) | 메인 화면 전등 즐겨찾기  | 메인 화면에서 즐겨찾기 선택한 전등 따로 표시 |
| 전등 세부 목록, 컨트롤 | IoT(전등) | 방 별로 전등 세부 선택 및 컨트롤 | 방 별로 전등 별도 세부 컨트롤 및 예약 설정 진입 |
| 전등 즐겨찾기 등록, 해제 | IoT(전등) | 전등 즐겨찾기 | 전등 즐겨찾기 등록, 해제 |
| 전등 작동 예약 | IoT(전등) | 전등 작동 예약 등록 | 전등 작동을 예약으로 등록 |
| 전등 예약 수정 | IoT(전등) | 저장된 전등 예약 정보 수정 | 저장된 전등 예약 정보 수정 |
| 전등 예약 목록 관리 | IoT(전등) | 저장된 전등 예약 정보 관리 | 저장된 전등 예약 리스트 삭제, 수정 |
| 전등 상황 실시간 갱신 | IoT(전등) | 전등 ON/OFF 실시간 갱신 | 어플 실행 중 전등 상태 변동값 실시간 갱신 및 반영 |
| 파일 서버 개인 공간 탐색 | 파일 서버 | 서버 내 개인 공간 탐색 | 서버 내 개인 공간 탐색 및 검색 |
| 개인 파일 서버 업&다운로드 | 파일 서버 | 서버 내 개인 공간에서 파일 업로드 및 다운로드 | 서버 내 개인 공간에서 파일 업로드 , 다운로드 및 수정 |
| 파일 서버 공용 공간 탐색 | 파일 서버 | 서버 내 공용 공간 탐색 | 서버 내 공용 공간 탐색 및 검색 |
| 공용 파일 서버 업&다운로드 | 파일 서버 | 서버 내 공용 공간에서 파일 업로드 및 다운로드 | 서버 내 공용공간에서 파일 업로드, 다운로드 및 수정 |
| 파일 임시삭제(휴지통) | 파일 서버 | 파일 서버 내 파일 임시 삭제 | 파일 서버 내 파일 휴지통 이동 |
| 임시 파일 복구 | 파일 서버 | 임시삭제 파일 위치 복구 | 휴지통 내 파일 위치 복구 |
| 파일 영구 삭제 | 파일 서버 | 임시삭제 파일 영구 삭제 | 휴지통 내 파일 영구 삭제 |
| 공지사항 등록 | 공지 | 공지사항 등록 | 공지사항 등록 |
| 공지사항 삭제 | 공지 | 공지사항 삭제 | 공지사항 삭제 |
| 공지사항 메인화면 표시 | 공지 | 공지사항 메인화면 갱신 | 공지사항 매인화면에 갱신 |
| 어플리케이션 업데이트 | 시스템 | 어플 자체 업데이트 기능 | 어플 자체 업데이트 기능 구현 |

## 개발 환경

---

- Android Studio
- PyCharm
- Arduino IDE

## 사용 라이브러리

---

- Switch(ESP8266)
    - Http
    - MQTT Client
- Android
    - MQTT Client
    - REST
- Server(Python)
    - MQTT Server
    - MQTT Client Python
    - Schedule
- Server(DevOps)
    - Nginx
    - PHP
    - MariaDB

## 사용 기술스택

---

- JAVA
- Python
- PHP
- C++

## 링크

---

- Server(Python)
    - link : [https://github.com/sonjuhy/Myhome_Server](https://github.com/sonjuhy/Myhome_Server)
- ESP 8266
    - link : [https://github.com/sonjuhy/MyHomESP8266](https://github.com/sonjuhy/MyHomESP8266)
- Android (Regacy Code : No updates due to security related to server IP)
    - link : [https://github.com/sonjuhy/MyHome_Open](https://github.com/sonjuhy/MyHome_Open)

## 서비스 화면

---

- 메인 화면
    
    ![KakaoTalk_20221122_112313049_02](https://github.com/sonjuhy/MyHomeVer1/assets/2987059/5b0f305d-4dd2-4eae-a890-d6af8ecf288b)
    

- 파일 서버

    ![KakaoTalk_20221122_112627273](https://github.com/sonjuhy/MyHomeVer1/assets/2987059/2e51fd45-c3b0-4057-8656-7d0bd2247ff2)

- 조명 컨트롤
    
    ![KakaoTalk_20221122_112313049_01](https://github.com/sonjuhy/MyHomeVer1/assets/2987059/a65ed055-642c-47c8-8135-50c00ea6f568)
    

- 조명 예약목록
    
    ![KakaoTalk_20221122_112313049](https://github.com/sonjuhy/MyHomeVer1/assets/2987059/5f421c47-2c9f-4eaa-9970-149d4d3d6a7d)
    

## 서비스 로그

---

- DB(MariaDB) 스위치 컨트롤 로그
    
    ![Untitled](https://github.com/sonjuhy/MyHomeVer1/assets/2987059/ce2f14f5-d29d-4311-9952-a46aab8f0420)
    

- DB(MariaDB) 스위치 작동 예약 리스트
    
    ![Untitled 1](https://github.com/sonjuhy/MyHomeVer1/assets/2987059/039d06b8-5eaf-4f6d-a4ae-2ee4bf6ddb70)
    

## 구조도

---

- 메인 구조
    
    ![Untitled 2](https://github.com/sonjuhy/MyHomeVer1/assets/2987059/5fa241b3-8ab2-49a4-8df1-f97d34b14100)
    

- 서버 (Python)
    
    ![Untitled 3](https://github.com/sonjuhy/MyHomeVer1/assets/2987059/6e257bb3-977e-4210-b8c7-001fc40b465b)
    

- 안드로이드
    
    ![Untitled 4](https://github.com/sonjuhy/MyHomeVer1/assets/2987059/0d599b61-d333-460d-a2c0-417eb74a1a1a)
    

- 스위치
    
    ![Untitled 5](https://github.com/sonjuhy/MyHomeVer1/assets/2987059/6f268677-492e-4fa1-adc6-029b43bb53ca)
