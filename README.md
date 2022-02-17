# Joy Utils

## Yarn workspace

### 특정 패키지에 외부 라이브러리 설치

```shell
# check package 에 react 를 설치합니다
yarn workspace check add react
```

### 특정 패키지에서 외부 라이브러리 삭제

```shell
# check package 에 react 를 삭제합니다
yarn workspace check remove react
```

### 루트에 외부 라이브러리 설치 (공통모듈)

```shell
# yarn workspace 를 사용하게 되면, 기본적으로 패키지안에 모듈을 설치하는데, 이 것을 무시하고 설치합니다
yarn add typescript --dev -W (or --ignore-workspace-root-check)
```

## Lerna

### lerna bootstrap

각각의 패키지에 명시된 디펜던시를 설치하고, 패키지들 내에서 특정 모듈이 필요로 하는 버전과 실제 모듈 버전이 동일하다면 불필요한 다운로드 없이 서로 심볼릭 링크를 걸어 로컬에서 사용할 수 있게 합니다
  - `hoist` : 옵션을 사용한다면, 공통되는 모듈을 루트의 node_modules 로 올려서 설치하고, 만약 각각의 패키지가 서로다른 버전의 외부 디펜던시를 사용한다면, 가장 많이 사용되고 있는 버전이 호이스팅 되고 관련된 경고를 보여줍니다. 호이스팅을 잘 이용한다면 다음과 같은 이점을 얻을 수 있습니다.
    - 모든 패키지는 주어진 종속성의 동일한 버전을 사용합니다.
    - 자동화 된 도구를 사용하여 루트의 종속성을 최신 상태로 유지할 수 있습니다.
    - 종속성 설치 시간이 줄어듭니다.
    - 저장 공간이 덜 필요합니다
    
### lerna version

마지막 커밋과 차이가 있는 패키지를 파악해서 버전을 올려줍니다. 이때, 서로 심볼릭 링크가 걸려있는 dependancy 버전까지 올려줍니다.
  - [conventionalcommits](https://www.conventionalcommits.org/en/v1.0.0/)

### lerna publish

패키지를 레지스트리에 배포하는 데에 사용됩니다.  
아무 arguments를 사용하지 않을경우 모든 패키지의 버전을 lerna.json에 명시된 버전으로 업데이트 후 배포를 진행합니다

- `lerna publish from-package` : 사용할 경우 각각의 패키지의 버전과 npm 레지스트리에 실제로 배포되어있는 버전을 비교하고 차이점이 있는 패키지만 업데이트 후 배포를 진행합니다
- `lerna publish from-git` : 사용할 경우 태그를 단 커밋에 해당하는 소스가 포함된 있는 패키지를 찾아서 업데이트 후 배포를 진행합니다

### lerna clean

모든 패키지의 노드모듈을 삭제합니다. 루트 디렉토리의 노드모듈은 삭제하지 않습니다.

### lerna run

각 패키지 package.json안에 명시되어있는 script를 실행합니다.
- parallel :  옵션의 유무로 병렬 스크립트를 실행하거나 순차적으로 실행 할 수 있습니다

## References

- [Lerna와 Yarn workspaces를 활용한 패키지 관리](https://medium.com/wantedjobs/lerna%EC%99%80-yarn-workspaces%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%ED%8C%A8%ED%82%A4%EC%A7%80-%EA%B4%80%EB%A6%AC-429d2a685486)
- [tsconfig.json 컴파일 옵션 정리](https://geonlee.tistory.com/214)
