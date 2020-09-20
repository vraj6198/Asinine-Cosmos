/* Prototype Modification */
String.prototype.capitalize = function () {
	return this.charAt(0).toUpperCase() + this.slice(1);
}

/*   Variables   */
var timeStart;
var timeEnd;
var timeTotal;
var characterList;
var clickPositionX;
var clickPositionY;
var characterSelectDiv = $("#character-select");
var characterOptionButtons = $('button.character-option');
var characterSelectTemplate = "<div id='character-select'></div>";
var characterSelection;
var selectFeedbackDiv = $('#select-feedback');
var selectFeedbackTemplate = "<div id='select-feedback'></div>";
var errorMsg = "<div class='feedback-msg'><span>Sorry Try again.</span><img src='./assets/images/close.png' class='close-btn'></div>";
var successMsg = "<div class='feedback-msg'><span>You got it!</span><img src='./assets/images/close.png' class='close-btn'></div>";

/*   Functions   */
function getCharacterList() {
	characterList = $('.board').data('characters');
	// console.log(characterList);
}

// Click Handler
function boardListener() {
	$('.board-img-container').click(function (event) {
		if (selectFeedbackDiv.length == true) {
			closeSelectFeedback();
		}
		clickPositionX = event.offsetX;
		clickPositionY = event.offsetY;
		console.log([clickPositionX, clickPositionY]); /* Debuging Tool */
		createCharacterSelect(clickPositionX, clickPositionY);
	});
}

function createCharacterSelect(x, y) {
	if (characterSelectDiv.length == false) {
		$(".board-container").append(characterSelectTemplate);
		characterSelectDiv = $('#character-select');
		addCharacterOptions();
		characterSelectDiv.css({
			position: "absolute",
			padding: "10px",
			left: x,
			border: "2px solid white",
			backgroundColor: "#b0e0e6"
		});
		if (y > 500) {
			console.log(y);
			console.log(characterSelectDiv.outerHeight());
			y -= characterSelectDiv.outerHeight();
			console.log(y);
		}
		characterSelectDiv.css({
			top: y
		});
	} else {
		closeCharacterSelect();
	}
}

function addCharacterOptions() {
	characterSelectDiv.empty();
	characterList.forEach(function (element, index) {
		characterSelectDiv.append(createOptionTemplate(element.name));
	});
	buttonListener();
	characterOptionButtons = $('button.character-option');
	characterOptionButtons.css({
		display: "block",
		width: "100%",
		textAlign: "center"
	})
}

function createOptionTemplate(name) {
	var template = "<button class='character-option' value='" + name + "'>" + name.capitalize() + "</button>"
	return template;
}

function buttonListener() {
	$('.character-option').click(function (event) {
		characterSelection = event.target.value;
		checkCharacterSelection(characterSelection);
		closeCharacterSelect();
		checkWin();
	})
}

function checkCharacterSelection(characterName) {
	var characterObject = getCharacterObject(characterName);
	characterObject = getCharacterObject(characterName); /* temp*/
	if (checkClickX(characterObject) && checkClickY(characterObject)) {
		selectFeedback(clickPositionX, clickPositionY, true);
		console.log('correct');
		removeCharacter(characterName);
		coverCharacter(characterObject);
	} else {
		selectFeedback(clickPositionX, clickPositionY, false);
		console.log("incorrect");
	}
}

function getCharacterObject(name) {
	var object;
	characterList.forEach(function (obj) {
		if (obj.name === name) {
			object = obj;
		}
	});
	return object;
}

function checkClickX(charObj) {
	return between(clickPositionX, charObj.x_pos, charObj.x_pos + charObj.width);
}

function checkClickY(charObj) {
	return between(clickPositionY, charObj.y_pos, charObj.y_pos + charObj.height);
}

function between(number, min, max) {
	return (number >= min && number <= max);
}

function removeCharacter(characterName) {
	// Removes character thumbnail
	$("#" + characterName).hide();
	characterList = $.grep(characterList, function (n) {
		return (n.name != characterName);
	});
}

function coverCharacter(charObj) {
	$('.board-container').append("<div id='" + charObj.name + "-cover'></div>");
	$("#" + charObj.name + "-cover").css({
		position: "absolute",
		top: charObj.y_pos,
		left: charObj.x_pos,
		width: charObj.width,
		height: charObj.height,
		backgroundColor: "black",
		opacity: ".5"
	});
}

function closeCharacterSelect() {
	characterSelectDiv.remove();
	characterSelectDiv = $('#character-select');
}

function selectFeedback(x, y, result) {
	$(".board-container").append(selectFeedbackTemplate);
	selectFeedbackDiv = $('#select-feedback');
	selectFeedbackDiv.empty();
	if (result) {
		selectFeedbackDiv.append(successMsg);
	} else {
		selectFeedbackDiv.append(errorMsg);
	}
	selectFeedbackDiv.css({
		position: "absolute",
		padding: "10px",
		left: x,
		border: "2px solid white",
		backgroundColor: "#b0e0e6"
	});
	if (y > 500) {
		console.log(y);
		console.log(selectFeedbackDiv.outerHeight());
		y -= selectFeedbackDiv.outerHeight();
	}
	selectFeedbackDiv.css({
		top: y
	});
	$('.close-btn').click(function () {
		closeSelectFeedback();
	})
}

function closeSelectFeedback() {
	selectFeedbackDiv.remove();
	selectFeedbackDiv = $('#select-feedback');
}

function checkWin() {
	if (characterList.length === 0) {
		timeEnd = Date.now();
		timeTotal = ((timeEnd - timeStart) / 1000);
		postRequest();
	}
}

function postRequest() {
	$.post('/scores', {
		id: window.location.href.split("/").pop(),
		time: timeTotal
	});
}

$(document).ready(function () {
	timeStart = Date.now();
	getCharacterList();
	boardListener();
});