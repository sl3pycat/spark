spark.tag("cancel","closing",function(tag){
  if(tag.hasAttribute("timer")){
    clearTimeout(spark.timers[tag.gfa("timer")||"default"])
    clearInterval(spark.timers[tag.gfa("timer")||"default"])
  }
  tag.remove()
})