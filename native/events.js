//instantly executes code
spark.addAttr("^execute$",function(tag,attr){
  let value = tag.getAttribute("execute")
  if(spark.events[value])value=spark.events[value]
  
  //format attribute values
  value = spark.format(value,spark.sumarize(tag),tag.id||"this")
  
  tag.insertAdjacentHTML("beforeend",value)
  tag.removeAttribute("execute")
})

//creates event shortcut
spark.events = {}
spark.define.event = function(tag){
  spark.events[tag.getAttribute("event")]=tag.innerHTML
}

spark.addAttr("^on\\-",function(tag,attr){
  let a = attr.split("-")
  a.shift()
  let ename = a.shift()
  tag["on"+ename]=event=>{
    
    //test for extensions
    //clears the element 
    if(a.includes("clear")){
      tag.innerText=""
      tag.value=""
    }
    //prevents default behaviour
    if(a.includes("prevent"))event.preventDefault()
    //event only executes once
    if(a.includes("once")){
      tag["on"+ename]=()=>{}
      tag.removeAttribute(attr)
    }
    
    tag.setAttribute("execute",tag.getAttribute(attr))
  }
  
  //custom event for inputs
  if(ename=="enter")tag.onkeyup=event=>{
      if(event.keyCode==13&&tag.value.length>0)tag.setAttribute("execute",tag.getAttribute(attr))
    }
})