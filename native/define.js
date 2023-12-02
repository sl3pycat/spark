spark.define = {}
spark.tag("define","default",function(tag){
  //removes the define tag
  tag.remove()
  
  //handle function
  if(tag.hasAttribute("func")||tag.hasAttribute("function"))spark.define.function(tag)
  
  //handle events
  if(tag.hasAttribute("event"))spark.define.event(tag)
  
  
})