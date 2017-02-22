// Load images in the bodymap.php file
// Image id is used here
var raster = new Raster('bodymap');
raster.position = view.center;
var defaultOpacity = 0.7;
var current = "default";
var list = [];

var brain = new Raster('bodymap_brain');
brain.scale(0.9);
brain.position = view.center;
brain.position.y -= 142;
brain.position.x += 17;
brain.opacity = defaultOpacity;
list.push(brain);

var lung = new Raster('bodymap_lung');
lung.position = view.center;
lung.position.y -= 80;
lung.position.x += 17;
lung.opacity = defaultOpacity;
list.push(lung);

var liver = new Raster('bodymap_liver');
liver.scale(0.8);
liver.position = view.center;
liver.position.y -= 50;
liver.position.x += 17;
liver.opacity = defaultOpacity;
list.push(liver);

var heart = new Raster('bodymap_heart');
heart.scale(1.1);
heart.position = view.center;
heart.position.y -= 80;
heart.position.x += 17;
heart.opacity = defaultOpacity;
list.push(heart);

function resetHighlight() {
    for (i = 0; i < list.length; i++) {
        list[i].opacity = defaultOpacity;
    }
}

// Add mouse function for each item added
brain.onMouseEnter = function(event) {
	brain.opacity = 1;
	bodymapDisplay("brain");
}
brain.onMouseLeave = function(event) {
    if (current != "brain") {
	   brain.opacity = defaultOpacity;
    }
	bodymapDisplay(current);
}
brain.onClick = function(event) {
    resetHighlight();
    brain.opacity = 1;
	current = "brain";
}

lung.onMouseEnter = function(event) {
	lung.opacity = 1;
	bodymapDisplay("lung");
}
lung.onMouseLeave = function(event) {
    if (current != "lung") {
	   lung.opacity = defaultOpacity;
    }
	bodymapDisplay(current);
}
lung.onClick = function(event) {
    resetHighlight();
    lung.opacity = 1;
	current = "lung";
}

liver.onMouseEnter = function(event) {
	liver.opacity = 1;
	bodymapDisplay("liver");
}
liver.onMouseLeave = function(event) {
    if (current != "liver") {
	   liver.opacity = defaultOpacity;
    }
	bodymapDisplay(current);
}
liver.onClick = function(event) {
    resetHighlight();
    liver.opacity = 1;
	current = "liver";
}

heart.onMouseEnter = function(event) {
	heart.opacity = 1;
	bodymapDisplay("heart");
}
heart.onMouseLeave = function(event) {
    if (current != "heart") {
	   heart.opacity = defaultOpacity;
    }
	bodymapDisplay(current);
}
heart.onClick = function(event) {
    resetHighlight();
    heart.opacity = 1;
	current = "heart";
}

// HTML display text
var defaultHTMLText =
"<div id='bodymap_list_brain' class='bodymap_default'>Brain</div>"+
"<div id='bodymap_list_lung' class='bodymap_default'>Lung</div>"+
"<div id='bodymap_list_liver' class='bodymap_default'>Liver</div>"+
"<div id='bodymap_list_heart' class='bodymap_default'>Heart</div>";

$("#bodymap_info_container").html(defaultHTMLText);
setupClick();

function bodymapDisplay(part) {
	switch(part) {
    case "brain":
        $("#bodymap_info_container").html(
            "<div class='bodymap_back'>&larr;</div>"+
        	"<div class='bodymap_title'>Brain</div>"+
        	"<div class='bodymap_entry'>Alzheimer's Disease</div>"+
        	"<ul class='bodymap_subentry'>"+
        		"<li><a href='/index.php/enigma/'>ENIGMA</a></li>"+
        		"<li><a href='/index.php/bdds/'>BDDS</a></li>"+
        	"</ul>"
        );
        setupBack();
        break;
    case "lung":
        $("#bodymap_info_container").html(
            "<div class='bodymap_back'>&larr;</div>"+
        	"<div class='bodymap_title'>Lung</div>"+
        	"<div class='bodymap_entry'>Lung Cancer</div>"+
        	"<ul class='bodymap_subentry'>"+
        		"<li>center1</li>"+
        		"<li>center2</li>"+
        		"<li>center3</li>"+
        	"</ul>"
        );
        setupBack();
        break;
    case "liver":
        $("#bodymap_info_container").html(
            "<div class='bodymap_back'>&larr;</div>"+
        	"<div class='bodymap_title'>Liver</div>"+
        	"<div class='bodymap_entry'>Liver Cancer</div>"+
        	"<ul class='bodymap_subentry'>"+
        		"<li><a href='/index.php/heartbd2k/'>HeartBD2K</a></li>"+
        	"</ul>"
        );
        setupBack();
        break;
    case "heart":
        $("#bodymap_info_container").html(
            "<div class='bodymap_back'>&larr;</div>"+
        	"<div class='bodymap_title'>Heart</div>"+
        	"<div class='bodymap_entry'>Ischemica Heart Disease (Heart Attack)</div>"+
        	"<ul class='bodymap_subentry'>"+
        	   "<li><a href='/index.php/heartbd2k/'>HeartBD2K</a></li>"+
        	"</ul>"+
        	"<div class='bodymap_entry'>Heart Failure</div>"+
        	"<ul class='bodymap_subentry'>"+
        		"<li><a href='/index.php/enigma/'>ENIGMA</a></li>"+
            "<li><a href='/index.php/heartbd2k/'>HeartBD2K</a></li>"+
        		"<li><a href='/index.php/md2k/'>MD2K</a></li>"+
        	"</ul>"
        );
        setupBack();
        break;
    default:
        $("#bodymap_info_container").html(defaultHTMLText);
        setupClick();
	}
}

// Setup back button
function setupBack() {
    $(".bodymap_back").click(function() {
        resetHighlight();
        current = "default";
        bodymapDisplay(current);
    });
}

// List is clickable
function setupClick() {
    $("#bodymap_list_brain").click(function() {
        resetHighlight();
        brain.opacity = 1;
        current = "brain";
        bodymapDisplay(current);
    });
    $("#bodymap_list_lung").click(function() {
        resetHighlight();
        lung.opacity = 1;
        current = "lung";
        bodymapDisplay(current);
    });
    $("#bodymap_list_liver").click(function() {
        resetHighlight();
        liver.opacity = 1;
        current = "liver";
        bodymapDisplay(current);
    });
    $("#bodymap_list_heart").click(function() {
        resetHighlight();
        heart.opacity = 1;
        current = "heart";
        bodymapDisplay(current);
    });
}
