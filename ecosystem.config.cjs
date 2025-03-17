module.exports = {
    apps: [
        {
            name: 'saleson-nuxt3',
            script: './.output/server/index.mjs', // Nuxt.js 빌드 후 실행 파일
            interpreter: '/usr/local/n/versions/node/18.20.7/bin/node', // Node.js 22.14.0 경로 유지
            instances: 1,
            exec_mode: 'fork', // 단일 인스턴스이므로 fork 모드 유지
            env: {
                NODE_ENV: 'development', // 배포 환경에서는 'production' 추천
                HOST: '0.0.0.0',        // 외부 접근 가능하도록 설정
                PORT: 4000,             // 기본 포트 (필요 시 변경)
            },
            log_file: '../logs/combined.log',   // 로그 파일 경로 유지
            out_file: '../logs/out.log',        // 표준 출력 로그 파일 유지
            error_file: '../logs/error.log',    // 오류 로그 파일 유지
            cwd: '/home/projects/saleson-dev/front-nuxt3/webapp', // 작업 디렉토리 명시
            watch: false,                     // 개발용 watch 비활성화 (필요 시 true로)
            autorestart: true,                // 프로세스 종료 시 자동 재시작
        },
    ],
};