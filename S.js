(function(){
    "use strict";
	var s = String.prototype;

	//local functions
	
	//the function that will get called from inside substrSplit
	var _getSubstr = function(startingChar, charNum, array){
	    var string = "";
	    for(var i = startingChar; i < startingChar + charNum; i++){
	       	string += array[i];
	    }
	        //alert(string);
	    return string;
	}

        //the function that will split a string into an array of 
        //substrings with a specified length
	var _substrSplit = function(string, spacing){
    	var charArray = string.split('');
		    
	    //the array containing the substrings
	    var spacedArray = [];
	            
	   //loop will create the array of substrings
	    for(var i = spacing - 1, a = 0; i < charArray.length; i += spacing, a++){
	        spacedArray[a] = _getSubstr(i-(spacing-1), spacing, charArray);
	    } 
	
	    //if the character array wasn't perfectly 
	    //divisible by the specified spacing, the 
	    //last values are added to spacedArray here
	    if(spacedArray.length * spacing < charArray.length){
	
                //the spacing variable is redefined to be the remaining charArray values
		spacing = charArray.length - spacedArray.length * spacing;
		
		//these remaining values are turned into a string then pushed to the spacedArray
		var remainingString = _getSubstr(charArray.length - (spacing),spacing,charArray);
		spacedArray.push(remainingString);
	    }
            return spacedArray;
	}
    
    //the Fisher-Yates algorithm to shuffle an array
	var fisherYates = function(array){
        for (var i = 0; i < array.length; i++) {
	    var a = Math.floor(Math.random() * i);
	    var temp = array[i];
	    array[i] = array[a];
	    array[a] = temp;
        }
        return array;
	}
    
    //prototypes

    if (!s.delimiter) {
       	s.delimiter =  function(delimiter, spacing){
	    if(arguments.length === 0)
	    {
		return this.split('').join(','); 
	    }
	    else if(spacing === undefined)
	    {
		return this.split('').join(delimiter); 
	    }
	    else if(isNaN(spacing)){
		return this;
	    }
	    else
	    {	
	        return _substrSplit(this, spacing).join(delimiter);
            }
	}
    }
	
	if (!s.reverse) {
	    s.reverse =  function(words){
	        if (words !== "words"){
		    return this.split('').reverse().join('');
		}
		else{
                    return this.split(/\s/g).reverse().join(' ');
		}
	    }
        }
        if (!s.noSpaces) {
	    s.noSpaces = function(){
		return this.replace(/\s/g, '');
	    }
	}

	if (!s.tidySpaces) {
	    s.tidySpaces = function(){
		return this.replace(/\s{2,}/g, ' ');
	    }
        }  

        if (!s.scramble) {
	    s.scramble = function(){
		var scrambled = fisherYates(this.split(''));
		return scrambled.join('');
	    }
        }

    if (!s.multiply) {
    	s.multiply = function(multiplication){
	    var temp = "";
	    for(var i = 0; i < multiplication; i++){
                temp += this;
	    }
	    temp += this;
	    return temp;
        }
    }
})();
