# React 기술 블로그 만들기

## 프로젝트 소개

React를 학습하면서 직접 만드는 개인 기술 블로그입니다.

단순히 완성된 결과물만 만드는 것이 아니라, 필요한 개념을 학습하고 직접 구현한 뒤 시행착오와 선택 이유를 GitHub PR과 학습 회고로 기록합니다.

## 프로젝트 목표

- Markdown 파일로 게시글을 작성하고 목록과 상세 페이지에서 읽을 수 있는 블로그 만들기
- Hugo Blog Awesome을 참고해 미니멀하고 읽기 편한 디자인 구현하기
- React의 컴포넌트 구조, props, 구조 분해 등 블로그 구현에 필요한 개념을 직접 적용하고 설명할 수 있는 수준으로 학습하기
- 빌드, 배포, 접근성, SEO, README 작성 과정을 직접 수행해 보기
- 기능별 작업 과정과 시행착오를 GitHub PR과 학습 회고로 기록하기

## 디자인 레퍼런스

- [Hugo Blog Awesome](https://github.com/hugo-sid/hugo-blog-awesome)

### 참고할 요소

- 좁은 중앙 정렬 콘텐츠 영역
- 넓은 여백
- 텍스트 중심의 게시글 목록
- 흑백 기반의 미니멀한 디자인
- 읽기 편한 본문 타이포그래피
- 모바일 가독성

특정 테마를 그대로 복제하지 않고, 필요한 디자인 요소를 참고해 직접 구현합니다.

## MVP 기능

- 프로필 소개
- 게시글 목록
- 게시글 상세 페이지
- 게시글 데이터와 UI 분리
- Markdown 게시글
- 코드 블록 스타일
- 반응형 디자인
- 기본 접근성
- 기본 메타데이터
- 404 페이지
- 공개 배포

## 초기 버전에서 제외하는 기능

- 로그인과 관리자 페이지
- 웹 화면에서의 게시글 작성·수정·삭제
- 데이터베이스와 CMS
- 댓글과 조회수
- 검색과 복잡한 태그 필터
- 다크 모드
- RSS
- 고급 SEO
- 과도한 애니메이션

위 기능은 첫 번째 버전을 배포한 뒤 후속 PR에서 검토합니다.

## 기술 스택

- React
- Vite
- React Router
- CSS
- Markdown

## 학습 목표

- React, Vite, npm, JSX, 진입점과 빌드 과정 이해하기
- 시맨틱 HTML, CSS 박스 모델, Flexbox와 반응형 디자인 적용하기
- 컴포넌트, props, 구조 분해, map, key와 데이터 분리 학습하기
- React Router, 동적 경로, slug, find, Markdown과 메타데이터 학습하기
- 빌드, 배포, SPA 새로고침, 접근성과 문서화 과정 경험하기
- 작성한 코드의 역할과 데이터 흐름을 자신의 말로 설명하기

## 개발 일정

2026년 8월 10일부터 8월 14일까지 5일 동안 최소 기능 블로그의 구현과 배포를 완료하는 것을 목표로 합니다.

| Day | 작업 | PR |
|---|---|---|
| Day 1 | React 프로젝트 초기 설정 | [#1](https://github.com/dltmdall/react-tech-blog/pull/1) |
| Day 2 | 홈 화면과 미니멀 디자인 | [#2](https://github.com/dltmdall/react-tech-blog/pull/2) |
| Day 3 | 컴포넌트와 게시글 목록 | [#3](https://github.com/dltmdall/react-tech-blog/pull/3) |
| Day 4 | 라우팅과 Markdown 게시글 | 예정 |
| Day 5 | 품질 점검과 배포 | 예정 |

## 로컬 실행 방법

```bash
git clone https://github.com/dltmdall/react-tech-blog.git
cd react-tech-blog
npm install
npm run dev
```

코드 검사와 프로덕션 빌드는 다음 명령으로 실행합니다.

```bash
npm run lint
npm run build
```

## 배포 주소

Day 5 배포 후 추가할 예정입니다.

## 개발 과정

각 단계는 다음 순서로 진행합니다.

```text
개념 학습
→ 짧은 코드 훈련
→ 직접 구현
→ 코드 리뷰
→ 직접 수정
→ 브라우저 확인
→ 프로덕션 빌드
→ 커밋
→ Draft PR
→ 학습 및 일일 회고
→ PR 병합
```