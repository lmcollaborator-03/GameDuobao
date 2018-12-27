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
    huodejiangli: "%{yonghuming}유저님, 축하합니다. 제%{ji}회 보물파기가 성공합니다, %{duoshao}상금을 획득하였습니다.",
    daojishi: "제%{ji}회 카운트다운：",
    yigoumai: "구입됨：%{ji}개 <img src='gaozih' />",
    shengyu: "남음：%{ji}개 <img src='gaozir' />",
    zhanghu: "계정：%{zhanghu}",
    zichan: "자산：%{zichan}",
    yonghu: "%{yonghuming}유저",
    huansuan: "<img src='gaozig' />≈%{jine}",
    wujilu: "기록 없음",
    dijiqi:"제%{ji}회",
    zican_gongxuci:"%{zican_etc}\n총%{ji}번",
    paomadeng:"%{yonghuming}유저님, 축하합니다. 제%{ji}회 보물파기가 성공합니다, %{qian_etc} 획득하였습니다.",
    // 往期记录
    kuangshanjiazhi:"광산 가치：%{qian_etc}",
    zhongjiangma: "당첨코드：%{zhongjiangma}",
    zhongjiangyonghu: "\n당첨회원：%{zhongjiangyonghu}",
    kaijiangshijian: "\n당첨발표시간：%{shijian}\n",
    duobaokaishishijian: "사작 시간：%{shijian}",
    duobaorenci: "\n인수：%{duoshao}인",
    qiuhe:"1、더하기 시스템：%{qiuhe}(해당 회 구매 기록 시간의 전환치를 모두 더합니다.)",
    gongzhengzhi:"\n2、공식 가격：%{gongzhengzhi}（BTC가격） 가격：$%{jiage}"+
                 "\nBTC가격 확인 시간：%{shijian}" +
                 "\nBTC시가 주소：https://coinmarketcap.com/",
    quyu:"\n3、여수：(%{qiuhe} + %{gongzhengzhi}) % 100 = %{quyu}",
    //喜提提示
    jingao: "금곡괭이를 파내기를 축하드립니다.",
    yingao: "은곡괭이를 파내기를 축하드립니다.",
    tonggao: "동곡괭이를 파내기를 축하드립니다.",
    tiegao: "철곡괭이를 파내기를 축하드립니다.",
    //购买弹层
    querengoumai: "%{querengoumai}개를 구입하겠습니까？",
    yueyichang:"계정 잔액이 비정상입니다. 다시 시도하거나 고겍센터를 연락하세요：support@coingame.com",
    yuebuzu: "잔액이 부족합니다. 총전해주세요.",
    koukuanshibai:"구매 실페하였습니다. 다시 시도하거나 고겍센터를 연락하세요：support@coingame.com",
    fenebuzhu:"곡괭이가 부족합니다. 다시 구매해주세요",
    goumaiwan:"이번 회에 참여 마감됩니다. 당첨발표 및 다음 회를 기다려주십시오.",
    yijieshu:"이번 회는 마감되었습니다.",
    chakanjilu:'아래 쪽에서 구매기록을 확인할 수 있습니다.”',
    chexiaoduobao:"이번 회 보물파기를 폐지하였습니다. 환불은 자산센터에서 확인해주세요.",
    yonghuhuode:"<color=#FFEB00>%{username}</color> 획득",
    zhongjiangmt:"당첨코드：<color=#FFFF00>%{zhongjiangmt}</color>",
    //提示
    fuzhichenggong: "복사 성공하였습니다!",
    fuzhishibai: "죄송합니다. 복사 실페하였습니다!",
    denglu:"오른 쪽 상단에서 로그인 하세요!",
    fenebuzhuchao:"남은 곡괭이가 부족합니다!",
    wangluo: "네크워크 오류가 발생하였습니다. 다시 확인해주세요.",
    wangluolianjie: "네크워크 오류가 발생하였습니다.다시 시도해주세요.",
    
    // ui 中设置
    // main
    xiayiqi:"다음\n一\n회",
    anniu_lijizhifu: "지불하기",
    anniu_tibi: "코인출금",
    anniu_fuzhi: "복사하기",
    zhanghuchongzhi: "회원님의 지갑 주소:",
    benqijilu: "이번 회 보물파기 기록",
    xianshiquanbu: "전체 보기",
    wodexingyunma: "나의 행운코드",
    wangqijilu: "기록 >",
    chakangengduo: "더보기",
    //按钮
    anniu_1: "획인",
    anniu_2: "취소",
    //新手引导
    yindao_1: "보물파기",
    yindao_11: "행운자는 광산을 독점합니다.",
    yindao_2: "매회 보물파기 광산 및 카운트다운",
    yindao_3: "주소에 입금하고 곡괭이를 구매합니다.",
    yindao_32: "제1회 카운트다운 20:20:20",
    yindao_4: "곡괭이를 많을 수록 상금을 독차지할 기회가 큽니다.",
    yindao_5: "매회 채굴 기록이 여기에 있습니다.",
    yindao_55: "<img src='gaozig' />≈0.01 ETC",
    yindao_6: "게임규칙, 회워가입, 및 로그인은 여기에 클릭하세요.",
    yindao_xiayibu: "다음",
    yindao_kaishi: "채굴 시작하기",
    yindao_tuichu: "가이드 나가기",
    yindao_guanwang: "홈페이지",
    yindao_login:"회원가입/로그인",
    yindao_android:"안드로이드",
    yindao_yuyan:"언어",
    // 维护
    weihuzhong:"게임 시스템 점검 중입니다. 잠시 후 다시 시도해보세요.",

    // 夺宝规则
    guizewenzi:`<color=#E2E7FE><size=30>보물파기 규칙:</size></color>
    1、플랫폼에서 회원가입을 하시는 유저만 참여할 수 있습니다.
    2、매회마다 보상풀에 한 화폐 종류만을 생성할 수 있으니, 반드시 해당 화폐 종류로 구매해야 합니다.
    3、푸리 회의 보물파기는 구매 제한이 있습니다.
    4、구매 시 행운 코드를 임의의 획득할 겁니다.
    5、참여인수가 최대수에 도착할 때 행운코드를 공시하고 당첨자를 발표할 것입니다. 행운코드를 가지는 유저가 보상을 획득합니다.
    6、플랫폼은 보상에서 일정 비율의 금액을 서비스비로 받을 것입니다.
    7、플랫폼은 이 게임의 최종 해석권이 있습니다. 질문이 있으면 고객서비스 이메일로( support@coingame.com) 문의하십시오.
    
    <color=#E2E7FE><size=30>행운코드 규칙:</size></color>
    1、행운코드의 수치 범위는 [10001,10000+최대 참여 인수]이고 구매 시 행운코드를 임의의 획득할 겁니다.
    2、구매하는 시간의 시, 분, 초, 밀리 초에 따라 코드를 생성하는 것입니다. (예: 08:32:25:672---083225672)
    3、해당 보상풀에 구매 시간의 전환치를 모두 더하고 A로 기록합니다.
    4、마지막 구매 시간에 (초까지) 실시간 비트코인 달러 가격으로(소수점 후 두 자리까지) 전환치를 B로 기록합니다. (예: 1BTC=$4890.41---489041
    5、나머지 숫자 시스템,（A+B）% 최대 참여 인수= C（여수）.
    6、최종 당첨 행운코드=10001+C.`,

    benqicepan:"本期撤盘",
    benqishuzijieguo:"取本期数值结果得",
    duobaojiluUI:"夺宝记录",
    riqi:"日期",
    shijian:"时间",
    shujuzhuanhuan: "数据转换",
    yonghu:"用户",
    xingyunma:"幸运码",
};
