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
    zican_gongxuci:"%{zican_etc}\n共需%{ji}次",
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