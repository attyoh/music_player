// プレイリストを取得
var listitems = document.querySelectorAll('li');
for(var i=0; i<listitems.length; i++){
  // clickイベントを設定
  listitems[i].addEventListener('click',
    (e)=>{
      var li = e.target; // クリックされた要素を取得
      playMusic(li);
    }
  );
}

function playMusic(li){
  var file = li.getAttribute('data-file'); // ファイル名を取得
  var audio = document.querySelector('audio'); // audio要素を選択
  audio.setAttribute('src', file);
  audio.play();
  // activeな項目を変更
  var activeli = document.querySelector('.active');
  activeli.className = ''; // class属性を空文字列にする
  li.className = 'active'; // クリックした要素にクラス名を設定
}

// 再生中と停止中でイラストを切り替える
var audio = document.querySelector('audio');
audio.addEventListener('play',
  (e)=>{
    var img = document.querySelector('img');
    img.setAttribute('src', 'images/pict_play.png');
  }
);
audio.addEventListener('pause',
  (e)=>{
    var img = document.querySelector('img');
    img.setAttribute('src', 'images/pict_stop.png');
  }
);

// 曲を最後まで再生したとき
audio.addEventListener('ended',
  (e)=>{
    var img = document.querySelector('img');
    img.setAttribute('src', 'images/pict_stop.png');
    // 次の曲に切り替え
    var activeli = document.querySelector('.active');
    var nextli = activeli.nextElementSibling;
    if (nextli != null) {
      playMusic(nextli);
    }
  }
);

// ランダム選曲機能
var random = document.querySelector('#random');
random.addEventListener('click',
  (e)=>{
    e.preventDefault(); // a要素本来の機能を無効にする
    var listitems = document.querySelectorAll('li');
    var len = listitems.length;
    var rnd = Math.floor(Math.random() * len);
    playMusic(listitems[rnd]);
  }
);