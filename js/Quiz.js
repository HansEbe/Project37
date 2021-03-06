class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    Question.input1.hide();
    Question.input2.hide();
    Question.button.hide();
    //write code to change the background color here
    background("cyan");
    //write code to show a heading for showing the result of Quiz
    Question.title.html.hide();
    this.title.html("Quiz Results);
    //call getContestantInfo( ) here
    if (allContestants !== undefined){
        fill("blue");
        textSize(20);
        text("*people who answered correctly are highlighted in green", 130, 230);
    }

    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
        var correctAns = "2";
        if(correctAns === allContestants[plr].answer){
            fill("Green");
        else
            fill("Red");
        }
    }
  }

}
