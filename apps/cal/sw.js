// 최소한의 서비스 워커 등록
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // 기본 네트워크 요청 연결
});
