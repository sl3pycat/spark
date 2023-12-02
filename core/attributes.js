spark.attributes = {}
spark.addAttr = function(rx, func){
  spark.attributes[rx]=func
}


spark.attr = function(tag, attr){
  //test if tag is connected to dom
  if(!tag.isConnected)return;
  //test if tag is preservable
  let pre = ["SET","GET","DEFINE","VAR"]
  if(pre.includes(tag.tagName))return;
  //iterate through defined attributes (to be revamped for performance)
  Object.entries(spark.attributes).forEach(entry=>{
    //attribute mutations can also remove element from so just to be safe
    if(!tag.isConnected)return;
    //test if an attribute matches one of the defined regexp attrs
    if(new RegExp(entry[0]).test(attr))entry[1](tag,attr)
  })
  
}