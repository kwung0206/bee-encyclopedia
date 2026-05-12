# 꿀벌백과사전

> React로 구현한 꿀벌 생태 백과사전 웹 시스템입니다.  
> 꿀벌의 종류, 역할, 행동, 생태, 보호 방법을 검색하고 분류별로 탐색할 수 있습니다.

## 프로젝트 소개

꿀벌백과사전은 꿀벌에 대한 정보를 쉽고 재미있게 탐색할 수 있도록 만든 웹 애플리케이션입니다. 사용자는 꿀벌의 종류와 군체 안에서의 역할, 수분 활동, 벌집 구조, 꿀벌 보호 방법 등을 카드 형태로 확인할 수 있습니다.

이 프로젝트는 React 기반 프론트엔드로 제작되었으며, GitHub Actions를 활용하여 AWS S3 정적 웹사이트 호스팅 환경에 자동 배포되도록 구성했습니다.

## 주요 기능

| 기능 | 설명 |
| --- | --- |
| 검색 기능 | 여왕벌, 수분, 벌집 등 키워드로 꿀벌 정보를 검색할 수 있습니다. |
| 카테고리 필터 | 종류, 역할, 행동, 생태, 보호 항목으로 정보를 분류해 볼 수 있습니다. |
| 상세 정보 카드 | 선택한 항목의 설명과 핵심 사실을 상세 패널에서 확인할 수 있습니다. |
| 미니 퀴즈 | 선택한 항목에 맞는 간단한 퀴즈 문구를 제공합니다. |
| 보호 실천 팁 | 꿀벌을 돕기 위한 꽃 심기, 농약 줄이기, 물 제공 방법을 안내합니다. |

## 사용 기술

- React
- Vite
- HTML / CSS
- GitHub Actions
- AWS S3 Static Website Hosting

## GitHub Actions CI/CD 환경

이 프로젝트는 `main` 브랜치에 코드가 반영되면 GitHub Actions가 자동으로 실행되어 AWS S3 버킷에 배포되도록 구성했습니다.

### 배포 흐름

```text
GitHub main 브랜치 변경
        ↓
GitHub Actions 실행
        ↓
Node.js 22 환경 구성
        ↓
npm install
        ↓
npm run build
        ↓
dist 폴더 생성
        ↓
AWS 인증 정보 설정
        ↓
S3 버킷으로 dist 파일 업로드
```

### Workflow 파일

GitHub Actions 설정 파일 위치:

```text
.github/workflows/deploy-s3.yml
```

### 사용한 GitHub Secrets

AWS Academy Learner Lab에서 발급받은 임시 인증 정보를 GitHub Repository Secrets에 등록했습니다.

| Secret 이름 | 설명 |
| --- | --- |
| `AWS_ACCESS_KEY_ID` | AWS Access Key |
| `AWS_SECRET_ACCESS_KEY` | AWS Secret Access Key |
| `AWS_SESSION_TOKEN` | AWS Academy 임시 Session Token |

### GitHub Actions CI/CD 시연 영상

[GitHub Actions를 활용하여 CI/CD 환경 구축 시연](https://youtu.be/zkBl6w5OhM8)

## AWS S3 배포 정보

| 항목 | 내용 |
| --- | --- |
| AWS 리전 | `us-east-1` |
| S3 버킷 이름 | `kwung0206-bee-encyclopedia` |
| 호스팅 방식 | S3 정적 웹사이트 호스팅 |
| 인덱스 문서 | `index.html` |
| 오류 문서 | `index.html` |

### AWS 배포 URL

```text
http://kwung0206-bee-encyclopedia.s3-website-us-east-1.amazonaws.com
```

> AWS Academy Learner Lab 세션은 약 4시간 동안 유효하므로, 세션 종료 후에는 AWS URL 접속 또는 배포가 제한될 수 있습니다.

## AWS Amplify 호스팅

과제 2에서는 과제 1에서 사용한 GitHub Repository를 AWS Amplify에 연결하여 React 웹 애플리케이션을 호스팅했습니다.

### Amplify 배포 흐름

```text
AWS Amplify 앱 생성
        ↓
GitHub 계정 연결
        ↓
bee-encyclopedia Repository 선택
        ↓
main 브랜치 연결
        ↓
Amplify 자동 빌드 및 배포
        ↓
Amplify 제공 URL로 웹사이트 접속
```

### Amplify 배포 정보

| 항목 | 내용 |
| --- | --- |
| 서비스 | AWS Amplify Hosting |
| 연결 Repository | `kwung0206/bee-encyclopedia` |
| 연결 브랜치 | `main` |
| 빌드 명령어 | `npm run build` |
| 배포 폴더 | `dist` |

### Amplify 배포 URL

```text
https://main.dvt2z8ih20bwo.amplifyapp.com
```

### AWS Amplify 서비스 활용 영상

[AWS Amplify 서비스 활용하여 호스팅하기 시연](https://youtu.be/9hrPaEBYWsY)

## 로컬 실행 방법

```bash
npm install
npm run dev
```

## 빌드 방법

```bash
npm run build
```

## 프로젝트 구조

```text
bee-encyclopedia
├── .github
│   └── workflows
│       └── deploy-s3.yml
├── src
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── README.md
```

## 기대 효과

꿀벌백과사전은 생태계에서 중요한 역할을 하는 꿀벌 정보를 직관적인 UI로 제공하여 사용자가 꿀벌의 가치와 보호 필요성을 쉽게 이해할 수 있도록 돕습니다. 또한 GitHub Actions와 AWS S3를 연동하여 프론트엔드 프로젝트의 CI/CD 배포 과정을 실습할 수 있습니다.
