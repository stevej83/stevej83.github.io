addEvent(window, 'load', initForm);

var highlight_array = new Array();

function initForm(){
	initializeFocus();
	var activeForm = document.getElementsByTagName('form')[0];
	addEvent(activeForm, 'submit', disableSubmitButton);
	ifInstructs();
	showRangeCounters();
}

function disableSubmitButton() {
	// document.getElementById('saveForm').disabled = true;
}

// for radio and checkboxes, they have to be cleared manually, so they are added to the
// global array highlight_array so we dont have to loop through the dom every time.
function initializeFocus(){
	var fields = getElementsByClassName(document, "*", "field");
	
	for(i = 0; i < fields.length; i++) {
	    if (fields[i].type == 'radio' || fields[i].type == 'checkbox') {
	        //fields[i].onclick = function() {highlight(this, 4);};
	        fields[i].onfocus = function () { highlight(this, 4); };
		}
		else if(fields[i].className.match('addr') || fields[i].className.match('other')) {
			fields[i].onfocus = function(){highlight(this, 3);};
		}
		else {
			fields[i].onfocus = function(){highlight(this, 2); };
		}
	}
}

function highlight(el, depth) {
    if (depth == 2) { var fieldContainer = el.parentNode.parentNode; }
    if (depth == 3) { var fieldContainer = el.parentNode.parentNode.parentNode; }
    if (depth == 4) { var fieldContainer = el.parentNode.parentNode.parentNode.parentNode; }
    
    //208
    if (el.id == 'Field208_0') {
        document.getElementById("badTxt208").value = "";
        addClassName(fieldContainer, 'focusedGood', true);
        var focusedFields = getElementsByClassName(document, "*", "focusedGood");
    }
    if (el.id == 'Field208_1' || el.id == 'Field208_2') {
        document.getElementById("badTxt208").value = "";
        document.getElementById("goodTxt208").value = "";
        addClassName(fieldContainer, 'focusedGood', true);
        var focusedFields = getElementsByClassName(document, "*", "focusedGood");
    }
    if (el.id == 'Field208_3' || el.id == 'Field208_4') {
        document.getElementById("badTxt208").value = "";
        document.getElementById("goodTxt208").value = "";
        addClassName(fieldContainer, 'focused', true);
        var focusedFields = getElementsByClassName(document, "*", "focused");
    }
    if (el.id == 'Field208_5' || el.id == 'Field208_6' || el.id == 'Field208_7' || el.id == 'Field208_8' || el.id == 'Field208_9') {
        document.getElementById("goodTxt208").value = "";
        addClassName(fieldContainer, 'focusedBad', true);
        var focusedFields = getElementsByClassName(document, "*", "focusedBad");
    }

    //218
    if (el.id == 'Field218_0') {
        document.getElementById("badTxt218").value = "";
        addClassName(fieldContainer, 'focusedGood', true);
        var focusedFields = getElementsByClassName(document, "*", "focusedGood");
    }
    if (el.id == 'Field218_1' || el.id == 'Field218_2') {
        document.getElementById("badTxt218").value = "";
        document.getElementById("goodTxt218").value = "";
        addClassName(fieldContainer, 'focusedGood', true);
        var focusedFields = getElementsByClassName(document, "*", "focusedGood");
    }
    if (el.id == 'Field218_3' || el.id == 'Field218_4') {
        document.getElementById("badTxt218").value = "";
        document.getElementById("goodTxt218").value = "";
        addClassName(fieldContainer, 'focused', true);
        var focusedFields = getElementsByClassName(document, "*", "focused");
    }
    if (el.id == 'Field218_5' || el.id == 'Field218_6' || el.id == 'Field218_7' || el.id == 'Field218_8' || el.id == 'Field218_9') {
        document.getElementById("goodTxt218").value = "";
        addClassName(fieldContainer, 'focusedBad', true);
        var focusedFields = getElementsByClassName(document, "*", "focusedBad");
    }


    //228
    if (el.id == 'Field228_0') {
        document.getElementById("badTxt228").value = "";
        addClassName(fieldContainer, 'focusedGood', true);
        var focusedFields = getElementsByClassName(document, "*", "focusedGood");
    }
    if (el.id == 'Field228_1' || el.id == 'Field228_2') {
        document.getElementById("badTxt228").value = "";
        document.getElementById("goodTxt228").value = "";
        addClassName(fieldContainer, 'focusedGood', true);
        var focusedFields = getElementsByClassName(document, "*", "focusedGood");
    }
    if (el.id == 'Field228_3' || el.id == 'Field228_4') {
        document.getElementById("badTxt228").value = "";
        document.getElementById("goodTxt228").value = "";
        addClassName(fieldContainer, 'focused', true);
        var focusedFields = getElementsByClassName(document, "*", "focused");
    }
    if (el.id == 'Field228_5' || el.id == 'Field228_6' || el.id == 'Field228_7' || el.id == 'Field228_8' || el.id == 'Field228_9') {
        document.getElementById("goodTxt228").value = "";
        addClassName(fieldContainer, 'focusedBad', true);
        var focusedFields = getElementsByClassName(document, "*", "focusedBad");
    }

    //238
    if (el.id == 'Field238_0') {
        document.getElementById("badTxt238").value = "";
        addClassName(fieldContainer, 'focusedGood', true);
        var focusedFields = getElementsByClassName(document, "*", "focusedGood");
    }
    if (el.id == 'Field238_1' || el.id == 'Field238_2') {
        document.getElementById("badTxt238").value = "";
        document.getElementById("goodTxt238").value = "";
        addClassName(fieldContainer, 'focusedGood', true);
        var focusedFields = getElementsByClassName(document, "*", "focusedGood");
    }
    if (el.id == 'Field238_3' || el.id == 'Field238_4') {
        document.getElementById("badTxt238").value = "";
        document.getElementById("goodTxt238").value = "";
        addClassName(fieldContainer, 'focused', true);
        var focusedFields = getElementsByClassName(document, "*", "focused");
    }
    if (el.id == 'Field238_5' || el.id == 'Field238_6' || el.id == 'Field238_7' || el.id == 'Field238_8' || el.id == 'Field238_9') {
        document.getElementById("goodTxt238").value = "";
        addClassName(fieldContainer, 'focusedBad', true);
        var focusedFields = getElementsByClassName(document, "*", "focusedBad");
    }

    //248
    if (el.id == 'Field248_0') {
        document.getElementById("badTxt248").value = "";
        addClassName(fieldContainer, 'focusedGood', true);
        var focusedFields = getElementsByClassName(document, "*", "focusedGood");
    }
    if (el.id == 'Field248_1' || el.id == 'Field248_2') {
        document.getElementById("badTxt248").value = "";
        document.getElementById("goodTxt248").value = "";
        addClassName(fieldContainer, 'focusedGood', true);
        var focusedFields = getElementsByClassName(document, "*", "focusedGood");
    }
    if (el.id == 'Field248_3' || el.id == 'Field248_4') {
        document.getElementById("badTxt248").value = "";
        document.getElementById("goodTxt248").value = "";
        addClassName(fieldContainer, 'focused', true);
        var focusedFields = getElementsByClassName(document, "*", "focused");
    }
    if (el.id == 'Field248_5' || el.id == 'Field248_6' || el.id == 'Field248_7' || el.id == 'Field248_8' || el.id == 'Field248_9') {
        document.getElementById("goodTxt248").value = "";
        addClassName(fieldContainer, 'focusedBad', true);
        var focusedFields = getElementsByClassName(document, "*", "focusedBad");
    }

    //258
    if (el.id == 'Field258_0') {
        document.getElementById("badTxt258").value = "";
        addClassName(fieldContainer, 'focusedGood', true);
        var focusedFields = getElementsByClassName(document, "*", "focusedGood");
    }
    if (el.id == 'Field258_1' || el.id == 'Field258_2') {
        document.getElementById("badTxt258").value = "";
        document.getElementById("goodTxt258").value = "";
        addClassName(fieldContainer, 'focusedGood', true);
        var focusedFields = getElementsByClassName(document, "*", "focusedGood");
    }
    if (el.id == 'Field258_3' || el.id == 'Field258_4') {
        document.getElementById("badTxt258").value = "";
        document.getElementById("goodTxt258").value = "";
        addClassName(fieldContainer, 'focused', true);
        var focusedFields = getElementsByClassName(document, "*", "focused");
    }
    if (el.id == 'Field258_5' || el.id == 'Field258_6' || el.id == 'Field258_7' || el.id == 'Field258_8' || el.id == 'Field258_9') {
        document.getElementById("goodTxt258").value = "";
        addClassName(fieldContainer, 'focusedBad', true);
        var focusedFields = getElementsByClassName(document, "*", "focusedBad");
    }

    //268
    if (el.id == 'Field268_0') {
        document.getElementById("badTxt268").value = "";
        addClassName(fieldContainer, 'focusedGood', true);
        var focusedFields = getElementsByClassName(document, "*", "focusedGood");
    }
    if (el.id == 'Field268_1' || el.id == 'Field268_2') {
        document.getElementById("badTxt268").value = "";
        document.getElementById("goodTxt268").value = "";
        addClassName(fieldContainer, 'focusedGood', true);
        var focusedFields = getElementsByClassName(document, "*", "focusedGood");
    }
    if (el.id == 'Field268_3' || el.id == 'Field268_4') {
        document.getElementById("badTxt268").value = "";
        document.getElementById("goodTxt268").value = "";
        addClassName(fieldContainer, 'focused', true);
        var focusedFields = getElementsByClassName(document, "*", "focused");
    }
    if (el.id == 'Field268_5' || el.id == 'Field268_6' || el.id == 'Field268_7' || el.id == 'Field268_8' || el.id == 'Field268_9') {
        document.getElementById("goodTxt268").value = "";
        addClassName(fieldContainer, 'focusedBad', true);
        var focusedFields = getElementsByClassName(document, "*", "focusedBad");
    }

    //278
    if (el.id == 'Field278') {
        addClassName(fieldContainer, 'focused', true);
        var focusedFields = getElementsByClassName(document, "*", "focused");
    }
}

function ifInstructs(){
	var container = document.getElementById('public');
	if(container){
		removeClassName(container,'noI');
		var instructs = getElementsByClassName(document,"*","instruct");
		if(instructs == ''){
			addClassName(container,'noI',true);
		}
		if(container.offsetWidth <= 450){
			addClassName(container,'altInstruct',true);
		}
	}
}

function showRangeCounters(){
	counters = getElementsByClassName(document, "em", "currently");
	for(i = 0; i < counters.length; i++) {
		counters[i].style.display = 'inline';
	}
}

function validateRange(ColumnId, RangeType) {
	if(document.getElementById('rangeUsedMsg'+ColumnId)) {
		var field = document.getElementById('Field'+ColumnId);
		var msg = document.getElementById('rangeUsedMsg'+ColumnId);

		switch(RangeType) {
			case 'character':
				msg.innerHTML = field.value.length;
				break;
				
			case 'word':
				var val = field.value;
				val = val.replace(/\n/g, " ");
				var words = val.split(" ");
				var used = 0;
				for(i =0; i < words.length; i++) {
					if(words[i].replace(/\s+$/,"") != "") used++;
				}
				msg.innerHTML = used;
				break;
				
			case 'digit':
				msg.innerHTML = field.value.length;
				break;
		}
	}
}

/*--------------------------------------------------------------------------*/

//http://www.robertnyman.com/2005/11/07/the-ultimate-getelementsbyclassname/
function getElementsByClassName(oElm, strTagName, strClassName){
	var arrElements = (strTagName == "*" && oElm.all)? oElm.all : oElm.getElementsByTagName(strTagName);
	var arrReturnElements = new Array();
	strClassName = strClassName.replace(/\-/g, "\\-");
	var oRegExp = new RegExp("(^|\\s)" + strClassName + "(\\s|$)");
	var oElement;
	for(var i=0; i<arrElements.length; i++){
		oElement = arrElements[i];		
		if(oRegExp.test(oElement.className)){
			arrReturnElements.push(oElement);
		}	
	}
	return (arrReturnElements)
}

//http://www.bigbold.com/snippets/posts/show/2630
function addClassName(objElement, strClass, blnMayAlreadyExist){
 
      objElement.className = strClass;
      
}

//http://www.bigbold.com/snippets/posts/show/2630
function removeClassName(objElement, strClass){
   if ( objElement.className ){
      var arrList = objElement.className.split(' ');
      var strClassUpper = strClass.toUpperCase();
      for ( var i = 0; i < arrList.length; i++ ){
         if ( arrList[i].toUpperCase() == strClassUpper ){
            arrList.splice(i, 1);
            i--;
         }
      }
      objElement.className = arrList.join(' ');
   }
}

//http://ejohn.org/projects/flexible-javascript-events/
function addEvent( obj, type, fn ) {
  if ( obj.attachEvent ) {
    obj["e"+type+fn] = fn;
    obj[type+fn] = function() { obj["e"+type+fn]( window.event ) };
    obj.attachEvent( "on"+type, obj[type+fn] );
  } 
  else{
    obj.addEventListener( type, fn, false );	
  }
}

