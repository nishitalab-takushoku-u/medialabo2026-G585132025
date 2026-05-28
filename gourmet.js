
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log("1件目の検索結果");
  console.log("店名:" + data.results.shop[0].name );
  console.log("住所:" + data.results.shop[0].address);
  console.log("キャッチコピー:" + data.results.shop[0].catch);
  console.log("予算:" + data.results.shop[0].budget.name + data.results.shop[0].budget.average);
  console.log("ジャンル:" + data.results.shop[0].genre.name);
  console.log("アクセス:" + data.results.shop[0].access);
  console.log("営業時間:" + data.results.shop[0].open);

  console.log("2件目の検索結果");
  console.log("店名:" + data.results.shop[1].name );
  console.log("住所:" + data.results.shop[1].address);
  console.log("キャッチコピー:" + data.results.shop[1].catch);
  console.log("予算:" + data.results.shop[1].budget.name + data.results.shop[0].budget.average);
  console.log("ジャンル:" + data.results.shop[1].genre.name);
  console.log("アクセス:" + data.results.shop[1].access);
  console.log("営業時間:" + data.results.shop[1].open);
}

// 課題5-1 の関数 printDom() はここに記述すること

function printDom(data) {
  let result = document.querySelector('#result');

  let h2 = document.createElement('h2');
  h2.textContent = "検索結果";
  result.insertAdjacentElement("beforeend", h2);

  let ol = document.createElement('ol');
  result.insertAdjacentElement("beforeend", ol);

  let li1 = document.createElement('li');
  li1.textContent = data.results.shop[0].name;
  ol.insertAdjacentElement("beforeend", li1);

  
 


  let ul1 = document.createElement('ul');
  li1.insertAdjacentElement("beforeend", ul1);

  let a1 = document.createElement('li');
  a1.textContent = "アクセス:" + data.results.shop[0].access;
  ul1.insertAdjacentElement("beforeend", a1);

  let a2 = document.createElement('li');
  a2.textContent = "住所:" + data.results.shop[0].address;
  ul1.insertAdjacentElement("beforeend", a2);

  let a3 = document.createElement('li');
  a3.textContent =
    "予算:" +
    data.results.shop[0].budget.name +
    data.results.shop[0].budget.average;
  ul1.insertAdjacentElement("beforeend", a3);

  

  let a5 = document.createElement('li');
  a5.textContent = "ジャンル:" + data.results.shop[0].genre.name;
  ul1.insertAdjacentElement("beforeend", a5);

  let a6 = document.createElement('li');
  a6.textContent = "営業時間:" + data.results.shop[0].open;
  ul1.insertAdjacentElement("beforeend", a6);

  let li2 = document.createElement('li');
  li2.textContent = data.results.shop[1].name;
  ol.insertAdjacentElement("beforeend", li2);

  

  let ul2 = document.createElement('ul');
  li2.insertAdjacentElement("beforeend", ul2);

  let b1 = document.createElement('li');
  b1.textContent = "アクセス:" + data.results.shop[1].access;
  ul2.insertAdjacentElement("beforeend", b1);

  let b2 = document.createElement('li');
  b2.textContent = "住所:" + data.results.shop[1].address;
  ul2.insertAdjacentElement("beforeend", b2);

  let b3 = document.createElement('li');
  b3.textContent =
    "予算:" +
    data.results.shop[1].budget.name +
    data.results.shop[1].budget.average;
  ul2.insertAdjacentElement("beforeend", b3);

  

  let b5 = document.createElement('li');
  b5.textContent = "ジャンル:" + data.results.shop[1].genre.name;
  ul2.insertAdjacentElement("beforeend", b5);

  let b6 = document.createElement('li');
  b6.textContent = "営業時間:" + data.results.shop[1].open;
  ul2.insertAdjacentElement("beforeend", b6);
}



// 課題6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "results": {
    "api_version": "1.26",
    "results_available": 52,
    "results_returned": "10",
    "results_start": 1,
    "shop": [
      {
        "access": "アクセス:京王八王子駅隣のビル1階の右側です。",
        "address": "東京都八王子市明神町３丁目21-7タバタビル1階",
        "band": "可",
        "barrier_free": "なし",
        "budget": {
          "average": "ランチ1000円　ディナー3000円程 ",
          "code": "B001",
          "name": "1000～3000円"
        },
       
        "genre": {
          "code": "G013",
          "name": "ラーメン"
        },
       
        "id": "J000989843",
        "karaoke": "あり",
        "ktai_coupon": 0,
        "large_area": {
          "code": "Z011",
          "name": "東京"
        },
        "large_service_area": {
          "code": "SS10",
          "name": "関東"
        },
        "lat": 35.6585460152,
        "lng": 139.34327231,
        "logo_image": "https://imgfp.hotp.jp/IMGH/21/04/P038512104/P038512104_69.jpg",
        "lunch": "なし",
        "middle_area": {
          "code": "Y110",
          "name": "八王子・立川"
        },
        "midnight": "営業していない",
        "mobile_access": "京王八王子駅1分/JR八王子駅北口5分",
        "name": "麺笑飯店　八王子",
        "name_kana": "ばぐだっどかふぇもーたうんはちおうじ",
        "non_smoking": "禁煙席なし",
        "open": "月~木:11:00~14:00 (料理L.O.13:00 ドリンクL.O. 13:30) 18:00~22:00 (料理L.O.21:30 ドリンクL.O. 21:30) 金,土:11:00~14:00 (料理L.O.13:00 ドリンクL.O. 13:30) 18:00~23:00 (料理L.O.22:30 ドリンクL.O. 22:30) 定休日: 日曜日 ",
        "other_memo": "ステージ・マイク・カラオケ等",
        "parking": "なし",
        "party_capacity": 250,
        "pet": "不可",
        "photo": {
          "mobile": {
            "l": "https://imgfp.hotp.jp/IMGH/22/35/P038512235/P038512235_168.jpg",
            "s": "https://imgfp.hotp.jp/IMGH/22/35/P038512235/P038512235_100.jpg"
          },
          "pc": {
            "l": "https://imgfp.hotp.jp/IMGH/22/35/P038512235/P038512235_238.jpg",
            "m": "https://imgfp.hotp.jp/IMGH/22/35/P038512235/P038512235_168.jpg",
            "s": "https://imgfp.hotp.jp/IMGH/22/35/P038512235/P038512235_58_s.jpg"
          }
        },
        "private_room": "あり ：VIPルーム1部屋2～15名様前後（完全個室）/パーティーフロア",
        "service_area": {
          "code": "SA11",
          "name": "東京"
        },
        "shop_detail_memo": "ご質問、ご要望はお気軽にお問い合わせください♪",
        "show": "あり",
        "small_area": {
          "code": "X220",
          "name": "八王子"
        },
        "station_name": "京王八王子",
        "sub_genre": {
          "code": "G002",
          "name": "ダイニングバー・バル"
        },
        "tatami": "なし",
        "tv": "あり",
        "urls": {
          "pc": "https://www.hotpepper.jp/strJ000989843/?vos=nhppalsa000016"
        },
        "wedding": "大歓迎！ステージ・マイク・音響・映像等、設備充実！！最大200名様まで是非どうぞ★",
        "wifi": "あり"
      },
      {
        "access": "JR八高線小宮駅から多摩大橋に向かって徒歩約10分です。",
        "address": "東京都八王子市小宮町９４１－１",
        "budget": {
          "average": "900円",
          "code": "B001",
          "name": "昼800円/夜1000円"
        },
        
        "course": "あり",
        "english": "なし",
        "free_drink": "あり ：★NEW OPEN★当店イチ押しのコース★2.5h飲み放題付き「Funny Classicコース」4980円→2980円",
        "free_food": "あり ：★NEW OPEN★当店イチ押しのコース★2.5h飲み放題付き「Funny Classicコース」4980円→2980円",
        "genre": {
         
          "code": "G013",
          "name": "ラーメン"
        },
        "horigotatsu": "なし ：温かな照明と開放的な店内で楽しくご宴会♪八王子での宴会 飲み会 女子会 二次会 合コンに◎",
        "id": "J001275177",
        "karaoke": "なし",
        "ktai_coupon": 0,
        "large_area": {
          "code": "Z011",
          "name": "東京"
        },
        "large_service_area": {
          "code": "SS10",
          "name": "関東"
        },
        "lat": 35.6582259169,
        "lng": 139.3381858122,
        "logo_image": "https://imgfp.hotp.jp/IMGH/61/98/P038366198/P038366198_69.jpg",
        "lunch": "なし",
        "middle_area": {
          "code": "Y110",
          "name": "八王子・立川"
        },
        "midnight": "営業している",
        "mobile_access": "JR八王子駅北口徒歩1分/京王八王子駅徒歩3分",
        "name": "麺や樽座小宮店",
        "name_kana": "かくれやばる　ふぁにーあんどぶーけ",
        "non_smoking": "禁煙席なし",
        "open": "営業時間: 月~土,祝前日:11:30~23:00 日,祝:11:30~21:00 定休日 : なし",
        "other_memo": "個室や貸切の詳細等お気軽にお電話にてお問い合わせください。八王子での飲み会に◎",
        "parking": "なし ：お近くのコインパーキングをご利用下さい。",
        "party_capacity": 50,
        "pet": "不可",
        "photo": {
          "mobile": {
            "l": "https://imgfp.hotp.jp/IMGH/33/59/P038703359/P038703359_168.jpg",
            "s": "https://imgfp.hotp.jp/IMGH/33/59/P038703359/P038703359_100.jpg"
          },
          "pc": {
            "l": "https://imgfp.hotp.jp/IMGH/33/59/P038703359/P038703359_238.jpg",
            "m": "https://imgfp.hotp.jp/IMGH/33/59/P038703359/P038703359_168.jpg",
            "s": "https://imgfp.hotp.jp/IMGH/33/59/P038703359/P038703359_58_s.jpg"
          }
        },
        "private_room": "なし ：個室　2名×4室　4名×8室　8名～10名×4室　20名～40名×2室",
        "service_area": {
          "code": "SA11",
          "name": "東京"
        },
        "shop_detail_memo": "★NEW OPEN★当店イチ押しのコース★2.5h飲み放題付き「Funny Classicコース」4980円→2980円",
        "show": "なし",
        "small_area": {
          "code": "X220",
          "name": "八王子"
        },
        "station_name": "JR八高線小宮駅",
        "sub_genre": {
          "code": "G002",
          "name": "ダイニングバー・バル"
        },
        "tatami": "なし ：八王子で人気のお座敷個室！最大50名様まで対応できます。",
        "tv": "あり",
        "urls": {
          "pc": "https://www.hotpepper.jp/strJ001275177/?vos=nhppalsa000016"
        },
        "wedding": "八王子での結婚式の二次会や同窓会、打ち上げパーティー等多様なシーンにご利用下さい",
        "wifi": "あり"
      }
    ]
  }
}


