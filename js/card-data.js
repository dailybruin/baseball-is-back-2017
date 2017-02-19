class PositionPlayer {
  // constructor() { }
  constructor(player_name, muglink, position, abbr_position, year, number, height, weight, games, avg, obp, slg, hr, rbi, source, time_of_source) {
    this.type_position_player = true;
    this.player_name = player_name;
    this.name_no_space = player_name.replace(/\s+/g, '');
    this.muglink = muglink;
    this.position = position;
    this.abbr_position = abbr_position;
    this.year = year;
    this.number = number;
    this.height = height;
    this.weight = weight;
    this.games = games;
    this.avg = avg;
    this.obp = obp;
    this.slg = slg;
    this.hr = hr;
    this.rbi = rbi;
    this.source = source;
    this.time_of_source = time_of_source;
  }

}

class CatcherPlayer {
  // constructor() { }
  constructor(player_name, muglink, year, number, height, weight, games, games_started, w_l, era, so, ip, source, time_of_source) {
    this.type_position_player = false;
    this.player_name = player_name;
    this.name_no_space = player_name.replace(/\s+/g, '');
    this.muglink = muglink;
    this.year = year;
    this.number = number;
    this.height = height;
    this.weight = weight;
    this.games = games;
    this.games_started = games_started;
    this.w_l = w_l;
    this.era = era;
    this.so = so;
    this.ip = ip;
    this.source = source;
    this.time_of_source = time_of_source;
  }

}

var allPlayers = [];

//position players
//Brett Stephens
allPlayers.push(new PositionPlayer("Kort Peterson", "http://www.uclabruins.com/images/2016/12/29/Stephens_Brett.jpg", "Left Field", "LF", "Senior", "9", "5\'11\"", "178", "55", ".223", ".335", ".309", "0", "19", "2016 DIVISION I STATS", ""));
allPlayers.push(new PositionPlayer("Daniel Amaral", "http://www.uclabruins.com/images/2016/12/28/Amaral_Daniel.jpg", "Center Fied", "CF", "Sophomore", "25", "6\'0\"", "197", "29", ".178", ".255", ".178", "0", "2", "2016 DIVISION I STATS", ""));
allPlayers.push(new PositionPlayer("Michael Toglia", "http://www.uclabruins.com/images/2016/12/28/Toglia_Michael.jpg", "Right Field", "RF", "Freshman", "7", "6\'5\"", "201", "45", ".306", ".402", ".547", "7", "40", "2016 WEST COAST LEAGUE STATS", ""));
allPlayers.push(new PositionPlayer("Ryan Kreidler", "http://www.uclabruins.com/images/2016/12/28/kreidler_ryan.jpg", "Third Base", "3B", "Freshman", "3", "6\'2\"", "195", "29", ".346", ".521", ".592", "3", "27", "2016 HIGH SCHOOL STATS", ""));
allPlayers.push(new PositionPlayer("Nick Valaika", "http://www.uclabruins.com/images/2016/12/29/Valaika_Nick.jpg", "Shortstop", "SS", "Redshirt sophomore", "4", "5\'11\"", "186", "11", ".150", ".150", ".200", "0", "2", "2016 DIVISION I STATS", ""));
allPlayers.push(new PositionPlayer("Jake Hirabayashi", "http://www.uclabruins.com/images/2016/12/29/Hirabayashi_Jake.jpg", "Second Base", "2B", "Sophomore", "28", "5\'11\"", "185", "26", ".106", ".203", ".121", "0", "5", "2016 DIVISION I STATS", ""));
allPlayers.push(new PositionPlayer("Chase Strumpf", "http://www.uclabruins.com/images/2016/12/28/Strumpf_Chase.jpg", "Second Base", "2B", "Freshman", "33", "6\'1\"", "197", "37", ".247", ".318", ".762", "6", "30", "2016 WEST COAST LEAGUE STATS", ""));
allPlayers.push(new PositionPlayer("Sean Bouchard", "http://www.uclabruins.com/images/2016/12/28/Bouchard_Sean.jpg", "First Base", "1B", "Junior", "5", "6\'3\"", "215", "43", ".295", ".354", ".436", "2", "36", "2016 DIVISION I STATS", ""));
allPlayers.push(new PositionPlayer("Daniel Rosica", "http://www.uclabruins.com/images/2016/12/29/Rosica_Daniel.jpg", "Catcher", "C", "Redshirt sophomore", "47", "5\'11\"", "180", "44", ".264", ".338", ".347", "0", "14", "2016 DIVISION I STATS", ""));
allPlayers.push(new PositionPlayer("Gavin Johns", "http://www.uclabruins.com/images/2016/12/28/Johns_Gavin.jpg", "Catcher", "C", "Sophomore", "31", "6\'2\"", "200", "67", ".351", ".429", ".641", "16", "60", "2016 JUNIOR COLLEGE STATS", ""));
allPlayers.push(new PositionPlayer("Will McInerny", "http://www.uclabruins.com/images/2016/12/28/McInerny_Will.jpg", "Catcher", "C", "Freshman", "15", "6\'0\"", "177", "32", ".321", ".434", ".532", "1", "21", "2016 HIGH SCHOOL STATS", ""));

//catchers
allPlayers.push(new CatcherPlayer("Griffin Canning", "http://www.uclabruins.com/images/2016/12/28/Canning_Griffin.jpg", "Junior", "55", "6\'2\"", "180", "15", "15", "5-8", "3.7", "95", "109.1", "2016 DIVISION I STATS", ""));
allPlayers.push(new CatcherPlayer("Jake Bird", "http://www.uclabruins.com/images/2016/12/28/Bird_Jake.jpg", "Junior", "14", "6\'3\"", "200", "28", "7", "1-6", "6.36", "22", "46.2", "2016 DIVISION I STATS", ""));
allPlayers.push(new CatcherPlayer("Jon Olsen", "http://www.uclabruins.com/images/2016/12/29/Olsen_Jon.jpg", "Sophomore", "11", "6\'3\"", "202", "11", "5", "0-0", "7.36", "7", "18.1", "2016 DIVISION I STATS", ""));
allPlayers.push(new CatcherPlayer("Justin Hooper", "http://www.uclabruins.com/images/2016/12/29/Hooper_Justin.jpg", "Sophomore", "12", "6\'7\"", "232", "14", "1", "1-1", "18", "9", "8", "2016 DIVISION I STATS", ""));
allPlayers.push(new CatcherPlayer("Moises Ceja", "http://www.uclabruins.com/images/2014/2/4/IGVOAJDOCHMYDCO.20140204202128.jpg", "Senior", "40", "6\'0\"", "179", "25", "0", "2-1", "2.6", "23", "27.2", "2016 DIVISION I STATS", ""));
allPlayers.push(new CatcherPlayer("Matt Walker", "http://www.uclabruins.com/images/2016/12/29/Walker_Matt.jpg", "Redshirt sophomore", "30", "6\'4\"", "200", "21", "7", "5-3", "2.95", "56", "79.1", "2016 JUNIOR COLLEGE STATS", ""));
allPlayers.push(new CatcherPlayer("Scott Burke", "http://www.uclabruins.com/images/2016/12/28/Burke_Scott.jpg", "Senior", "10", "6\'3\"", "197", "27", "0", "2-2", "4.38", "30", "37", "2016 DIVISION I STATS", ""));
allPlayers.push(new CatcherPlayer("Brian Gadsby", "http://www.uclabruins.com/images/2016/12/29/Gadsby_Brian.jpg", "Sophomore", "26", "6\'0\"", "170", "25", "0", "3-0", "4.54", "28", "33.2", "2016 DIVISION I STATS", ""));

console.log(allPlayers)
