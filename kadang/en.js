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
    zhanghu: "Account: %{zhanghu}",
    zichan: "Assets: %{zichan}",
    wujilu: "No records",
    fapai:"Deal",
    napai:"Draw",
    jiabei:"Double",
    zhanghuchongzhi:"Deposit Address: \n",
    fuzhi:"Copy",

    //购买弹层
    wuzige:"没有参与游戏的资格",
    chaochushangxin:"本次游戏您已达到参与上限",
    yueyichang:"Account balance error. Please try again or contact: support@coingame.com",
    yuebuzu: "Insufficient balance. Please deposit more.",
    koukuanshibai:"Failed to pay. Please place the bet again or contact: support@coingame.com",
    fenebuzhu:"该币种剩余份数不够",
    yijieshu:"本期已结束。",
    fanjiangyichang:"Error with getting currency prices. Please contact:support@coingame.com",
    fanjiangshibai:"Failed to send the payout. Please contact: support@coingame.com",
    xitiyichang:"System exception. Please contact: support@coingame.com",
    //提示
    fuzhichenggong: "Copied",
    fuzhishibai: "Failed to copy",
    wangluo: "Network unavailable. Please check your network connection.",
    wangluolianjie: "Network error. You may try to connect again.",
    zaijiezaili:"Better luck next time",
    henyihan:"You Lose",
    gongxinin:"Congratulations!",
    
    // ui 中设置
    // main
    anniu_tibi: "Withdraw",
    anniu_chongzhi: "Deposit",
    benqijilu: "Game Records",
    chakangengduo: "View More",
    riqi:"Date",
    yonghu:"Player",
    touzhu:"Place a Bet",
    beishu:"Multiple",
    shouyi:"Payout",
    //按钮
    anniu_1: "Confirm",
    anniu_2: "Cancel",
    //新手引导
    yindao_guanwang: "Official Site",
    yindao_login:"Register / Log In",
    yindao_android:"Android App",
    yindao_yuyan:"Languages",
    yindao_logout:"Exit / Log Out",
    yindao_music:"Sound",
    yindao_help:"Support",
    // 维护
    weihuzhong:"The game is under maintenance. Please come back later.",

    // 记录
    riqi:"Date",
    // shijian:"时间<color=#FFFFFF>(UTC0)</color>",
    yonghu:"Player",

    // 排行榜
    wodetouzhu:"My Bets: %{tou}",
    wodepaiming:"My Rank: %{paiming}",
    paihangbang:"Ranking",
    paiming:"Rank",
    yonghuming:"Username",
    touzhue:"Bets",
    wodezhanji:"My",
    caichijilu:"Pool",
    shijian:"Time",
    jiangli:"Payout",
    fenlei:"Payout",
    paimian:"Suits",
    toubijine:"Current Bet Amount: %{jine}",

    // 规则
    guizewenzi:`帮助页内容：
How to Play:
The game starts each round with one deck of cards without the Jokers, which is 52 cards in total.
Card Ranking: Ace &lt; 2 &lt; 3 &lt; 4 &lt; 5 &lt; 6 &lt; 7 &lt; 8 &lt; 9 &lt; 10 &lt; Jack &lt; Queen &lt; King.
The bet amount should be confirmed before hitting “Deal”.
By hitting “Deal”, the player will only have 5 seconds to decide to “Double” the bet amount of the round or not. After the 5 seconds, the system will deal the cards automatically without doubling by default.
In general, after hitting “Draw” or “Double”, if the new card ranks between the two cards before it, the player wins.
Basic Rules:
The difference between the first two cards determines the winning bonus of the round.
E.g.: The first two cards are 3 and 8, which means the difference is 5. When the third card lies among 4 / 5 / 6 / 7, the player wins. Otherwise, the game is lost.
<img src= 'h3' /><img src= 's8' />
<img src= 's4' />/<img src= 'd5' />/<img src= 'h6' />/<img src= 's7' />
The first two cards are 9 and Queen, which means the difference is 3. When the third card is 10 or Jack, the player wins. Otherwise, the game is lost.
<img src= 'd9' /><img src= 's12' />
<img src= 'h10' />/<img src= 's11' />
However, the winning bonuses will be different when the difference is 5 or 3. The smaller the difference is, the higher winning bonus there will be! Up to 25 times!
Prize Pool Rules:
The trigger conditions of the prize pool are as below:
The first three cards are of the same suit.
<img src= 'd2' /><img src= 'd1' /><img src= 'd12' />
There are two or three cards of the same rank in the first three cards.
<img src= 'd2' /><img src= 's2' /><img src= 'h12' /> <img src= 'h13' /><img src= 's13' /><img src= 'd13' />
The difference between the first two cards is 2.
<img src= 'd4' /><img src= 'd6' /><img src= 'h8' />
Payout Ratio of Prize Pool:
The higher bet amount, the more payout will be earned from the prize pool. 
5-card Straight Flush: (彩池固定比+浮动比最大限制) of the pool
<img src= 'c2' /><img src= 'c3' /><img src= 'c4' /><img src= 'c5' /><img src= 'c6' /> <img src= 's7' /><img src= 's8' /><img src= 's9' /><img src= 's10' /><img src= 's11' />
4-card Straight Flush: (彩池固定比+浮动比最大限制) of the pool
<img src= 'c3' /><img src= 'c4' /><img src= 'c5' /><img src= 'c6' /> <img src= 'h5' /><img src= 'h6' /><img src= 'h7' /><img src= 'h8' />
Four of a Kind: (彩池固定比+浮动比最大限制) of the pool
<img src= 'h12' /><img src= 'c12' /><img src= 's12' /><img src= 'd12' /><img src= 'c3' />
Full House: (彩池固定比+浮动比最大限制) of the pool
<img src= 'd2' /><img src= 's2' /><img src= 'h2' /><img src= 'h3' /><img src= 's3' />
5-card Flush: (彩池固定比+浮动比最大限制) of the pool
<img src= 'c12' /><img src= 'c9' /><img src= 'c4' /><img src= 'c2' /><img src= 'c6' />
4-card Flush: (彩池固定比+浮动比最大限制) of the pool
<img src= 'c3' /><img src= 'c6' /><img src= 'c13' /><img src= 'c1' />
5-card Straight: (彩池固定比+浮动比最大限制) of the pool
<img src= 'c2' /><img src= 'd3' /><img src= 's4' /><img src= 'h5' /><img src= 'c6' />
4-card Straight: (彩池固定比+浮动比最大限制) of the pool
<img src= 'd3' /><img src= 's4' /><img src= 'h5' /><img src= 'c6' />
Coingame reserves the final interpretation of the game. Any queries please contact:
Email：support@coingame.com
QQ: 468631374
Kakao: Coingame Korea (https://open.kakao.com/o/shleVM3)
Telegram: https://t.me/Coingame_official`,

};
