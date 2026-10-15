/* 관리자 설정 — 게임 화면의 [선생님 메뉴 → 처음 설정]에서 자동으로 만들어집니다. 직접 고치지 마세요.
 * GitHub 토큰은 관리자 비밀번호로 암호화(AES-GCM, PBKDF2)되어 있어 비밀번호 없이는 쓸 수 없습니다. */
window.ADMIN_CONFIG = {
  "owner": "mini06-web",
  "repo": "fortress",
  "dir": "typing-game",
  "branch": "main",
  "secret": {
    "salt": "1yCPGJj6Xs0g2IuyHFtNrA==",
    "iv": "gPEpRnZpVJ0ZB+z8",
    "iter": 310000,
    "data": "a9C7HR+wqIk+OflwVZtkPIwnEZOcqsTE1F4xa+ht40OrBfxnwihiRugqmRBxmhUvRsO/lPdyBsANRV9+VGbZJP07AxWraoqGhnbDgNice84f1b9xOk8msicLoQ4WhGHQ7+/9KtmyLo5AiLP+nw=="
  }
};
