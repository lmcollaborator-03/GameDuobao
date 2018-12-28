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
    huodejiangli: "ユーザーの%{yonghuming}さんは第%{ji}回の宝探しの当選者となり、%{duoshao}の賞金を獲得",
    daojishi: "第%{ji}回 カウントダウン：",
    yigoumai: "購入：%{ji} <img src='gaozih' />",
    shengyu: "残高：%{ji} <img src='gaozir' />",
    zhanghu: "アカウント：%{zhanghu}",
    zichan: "資産：%{zichan}",
    yonghu: "ユーザー%{yonghuming}",
    huansuan: "<img src='gaozig' />≈%{jine}",
    wujilu: "記録なし",
    dijiqi: "第%{ji}回",
    zican_gongxuci: "<size=35>%{zican_etc}</size>\n総回数：%{ji}",
    paomadeng: "ユーザーの%{yonghu}さんは第%{ji}回の宝探しの当選者となり、%{qian_etc}の賞金を獲得",
    // 往期记录
    kuangshanjiazhi: "鉱山の価値：%{qian_etc}",
    zhongjiangma: "当選番号：%{zhongjiangma}",
    zhongjiangyonghu: "\n当選者：%{zhongjiangyonghu}",
    kaijiangshijian: "\n結果発表：%{shijian}\n",
    duobaokaishishijian: "開始時刻：%{shijian}",
    duobaorenci: "\n採掘回数：%{duoshao}回",
    qiuhe: "1、足し算：%{qiuhe}(今回のすべての購入時間の換算値の合計)",
    gongzhengzhi: "\n2、公正価値：%{gongzhengzhi}（BTC価格） 価格：$%{jiage}" +
        "\nBTC価格を採用する時刻：%{shijian}" +
        "\nBTC市場価格：https://coinmarketcap.com/",
    quyu: "\n3、余りを求め：(%{qiuhe} + %{gongzhengzhi}) % 100 = %{quyu}",
    //喜提提示
    jingao: "金のつるはしをGET",
    yingao: "銀のつるはしをGET",
    tonggao: "銅のつるはしをGET",
    tiegao: "鉄のつるはしをGET",
    //购买弹层
    querengoumai: "%{querengoumai}本を購入しますか？",
    yueyichang: "残高が異常値なので、再読み込みして、またはカスタマーサポートまでご連絡ください：support@coingame.com",
    yuebuzu: "残高不足なので、すぐチャージしてください",
    koukuanshibai: "決済失敗、再購入して、またはカスタマーサポートまでご連絡ください：support@coingame.com",
    fenebuzhu: "つるはし不足なので、再購入してください。",
    goumaiwan: "採掘総回数に到達し、結果発表をお楽しみください。",
    yijieshu: "今回の宝探しは終了。",
    chakanjilu: '您可在下方查看“购买记录”',
    chexiaoduobao: "今回の宝探しはキャンセルされました。これから返金するので、資産センターにご注意ください。",
    yonghuhuode: "<color=#FFEB00>%{username}</color> 獲得",
    zhongjiangmt: "当選番号：<color=#FFFF00>%{zhongjiangmt}</color>",
    //提示
    fuzhichenggong: "コピー完了！",
    fuzhishibai: "申し訳ございません！コピー失敗！",
    denglu: "右上にあるボタンをクリックしてログイン！",
    fenebuzhuchao: "つるはし不足",
    wangluo: "ネットワークに接続できません。ネットワークへの接続状態をご確認ください。",
    wangluolianjie: "ネットワークへの接続に問題があり、もう一度接続をお試しください。",

    // ui 中设置
    // main
    xiayiqi: "\n次\n回\n",
    anniu_lijizhifu: "支払う",
    anniu_tibi: "出金",
    anniu_fuzhi: "コピー",
    zhanghuchongzhi: "チャージ:",
    benqijilu: "今回の宝探し記録",
    xianshiquanbu: "すべてを表示",
    wodexingyunma: "私の幸運番号",
    wangqijilu: "過去の宝探し >",
    chakangengduo: "もっと見る",
    //按钮
    anniu_1: "確認",
    anniu_2: "キャンセル",
    //新手引导
    yindao_1: "宝探し",
    yindao_11: "当選者は鉱山を独り占め",
    yindao_2: "毎回の鉱山およびカウントダウン",
    yindao_3: "アドレスにチャージして、つるはしを購入",
    yindao_32: "第1回 カウントダウン 20:20:20",
    yindao_4: "つるはしが多ければ、鉱山を独り占めの可能性が高い",
    yindao_5: "すべての採掘記録はこちら",
    yindao_55: "<img src='gaozig' />≈0.01 ETC",
    yindao_6: "こちらからルールをチェック、または登録・ログインししてください。。",
    yindao_xiayibu: "次は",
    yindao_kaishi: "宝探しを始める",
    yindao_tuichu: "退出",
    yindao_guanwang: "公式サイト",
    yindao_login: "登録/ログイン",
    yindao_android: "Android",
    yindao_yuyan: "言語",
    // 维护
    weihuzhong: "メンテナンス中なので、後ほどもう一度お試しください。",

    // 夺宝规则
    guizewenzi:`<color=#E2E7FE><size=30>宝探しに関するルール：</size></color>
1、登録ユーザーのみがこのキャンペーンに参加できる。
2、このキャンペーンは毎回一種類のコインに向けるので、そのコインだけでご参加ください。
3、無料期間の間に、1人あたりの購入数は制限されている。
4、購入するたびに幸運番号がゲットできる。
5、参加人数の上限に到達する時に当選番号を発表；当選者がボーナスをゲット。
6、当社はボーナスの一部をサービス料として請求する。
7、このキャンペーンの最終解釈権は当社が所有する。ご不明な点がありましたら、カスタマーサービス までご連絡下さい:
Email：support@coingame.com 
QQ：468631374
Kakao：Coingame Korea
（<u click="clickme1" >https://open.kakao.com/o/shleVM3</u>）
Telegram：<u click="clickme2" >https://t.me/Coingame_official</u>

<color=#E2E7FE><size=30>幸運番号に関するルール：</size></color>
1、ラッキーナンバーの値の範囲は「10001、10000+最大参加人数」。
2、購入時間の時、分、秒とミリ秒を数値に変換する。例えば、「08：32：25.672」を「083225672」に変換する。
3、すべての換算値の合計をAと表記する。
4、最後の購入時に1BTCの価格(USD)の小数点以下2桁までの数値を取り出して、Bと表記する。例えば、1BTC=$4890.41、B=489041。
5、最大参加人数の（A+B）％= C（余り）。
6、当選番号=10001+C。`,

    benqicepan:"今回終了",
    benqishuzijieguo:"今回の数値により結果",
    duobaojiluUI:"宝探し記録",
    riqi:"日付",
    shijian:"時間",
    shujuzhuanhuan: "データ換算",
    yonghu:"ユーザー",
    xingyunma:"幸運番号",
};