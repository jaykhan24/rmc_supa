
레미콘 통합 계산기 (Supabase 연동 버전)

파일 구성
- index.html : 홈
- dispatch.html : 출하량 계산기
- cost.html : 원가 계산기
- admin.html : 관리자 관리
- app.js : 공통 로직 + Supabase 연결
- style.css : 공통 스타일

1. app.js 상단의 값을 본인 Supabase 프로젝트 값으로 바꾸세요.
   const SUPABASE_URL = "YOUR_SUPABASE_URL";
   const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";

2. Supabase에는 아래 3개 테이블이 있어야 합니다.
   - mixes
   - prices
   - dispatch_settings

3. RLS를 끄거나 정책을 허용해야 웹에서 읽고 쓸 수 있습니다.

4. GitHub Pages에 올리면 홈 주소는 index.html 입니다.
