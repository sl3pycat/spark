spark.tag("set","closing",function(tag){
  //set themes
  if(tag.hasAttribute("theme")||tag.hasAttribute("hue")){
    spark.theme(tag.getAttribute("theme"),tag.getAttribute("hue"))
    return tag.remove()
  }
  
  //gets the appropriate targets
  let targets = []
  if(tag.hasAttribute("target"))targets.push(document.querySelector(tag.getAttribute("target")))
  else if(tag.hasAttribute("targets"))targets.push(...document.querySelectorAll(tag.getAttribute("targets")))
  else targets.push(tag.parentElement)
  targets=targets.filter(e=>e)
  
  //removes attributes refering to the target
  tag.removeAttribute("target")
  tag.removeAttribute("targets")
  tag.remove()
  
  //creates a collection of attributes
  let attrs = {} 
  ;[...tag.attributes].forEach(entry=>attrs[entry.name]=entry.value)
  
  //iterates through targets to set new values
  for(let target of targets){
    Object.entries(attrs).forEach(entry=>{
      //set styling ( cannot use default style mechanisms due to naming being invalid(dom exeption))
      if(entry[0].startsWith("-"))target.style[entry[0].replace("-","")]=entry[1]
      //set text
      else if(entry[0]=="text")target.innerText=entry[1]
      //set html
      else if(entry[0]=="html")target.innerHTML=entry[1]
      //set value
      else if(entry[0]=="value")target.value=entry[1]
      //set outer text
      else if (entry[0] == "outer-text") target.outerText = entry[1]
      //set text
      else if (entry[0] == "outer-html") target.outerHTML = entry[1]
      //prepend text
      else if (entry[0] == "text-first") target.insertAdjacentText("afterbegin",entry[1])
      //append text
      else if (entry[0] == "text-last") target.insertAdjacentText("beforeend",entry[1])
      //insert before target
      else if (entry[0] == "text-before") target.insertAdjacentText("beforebegin",entry[1])
      //insert after target
      else if (entry[0] == "text-after") target.insertAdjacentText("afterend",entry[1])
      
      //prepend text
      else if (entry[0] == "html-first") target.insertAdjacentHTML("afterbegin", entry[1])
      //append text
      else if (entry[0] == "html-last") target.insertAdjacentHTML("beforeend", entry[1])
      //insert before target
      else if (entry[0] == "html-before") target.insertAdjacentHTML("beforebegin", entry[1])
      //insert after target
      else if (entry[0] == "html-after") target.insertAdjacentHTML("afterend", entry[1])
      //set attributes
      else target.setAttribute(entry[0],entry[1])
    })
  }
  
  //mutate targets incase of significant changes
  spark.mutate(...targets)
  
})