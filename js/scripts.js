function Hike(drive, distance, views, popularity, difficulty) {
  this.drive = drive;
  this.distance = distance;
  this.views = views;
  this.popularity = popularity;
  this.difficulty = difficulty;
}

Hike.prototype.drive = function() {
  var drive = "";
  if(drive < 10) {
    drive = "short";
  }
  else if(drive < 35) {
    drive = "medium";
  }
  else {
    drive = "long";
  }
  return drive;
}

Hike.prototype.distance = function() {
  var distance = "";
  if(distance <= 3) {
    distance = "short";
  }
  else if(distance <= 8) {
    distance = "medium";
  }
  else {
    distance = "long";
  }
  return distance;
}

Hike.prototype.hikeFinder = function() {
	if (this.distance<35  && this.distance<5 && this.views === "waterfall" && this.popularity === "high" && this.difficulty === "medium") {
		var i = 0;
		for(i in multnomah) {
			if (multnomah.hasOwnProperty(i)) {
			console.log(i + ":" + multnomah[i]);  //add .append here
			}
		}
	}
};

var multnomah = new Hike("medium", "short", "waterfall", "high", "medium");

var testHike = new Hike("medium", "short", "waterfall", "high", "medium");

testHike.hikeFinder();
