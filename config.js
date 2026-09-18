/* ★★ 여기 두 값만 고치면 됩니다 (index.html·펌웨어는 안 건드림) ★★
 *  · 비밀번호 변경 : tools\set_password.ps1 "새비밀번호"  실행 → 아래 PASSWORD_SHA256 자동 교체
 *  · 링크 잠금(OFF): ENABLED 를  false  로   /   열기(ON): true  로   (tools\toggle.ps1 로도 가능)
 *  변경 후 재배포 : tools\publish.ps1 -Push   (또는 git push)
 *  현재 비밀번호 = cura0611!   ※평문이 아니라 해시(SHA-256)로만 저장 */
window.SITE_CONFIG = {
  ENABLED: true,
  PASSWORD_SHA256: "2d0d490446f9515b5203a765d738a53daa730d2126250c51af1b3aa47a36c1fa"
};
