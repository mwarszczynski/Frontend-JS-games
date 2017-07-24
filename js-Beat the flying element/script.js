// var boxMaxWidth = boxMaxHeight = 40;
// var boxMinWidth = boxMinHeight = 30;
// var boxBackgrounds = ["green", "red", "blue", "black", "pink"];
// var boxContainer = [];
// var boxStartingCount = 5;
// var boxAdditionalMaxCount = 3;
// var boxMovement;
// var boxMovementHorizontal = boxMovementVertical = 10;
// var areaPosition = {};
// var areaSize = {};
// var gameTimer;
// var gameOver = false;
//
// // =======================  FUNCTIONS =======================
// // creating "i" elements "boxes" in area - #area.
// function createBoxes(i)
// {
// for (var x = 0;x < parseInt(i); x++)
// {
// var div = $("<div></div>");
// var sizes = setBoxRandomSize(div);
// setBoxRandomPosition(div);
// setBoxRandomBackground(div);
// var date = new Date();
// var id = new String(""+sizes.height+""+date.getTime()+"");
// div.attr("id", id);
// boxContainer[id] = [];
// var arrow = Math.floor(2*Math.random())+1;
// boxContainer[id]['x'] = 'right';
// if (arrow == 1)
// {
// boxContainer[id]['x'] = 'left';
// }
// var arrow = Math.floor(2*Math.random())+1;
// boxContainer[id]['y'] = 'bottom';
// if (arrow == 1)
// {
// boxContainer[id]['y'] = 'top';
// }
// boxContainer[id]['w'] = sizes.width;
// boxContainer[id]['h'] = sizes.height;
// div.click(function(e)
// {
// if (!gameOver)
// {
// $(this).hide("slow", function()
// {
// $(this).remove();
// $("#result").text(parseInt($("#result").text())+1);
// createBoxes(Math.floor(boxAdditionalMaxCount*Math.random())+1);
// });
// }
// });
//
//     $('#area').append(div);
// }
//
// // randoming value height & width. return random drawn numbers
// function setBoxRandomSize(obj)
// {
// var height = Math.floor((boxMaxHeight-boxMinHeight+1)*Math.random())+boxMinHeight;
// var width = Math.floor((boxMaxWidth-boxMinWidth+1)*Math.random())+boxMinWidth;
// obj.css({"height": height, "width": width});
// return {"height": height, "width": width};
// }
//
// // randoming the position of the box in the area & return values
// function setBoxRandomPosition(obj)
// {
// var left = Math.floor((areaSize.w-parseInt(obj.css("width")))*Math.random())+areaPosition.left;
// var top = Math.floor((areaSize.h-parseInt(obj.css("height")))*Math.random())+areaPosition.top;
// obj.css({"left": left +"px", "top": top +"px"});
// }
//
// // randoming the bakground color
// function setBoxRandomBackground(obj)
// {
// var background = Math.floor(Math.random()*boxBackgrounds.length);
// obj.css("background-color", boxBackgrounds[background]);
// }
//
// // timer starting counting
// function executeTimer()
// {
// var time = parseInt($("#time").text());
// if (time-1 > -1)
// {
// $("#time").text(time-1);
// return false;
// }
// window.clearInterval(gameTimer);
// window.clearInterval(boxMovement);
// gameOver = true;
// }
//
// // making each element move
// function moveBoxes()
// {
// for (k in boxContainer)
// {
// var top = parseInt($("#"+k).css("top"));
// var left = parseInt($("#"+k).css("left"));
// if (boxContainer[k]['y'] == 'top')
// {
// var top = top-boxMovementVertical;
// }
// else
// {
// var top = top+boxMovementVertical;
// }
// if (boxContainer[k]['x'] == 'left')
// {
// var left = left-boxMovementHorizontal;
// }
// else
// {
// var left = left+boxMovementHorizontal;
// }
// if (left <= areaPosition.left)
// {
// boxContainer[k]['x'] = 'right';
// var left = areaPosition.left;
// }
// if (left+boxContainer[k]['w'] >= areaPosition.left+areaSize.w)
// {
// boxContainer[k]['x'] = 'left';
// var left = areaPosition.left+areaSize.w-boxContainer[k]['w'];
// }
// if (top < areaPosition.top)
// {
// boxContainer[k]['y'] = 'bottom';
// var top = 0;
// }
// if (top+boxContainer[k]['h'] >= areaSize.h+areaPosition.top)
// {
// boxContainer[k]['y'] = 'top';
// var top = areaPosition.top+areaSize.h-boxContainer[k]['h'];
// }
// $("#"+k).css({"left": left, "top": top});
// }
//
//
// // Run
// $().ready(function()
// {
// areaPosition = $("#area").position();
// areaSize.w = $("#area").width();
// areaSize.h = $("#area").height();
// createBoxes(boxStartingCount);
// boxMovement = window.setInterval("moveBoxes()", 200);
// gameTimer = window.setInterval("executeTimer()", 1000);
// });








































































































// =================== variables ===================
// maksymalne i minimalne wymiary boksu - kwadrat w naszym przypadku
var boxMaxWidth = 40;
var boxMinWidth = 30;
var boxMaxHeight = 40;
var boxMinHeight = 30;

// tablica z dostepnymi kolorami dla boksu
var boxBackground =  ["green", "red", "blue", "black", "pink"];

// tablica skupiająca wszystkie boksy
var boxContainer = [];

// początkowa liczba boksw
var boxStartingCount = 5;
// maksymalna liczba boksow losowana po "ustrzeleniu" ktoregos z nich
var AdditionalMaxCount = 3;

// odnośnik do funkcji moveBox, uruchamianej cyklicznie
var boxMovement;

// liczba pikseli w ruchu poziomym i pionowym
var boxMovementHorizontal = 10;
var boxMovementVertical = 10;

// obiekt, przechowujący pozycję pola gry
var areaPosition = {};
// obiekt, przecowujący wymiary pola gry
var areaSize = {};

var gameTimer;
var gameOver = false;

// =================== FUNCTIONS ===================

// tworzy i elementow (boksow) w obsarze #area
function createBoxes(i) {
  for (var x = 0; x < parseInt(i); x++)
  {
    var div = $('<div></div>');

    var sizes = setBoxRandomSize(div);
    setBoxRandomPosition(div);
    setBoxRandomBackground(div);

    var date = new Date();
    var id = new String(""+sizes.height+""+date.getTime()+"");

    div.attr("id", id);

    boxContainer[id] = [];

    var arrow = Math.floor(2*Math.random()) + 1;
    boxContainer[id]['x'] = 'right';

    if(arrow == 1) {
      boxContainer[id]['x'] = 'left';
    }

    var arrow = Math.floor(2*Math.random()) +1;
    boxContainer[id]['y'] = 'bottom';

    if(arrow ==1)
    {
      boxContainer[id]['y'] = 'top';
    }

    boxContainer[id]['w'] = sizes.width;
    boxContainer[id]['h'] = sizes.height;

    div.click(function(e)
    {
      if(!gameOver)
      {
        $(this).hide('slow', function() {
          $(this).remove();
          $("#result").text(parseInt($('#result').text()) + 1);
          createBoxes(Math.floor(boxAdditionalMaxCount * Math.random()) +1);
        });
      }
    });

    $("#area").append(div);

  }
}

// losuje wartosci width i height dla DOM jquery obj. zwraca wylosowane liczby
function setBoxRandomSize(obj) {
  var height = Math.floor((boxMaxHeight - boxMinHeight+1) * Math.random()) + boxMinHeight;

  var width = Math.floor((boxMaxWidth - boxMinWidth+1) * Math.random()) + boxMinWidth;

  obj.css({"height": height, "width": width});

  return {"height": height, "width": width};
}

// losuje pozycje boksu (DOM jquery) i zwraca uzyskane wartości
function setBoxRandomPosition(obj) {
  var left = Math.floor((areaSize.w - parseInt(obj.css("width"))) * Math.random()) + areaPosition.left;

  var top = Math.floor((areaSize.h - parseInt(obj.css("height"))) * Math.random()) + areaPosition.top;

  obj.css({"left": left + "px", "top": top + "px"});
}

// losuje kolor tla dla obiektu
function setBoxRandomBackground(obj) {
  var background = Math.floor(Math.random() * boxBackground.length);

  obj.css("background-color", boxBackground[background]);
}

// licznik czasu gry
function executeTimer() {
  var time = parseInt($('#time').text());

  if(time -1 > -1) {
    $('#time').text(time-1);
    return false;
  }

  window.clearInterval(gameTimer);
  window.clearInterval(boxMovement);
  gameOver = true;

  var time = parseInt($("#time").text());

}

// wprawia w ruch kazdy z elementow
function moveBoxes() {
  for (k in boxContainer)
  {
    var top = parseInt($('#'+k).css('top'));
    var left = parseInt($('#'+k).css('left'));

    if(boxContainer[k]['y'] == 'top')
    {
      var top = top - boxMovementVertical;
    }
    else {
      {
        var top = top + boxMovementHorizontal;
      }
      if(boxContainer[k]['x'] == 'left')
      {
        var left = left - boxMovementHorizontal;
      }
      else
      {
        var left = left + boxMovementHorizontal;
      }

      if (left <= areaPosition.left) {
        boxContainer[k]['x'] = 'right';
        var left = areaPosition;
      }
      if (left + boxContainer[k]['w'] >= areaPosition.left + areaSize.w)
      {
        boxContainer[k]['x'] = 'left';
        var left = areaPosition.left + areaSize.w - boxContainer[k]['w'];
      }

      if(top < areaPosition.top)
      {
        boxContainer[k]['y'] = 'bottom';
        var top = 0;
      }

      if(top+boxContainer[k]['h'] >= areaSize.h + areaPosition.top)
      {
        boxContainer[k]['y'] = 'top';
        var top = areaPosition.top + areaSize.h - boxContainer[k]['h'];
      }

      $('#'+k).css({"left": left, "top":top});
    }
  }
}

// =================== game ===================
$().ready(function() {
  areaPosition = $('#area').position();
  areaSize.w = $('#area').width();
  areaSize.h = $('#area').height();

  createBoxes(boxStartingCount);  // dodajemy 5 nowych elementow

  boxMovement = window.setInterval("moveBoxes()", 200);
  gameTimer = window.setInterval("executeTimer()", 1000);
});
