// var para1 = document.getElementById('para1');
// para1.innerHTML = "changed para1"

// $( document ).ready(function() {
//     console.log( "document loaded" );
// });

// $( window ).on( "load", function() {
//     console.log( "window loaded" );
// });

// var para1 = $('#para1');
// console.log(para1);

// // var p = $('p').html("welcome");


// var p2 = document.getElementsByTagName('p');
// console.log(p2);

// $('p').css('color','blue');

// $( "p" ).css({
//     fontSize: "20px",
//     color: "red"
// });


// var box = $('#box').css({
//     width:"100px",
//     height:"100px",
//     backgroundColor:"blue"
// });

// // box.click(function() {
// //     alert('box clicked');
// // });

// box.on('click',function () {
//     // alert('click on');
//     var element = $(this);
//     element.width(element.width()+10+"px");
// });

// $('a').click(function (event) {
//     event.preventDefault();
//     alert('link clicked');
// })

// $('h1').css({
//     color:"red"
// });

fetchRandomDog();
function fetchRandomDog() {
    // xhrRequest = new XMLHttpRequest();


    // //one the response is recieved onload function is called
    // xhrRequest.onload = function () {
        
    //     //parsing json response

    //     var responseJson = JSON.parse(xhrRequest.response);

    //     var imageUrl = responseJson.message;

    //     $('#dog-image').attr('src',imageUrl);
    //     $('#dog-image').attr({
    //         height:"70%",
    //         width:"70%"
    //     });

        
    // }
    // //true here means asynchronous by default it is asynchronous to make synchronous mention true
    // //request is initialized
    // xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',true);
    // xhrRequest.send() ; // this will made the request  to the sever

    $('#dog-image').attr({
        height:"70%",
        width:"70%",
        alt:"Dog is comming ....."
    });

    // $.ajax(
    //     {
    //         url:'https://dog.ceo/api/breeds/image/random',
    //         method:'get',
    //         success:function(data){
    //             //data is already in json no need to parse it
    //             var imageUrl = data.message;

    //             $('#dog-image').attr('src',imageUrl);

    //         }
    //     }
    // );
    $.get('https://dog.ceo/api/breeds/image/random',function(data){
        var imageUrl = data.message;

        $('#dog-image').attr('src',imageUrl);
    });

}

$('#fetch-button').click(fetchRandomDog);