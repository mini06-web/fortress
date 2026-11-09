/* 관리자 설정 — 게임 화면의 [선생님 메뉴 → 처음 설정]에서 자동으로 만들어집니다. 직접 고치지 마세요.
 * GitHub 토큰은 관리자 비밀번호로 암호화(AES-GCM, PBKDF2)되어 있어 비밀번호 없이는 쓸 수 없습니다. */
window.ADMIN_CONFIG = {
  "owner": "mini06-web",
  "repo": "fortress",
  "dir": "typing-game",
  "branch": "main",
  "secret": {
    "salt": "NuKY4hnH0gm0upFPT5eeHw==",
    "iv": "dE0HtGBVrHSmT2AV",
    "iter": 310000,
    "data": "VztDbIdlUk5j+NWFseVTlSV8ZZCCQrTqPo88uVxRz/OFb22ROhYuOIZgn1n8iDW8mrCcBh6NAfJJzpnzmgSkUMsM8kQ4lsoIZo8Z/9GCNkS0buNisL+ZIcmREDYEsMQf5i9N7VqIr3ChQ+bG5A=="
  }
};
