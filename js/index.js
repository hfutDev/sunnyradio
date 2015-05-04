/**
 *两行文字省略*
 */
$(".music-comment").each(function(i){
    var divH = $(this).height();
    var $p = $(this).find('p').eq(0);//等价于$('p',$(this)).eq(0)
    while ($p.outerHeight() > divH) {
        $p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
    };
});  