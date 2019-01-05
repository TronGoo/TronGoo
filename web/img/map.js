var $map = $('table tbody');
var mapPosition = {};
var $tileTemplate = $('.tile').remove();
var mapData = [1, 2, 3, 4, 5, 6, 10, 14, 1, 2, 3, 4, 5, 6, 10, 14, 1, 2, 3, 4, 5, 6, 10, 14, 1, 2, 3, 4, 5, 6, 10, 14,
               1, 2, 3, 4, 5, 6, 10, 14, 1, 2, 3, 4, 5, 6, 10, 14, 1, 2, 3, 4, 5, 6, 10, 14, 1, 2, 3, 4, 5, 6, 10, 14];
var mapSize = Math.floor(Math.sqrt(mapData.length));

$(function(){
    window.pointerEventsPolyfill();
});

function getRow(y){
	if($map.find('.row-'+y).length > 0){
		return $map.find('.row-'+y);
	}
	else{
		return createRow(y);
	}
}

function createRow(y){
	return $('<tr>').addClass('row-'+y).css({
		transform: 'translateY('+(y*6)+'em)'
	}).appendTo($map);
}

function getCol(y,x){
	var $row = getRow(y);
	if($row.find('.col-'+x).length > 0){
		return $row.find('.col-'+x);
	}
	else{
		return createCol(y,x);
	}
}

function createCol(y,x){
	var $row = getRow(y);
	return $('<td>').addClass('col-'+x).css({
		transform: 'translateX('+(x*6)+'em)'
	}).appendTo($row);
}

function getTile(x,y){
	var $tile = getCol(y,x).find('.tile');
	if($tile.length > 0){
		return $tile;
	}
	else{
		return createTile(x,y,0);
	}
}

function createTile(x,y,tile){
	var $tile = getCol(y,x).find('.tile');
	if($tile.length == 0){
		$tile = $tileTemplate.clone();
		$tile.css('z-index',(1000+x+y)*2);
		$tile.appendTo(getCol(y,x));
	}
	$tile.find('.tileTemplate').removeClass('tile-0').addClass('tile-'+tile);
	return $tile;
}

function setTile(x,y,tile){
	var $tile = getTile(x,y);
	$tile.find('.tileTemplate').removeClass('tile-0').addClass('tile-'+tile);
}

function setTileHeight(x,y,height){
	var $tile = getTile(x,y);
	$tile.css({
		transform: 'translate3d('+(height)+'em, '+(height)+'em, 0em)'
	});
}

function hideTile(x,y){
	getTile(x,y).addClass('hide');
}

function showTile(x,y){
	getTile(x,y).removeClass('hide');
}

function toggleTile(x,y){
	getTile(x,y).toggleClass('hide');
}

function setSize(w,h,tile){
	for (var y = -h/2; y < h/2; y++) {
		for (var x = -w/2; x < w/2; x++) {
			createTile(x,y,tile);
		};
	};
}

function setMapPosition(x,y,animate){
	mapPosition.x = x;
	mapPosition.y = y;

	$el = $('table')
	$el[(animate)? 'animate' : 'css']({
		left: ((window.innerWidth/2) - $el.width()/2) + x,
		top: ((window.innerHeight/2) - $el.height()/2) + y
	});
}

function init(){
	//create map
	for (var y = 0; y < mapSize; y++) {
		for (var x = 0; x < mapSize; x++) {
			setTile(x-(mapSize/2),y-(mapSize/2),mapData[(y*mapSize) + x]-1)
		};
	};

	var mousePos = {};
	var mapPos = {};
	var dragging = false;
	$(document).mousedown(function(event) {
		mousePos.x = event.pageX;
		mousePos.y = event.pageY;
		mapPos.x = mapPosition.x;
		mapPos.y = mapPosition.y;
		dragging = true;
	}).mousemove(function(event) {
		if(dragging){
			setMapPosition(mapPos.x + (event.pageX - mousePos.x), mapPos.y + (event.pageY - mousePos.y));
		}
	}).mouseup(function(event) {
		dragging = false;
	});

	var x = -(mapSize/2);
	var y = -(mapSize/2);
	var func = function(){
		for (var i = 0; i < 20; i++) {
			var x = Math.floor(Math.random() * mapSize)-(mapSize/2);
			var y = Math.floor(Math.random() * mapSize)-(mapSize/2);
			var tile = getTile(x,y);

			if(tile.hasClass('hide')){
				showTile(x,y);
			}
		};
	}
	setInterval(func,100);
}

init();

$(window).resize(function(event) {
	setMapPosition(0,0);
});
$(window).trigger('resize');



$('.tile').mouseover(function(event) {
	$(this).addClass('raise');
});

$('.tile').mouseout(function(event) {
	$(this).removeClass('raise');
});

$('.tile').on('click', function(event) {
	console.log("click");
});
