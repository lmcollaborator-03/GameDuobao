'use strict';

if (!window.i18n) {
    window.i18n = {};
}

if (!window.i18n.languages) {
    window.i18n.languages = {};
}

window.i18n.languages['cn'] = {
    /////////////////////////////////////////////////////////////////////////////
    /////////// 请注意 翻译部分 %{xxx} \n <img src='' /> 等 要留意一下 //////////////
    /////////////////////////////////////////////////////////////////////////////

    //  主游戏
    huodejiangli: "恭喜用户%{yonghuming}成功夺宝第%{ji}期,获得%{duoshao}奖励",
    daojishi: "第%{ji}期 倒计时：",
    yigoumai: "已购买：%{ji}个 <img src='gaozih' />",
    shengyu: "剩余：%{ji}个 <img src='gaozir' />",
    zhanghu: "账户：%{zhanghu}",
    zichan: "资产：%{zichan}",
    yonghu: "用户%{yonghuming}",
    huansuan: "个<img src='gaozig' />≈%{jine}",
    wujilu: "暂无记录",
    dijiqi:"第%{ji}期",
    zican_gongxuci:"<size=35>%{zican_etc}</size>\n共需%{ji}次",
    paomadeng:"恭喜用户%{yonghu}成功夺宝第%{ji}期，获得%{qian_etc}奖励",
    // 往期记录
    kuangshanjiazhi:"矿山价值：%{qian_etc}",
    zhongjiangma: "中奖码：%{zhongjiangma}",
    zhongjiangyonghu: "\n中奖用户：%{zhongjiangyonghu}",
    kaijiangshijian: "\n开奖时间：%{shijian}\n",
    duobaokaishishijian: "夺宝开始时间：%{shijian}",
    duobaorenci: "\n夺宝人次：%{duoshao}人次",
    qiuhe:"1、求和：%{qiuhe}(本期夺宝购买记录时间取值相加之和)",
    gongzhengzhi:"\n2、公证值：%{gongzhengzhi}（BTC价格） 价格：$%{jiage}"+
                 "\nBTC价格调取时间：%{shijian}" +
                 "\nBTC市场价格地址：https://coinmarketcap.com/",
    quyu:"\n3、取余：(%{qiuhe} + %{gongzhengzhi}) % 100 = %{quyu}",
    //喜提提示
    jingao: "喜提一把金镐",
    yingao: "喜提一把银镐",
    tonggao: "喜提一把铜镐",
    tiegao: "喜提一把铁镐",
    //购买弹层
    querengoumai: "确定要购买%{querengoumai}份吗？",
    yueyichang:"账号余额异常，请重新尝试或联系客服：support@coingame.com",
    yuebuzu: "余额不足，请立即充值。",
    koukuanshibai:"扣款失败，请重新购买或联系客服：support@coingame.com",
    fenebuzhu:"剩余份数不足，请重新购买。",
    goumaiwan:"本期参与人次已满，请留意开奖或参与下期夺宝。",
    yijieshu:"本期已结束。",
    chakanjilu:'您可在下方查看“购买记录”',
    chexiaoduobao:"本期夺宝已撤销，购买金额将返还，请留意资产中心。",
    yonghuhuode:"<color=#FFEB00>%{username}</color> 获得",
    zhongjiangmt:"中奖码：<color=#FFFF00>%{zhongjiangmt}</color>",
    //提示
    fuzhichenggong: "复制成功！",
    fuzhishibai: "抱歉！复制失败！",
    denglu:"请点击右上角菜单登陆！",
    fenebuzhuchao:"已超过剩余份数",
    wangluo: "当前网络不可用，请检查网络连接是否正常。",
    wangluolianjie: "当前网络异常！您可以尝试重新连接",
    
    // ui 中设置
    // main
    xiayiqi:"下\n一\n期",
    anniu_lijizhifu: "立即支付",
    anniu_tibi: "提币",
    anniu_fuzhi: "复制",
    zhanghuchongzhi: "账户充值:",
    benqijilu: "本期夺宝记录",
    xianshiquanbu: "显示全部",
    wodexingyunma: "我的幸运码",
    wangqijilu: "往期记录 >",
    chakangengduo: "查看更多",
    //按钮
    anniu_1: "确认",
    anniu_2: "取消",
    //新手引导
    yindao_1: "挖矿夺宝",
    yindao_11: "幸运者将独揽整个矿池",
    yindao_2: "每期夺宝矿池及挖矿倒计时",
    yindao_3: "向地址充值用以购买挖矿工具",
    yindao_32: "第1期 倒计时 20:20:20",
    yindao_4: "更多挖矿工具将有更大机会独揽奖励",
    yindao_5: "每次的挖矿将记录在这里",
    yindao_55: "个<img src='gaozig' />≈0.01 ETC",
    yindao_6: "游戏规则、注册、登录请点这里",
    yindao_xiayibu: "下一步",
    yindao_kaishi: "开始夺宝之旅",
    yindao_tuichu: "退出引导",
    yindao_guanwang: "官网",
    yindao_login:"注册/登录",
    yindao_android:"安卓客户端",
    yindao_yuyan:"语言",
    // 维护
    weihuzhong:"游戏维护中，请稍后重试",

    // 夺宝规则
    guizewenzi:`<color=#E2E7FE><size=30>夺宝规则：</size></color>
1、只能是平台注册用户才能参与夺宝；
2、每期只会生成一个币种的奖池，必须用对应奖池的币种参与购买；
3、免费期的夺宝会限制每人购买的份数；
4、每购买一份都会随机获得一个幸运码；
5、参与人次达到最大时，奖池开奖并公布中奖的幸运码，拥有中奖幸运码的用户获得奖励；
6、官方会从奖励中收取一定比例的金额作为服务费；
7、官方拥有该游戏的最终解释权。如有任何疑问请联系官方客服:
Email：support@coingame.com 
QQ：468631374
Kakao：Coingame Korea
（<u click="clickme1" >https://open.kakao.com/o/shleVM3</u>）
Telegram：<u click="clickme2" >https://t.me/Coingame_official</u>

<color=#E2E7FE><size=30>幸运码规则：</size></color>
1、幸运码的取值范围[10001,10000+最大参与人次]，每份都会拥有一个幸运码；
2、将每份购买的时间取时、分、秒、毫秒，转化为数值，例08:32:25.672，转化得083225672；
3、求和该奖池所有的购买时间的转化值，记作A；
4、以最后一份购买的时间，即时获取当前时间（精确至秒）1BTC对应的美元值，取整数位及2位小数并转化为数值，例如：对应1BTC=4890.41美元，取小数点后2位并转化得489041，记作B；
5、取余，（A+B）%最大参与人次=C（余数）；
6、最终的中奖幸运码=10001+C；`,

    benqicepan:"本期撤盘",
    benqishuzijieguo:"取本期数值结果得",
    duobaojiluUI:"夺宝记录",
    riqi:"日期",
    shijian:"时间",
    shujuzhuanhuan: "数据转换",
    yonghu:"用户",
    xingyunma:"幸运码",
};