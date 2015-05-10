/**
 *两行文字省略*
 */

// $(".music-comment").each(function(i){
//     var divH = $(this).height();
//     var $p = $(this).find('p').eq(0);//等价于$('p',$(this)).eq(0)
//     while ($p.outerHeight() > divH) {
//         $p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
//     };
// });


var com = document.getElementById("comment");
console.log(com);

comL = com.childNodes.length;
for(var i=0; i<comL; i++){

    var divH = com.offsetHeight;
    console.log(divH);
    var p = com.childNodes[i];
    console.log(p);

    if(p.tagName == 'P'){

        console.log(p.clientHeight);
        console.log(p.textContent);

        if ( p.clientHeight > divH) {
            p.textContent.replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "...");
            console.log(p.textContent);
        };
    }
}
