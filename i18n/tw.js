'use strict';

if (!window.i18n) {
    window.i18n = {};
}

if (!window.i18n.languages) {
    window.i18n.languages = {};
}

window.i18n.languages['tw'] = {
    /////////////////////////////////////////////////////////////////////////////
    /////////// 请注意 翻译部分 %{xxx} \n <img src='' /> 等 要留意一下 //////////////
    /////////////////////////////////////////////////////////////////////////////

    //  主游戏
    huodejiangli: "恭喜用戶%{yonghuming}成功奪寶第%{ji}期,獲得%{duoshao}獎勵",
    daojishi: "第%{ji}期 倒計時：",
    yigoumai: "已購買：%{ji}個 <img src='gaozih' />",
    shengyu: "剩餘：%{ji}個 <img src='gaozir' />",
    zhanghu: "帳戶：%{zhanghu}",
    zichan: "資產：%{zichan}",
    yonghu: "用戶%{yonghuming}",
    huansuan: "個<img src='gaozig' />≈%{jine}",
    wujilu: "暫無記錄",
    dijiqi:"第%{ji}期",
    zican_gongxuci:"<size=35>%{zican_etc}</size>\n共需%{ji}次",
    paomadeng:"恭喜用戶%{yonghu}成功奪寶第%{ji}期，獲得%{qian_etc}獎勵",
    // 往期记录
    kuangshanjiazhi:"礦山價值：%{qian_etc}",
    zhongjiangma: "中獎碼：%{zhongjiangma}",
    zhongjiangyonghu: "\n中獎用戶：%{zhongjiangyonghu}",
    kaijiangshijian: "\n開獎時間：%{shijian}\n",
    duobaokaishishijian: "奪寶開始時間：%{shijian}",
    duobaorenci: "\n奪寶人次：%{duoshao}人次",
    qiuhe:"1、求和：%{qiuhe}(本期奪寶購買記錄時間取值相加之和)",
    gongzhengzhi:"\n2、公證值：%{gongzhengzhi}（BTC價格） 價格：$%{jiage}"+
                 "\nBTC價格調取時間：%{shijian}" +
                 "\nBTC市場價格地址：https://coinmarketcap.com/",
    quyu:"\n3、取餘：(%{qiuhe} + %{gongzhengzhi}) % 100 = %{quyu}",
    //喜提提示
    jingao: "喜提一把金鎬",
    yingao: "喜提一把銀鎬",
    tonggao: "喜提一把銅鎬",
    tiegao: "喜提一把鐵鎬",
    //购买弹层
    querengoumai: "確定要購買%{querengoumai}份嗎？",
    yueyichang:"帳號餘額異常，請重新嘗試或聯繫客服：support@coingame.com",
    yuebuzu: "餘額不足，請立即充值。",
    koukuanshibai:"扣款失敗，請重新購買或聯繫客服：support@coingame.com",
    fenebuzhu:"剩餘份數不足，請重新購買。",
    goumaiwan:"本期參與人次已滿，請留意開獎或參與下期奪寶。",
    yijieshu:"本期已結束。",
    chakanjilu:'您可在下方查看“購買記錄”',
    chexiaoduobao:"本期奪寶已撤銷，購買金額將返還，請留意資產中心。",
    yonghuhuode:"<color=#FFEB00>%{username}</color> 獲得",
    zhongjiangmt:"中獎碼：<color=#FFFF00>%{zhongjiangmt}</color>",
    //提示
    fuzhichenggong: "复制成功！",
    fuzhishibai: "抱歉！複製失敗！",
    denglu:"請點擊右上角菜單登陸！",
    fenebuzhuchao:"已超過剩餘份數",
    wangluo: "當前網路不可用，請檢查網路連接是否正常。",
    wangluolianjie: "當前網路異常！您可以嘗試重新連接",
    
    // ui 中设置
    // main
    xiayiqi:"下\n一\n期",
    anniu_lijizhifu: "立即支付",
    anniu_tibi: "提幣",
    anniu_fuzhi: "複製",
    zhanghuchongzhi: "帳戶充值:",
    benqijilu: "本期奪寶記錄",
    xianshiquanbu: "顯示全部",
    wodexingyunma: "我的幸運碼",
    wangqijilu: "往期記錄 >",
    chakangengduo: "查看更多",
    //按钮
    anniu_1: "確認",
    anniu_2: "取消",
    //新手引导
    yindao_1: "挖礦奪寶",
    yindao_11: "幸運者將獨攬整個礦池",
    yindao_2: "每期奪寶礦池及挖礦倒計時",
    yindao_3: "向地址充值用以購買挖礦工具",
    yindao_32: "第1期 倒計時 20:20:20",
    yindao_4: "更多挖礦工具將有更大機會獨攬獎勵",
    yindao_5: "每次的挖礦將記錄在這裡",
    yindao_55: "個<img src='gaozig' />≈0.01 ETC",
    yindao_6: "遊戲規則、註冊、登錄請點這裡",
    yindao_xiayibu: "下一步",
    yindao_kaishi: "開始奪寶之旅",
    yindao_tuichu: "退出引導",
    yindao_guanwang: "官網",
    yindao_login:"註冊/登錄",
    yindao_android:"安卓用戶端",
    yindao_yuyan:"語言",
    // 维护
    weihuzhong:"遊戲維護中，請稍後重試",

    // 夺宝规则
    guizewenzi:`<color=#E2E7FE><size=30>奪寶規則：</size></color>
1、只能是平臺註冊用戶才能參與奪寶；
2、每期只會生成一個幣種的獎池，必須用對應獎池的幣種參與購買；
3、免費期的奪寶會限制每人購買的份數；
4、每購買一份都會隨機獲得一個幸運碼；
5、參與人次達到最大時，獎池開獎並公佈中獎的幸運碼，擁有中獎幸運碼的用戶獲得獎勵；
6、官方會從獎勵中收取一定比例的金額作為服務費；
7、官方擁有該遊戲的最終解釋權。如有任何疑問請聯繫官方客服：
Email：support@coingame.com 
QQ：468631374
Kakao：Coingame Korea
（<u click="clickme1" >https://open.kakao.com/o/shleVM3</u>）
Telegram：<u click="clickme2" >https://t.me/Coingame_official</u>

<color=#E2E7FE><size=30>幸運碼規則：</size></color>
1、幸運碼的取值範圍[10001,10000+最大參與人次]，每份都會擁有一個幸運碼;
2、將每份購買的時間取時、分、秒、毫秒，轉化為數值，例08:32:25.672，轉化得083225672;
3、以最後一份購買的時間，即時獲取當前時間（精確至秒）1BTC對應的美元值，取整數位元及2位元小數並轉化為數值，例如：對應1BTC=4890.41美元，取小數點後2位並轉化得489041，記作B;
5、取餘，（A+B）%最大參與人次=C（餘數）;
6、最終的中獎幸運碼=10001+C;`,

    benqicepan:"本期撤盤", 
    benqishuzijieguo:"取本期數值結果得", 
    duobaojiluUI:"奪寶記錄", 
    riqi:"日期", 
    shijian:"時間", 
    shujuzhuanhuan: "資料轉換", 
    yonghu:"用戶", 
    xingyunma:"幸運碼",
};