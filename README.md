# Store Project

이 저장소는 Medusa 기반 백엔드와 Next.js 15 프론트엔드를 포함한 전자상거래 예제 프로젝트입니다.

## 디렉터리 구조
- **my-medusa-store/** - Medusa 프레임워크로 작성된 서버 코드
- **my-medusa-store-storefront/** - Next.js 기반 쇼핑몰 프론트엔드

각 디렉터리의 README를 참고하면 세부 설정 방법과 추가 정보를 확인할 수 있습니다.

## 백엔드 실행 방법
1. 디렉터리 이동
   ```bash
   cd my-medusa-store
   ```
2. 환경 변수 설정
   ```bash
   cp .env.template .env
   ```
3. 의존성 설치 및 개발 서버 실행
   ```bash
   yarn
   yarn dev
   ```
   기본적으로 `http://localhost:9000` 포트에서 서버가 시작됩니다.

## 프론트엔드 실행 방법
1. 디렉터리 이동
   ```bash
   cd my-medusa-store-storefront
   ```
2. 환경 변수 파일 준비 (프로젝트에 `.env.template`가 있는 경우)
   ```bash
   cp .env.template .env.local
   ```
3. 의존성 설치 및 개발 서버 실행
   ```bash
   yarn
   yarn dev
   ```
   기본 포트는 `http://localhost:8000` 입니다.

## 추가 자료
- 백엔드의 [integration-tests](my-medusa-store/integration-tests)와 [seed 스크립트](my-medusa-store/src/scripts/seed.ts)를 참고하여 초기 데이터 셋업과 테스트 방법을 확인할 수 있습니다.
- 더 자세한 안내는 각 디렉터리의 README 문서를 확인하세요.
