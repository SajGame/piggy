#pragma strict
import System;
import System.Reflection;

function Start () {

    /*var t : Type = System.String;

    // Iterate over all the methods from the System.String class and display
    // return type and parameters.
    // This reveals all the things you can do with a String.
    
    for (var mi : MethodInfo in t.GetMethods()) {
    
        var s : System.String = System.String.Format("{0} {1} (", mi.ReturnType, mi.Name);
        var pars : ParameterInfo[] = mi.GetParameters();
    
        for (var j : int = 0; j < pars.Length; j++) {
            s = String.Concat(s, String.Format("{0}{1}", pars[j].ParameterType,
                (j == pars.Length-1) ? "" : ", "));
        }
        s = String.Concat(s, ")");
        Debug.Log(s);
    }*/
    var levelData : String = '';
	levelData = PlayerPrefs.GetString('levelData');
	updateLlevelData(levelData, 5, 2, true);
}

function updateLlevelData(levelData:String, level:Int32, star:Int32, unlockNextLevel:Boolean){
	var result:String = '';
	var levelDataArray = levelData.Split(","[0]);
	for(var i=0; i< levelDataArray.length; i++){
		if(i== level-1){
			levelDataArray[i] = level+':'+star;
			if(unlockNextLevel){
				if(i+1 <= levelDataArray.length){
					var nextLevel = levelDataArray[i+1].Split(":"[0]);
					levelDataArray[i+1] = "1:"+nextLevel[1];
				}
			}
		}
		if(result != ''){
			result += ','; 
		}
		result += levelDataArray[i]; 


	}
    return result;
}