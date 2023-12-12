spark.timers={}
spark.tag("timer","default",function(tag){
  let parent = tag.parentElement
  if(!tag.hasAttribute("after"))tag.setAttribute("after","0")
    spark.timers[tag.id||"default"]=setTimeout(()=>{
      parent.insertAdjacentHTML("BEFOREEND",tag.innerHTML)
      if(tag.hasAttribute("every"))spark.timers[tag.id||"default"]=setInterval(()=>parent.insertAdjacentHTML("BEFOREEND",tag.innerHTML),tag.gfa("every")-0)
    }, tag.gfa("after")-0)
  
  tag.remove()
})