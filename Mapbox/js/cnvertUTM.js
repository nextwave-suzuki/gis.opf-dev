function cnvKeiidoToUtm(lon,lat){
	var intLon = parseFloat(lon);
	var intLat = parseFloat(lat);
	var zone = lonlat2PointName(intLon,intLat)
	return zone;
}

function getDefName(zoneNo){
	var defName = '';
	if ( !zoneNo ) return defName;
	switch( zoneNo + '' )
	{
		case '51':defName = 'EPSG:3097';break;
		case '52':defName = 'EPSG:3098';break;
		case '53':defName = 'EPSG:3099';break;
		case '54':defName = 'EPSG:3100';break;
		case '55':defName = 'EPSG:3101';break;
		case '56':defName = 'SR-ORG:1235';break;
	}
	return defName;
}

function lonlat2PointName(lon,lat){
//経緯度からUTMコードを返す
	var zone = Math.floor(lon/6) + 31;
	var defName = getDefName(zone);
	if ( defName == '' ) return '';

	var projUTM = new Proj4js.Proj(defName);
	var latLonPoint = new Proj4js.Point(lon,lat);
	var PROJ_WORLD = new Proj4js.Proj('EPSG:4326');

	var utmPoint = Proj4js.transform(PROJ_WORLD,projUTM,latLonPoint);

		return getUTMPointName(
			zone,
			getUTMMark(lat),
			utmPoint.x,
			utmPoint.y,
			4
		);
}

function getUTMPointName( zone, mark, x, y, num, hideNumber){
	var x10mNumber = '';
	var y10mNumber = '';
	if ( !hideNumber && x && y )
	{
		var zero = '';
		for ( var i=0; i<num; i++ )
		{
			zero += '0';
		}
		x10mNumber = zero + Math.floor( x /10 );
		x10mNumber = x10mNumber.substr(x10mNumber.length - num, num);
		y10mNumber = zero + Math.floor( y /10 );
		y10mNumber = y10mNumber.substr(y10mNumber.length - num, num);
	}

	var letters = findGridLetters(zone, Math.floor( y /10 ) * 10, Math.floor( x /10 ) * 10);

	return zone + mark + letters + x10mNumber + y10mNumber;
}

function getUTMMark(lat){
	var mark ='';
	if(lat >= 16 && lat < 24) {
		mark = "Q";
	} else if(lat >= 24 && lat < 32) {
		mark = "R";
	} else if(lat >= 32 && lat < 40) {
		mark = "S";
	} else if(lat >= 40 && lat < 48) {
		mark = "T";
	} else if(lat >= 48 && lat < 56) {
		mark = "U";
	}
	return mark;
}
var BLOCK_SIZE = 100000;
var GRIDSQUARE_SET_ROW_SIZE = 20;
var GRIDSQUARE_SET_COL_SIZE = 8;

function findGridLetters(zoneNum, northing, easting){
	zoneNum  = parseInt(zoneNum);
	northing = parseFloat(northing);
	easting  = parseFloat(easting);
	row = 1;
	// northing coordinate to single-meter precision
	north_1m = Math.round(northing);

	// Get the row position for the square identifier that contains the point
	while (north_1m >= BLOCK_SIZE) {
		north_1m = north_1m - BLOCK_SIZE;
		row++;
	}

	// cycle repeats (wraps) after 20 rows
	row = row % GRIDSQUARE_SET_ROW_SIZE;
	col = 0;

	// easting coordinate to single-meter precision
	east_1m = Math.round(easting);

	// Get the column position for the square identifier that contains the point
	while (east_1m >= BLOCK_SIZE){
		east_1m = east_1m - BLOCK_SIZE;
		col++;
	}

	// cycle repeats (wraps) after 8 columns
	col = col % GRIDSQUARE_SET_COL_SIZE;

	return lettersHelper(findSet(zoneNum), row, col);
}
function findSet(zoneNum){
	zoneNum = parseInt(zoneNum);
	zoneNum = zoneNum % 6;
	switch (zoneNum) {
		case 0:return 6;break;
		case 1:return 1;break;
		case 2:return 2;break;
		case 3:return 3;break;
		case 4:return 4;break;
		case 5:return 5;break;
		default:return -1;break;
	}
}

function lettersHelper(set, row, col){
	// handle case of last row
	if (row == 0) {
		row = GRIDSQUARE_SET_ROW_SIZE - 1;
	}else {
		row--;
	}

	if (col == 0) {
		col = GRIDSQUARE_SET_COL_SIZE - 1;
	}else {
		col--;
	}

	switch(set) {
	case 1:
		l1="ABCDEFGH";              // column ids
		l2="ABCDEFGHJKLMNPQRSTUV";  // row ids
		return l1.charAt(col) + l2.charAt(row);
		break;
	case 2:
		l1="JKLMNPQR";
		l2="FGHJKLMNPQRSTUVABCDE";
		return l1.charAt(col) + l2.charAt(row);
		break;
	case 3:
		l1="STUVWXYZ";
		l2="ABCDEFGHJKLMNPQRSTUV";
		return l1.charAt(col) + l2.charAt(row);
		break;
	case 4:
		l1="ABCDEFGH";
		l2="FGHJKLMNPQRSTUVABCDE";
		return l1.charAt(col) + l2.charAt(row);
		break;
	case 5:
		l1="JKLMNPQR";
		l2="ABCDEFGHJKLMNPQRSTUV";
		return l1.charAt(col) + l2.charAt(row);
		break;
	case 6:
		l1="STUVWXYZ";
		l2="FGHJKLMNPQRSTUVABCDE";
		return l1.charAt(col) + l2.charAt(row);
		break;
	}
}
