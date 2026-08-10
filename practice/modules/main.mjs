//문제 30. main.mjs에서 posts.mjs의 posts를 가져오세요.
import { posts } from "./posts.mjs";
import { isPublished, formatPost } from "./postUtils.mjs"; 
import siteInfo from "./blogInfo.mjs"; 

console.log(posts);

const publishedPosts = posts.filter(isPublished);
const formattedPosts = posts.map(formatPost);

console.log(publishedPosts);
console.log(formattedPosts);

console.log(siteInfo);
console.log(siteInfo.title);

// export가 하는 일: 함수나 파일을 다른 파일로 내보낼 때 사용
// import가 하는 일: 다른 파일에서 작성된 함수나, 파일을 현재 파일에서 사용하고자 불러올 때 사용
// named export를 import할 때 중괄호를 사용하는 이유: 모르겠음
// main.mjs의 역할: 실행 

// named export와 default export의 가장 큰 차이: named export는 한 파일에서 여러개 사용할 수 있고, default export는 한 파일에서 한번만 사용 가능.
// default import에서 중괄호를 사용하지 않는 이유: 어차피 한번만 사용하여 하나만 내보내기 때문에 여러개를 가져올 수 없으므로 굳이 중괄호를 사용할 이유가 없음
// blogInfo를 siteInfo라는 이름으로 가져올 수 있는 이유: default export는 파일에서 대표값 하나를 내보내기 때문에 가져오는 쪽에서 그 값에 원하는 지역 이름을 붙일 수 있음.
// 어떤 경우에 named export를 사용하면 좋을지: 여러가지 유틸 함수나 상수를 가져올 때
// 어떤 경우에 default export를 사용하면 좋을지: 파일의 대표값이나 컴포넌트를 가져올 때