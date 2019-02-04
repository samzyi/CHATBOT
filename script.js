var goodsyn = [ 'good',
  'great',
  'amazing',
  'g',
  'alright',
  'ok',
  'okay',
  'fine',
  'all right',
  'acceptable',
  'suitable',
  'agreeable',
  'fair',
  'passable',
  'satisfactory',
  'adequate',
  'reasonable',
  'average',
  'tolerable',
  'enjoyable',
  'amusing',
  'delightful',
  'lovely',
  'pleasant',
  'congenial',
  'diverting', 
  'exciting',
  'thrilling',
  'excellent',
  'marvelous',
  'wonderful',
  'superb',
  'first-class',
  'first-rate',
  'admirable',
  'fine',
  'splendid' ];
var badsyn = [ 'substandard',
  'poor',
  'inferior',
  'second-rate',
  'second-class',
  'unsatisfactory',
  'inadequate',
  'unacceptable',
  'deficient',
  'imperfect',
  'defective',
  'faulty',
  'shoddy',
  'amateurish',
  'careless',
  'negligent',
  'dreadful',
  'terrible',
  'horrible',
  'bad',
  'shitty',
  'shit',
  'crappy',
  'abominable',
  'frightful',
  'atrocious',
  'disgraceful',
  'deplorable',
  'hopeless',
  'worthless',
  'laughable',
  'lamentable', 'miserable', 'sorry', 'third-rate', 'diabolical', 'execrable', 'incompetent', 'inept', 'inexpert', 'ineffectual', 'crummy', 'rotten', 'pathetic', 'useless', 'woeful', 'bum', 'lousy', 'ropy', 'appalling', 'abysmal', 'pitiful', 'godawful' ];



//
var username;

function intro(){
  $('.bot').text("hi what's your name?");
  $("body").keydown(function(e){

    if (e.which == 13){
      console.log("pressed enter");
      var user1 = $(".user").val();
      console.log("name = "+user1);


      if (user1.includes(" ") == true) {
        console.log("space in name");
        $('#yesbutton').show();
        $('.bot').text('may you please use only one word in your name?')
        $('#bot').append("<button type='button' id=yesbutton >yes</button> ")
        $('#yesbutton').click(function(){
          $('#yesbutton').hide();
          console.log("yes button clicked");
          intro();
        } )
      }else{
        console.log("no space in name");
        username = user1;
        console.log("no space username is " + username);
        mood();
      } 
    }
  })  
}

function mood(){
  console.log(username)
  $('.bot').text("hi " + username + ". how are you?");
  $("body").keydown(function(e){

    if (e.which == 13){
      console.log("pressed enter");
      var user1 = $(".user").val();
      console.log("mood = "+user1);


      if (user1.includes(" ") == true) {
        console.log("space in answer");
        $('#yesbutton').show();
        $('.bot').text('may you please use only one word in your answer?')
        $('#yesbutton').click(function(){
          console.log("yes button clicked");
          $('#yesbutton').hide();
          mood();
        } )
      }else{
        console.log("no space in answer");
        var mood = user1;
        console.log("no space mood is " + mood);
        if ((goodsyn.indexOf(mood) > -1) == true){
          console.log("mood is good")
          good();
        } else if ((badsyn.indexOf(mood) > -1) == true){
          console.log("mood is bad")
        } else {
          $('#yesbutton').show();
          console.log("word not registered")
          $('.bot').text("sorry, I don't know that word. can you try to use something simpler?")
          $('#yesbutton').click(function(){
            console.log("yes button clicked");
            $('#yesbutton').hide();
            mood();
          } )
        }
      } 
    }
  })  
}

function good(){
  $('.bot').text("we're good to go!");
}

function bad(){
  $('.bot').text("would you like me to let one of the counselors know?");
  $('#yesbutton').show();
  $('#bot').append("<button type='button' id=nobutton >no</button> ")
  $('#yesbutton').click(function(){
    console.log("yes button clicked");
    $('#yesbutton').hide();
    $('#nobutton').hide();
    $('.bot').text("ok!");
  } )
  $('#nobutton').click(function(){
    console.log("no button clicked");
    $('#nobutton').hide();
    $('#yesbutton').hide();
    $('.bot').text("ok, I'll see you next time");
  } )  
}



$(document).ready(function(e) {
  intro()
});


