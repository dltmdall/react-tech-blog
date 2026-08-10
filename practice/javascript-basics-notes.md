# JavaScript 기초 훈련 기록

이 문서는 JavaScript를 처음 학습하면서 작성한 문제 풀이와 오답을
수정해 나간 과정을 보존한 기록입니다.

일부 코드는 당시의 오답을 그대로 포함하므로 하나의 프로그램으로
실행하는 용도가 아닙니다.

//게시글 하나는 객체로 표현할 수 있음
const post = { 
    title: "첫 번째 글",
    slug: "first-post",
    publishd: true,
};

// 게시글 여러개는 배열에 담음
const posts = [
    { title: "첫 번째 글", publishd: true },
    { title: " 두 번째 글", publishd: true },
];

// map은 배열의 각 값을 변환해 새로운 배열을 만듦
const numberx = [1, 2, 3];
const doubleNumberx = numbers.map((number) => number * 2);

console.log(doubleNumberx); // [2, 4, 6]

// filter는 조건을 만족하는 값만 남김
const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log (evenNumbers); //[2, 4]

// find는 조건을 만족하는 첫 번째 값 하나를 찾음 
const numberz = [1, 2, 3];
const result = numberz.find((number) => number === 2);

console.log(result); //2

//훈련 과제데이터
const posts = [
  {
    title: "React 블로그 시작하기",
    slug: "start-react-blog",
    published: true,
    tags: ["React", "JavaScript"],
  },
  {
    title: "CSS로 레이아웃 만들기",
    slug: "css-layout",
    published: false,
    tags: ["CSS"],
  },
  {
    title: "배열 메서드 연습",
    slug: "array-methods",
    published: true,
    tags: ["JavaScript"],
  },
];

//문제1. map을 사용해 제목만 담긴 배열을 만드시오
const postTitles = posts.map((post) => post.title);

console.log(postTitles);

// 문제2. filter를 사용해 published가 true인 게시글만 담긴 배열을 만드세요
const publishedPost = posts.filter((post) => post.published === true );

console.log(publishedPost);

// 문제 3. find를 사용해 slug가 "array-methods"인 게시글을 찾으세요. 변수 이름은 selctedPost로 사용하세요.
const selectedPost = posts.find((post) => post.slug === "array-methods");

console.log(selectedPost);

// 문제 4. 함수 getPostBySlug를 작성하세요.
function getPostBySlug(posts, slug) {
    return post.find((post)=> post.slug === slug);
}

const resulttt = getPostBySlug(posts, "array-methods");
console.log(resulttt);

//문제 5. 도전과제: 태그에 "JavaScript"가 포함된 게시글의 제목만 배열로 만드세요.
const JavascriptPosts = post.filter((post) => post.tags.includes("JavaScript"));
const JavascriptPostsTitles = JavascriptPosts.map((post) => post.title);

console.log(JavascriptPostsTitles);
// 1. map이 하는 일: 배열의 값을 변환해 새로운 배열을 만든다
// 2. filter가 하는 일: 원하는 값만 남겨서 새로운 배열을 만든다
// 3. 가장 어려웠던 문제: 문제 1은 map에 대한 개념 및 사용 방법을 몰라서 어려웠고, 문제 4는 아예 문제도 이해 못했고 접근 방법 자체를 모르겠고, 문제 5또한 map을 활용하는 것 같은데 map의 개념과 사용 방법을 젆 모르겠어서 못 풀겠음

//문제 6. "CSS" 태그가 포함된 게시글만 찾으세요. (조건: filter 사용, 변수 이름: cssPosts)
const cssPosts = posts.filter((post) => post.tags.includes("CSS"));

//문제 7. 공개되지 않은 게시글의 제목만 배열로 만드세요. (조건: published가 false, filter, map 사용, 변수 이름: unpublishedPostTitles)
const unpublishedPosts = posts.filter((post) => post.published === false);
const unpublishedPostTitles = unpublishedPosts.map((post) => post.title);

//문제 8. 제목을 받아 해당 제목의 게시글을 찾는 함수를 작성하세요.
function getPostByTitle(posts, title) {
    return posts.find((post) => post.title === title);
}

//posts와 post의 차이: posts는 게시글 객체들이 들어있는 배열이고, post는 배열에서 현재 확인 중인 게시글 객체 하나를 의미함. 
// filter와 find의 결과 차이: filter는 원하는 값만 남겨서 새로운 배열을 만들고, find는 조건을 만족하는 하나의 '값'만 찾음.
// 함수의 매개변수란: 모르겠어./ 모범 답안: 매개변수는 함수가 실행될 때 외부에서 받을 값을 담기 위해 선언한 이름.

//문제 9. 다음 함수를 직접 완성해보세요.
function multiply(a, b) {
    return a * b ;
}

console.log(multiply(3,4));

//문제 10. 게시글 하나를 받아 제목을 반환하세요.
function getPostByTitle(post) {
    return posts.title;
}

console.log(getPostByTitle(posts[0]));

//문제 9의 매개변수: a,b
//문제 9의 인수: 3,4
//문제 10에서 post[0]의 의미: 게시글 객체의 배열 posts에서 가장 첫번째 게시글을 의미함.
//함수에서 return이 하는 일: 함수의 실행결과를 함수를 호출한 곳으로 돌려줌.

//확인 훈련
function isPublished(post) {
    return post.publishd === true;
}

console.log(isPublished(posts[0])); //true
console.log(isPublished(posts[1])); //false

//문제 11. posts[0]을 firstPost에 저장하세요.
const firstPost = posts[0];

//문제 12. 구조분해 할당을 사용해 firstopst에서 다음 값을 꺼내세요.
const { title, slug, tags } = firstPost;

console.log(title);
console.log(slug);
console.log(tags);

//문제 13. 게시글 객체를 하나 받아 다음 문자열을 반환하는 함수를 작성하세요. (문자열: React 블로그 시작하기 (start-react-blog)
function createPostLabel(post) {
    const { title, slug } = post;

    return `${title} (${slug})`;
}

console.log(createPostLabel(posts[0]));

//강화 문제 14. 게시글 하나를 받아 다음 문자열을 반환하세요. (React 블로그 시작하기 - 공개, CSS로 레이아웃 만들기 - 비공개)
function createPostStatus(post) {
    const { title, published } = post;
    if (published ===true) {
        return `${title} - 공개`;
    } else {
        return `${title} - 비공개`;
    }
}

console.log(createPostStatus(posts[0]));
console.log(createPostStatus(posts[1]));

//강화 문제 14-1. 삼항 연산자로 다시 작성하기
function createPostStatus(post) {
    const { title, published } = post;
    const status = published ? "공개" : "비공개";

    return `${title} - ${ststus}`;
}

console.log(createPostStatus(posts[0]));
console.log(createPostStatus(posts[1]));

//문제 15. 다음 함수 선언문을 함수 표현식으로 바꾸세요.
/** function subtract(a,b) {
    return a - b;
}
**/
const subtract = function (a, b) {
    return a - b;
}

//문제 16. 문제 15의 함수 표현식을 화살표 함수로 바꾸세요.
/** const subtractArrow = (a, b) => {
    return a - b;
}
**/
const subtractArrow = (a, b) => a -b;

console.log(subtractArrow(10, 3));

//문제 17. 다음 함수를 암시적 반환을 사용하는 한 줄짜리 화살표 함수로 바꾸세요.
/** function getPostSlug(post) {
    return post.slug;
}
**/ 
const getPostSlug = (post) => post.slug;

console.log(getPostSlug(posts[0]));

//문제 18. 공개된 게시글만 찾는 코드를 한 줄짜리 화살표 함수와 filter로 작성하세욧.
const visiblePosts = posts.filter((post) => post.published === true);

// subtract에 저장된 값의 종류: 함수
// visiblePosts에 저장된 값의 종류: 게시글 객체들이 담긴 배열
// filter에 전달한 (post) => post.published === true의 역할: 매개변수로 전달된 하나의 post 객체의 published 가 true인지 false인지 판별하여 true를 반환한 게시글만 결과 배열에 남김. 

//문제 19. 숫자가 양수인지 아닌지 판단하세요. (조건: 함수이름: getNumberStatus, 화살표 함수 사용, 삼항 연산자 사용, 0보다 크면 "양수", 그렇지 않으면 "0또는 음수")
const getNumberStatus = (number) => number > 0 ? "양수" : "0 또는 음수";

console.log(getNumberStatus(10)); // 양수
console.log(getNumberStatus(-2)); // 0 또는 음수

//문제 20. 게시글 하나를 받아 공개 상태를 반환하세요. (조건: 함수 이름: getPublishedLabel, 화살표 함수 사용, 삼항 연산자 사용, 공개글이면 "공개", 비공개 글이면 "비공개", 암시적 반환 사용)
const getPublishedLabel = (post) => post.published ? "공개" : "비공개";

console.log(getPublishedLabel(posts[0])); // 공개
console.log(getPublishedLabel(posts[1])); // 비공개

//문제 21. 게시글 하나를 받아 다음 문자열을 반환하세요. (조건: 함수 이름: createPostSummary, 화살표 함수 사용, 구조 분해 할당 사용, 템플릿 리터럴 사용)
/**React 블로그 시작하기 [공개]
   CSS로 레이아웃 만들기 [비공개]
**/
const createPostSummary = (post) => {
    const { title, published } = post;
    const label = published ? "공개" : "비공개";

    return `${title} [${label}]`;
};

//문제 22. post 배열을 다음 문자열 배열로 반환하세요. (조건: 변수 이름: postSummaries, map 사용, 문제 21에서 만든 createPostSummary 재사용)
/** [
  "React 블로그 시작하기 [공개]",
  "CSS로 레이아웃 만들기 [비공개]",
  "배열 메서드 연습 [공개]",
] 
**/
const postSummaries = posts.map((post) => createPostSummary(post));
    
console.log(postSummaries);

//문제 23. 게시글 제목의 길이를 판별하는 화살표 함수를 작성하세요. (조건: 함수 이름: getTitleLengthLabel, 게시글 객체 하나를 받음, 제목이 15자 이상이면 "긴 제목", 그렇지 않으면 "짧은 제목", 삼항 연산자 사용, 암시적 반환 사용)
const getTitleLengthLabel = (post) => (post.title.length >=15 ? "긴 제목" : "짧은 제목");

console.log(getTitleLengthLabel(posts[0]));

//문제 24. 게시글에 태그가 있는지 판별하세요.
/** 조건:
 * 함수 이름: getTagStatus
 * 게시글 객체 하나를 받음
 * tags를 구조 분해
 * 태그가 하나 이상이면 "태그 있음"
 * 태그가 없으면 "태그 없음"
 * 화살표 함수와 삼항 연산자 사용
 */
const getTagStatus = (post) => {
    const { tags } = post;

    return tags.length > 0 ? "태그 있음" : "태그 없음";
}

// const getTagStatus = ({tags}) => tags.length > 0 ? "태그 있음" : "태그 없음";

const postWithoutTags = {
  title: "태그 없는 글",
  tags: [],
};

console.log(getTagStatus(posts[0]));       // 태그 있음
console.log(getTagStatus(postWithoutTags)); // 태그 없음

//문제 25. 공개된 게시글인지 판단하는 함수를 먼저 만드세요. 그 다음 이 함수를 filter에 직접 전달해 공개 게시글 배열을 만드세요. (조건: 변수 이름: publishedPosts)
/** 조건:
 * 함수 이름: isPublished
 * 게시글 객체 하나를 받음
 * 화살표 함수 사용
 * 암시적 반환 사용
 * 공개 여부를 불리언으로 반환
 */
const isPublished = (post) => ((post.published) ? true : false);

const publishedPosts = posts.filter((isPublished));

console.log(publishedPosts);

// const isPublished = (post) => post.published;


//문제 26. 게시글 객체 하나를 받아 다음 형식의 문자열을 반화하세요.
/**
 * React 블로그 시작하기 · React, JavaScript · 공개
 * CSS로 레이아웃 만들기 · CSS · 비공개 
*/
/** 조건
 * 함수 이름: formatPost
 * 화살표 함수 사용
 * title, tags, published 구조 분해
 * 삼항 연산자로 공개 상태 결정
 * tags.join(", ")으로 태그 연결
 * 템플릿 리터럴로 반환
 */
const formatPost = (post) => {
    const {title, tags, published} = post;
    const label = published ? "공개" : "비공개";
    const tagLabel = tags.join(", ");

    return `${title} · ${tagLabel} · ${label}`;
}

//문제 27. 문제 26에서 만든 formatPost를 이용해 모든 게시글을 문자열 배열로 변환하세요.
/** 조건
 * 변수 이름: formattedPosts
 * map 사용
 * formatPost 함수를 직접 콜백으로 전달
 * 
 * 예상 결과:
[
  "React 블로그 시작하기 · React, JavaScript · 공개",
  "CSS로 레이아웃 만들기 · CSS · 비공개",
  "배열 메서드 연습 · JavaScript · 공개",
]
 */
const formattedPosts = posts.map(formatPost);

console.log(formattedPosts);

// 문제 23에서 암시적으로 반환되는 값: 제목의 length에 따라 삼항 연산자가 선택한 문자열
// 문제 24에서 tags.length가 0일 때 선택되는 값: 태그 없음
// 문제 25에서 isPublished의 반환 자료형: boolean
// 문제 25에서 publishedPosts의 자료형: 배열
// 문제 27에서 map에 formatPost를 직접 전달할 수 있는 이유: fformatPost가 게시글 객체 하나를 받아 문자열을 반환하는 함수이고, map이 배열의 각 게시글을 그 함수에 자동으로 전달하기 때문.