spark.lists={}
spark.tag("list","closing",function(tag){
  //get the name of the list
  let name = tag.attributes[0].name
  //init list if non existing
  if(!spark.lists[name])spark.lists[name]=[]
  //get list
  let list = spark.lists[name]
  
  //push value to list
  if(tag.hasAttribute("push"))list.push(tag.getAttribute("push"))
  
  //push value to top of list
  if(tag.hasAttribute("unshift"))list.unshift(tag.getAttribute("unshift"))
  
  //empty list
  if(tag.hasAttribute("empty"))list.splice(0,list.length);
  
  //add multiple items to a list
  if(tag.hasAttribute("add"))list.push(...tag.getAttribute("add").split(","))
  
  //insert items into the list
  if(tag.hasAttribute("insert")){
    let pos = tag.getAttribute("at")||list.length.toString()
    list.splice(pos,0,tag.getAttribute("insert"))
  }
  
  //remove item from list
  if(tag.hasAttribute("remove")){
    let pos = tag.getAttribute("remove")||list.length.toString()
    list.splice(pos,1)
  }

  
  spark.synclist(name)
  
  tag.remove()
})

//sync lists
spark.synclist = function(name){
  document.querySelectorAll(`[bind-list="${name}"]`).forEach(entry=>{
    //set template
    if(!entry.hasAttribute("template")){
      entry.setAttribute("template",entry.innerHTML)
      entry.innerHTML=""}
    let temp = entry.getAttribute("template")
    //format data into dom
    entry.innerHTML = spark.lists[name].map((value,index)=>{
      return spark.format(temp, {value, index:index.toString(), "value-decoded":decodeURIComponent(value)},name)
    }).join("")
  })
}

spark.addAttr("^bind\\-list$",function(tag,attr){
  let name = tag.getAttribute(attr)
  //init list if non existing
  if(!spark.lists[name])spark.lists[name]=[]
  //sync to list
  spark.synclist(name)
})