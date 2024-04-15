# practice-github-packages

> yarn berry → pnpm으로 마이그레이션 예정입니다.

## 사용 기술

- pnpm
- parcel
- typescript

## 초기 설정 & 실행

1. **pnpm & dependencies 설치**

```bash
npm install -g pnpm
pnpm install
```

- pnpm으로 모노레포를 관리하기 때문에 pnpm 이외의 package manager를 사용하면 안됩니다.
- "preinstall": "npx only-allow pnpm" 을 설정하여 스크립트 실행전 pnpm 사용여부 체크

<br/>

2. **배포할 모듈 추가 및 변경**

- packages 하위 디렉토리의 src 폴더에서 작업
- src/index.ts에서 import 및 export

- **예시**

  ```ts
  // packages/utils/sample-util/src/sample.ts

  export const hello = (value: string) => `hello ${value}`;console.log(`Hello, ${name}`);
  ```

  ```ts
  // packages/utils/sample-util/src/index.ts

  import { hello } from "./sample";

  export { hello };
  ```

<br/>

3. **버전 수정**

- 배포 전 변경된 packages 하위 디렉토리의 package.json 버전 수정
- 예시
  ```json
  // packages/utils/package.json

{
  "name": "@ez1n/sample-util",
  "version": "0.0.1",
  "description": "",
  "source": "src/index.ts",
  "main": "dist/index.js",
  "module": "dist/index.module.js",
  "types": "dist/index.d.ts",
  "files": ["dist"],
  "sideEffects": false,
  "keywords": [],
  "author": "ez1n",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/ez1n/github-packages-monorepo"
  },
  "publishConfig": {
    "registry": "https://npm.pkg.github.com/"
  }
}

  ```

<br/>

4. **빌드 & 배포**
   > pnpm은 자체적으로 workspace를 이용하기 때문에 directory 별로 배포를 진행하는 별도의 명령어 (yarn workspaces ~ foreach ...)를 실행할 필요가 없습니다.

- recursive publish
  - 현재 디렉토리에 있는 모든 패키지를 재귀적으로 찾아 배포 (워크스페이스에 있는 모든 패키지 배포)
  - 하위 패키지에 있는 종속성도 함께 배포됨
- 현재 작업중인 모든 변경 사항을 commit 또는 push해야 배포가 가능합니다.

  ```bash
  pnpm build
  pnpm recursive publish
  ```

<br/>

### 모노레포 github pacakges 초기 세팅 문서

> 초기 세팅 가이드 문서

[github packages 모노레포 시작](https://github.com/ez1n/github-packages-monorepo/wiki/github-packages-with-%EB%AA%A8%EB%85%B8%EB%A0%88%ED%8F%AC-(feat.-pnpm,-typescript,-parcel))
