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
    zhanghu: "アカウント：%{zhanghu}",
    zichan: "資産：%{zichan}",
    wujilu: "記録なし",
    fapai:"配る",
    napai:"取る",
    jiabei:"倍にする",
    zhanghuchongzhi:"チャージアドレス：\n",
    fuzhi:"コピー",

    //购买弹层
    wuzige:"参加資格なし",
    chaochushangxin:"今回のゲームでの参加回数が上限に達しました。",
    yueyichang:"残高は異常値であるので、もう一度お試しください。またはカスタマーサービスまでご連絡ください：support@coingame.com",
    yuebuzu: "残高不足なので、チャージしてください。",
    koukuanshibai:"決済失敗しましたので、もう一度お試しください。またはカスタマーサービスまでご連絡ください：support@coingame.com",
    fenebuzhu:"このコインにおける購入回数の上限に達しました。",
    yijieshu:"今回は終了いたしました。",
    fanjiangyichang:"コインの価格は異常値であるので、カスタマーサービスまでご連絡ください：：support@coingame.com",
    fanjiangshibai:"賞金の送付は失敗しましたので、カスタマーサービスまでご連絡ください：support@coingame.com",
    xitiyichang:"システム異常が発生しましたので、カスタマーサービスまでご連絡ください：support@coingame.com",
    //提示
    fuzhichenggong: "コピー完了！",
    fuzhishibai: "コピー失敗！",
    wangluo: "ネットワークに接続されていません。ネットワークへの接続状態を確認してください。",
    wangluolianjie: "ネットワーク異常を検出しましたので、再接続してみてください。",
    zaijiezaili:"次は頑張ってください。",
    henyihan:"残念です。",
    gongxinin:"おめでとう。",
    
    // ui 中设置
    // main
    anniu_tibi: "出金",
    anniu_chongzhi: "チャージ",
    benqijilu: "入賞記録",
    chakangengduo: "もっと見る",
    riqi:"日付",
    yonghu:"ユーザー",
    touzhu:"ベッティング",
    beishu:"倍数",
    shouyi:"収益",
    //按钮
    anniu_1: "確認",
    anniu_2: "キャンセル",
    //新手引导
    yindao_guanwang: "公式サイト",
    yindao_login:"登録/ログイン",
    yindao_android:"Android",
    yindao_yuyan:"言語",
    yindao_logout:"ログアウト/スイッチ",
    yindao_music:"音声",
    yindao_help:"ヘルプ",
    // 维护
    weihuzhong:"当ゲームはただいまメンテナンス中なので、後ほどもう一度お試しください。",

    // 记录
    riqi:"日付",
    // shijian:"时间<color=#FFFFFF>(UTC0)</color>",
    yonghu:"ユーザー",

    // 排行榜
    wodetouzhu:"私のベッティング：%{tou}",
    wodepaiming:"私の順位：%{paiming}",
    paihangbang:"ランキング",
    paiming:"順位",
    yonghuming:"ユーザー名",
    touzhue:"オーダー金額",
    wodezhanji:"私の成績",
    caichijilu:"賞金プールの記録",
    shijian:"時間",
    jiangli:"賞金",
    fenlei:"カテゴリー",
    paimian:"カード",
    toubijine:"今のオーダー金額：%{jine}",

    // 规则
    guizewenzi:`帮助页内容：
ルール：
ジョーカーを除く52枚のトランプカードを使用します。
数値の大小：A&lt;2&lt;3&lt;4&lt;5&lt;6&lt;7&lt;8&lt;9&lt;10&lt;J&lt;Q&lt;K。
プレイヤーはカードが配られる前に、まず自分のオーダー金額を確認してください。
カードが配られて後、プレイヤーが5秒内に賞金を倍にするかどうかを決めてください。
一般的には、カードを取って、または賞金を倍にすると選択して後、第三枚のカードは第一枚と第二枚の間のカードなら、プレイヤーが勝つ。
一般的なやり方：
最初の2枚の数値の差により、倍率は異なります。
例えば：最初の2枚は3と8である場合、差は5となり、第三枚が4/5/6/7である時に、プレイヤーが勝つ。
<img src= 'h3' /><img src= 's8' />
<img src= 's4' />/<img src= 'd5' />/<img src= 'h6' />/<img src= 's7' />
最初の2枚は9とQである場合、差は3となり、第三枚が10/Jである時に、プレイヤーが勝つ。
<img src= 'd9' /><img src= 's12' />
<img src= 'h10' />/<img src= 's11' />
5と3の差により、倍率も違います。その差が小さければ、倍率が高くなり、最大25倍となります！
賞金プールに関するやり方：
以下の状況になる時には、賞金プールのやり方で決済する：
最初の3枚は同じスートである時；
<img src= 'd2' /><img src= 'd1' /><img src= 'd12' />
最初の3枚の中に、2枚または3枚が同じ数値である時；
<img src= 'd2' /><img src= 's2' /><img src= 'h12' /> <img src= 'h13' /><img src= 's13' /><img src= 'd13' />
最初の2枚の数値の差は2である時。
<img src= 'd4' /><img src= 'd6' /><img src= 'h8' />
賞金額：
オーダー金額は多ければ、賞金が高くなる！
5枚でストレートフラッシュになる時は最大賞金プールの(固定比率+流動比率上限)をゲット
<img src= 'c2' /><img src= 'c3' /><img src= 'c4' /><img src= 'c5' /><img src= 'c6' /> <img src= 's7' /><img src= 's8' /><img src= 's9' /><img src= 's10' /><img src= 's11' />
4枚でストレートフラッシュになる時は最大賞金プールの(固定比率+流動比率上限)をゲット
<img src= 'c3' /><img src= 'c4' /><img src= 'c5' /><img src= 'c6' /> <img src= 'h5' /><img src= 'h6' /><img src= 'h7' /><img src= 'h8' />
フォーカードである時は最大賞金プールの(固定比率+流動比率上限)をゲット
<img src= 'h12' /><img src= 'c12' /><img src= 's12' /><img src= 'd12' /><img src= 'c3' />
フルハウスである時は最大賞金プールの(固定比率+流動比率上限)をゲット
<img src= 'd2' /><img src= 's2' /><img src= 'h2' /><img src= 'h3' /><img src= 's3' />
5枚でフラッシュになる時は最大賞金プールの(固定比率+流動比率上限)をゲット
<img src= 'c12' /><img src= 'c9' /><img src= 'c4' /><img src= 'c2' /><img src= 'c6' />
4枚でフラッシュになる時は最大賞金プールの(固定比率+流動比率上限)をゲット
<img src= 'c3' /><img src= 'c6' /><img src= 'c13' /><img src= 'c1' />
5枚でストレートになる時は最大賞金プールの(固定比率+流動比率上限)をゲット
<img src= 'c2' /><img src= 'd3' /><img src= 's4' /><img src= 'h5' /><img src= 'c6' />
4枚でストレートになる時は最大賞金プールの(固定比率+流動比率上限)をゲット
<img src= 'd3' /><img src= 's4' /><img src= 'h5' /><img src= 'c6' />
このゲームの最終解釈権はCoingame が所有する。ご不明な点がございましたら、ご連絡ください。
Email：support@coingame.com 
QQ：468631374
Kakao：Coingame Korea(https://open.kakao.com/o/shleVM3)
Telegram：https://t.me/Coingame_official`,

};
