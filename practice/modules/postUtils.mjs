// 문제 29. postUtils.mjs에 다음 함수 두 개를 작성하고 named export 하세요.
/**
 * isPublished
 * 조건:
 * 게시글 객체 하나를 받음
 * 화살표 함수
 * 공개 여부를 불리언으로 반환
 * 암시적 반환
 * 
 * formatPost
 * 조건:
 * 게시글 객체 하나를 받음
 * title, tags, published 구조 분해
 * 태그를 ", "로 연결
 * 공개 상태를 삼항 연산자로 결정
 * 다음 문자열 반환
 * React 블로그 시작하기 · React, JavaScript · 공개
 */

export const isPublished = (post) => post.published;

export const formatPost = (post) => {
    const { title, tags, published } = post;
    const label = published ? "공개" : "비공개";
    const tagLabel = tags.join(", ");

    return `${title} · ${tagLabel} · ${label}`;
};