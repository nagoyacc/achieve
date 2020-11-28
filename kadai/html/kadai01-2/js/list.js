// JavaScript Document
$(function(){
    $(".panel:not(:first)").hide();
    $("#tabs a").click(function() {
        $(".panel").hide();
        $(".panel").filter(this.hash).show();
        $("#tabs a").removeClass("selected");
        $(this).addClass("selected");
        return false;
        }).filter(":first").click();
});



// JavaScript Document
$(function() {
  $('.tab li').on('click', function(){
    
    $('.tab li').removeClass('select');  // すべてのタブからselectクラスを取り除く
	
    $(this).addClass('select');         //クリックされたタブにクラスselectをつけます。
	
    $('.content li').addClass('hide');   // `<ul class="content">`内のすべての`liタグ`を取得
	
    let index = $('.tab li').index($(this));   // 何番目の子要素か調べる
	
    $('.content li').eq(index).removeClass('hide'); // ↑で取得したindex値から該当するコンテンツを取得
  });
});


