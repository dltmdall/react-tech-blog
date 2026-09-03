## 미니멀 홈 화면 디자인을 위한 개념 복습

다양한 미니멀 홈페이지 디자인 레퍼런스를 참고하여 반응형 정적 홈 화면을 완성한다.

- **시맨틱 HTML:** 화면 영역의 의미를 분명히 해 코드 구조, 화면 낭독기와 검색엔진의 콘텐츠 이해를 돕는다.
- **margin-inline:** 제한된 콘텐츠 상자 자체의 좌우 바깥 여백을 자동 분배해 중앙에 둔다.
- **padding-inline:** 상자 내부 콘텐츠와 좌우 경계 사이에 여백을 만든다.
- **header Flexbox:** 직접 자식인 사이트 이름 `a`와 `nav`를 가로로 배치하고 양 끝·세로 중앙으로 정렬한다.
- **ul Flexbox:** 직접 자식인 `li`들을 가로로 배치하고 `gap`으로 간격을 만든다.
- **`:root`:** HTML 최상위 요소인 `html`을 선택한다.
- **`#root`:** React가 렌더링되는 `id="root"` 요소를 선택하며, 여기서는 header·main·footer의 Flexbox 부모다.
- **`main { flex: 1 }`:** header와 footer를 제외하고 남은 높이를 main이 차지하게 한다.

## 작성한 핵심 코드

```jsx
<>
  <header>사이트 이름과 주요 메뉴</header>
  <main>
    <section id="about">프로필 소개</section>
    <section id="posts">최근 글</section>
  </main>
  <footer>저작권 정보</footer>
</>
```
