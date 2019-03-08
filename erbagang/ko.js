'use strict';

if (!window.i18n) {
    window.i18n = {};
}

if (!window.i18n.languages) {
    window.i18n.languages = {};
}

window.i18n.languages['ko'] = {
    /////////////////////////////////////////////////////////////////////////////
    /////////// 请注意 翻译部分 %{xxx} \n <img src='' /> 等 要留意一下 //////////////
    /////////////////////////////////////////////////////////////////////////////
// 图片文字翻译
kaishila:"시작",

//  主游戏
zongtouzhu:"총：%{zongtouzhu}",
wotouzhu:"나：%{wotouzhu}",
zichan: "잔액：%{zichan}",
zhunbeijin:"자본금：%{zhunbeijin}",
yuebuzu: "잔액이 부족합니다. 충전해주세요.",
touzhu:"베팅 가능 금액：%{touzhu}",
denglu:"로그인이 필요합니다.",
tuichuliebiao:"뱅커 신청 취소",
kanzhuangliebiao:"뱅커 대기명단",
szshibai:"뱅커 신청 실패",
szchenggong:"뱅커 신청 성공",
xzchenggong:"플레이어 신청 성공",
shangzhuang:"뱅커 신청하기",
xuanzhong:"설정값은 0보다 높아야 합니다.",
zbjinshangxian:"자본금은 뱅커 최소 한도인 %{zbjinshangxian}보다 낮을 수 없습니다.",
dengdai:"다음 게임이 곧 시작됩니다...", // 记得加上...
jipai:"통계표",
jihaozhuo:"%{jihaozhuo}번 테이블", // x号桌

zhanghu: "계정：%{zhanghu}",
wujilu: "관련 기록이 없습니다.",
paomadeng:"축하합니다! %{yonghu}님이 %{beishu}배 베팅에 성공, %{etcjiang}를 획득하셨습니다.",

// 上庄
paixu:"순서",
yonghu:"아이디",
jine:"금액",
jineZhushi:"*대기 순서는 금액 크기로 결정됩니다.",
qian1lun:"이전 1판",
qian1lun:"이전 2판",
qian1lun:"이전 3판",
qian1lun:"이전 4판",
qian1lun:"이전 5판",
shenglv:"승률",
shenglvZhushi:"*승률은 최근 100판의 승패 통계를 근거로 합니다.",
zhuang:"뱅커",
// 坐庄
shezhijine:"뱅커 자본금 설정",
zidongbuzu:"뱅커 자본금 자동 보충 횟수:", // 自动补足坐庄金额 xx 次 翻译的时候注意一下是放在下面还是上面
zidongbuzuci:"회",// 自动补足坐庄金额 xx 次 翻译的时候注意一下是放在下面还是上面
zuozhuangzhushi:"*뱅커 자본금이 부족할 경우 잔액에서 자동으로 차감하여 자본금에 추가시킵니다.",
// 结算
jiesuantou:"이번 판 수익 랭킹",
lianzhuang:"뱅커 계속하기",
xiazhuang:"뱅커 그만하기",

//购买弹层
yueyichang:"계정 잔액에 오류가 생겼습니다. 다시 시도하거나 고객센터에 문의해주세요:support@coingame.com",
koukuanshibai:"잔액 차감 실패, 다시 구매하거나 고객센터에 문의해주세요:support@coingame.com",
zhunbeijinbuzu:"뱅커 자본금 부족",
kaijiangshibai:"정산 실패, 고객센터에 문의해주세요:support@coingame.com",
youxizhong:"아직 베팅할 수 없습니다.",

//提示
wangluo: "네트워크 사용 불가, 네트워크 연결 상태를 확인해주세요.",
wangluolianjie: "네트워크 오류！다시 연결해주세요.",

// ui 中设置
// main
anniu_tibi: "출금",
anniu_chongzhi: "충전",
//按钮
anniu_1: "확인",
anniu_2: "취소",
//新手引导
yindao_guanwang: "홈페이지",
yindao_login:"회원가입/로그인",
yindao_android:"모바일 버전",
yindao_yuyan:"언어",
yindao_logout:"로그아웃/계정 전환",
yindao_music:"사운드",
yindao_help:"도움말",
yindao_rank:"랭킹",
// 维护
weihuzhong:"점검 중입니다. 잠시후 시도해주세요.",

// 夺宝规则
guizewenzi:`기본 규칙:
뱅커가 입장하면 플레이어는 베팅 시간 내에 코인을 베팅 구역에 베팅합니다.
플레이어가 보유한 코인이 일정 금액을 초과할 경우 뱅커 신청이 가능합니다.
게임 시작 후 모든 자리에 2장의 패가 부여되고 뱅커의 패와 다른 자리의 패를 비교하여 승패를 결정합니다.

마작 패 점수 설명:
게임에 사용되는 패는 1-9까지의 마작 통수패와 백판이며 1-10점으로 계산합니다. 두 패의 합이 10을 넘을 경우 1의 자리 숫자만 사용합니다.
족보:페어&gt;이팔&gt;9점&gt;8점&gt;7점&gt;6점&gt;5점&gt;4점&gt;3점&gt;2점&gt;1점&gt;0점
페어：두 장의 패가 같을 경우 페어라고 하며 백판 페어가 가장 높습니다.
이팔：두 장의 패가 2통과 8통인 경우
승패 규칙: 먼저 족보 대로 계산하고 같은 족보가 나온 경우 단일 패중 높은 숫자의 패를 비교하여 승패를 가립니다. 예: 9통+2통=1점&gt;8통+3통=1점
족보와 패가 모두 같은 경우 뱅커의 승리입니다.

족보 설명:
페어 패:
페어는 본 게임에서 가장 높은 패이며 페어끼리는 숫자의 크기로 승패를 가립니다. 백판 페어가 가장 높습니다.

점수 패:
페어와 이팔을 제외한 나머지 패는 모두 점수 패입니다. 점수 패는 먼저 두 패의 합의 1의 자리를 가지고 승패를 가립니다. 동률일 경우 숫자가 높은 단일 패의 크기로 승패를 가립니다. 

이팔 패:
이팔은 2통 하나와 8통 하나로 이루어진 패입니다. 이팔은 모든 페어 패보다는 낮지만 모든 점수 패보다는 높습니다.

본 게임의 최종 해석권은 홈페이지가 보유하고 있습니다. 문제가 있을 경우 고객센터에 문의해주세요:
이메일：support@coingame.com 
QQ：468631374
카카오톡：Coingame Korea
（<u click="clickme1" >http://pf.kakao.com/_Mirxnj</u>）
텔레그램：<u click="clickme2" >https://t.me/Coingame_official</u>
`,
};
