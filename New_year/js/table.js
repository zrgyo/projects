function leaderboard() {
    var leaderboard = document.getElementById('leaderboard');
    var tbody = leaderboard.querySelector('tbody');
    var tbodyHtml = '';
  
    var player1 = {name:"Шуйские",date:"01/23/18",score:"1201"};
    var player2 = {name:"Щепки",date:"03/24/17",score:"943"};
    var player3 = {name:"Дичары",date:"06/04/18",score:"547"};
    var player4 = {name:"Менты",date:"06/04/18",score:"367"};
    var player5 = {name:"Казахи",date:"06/04/18",score:"678"};
  
    var players = [
      player1,
      player2,
      player3,
      player4,
      player5,
    ]; 
    
    players.sort(function(a,b) {
      return Number(b.score) - Number(a.score);
    });
    
    for (var player of players) {
      tbodyHtml += '<tr><td>' + player.name + '</td><td>' + player.score + '</td></tr>';
    }
    
    tbody.innerHTML = tbodyHtml;
  }
  
  leaderboard();