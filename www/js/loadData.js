/**
 * Created by klappo on 8/1/15.
 */

    $(document).ready(function(){
        //sendReq(2,function(){},function(data){
        //updator(JSON.parse(data));
        //updator(chamranData.example[2]);
        $("#up").text(generateRand(90,95));
        $("#center").text(50,55);
        $("#down").text(2.5,3.5);
       // });
    });

    var i=0;
var myvar=setInterval(function(){
  $("#up").text(generateRand(90,95));
        $("#center").text(generateRand(50,55));
        $("#down").text(generateRand(2.3,3.5));

},2000);


function generateRand(min,max){
    var rand=Math.round( (Math.random() * (max-min+1) + min) * 10 ) / 10;
    return rand
}