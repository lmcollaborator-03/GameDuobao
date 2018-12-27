'use strict';

if (!window.i18n) {
    window.i18n = {};
}

if (!window.i18n.languages) {
    window.i18n.languages = {};
}

window.i18n.languages['en'] = {
    /////////////////////////////////////////////////////////////////////////////
    /////////// 请注意 翻译部分 %{xxx} \n <img src='' /> 等 要留意一下 //////////////
    /////////////////////////////////////////////////////////////////////////////

    //  主游戏
    huodejiangli: "Congratulation to user%{yonghuming}Treasure Hunting NO.%{ji} mission completed successfully! You will be awarded%{duoshao}",
    daojishi: "No.%{ji} Countdown：",
    yigoumai: "Purchased：%{ji} <img src='gaozih' />",
    shengyu: "Leftover：%{ji}个 <img src='gaozir' />",
    zhanghu: "Account：%{zhanghu}",
    zichan: "Asset：%{zichan}",
    yonghu: "User%{yonghuming}",
    huansuan: "个<img src='gaozig' />≈%{jine}",
    wujilu: "No Record",
    dijiqi:"No.%{ji}",
    zican_gongxuci:"%{zican_etc}\n%{ji}次",
    paomadeng:"Congratulation to user%{yonghu}Treasure Hunting NO.%{ji} mission completed successfully! You will be awarded%{qian_etc}ETC",
    // 往期记录
    kuangshanjiazhi:"Mining value：%{qian_etc}",
    zhongjiangma: "The winning number is：%{zhongjiangma}",
    zhongjiangyonghu: "\Winner：%{zhongjiangyonghu}",
    kaijiangshijian: "\Lucky Draw Time ：%{shijian}\n",
    duobaokaishishijian: "Start Time of Treasure Hunt：%{shijian}",
    duobaorenci: "\nTotal Number：%{duoshao}人次",
    qiuhe:"1、Sum up：%{qiuhe}(During the period of Treasure Hunt the total value of purchasing time )",
    gongzhengzhi:"\n2、Notarization Value：%{gongzhengzhi}（BTC Price） Price：$%{jiage}"+
                 "\nBTC Price Taken Time：%{shijian}" +
                 "\nBTC Market Price Address：https://coinmarketcap.com/",
    quyu:"\n3、Remainder：(%{qiuhe} + %{gongzhengzhi}) % 100 = %{quyu}",
    //喜提提示
    jingao: "Congratulations to get a goden pick",
    yingao: "Congratulations to get a silver pick",
    tonggao: "Congratulations to get a copper pick",
    tiegao: "Congratulations to get a iron pick",
    //购买弹层
    querengoumai: "Are you sure to purchase%{querengoumai}？",
    yueyichang:"Account balance is abnormal, please try again or contact customer service：support@coingame.com",
    yuebuzu: "The balance is insufficient, please recharge it immediatelly",
    koukuanshibai:"The deduction failed, please repurchase or contact the customer service：support@coingame.com",
    fenebuzhu:"The number of remaining shares is insufficient, please buy again",
    goumaiwan:"This session is full, please pay attention to lucky draw or participate it next time",
    yijieshu:"It's end",
    chakanjilu:'You can view the purchase record below”',
    chexiaoduobao:"This issue of Treasure Hunt has been cancelled, the purchase amount will be returned, please pay attention to the asset center",
    yonghuhuode:"<color=#FFEB00>%{username}</color> Award",
    zhongjiangma:"Lucky Number：<color=#FFFF00>%{zhongjiangma}</color>",
    //提示
    fuzhichenggong: "Copy Success！",
    fuzhishibai: "Sorry！Copy Failed！",
    denglu:"Please click the upper-right menu to log in！",
    fenebuzhuchao:"The number of remaining shares has exceeded",
    wangluo: "The current network is unavailable, please check your network connection",
    wangluolianjie: "The current network is unavailable, please try reconnecting",
    
    // ui 中设置
    // main
    xiayiqi:"Next\n一\n Issue",
    anniu_lijizhifu: "Pay Immediate",
    anniu_tibi: "Withdrawl",
    anniu_fuzhi: "Copy",
    zhanghuchongzhi: "Recharge Account:",
    benqijilu: "Game Record",
    xianshiquanbu: "Show All",
    wodexingyunma: "My lucky Number",
    wangqijilu: "Previous Records >",
    chakangengduo: "check more",
    //按钮
    anniu_1: "Confirm",
    anniu_2: "Cancel",
    //新手引导
    yindao_1: "Treasure Hunt",
    yindao_11: "The lucky ones will win the whole pool",
    yindao_2: "Each Treasure Hunt Mining and mining countdown",
    yindao_3: "Recharge the address to purchase mining tools",
    yindao_32: "Issue No.1 Countdown 20:20:20",
    yindao_4: "More mining tools will have a better chance to win prizes alone",
    yindao_5: "Show up every mining record here",
    yindao_55: "<img src='gaozig' />≈0.01 ETC",
    yindao_6: "Game Rules、Registration、Log in, please click here",
    yindao_xiayibu: "Next",
    yindao_kaishi: "Start your Hunting Game",
    yindao_tuichu: "Exit",
    yindao_guanwang: "Main Page",
    yindao_login:"Register/Login",
    yindao_android:"Android Entering ",
    yindao_yuyan:"Language",
    // 维护
    weihuzhong:"Game maintenance, please try again later",

    // 夺宝规则
    guizewenzi:`<color=#E2E7FE><size=30>Treasure Hunt Rules:：</size></color>
    1、Only registered players on the platform can participate the game ;
    2、Each issue will generate only one prize fund in only one type of the currency, and players must use the corresponding currency to participate the game;
    3、During the free period of game, number of shares of each player to buy will be limited;
    4、A random lucky number will be given in each purchase for the Lucky Number Draw ;
    5、When the number of participants reaches the limit, the winning number will be announced. If you've managed to match the lucky draw, then all you need to do is get in touch to start the claim award process!
    6、The company will charge a certain amount of the reward as our service fee;
    7、The company reserves the right of final decision and interpretation in the game. If you have any questions, please contact the official customer service: support@coingame.org
    
    <color=#E2E7FE><size=30>Lucky Number Draw：</size></color>
    1、All lucky numbers in the range [10001,10000+ maximum number of participants], each of which will get a lucky number;
    2、Turn the purchasing time, minute, second and millisecond into the value, i.e. 08:32:25.672, which is 083225672.
    3、Sum up the converted value, which is denoted as A.
    4、Based on the last purchase time, which will be automatically taken as the current exchange rate to get the right amount of USD from 1BTC at that moment(accurate to seconds). Take the integer part and 2 decimal digits and convert them into numerical value. For example: 1BTC=4890.41 USD, we take integer part and 2 decimal digits and convert them into 489041, which is denoted as B.
    5、Compute the remainder, (A+B) % maximum number of participants =C (remainder);
    6、The final winning number=10001+C；`,
};

