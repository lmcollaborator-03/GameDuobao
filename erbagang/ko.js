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
kaishila:"开始啦",

//  主游戏
zongtouzhu:"总：%{zongtouzhu}",
wotouzhu:"我：%{wotouzhu}",
zichan: "资产：%{zichan}",
zhunbeijin:"准备金：%{zhunbeijin}",
yuebuzu: "余额不足，请立即充值。",
touzhu:"当前可投注：%{touzhu}",
denglu:"请点击右上角菜单登录！",
tuichuliebiao:"退出列表",
kanzhuangliebiao:"上庄列表",
szshibai:"申请上庄失败",
szchenggong:"申请上庄成功",
xzchenggong:"申请下庄成功",
shangzhuang:"上庄",
xuanzhong:"选中状态设置必须大于0",
zbjinshangxian:"游戏准备金不能小于上庄限额%{zbjinshangxian}",
dengdai:"等待下一轮开始...", // 记得加上...
jipai:"记牌",
jihaozhuo:"%{jihaozhuo}号桌", // x号桌

zhanghu: "账户：%{zhanghu}",
wujilu: "暂无记录",
paomadeng:"恭喜用户%{yonghu}投注%{beishu}倍，获得%{etcjiang}奖励",

// 操盘
paixu:"排序",
yonghu:"用户",
jine:"金额",
jineZhushi:"* 金额高的排序在前",
qian1lun:"前1轮",
qian1lun:"前2轮",
qian1lun:"前3轮",
qian1lun:"前4轮",
qian1lun:"前5轮",
shenglv:"胜率",
shenglvZhushi:"* 胜率根据近100局的胜负统计",
zhuang:"庄",
// 坐庄
shezhijine:"设定庄家上庄金额",
zidongbuzu:"自动补足坐庄金额", // 自动补足坐庄金额 xx 次 翻译的时候注意一下是放在下面还是上面
zidongbuzuci:"次",// 自动补足坐庄金额 xx 次 翻译的时候注意一下是放在下面还是上面
zuozhuangzhushi:"* 操盘金额不足时，系统自动扣除您的余额并补足操盘金额",
// 结算
jiesuantou:"本局收益前五名",
lianzhuang:"连庄",
xiazhuang:"下庄",

//购买弹层
yueyichang:"账号余额异常，请重新尝试或联系客服：support@coingame.com",
koukuanshibai:"扣款失败，请重新购买或联系客服：support@coingame.com",
zhunbeijinbuzu:"庄家准备金不足",
kaijiangshibai:"开奖失败，请联系客服：support@coingame.com",
youxizhong:"开奖中不能投币",

//提示
wangluo: "当前网络不可用，请检查网络连接是否正常。",
wangluolianjie: "当前网络异常！您可以尝试重新连接",

// ui 中设置
// main
anniu_tibi: "提币",
anniu_chongzhi: "充值",
//按钮
anniu_1: "确认",
anniu_2: "取消",
//新手引导
yindao_guanwang: "官网",
yindao_login:"注册/登录",
yindao_android:"安卓客户端",
yindao_yuyan:"Languages",
yindao_logout:"退出/切换账号",
yindao_music:"声音",
yindao_help:"帮助",
yindao_rank:"排行榜",
// 维护
weihuzhong:"游戏维护中，请稍后重试 ",

// 夺宝规则
guizewenzi:`基本规则:
入座以后，玩家在投币时间内将游戏币投在投币区域。
玩家拥有的游戏币大于一定数额即能申请上庄。
游戏开始后，每个位置会获得2张牌，翻牌后庄家和其他位置逐一比对结算胜负

麻将牌点数说明:
游戏使用麻将的1-9筒和白板，计为1-10点。点数总和超过10点，则只算个位数。
牌型大小：豹子&gt;天杠&gt;9点&gt;8点&gt;7点&gt;6点&gt;5点&gt;4点&gt;3点&gt;2点&gt;1点&gt;0点
豹子：2张一样的牌称为豹子，白板豹子最大。
天杠：2筒+8筒。
比较规则：首先比较牌型大小，如遇牌型或点数相同则比较2张麻将牌中点数较大的牌，如9+2=1点&gt;8+3=1点。
若点数和牌型完全一致，庄家失败。

详细牌型:
豹子牌型:
豹子牌型为本游戏中的最大牌型，豹子中单张牌的大小决定豹子的大小，一对白板最大。

单点牌型:
除了豹子和天杠外，其余为点数牌，其大小取决于两张牌的总和的个位数大小，其次则是单张牌的大小。

天杠牌型:
一个2筒+一个8筒组成了天杠，该牌型小于任何豹子，但大于任意点数牌型。

官方拥有该游戏的最终解释权。如有任何疑问请联系官方客服:
Email：support@coingame.com 
QQ：468631374
Kakao：Coingame Korea
（<u click="clickme1" >https://open.kakao.com/o/shleVM3</u>）
Telegram：<u click="clickme2" >https://t.me/Coingame_official</u>
`,
};