'use strict';

if (!window.i18n) {
    window.i18n = {};
}

if (!window.i18n.languages) {
    window.i18n.languages = {};
}

window.i18n.languages['ja'] = {
    /////////////////////////////////////////////////////////////////////////////
    /////////// 请注意 翻译部分 %{xxx} \n <img src='' /> 等 要留意一下 //////////////
    /////////////////////////////////////////////////////////////////////////////

    //  主游戏
    zhanghu: "账户：%{zhanghu}",
    zichan: "资产：%{zichan}",
    wujilu: "暂无记录",
    fapai:"发牌",
    napai:"拿牌",
    jiabei:"加倍",
    zhanghuchongzhi:"账户充值地址：\n",
    fuzhi:"复制",

    //购买弹层
    wuzige:"没有参与游戏的资格",
    chaochushangxin:"本次游戏您已达到参与上限",
    yueyichang:"账号余额异常，请重新尝试或联系客服：support@coingame.com",
    yuebuzu: "余额不足，请立即充值。",
    koukuanshibai:"扣款失败，请重新购买或联系客服：support@coingame.com",
    fenebuzhu:"该币种剩余份数不够",
    yijieshu:"本期已结束。",
    fanjiangyichang:"获取币种价格异常，请联系客服：support@coingame.com",
    fanjiangshibai:"返奖失败，请联系客服：support@coingame.com",
    xitiyichang:"系统异常，请联系客服：support@coingame.com",
    //提示
    fuzhichenggong: "复制成功！",
    fuzhishibai: "抱歉！复制失败！",
    wangluo: "当前网络不可用，请检查网络连接是否正常。",
    wangluolianjie: "当前网络异常！您可以尝试重新连接",
    zaijiezaili:"再接再厉",
    henyihan:"很遗憾",
    gongxinin:"恭喜您",
    
    // ui 中设置
    // main
    anniu_tibi: "提币",
    anniu_chongzhi: "充值",
    benqijilu: "中奖纪录",
    chakangengduo: "查看更多",
    riqi:"日期",
    yonghu:"用户",
    touzhu:"投注",
    beishu:"倍数",
    shouyi:"收益",
    //按钮
    anniu_1: "确认",
    anniu_2: "取消",
    //新手引导
    yindao_guanwang: "官网",
    yindao_login:"注册/登录",
    yindao_android:"安卓客户端",
    yindao_yuyan:"语言",
    yindao_logout:"退出/切换账号",
    yindao_music:"声音",
    yindao_help:"帮助",
    // 维护
    weihuzhong:"游戏维护中，请稍后重试 ",

    // 记录
    riqi:"日期",
    // shijian:"时间<color=#FFFFFF>(UTC0)</color>",
    yonghu:"用户",

    // 排行榜
    wodetouzhu:"我的投注：%{tou}",
    wodepaiming:"我的排名：%{paiming}",
    paihangbang:"排行榜",
    paiming:"排名",
    yonghuming:"用户名",
    touzhue:"投注额",
    wodezhanji:"我的战绩",
    caichijilu:"彩池记录",
    shijian:"时间",
    jiangli:"奖励",
    fenlei:"分类",
    paimian:"牌面",
    toubijine:"当前投币金额：%{jine}",

    // 规则
    guizewenzi:`帮助页内容：
规则：
每次游戏都是用一副扑克，去掉大小王，共计52张牌。
牌点大小：A&lt;2&lt;3&lt;4&lt;5&lt;6&lt;7&lt;8&lt;9&lt;10&lt;J&lt;Q&lt;K。
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