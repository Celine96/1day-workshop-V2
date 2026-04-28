import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ko-KR',
  title: "태이님 1DAY WORKSHOP v2",
  description: 'KAI의 데이터 분석 레포트로 배우는 AI-Native 자동화',
  base: '/1day-workshop-V2/',
  themeConfig: {
    nav: [
      { text: '홈', link: '/' },
      { text: 'Session 1', link: '/part1/1-1-intro' },
      { text: 'Session 2', link: '/part2/2-1-api' },
      { text: 'Session 3', link: '/part3/3-1-agents' },
    ],
    sidebar: [
      {
        text: '워크북 소개',
        items: [
          { text: '시작하기', link: '/' },
        ]
      },
      {
        text: 'Session 1: 클로드 코드 시작하기 (70분)',
        items: [
          { text: '1.1 클로드 코드란?', link: '/part1/1-1-intro' },
          { text: '1.2 설치 및 첫 실행', link: '/part1/1-2-install' },
          { text: '1.3 명령어 & 네비게이션', link: '/part1/1-3-commands' },
        ]
      },
      {
        text: 'Session 2: KAI의 성장 분석 레포트 (90분)',
        items: [
          { text: '2.1 API란? — 약속·창구·출입증', link: '/part2/2-1-api' },
          { text: '2.2 KAI가 하는 일', link: '/part2/2-2-kai' },
          { text: '2.3 파이프라인 흐름', link: '/part2/2-3-pipeline' },
          { text: '2.4 [실습] 미니 KPI 대시보드 만들기', link: '/part2/2-4-practice' },
          { text: '2.5 [실습] 대화로 수정하기', link: '/part2/2-5-iterate' },
        ]
      },
      {
        text: 'Session 3: 에이전트 구축하기 (60분)',
        items: [
          { text: '3.1 에이전트 / 서브에이전트 / 오케스트레이션', link: '/part3/3-1-agents' },
          { text: '3.2 PRD (제품 요구사항 문서)', link: '/part3/3-2-prd' },
          { text: '3.3 하네스 엔지니어링', link: '/part3/3-3-harness' },
          { text: '3.4 나만의 에이전트 만들기', link: '/part3/3-4-build' },
          { text: '3.5 실무 팁', link: '/part3/3-5-tips' },
        ]
      },
      {
        text: '부록',
        items: [
          { text: '참고 자료 & 다음 단계', link: '/appendix' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Celine96/1day-workshop-V2' }
    ],
    outline: {
      level: [2, 3],
      label: '목차'
    },
    search: {
      provider: 'local'
    }
  }
})
