$(function(){
  // スワイプ可能なユーザー数＝DB内のユーザーデータ数
  const userNum = gon.users;

  // スワイプしたユーザーの数を取得＝スワイプ数を取得
  var currentUserIndex = 0;

  var url = '/reactions';
  // reactionにはdislikeかlikeが入る
  var postReaction = function(user_id, reaction){
    // ajax通信の共通処理を記載
    $.ajaxSetup({
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    });
    // ajax通信の処理を記載
    $.ajax({
      url: url,
      type: "POST",
      data: {
        user_id: user_id,
        reaction: reaction,
      },
      success: function(j_data){
        console.log("success")
      }
    });
  }

  $("#tinderslide").jTinder({
    // 公式ドキュメントのオプションを参照
    onDislike: function (item) {
      // スワイプ毎にcurrentUserIndexの数値を追加していく
      currentUserIndex++;
      // 関数の呼び出し
      checkUserNum();
      // dislikeしたユーザーのidをdatasetプロパティで取得し変数に代入
      var user_id = item[0].dataset.user_id
      // 関数の呼び出し(user_id, 'dislike')を引数として渡す
      postReaction(user_id, 'dislike')
    },
    onLike: function (item) {
      currentUserIndex++;
      checkUserNum();
      var user_id = item[0].dataset.user_id
      postReaction(user_id, 'like')
    },
    animationRevertSpeed: 200,
    animationSpeed: 400,
    threshold: 1,
    likeSelector: '.like',
    dislikeSelector: '.dislike'
  });
  $('.actions .like, .actions .dislike').click(function(e){
    e.preventDefault();
    // $("#tinderslide").jTinderを呼び出す、その際$(this).attr('class')を引数として渡しlikeかdislikeかの処理を判別させる

    $("#tinderslide").jTinder($(this).attr('class'));
  });

  function checkUserNum() {
    // スワイプするユーザー数とスワイプした回数が同じになればaddClassする
    if (currentUserIndex === userNum){
        $(".noUser").addClass("is-active");
        $("#actionBtnArea").addClass("is-none")
        return;
    }
  }

});















