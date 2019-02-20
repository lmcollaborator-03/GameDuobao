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
매회 포카 한 벌 중에 조커를 제거하고 나머진 52장 카트를 게임에 사용합니다. 
：A&lt;2&lt;3&lt;4&lt;5&lt;6&lt;7&lt;8&lt;9&lt;10&lt;J&lt;Q&lt;K。
在“发牌”前，玩家先确认自己的游戏金额。
“发牌”后，玩家只有5秒的时间决定是否该局游戏“加倍”，5秒超时后，系统将默认玩家不加倍并自动发牌给玩家。
通常情况下，“拿牌”或“加倍”后，第三张牌点在前两张牌之间则获胜。
常规玩法：
前两张的牌差值不同，获胜后的赔率也是不同的
例：前两张是3和8，牌差值就是5，第三张是4/5/6/7，则获胜，其余则失败；
<img src= 'h3' /><img src= 's8' />
<img src= 's4' />/<img src= 'd5' />/<img src= 'h6' />/<img src= 's7' />
前两张是9和Q，牌差值就是3，第三张是10/J，则获胜，其余则失败；
<img src= 'd9' /><img src= 's12' />
<img src= 'h10' />/<img src= 's11' />
但牌差值5和3，获胜后的赔率是不同的，牌差值越小则赔率越高！最高25倍！
彩池玩法：
触发彩池玩法的条件如下：
前三张牌组成同花牌型；
<img src= 'd2' /><img src= 'd1' /><img src= 'd12' />
前三张牌有两张或三张牌点一样的牌型；
<img src= 'd2' /><img src= 's2' /><img src= 'h12' /> <img src= 'h13' /><img src= 's13' /><img src= 'd13' />
前两张的牌差值为2的牌型。
<img src= 'd4' /><img src= 'd6' /><img src= 'h8' />
彩池分奖比例：
投注额越多，分得彩池的奖励就越多！
5张同花顺最高得彩池的(彩池固定比+浮动比最大限制)
<img src= 'c2' /><img src= 'c3' /><img src= 'c4' /><img src= 'c5' /><img src= 'c6' /> <img src= 's7' /><img src= 's8' /><img src= 's9' /><img src= 's10' /><img src= 's11' />
4张同花顺最高得彩池的(彩池固定比+浮动比最大限制)
<img src= 'c3' /><img src= 'c4' /><img src= 'c5' /><img src= 'c6' /> <img src= 'h5' /><img src= 'h6' /><img src= 'h7' /><img src= 'h8' />
四条最高得彩池的(彩池固定比+浮动比最大限制)
<img src= 'h12' /><img src= 'c12' /><img src= 's12' /><img src= 'd12' /><img src= 'c3' />
葫芦最高得彩池的(彩池固定比+浮动比最大限制)
<img src= 'd2' /><img src= 's2' /><img src= 'h2' /><img src= 'h3' /><img src= 's3' />
5张同花最高得彩池的(彩池固定比+浮动比最大限制)
<img src= 'c12' /><img src= 'c9' /><img src= 'c4' /><img src= 'c2' /><img src= 'c6' />
4张同花最高得彩池的(彩池固定比+浮动比最大限制)
<img src= 'c3' /><img src= 'c6' /><img src= 'c13' /><img src= 'c1' />
5张顺子最高得彩池的(彩池固定比+浮动比最大限制)
<img src= 'c2' /><img src= 'd3' /><img src= 's4' /><img src= 'h5' /><img src= 'c6' />
4张顺子最高得彩池的(彩池固定比+浮动比最大限制)
<img src= 'd3' /><img src= 's4' /><img src= 'h5' /><img src= 'c6' />
官方拥有该游戏的最终解释权，如有疑问可通过以下方式联系客服：
Email：support@coingame.com 
QQ：468631374
Kakao：Coingame Korea(https://open.kakao.com/o/shleVM3)
Telegram：https://t.me/Coingame_official`,

};
