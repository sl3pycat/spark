spark.tags={}
spark.tag = function(tagName, type, def){
  //stores a definition of a custom component
  spark.tags[tagName.toUpperCase()]={type, def}
}

spark.test = function(tag){
  //ignore if tag is floating
  if(!tag.isConnected)return;
  
  let name = tag.tagName.toUpperCase()
  if(name in spark.tags){
    
    //creates a tag with an opening and closing
    if(spark.tags[name].type=="default"){
      spark.tags[name].def(tag)
    }
    
    //creates a self closing tag
    if(spark.tags[name].type=="closing"){
     let kids = [...(tag.childNodes||[])]
     tag.innerHTML=""
     tag.after(...kids)
     spark.tags[name].def(tag)
     spark.mutate(...(kids.filter(entry=>entry.tahName)))
    }
    
  }
}