
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

  let result = document.querySelector("#result");

  result.textContent = " ";


  let h2 = document.createElement('h2');
  h2.textContent = "検索結果";
  result.insertAdjacentElement("beforeend", h2);

  let ol = document.createElement('ol');
  result.insertAdjacentElement("beforeend", ol);

  for (let i = 0; i < data.results.shop.length; i++) {

  let li = document.createElement('li');
  li.textContent = data.results.shop[i].name;
  ol.insertAdjacentElement("beforeend", li);

  let ul = document.createElement('ul');
  li.insertAdjacentElement("beforeend", ul);

  let a1 = document.createElement('li');
  a1.textContent = "アクセス:" + data.results.shop[i].access;
  ul.insertAdjacentElement("beforeend", a1);

  let a2 = document.createElement('li');
  a2.textContent = "住所:" + data.results.shop[i].address;
  ul.insertAdjacentElement("beforeend", a2);

  let a3 = document.createElement('li');
  a3.textContent = "予算:" + data.results.shop[i].budget.name + data.results.shop[i].budget.average;
  ul.insertAdjacentElement("beforeend", a3);

  let a5 = document.createElement('li');
  a5.textContent = "ジャンル:" + data.results.shop[i].genre.name;
  ul.insertAdjacentElement("beforeend", a5);

  let a6 = document.createElement('li');
  a6.textContent = "営業時間:" + data.results.shop[i].open;
  ul.insertAdjacentElement("beforeend", a6);

}
  
}



// 課題6-1 のイベントハンドラ登録処理は以下に記述

let b = document.querySelector('#print');
b.addEventListener('click', sendRequest);


// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

    let genre = document.querySelector("#kensakukey").value;

    let url = "https://www.nishita-lab.org/web-contents/jsons/hotpepper/" + genre + ".json";

    axios.get(url)
        .then(showResult)
        .catch(showError)
        .then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {

    let data = resp.data;
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }
    printDom(data);
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
