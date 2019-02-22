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

    //  主游戏
    zhanghu: "계정：%{zhanghu}",
    zichan: "자산：%{zichan}",
    wujilu: "기록 없음",
    fapai:"카드 돌리기",
    napai:"카드 받기",
    jiabei:"더블",
    zhanghuchongzhi:"계정 충전 주소：\n",
    fuzhi:"복사",

    //购买弹层
    wuzige:"게임 참여 자격 없음",
    chaochushangxin:"이번 회 게임의 참여 상한이 도달했습니다 ",
    yueyichang:"계정 잔액이 이상합니다. 재시도하거나 고객센터에 연락하십시오：support@coingame.com",
    yuebuzu: "잔액이 부족합니다. 충전하십시오",
    koukuanshibai:"결제 실패했습니다. 다시 구입하거나 고객센터에 연락하십시오：support@coingame.com",
    fenebuzhu:"해당 코인 잔여 수량이 부족합니다",
    yijieshu:"이번 회 종료되었습니다.",
    fanjiangyichang:"코인 가격 조회 이상이 있습니다. 고객센터에 연락주십시오：support@coingame.com",
    fanjiangshibai:"상금 지급 실패했습니다. 고객센터에 연락주십시오：support@coingame.com",
    xitiyichang:"시스템 이상이 있습니다.고객센터에 연락주십시오：support@coingame.com",
    //提示
    fuzhichenggong: "복사했음!",
    fuzhishibai: "죄송합니다!복사 실패했습니다!",
    wangluo: "인터넷 연결 안됩니다. 네트워크 연결이 정상인지 확인하십시오. ",
    wangluolianjie: "현재 인터넷이 이상합니다! 다시 시도하십시오",
    zaijiezaili:"한번 더 해보세요",
    henyihan:"아쉽습니다.",
    gongxinin:"축하합니다.",
    
    // ui 中设置
    // main
    anniu_tibi: "출금",
    anniu_chongzhi: "충전",
    benqijilu: "당첨 기록",
    chakangengduo: "더 보기",
    riqi:"날짜",
    yonghu:"회원",
    touzhu:"배팅",
    beishu:"배수",
    shouyi:"수익",
    //按钮
    anniu_1: "확인",
    anniu_2: "취소",
    //新手引导
    yindao_guanwang: "홈페이지",
    yindao_login:"회원가입/로그인",
    yindao_android:"안드로이드 ",
    yindao_yuyan:"언어",
    yindao_logout:"로그아웃/다른 계정으로 등록 ",
    yindao_music:"소리",
    yindao_help:"도움",
    // 维护
    weihuzhong:"게임 시스템 관리중입니다. 잠시 뒤에 재시도하십시오",

    // 记录
    riqi:"날짜",
    // shijian:"时间<color=#FFFFFF>(UTC0)</color>",
    yonghu:"회원",

    // 排行榜
    wodetouzhu:"나의 배팅：%{tou}",
    wodepaiming:"나의 순위：%{paiming}",
    paihangbang:"랭킹 리스트",
    paiming:"순위",
    yonghuming:"회원명",
    touzhue:"배팅 금액",
    wodezhanji:"나의 기록",
    caichijilu:"상금불 기록",
    shijian:"시간",
    jiangli:"상금",
    fenlei:"분류",
    paimian:"카트 내용",
    toubijine:"현재 배팅 금액：%{jine}",

    // 规则
    guizewenzi:`帮助页内容：
규칙：
매 게임은 조커 카드를 제외한 총 52장의 카드로 구성된 포커카드 덱 하나로 진행됩니다.
숫자 서열：A&lt;2&lt;3&lt;4&lt;5&lt;6&lt;7&lt;8&lt;9&lt;10&lt;J&lt;Q&lt;K。
카드를 받기 전, 플레이어는 먼저 자신의 게임 금액을 확인해야 합니다.
카드를 받은 후, 플레이어는 5초 동안 이번 판 게임을 “더블”로 설정할지 여부를 결정할 수 있습니다. 5초가 지나면 자동으로 기본으로 설정되어 게임을 시작합니다.
2배 설정 여부를 결정한 후, 세번째로 받은 카드의 숫자가 처음 받은 두 카드의 숫자 사이에 위치할 경우 승리합니다.

기본 플레이 방법:：
처음 받은 두 카드의 차이값에 따라 배당율도 달라집니다.
예：처음 받은 2장의 카드가 3과 8일 경우, 두 카드의 차이값은 5가 되며 3번째 카드가 4,5,6,7일 경우 승리, 나머지 숫자일 경우 패배합니다.
<img src= 'h3' /><img src= 's8' />
<img src= 's4' />/<img src= 'd5' />/<img src= 'h6' />/<img src= 's7' />
처음 받은 2장의 카드가 9와 Q일 경우, 두 카드의 차이값은 3이 되며 3번째 카드가 10,J일 경우 승리, 나머지 숫자일 경우 패배합니다.
<img src= 'd9' /><img src= 's12' />
<img src= 'h10' />/<img src= 's11' />
위 경우 앞의 두 카드의 차이값이 각각 5와 3이므로 승리 시 획득하는 배율도 달라집니다. 카드의 차이값이 작을수록 배율이 올라가며 최대 25배까지 상승합니다.
상금풀 플레이 방법:：
상금풀 참여 조건:：
최초 3장의 카드가 같은 모양일 경우；
<img src= 'd2' /><img src= 'd1' /><img src= 'd12' />
최초 3장의 카드 중 2장 혹은 3장이 같은 숫자일 경우；
<img src= 'd2' /><img src= 's2' /><img src= 'h12' /> <img src= 'h13' /><img src= 's13' /><img src= 'd13' />
첫번째와 두번째 카드의 차이값이 2인 경우。
<img src= 'd4' /><img src= 'd6' /><img src= 'h8' />
상금풀 배당 비율:：
배팅 금액이 높을수록 획득하는 복권 보상도 높아집니다.
5장의 카드가 모양이 같으며 숫자가 이어지는 경우
<img src= 'c2' /><img src= 'c3' /><img src= 'c4' /><img src= 'c5' /><img src= 'c6' /> <img src= 's7' /><img src= 's8' /><img src= 's9' /><img src= 's10' /><img src= 's11' />
4장의 카드가 모양이 같으며 숫자가 이어지는 경우
<img src= 'c3' /><img src= 'c4' /><img src= 'c5' /><img src= 'c6' /> <img src= 'h5' /><img src= 'h6' /><img src= 'h7' /><img src= 'h8' />
4장의 카드 숫자가 같은 경우
<img src= 'h12' /><img src= 'c12' /><img src= 's12' /><img src= 'd12' /><img src= 'c3' />
3장의 카드 숫자가 같으며 나머지 2장의 카드 숫자가 같은 경우
<img src= 'd2' /><img src= 's2' /><img src= 'h2' /><img src= 'h3' /><img src= 's3' />
5장의 카드 모양이 같은 경우
<img src= 'c12' /><img src= 'c9' /><img src= 'c4' /><img src= 'c2' /><img src= 'c6' />
4장의 카드 모양이 같은 경우
<img src= 'c3' /><img src= 'c6' /><img src= 'c13' /><img src= 'c1' />
5장의 카드 숫자가 이어지는 경우
<img src= 'c2' /><img src= 'd3' /><img src= 's4' /><img src= 'h5' /><img src= 'c6' />
4장의 카드 숫자가 이어지는 경우
<img src= 'd3' /><img src= 's4' /><img src= 'h5' /><img src= 'c6' />
본 게임의 최종 권한은 본 회사가 소유하고 있으며 문제가 있을 경우 아래의 연락처를 통해 고객센터에 문의해 주시기 바랍니다.
Email：support@coingame.com 
QQ：468631374
Kakao：Coingame Korea(https://pf.kakao.com/_Mirxnj)
Telegram：https://t.me/Coingame_official`,

};
