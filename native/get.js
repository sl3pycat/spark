spark.tag("get","default",function(tag){
  let target=tag.parentElement
  if(tag.getAttribute("target"))target=document.querySelector(tag.getAttribute("target"))
  tag.removeAttribute("target")
  let attr = tag.attributes[0].name
  
  if(target){
    if(attr.startsWith("-"))tag.outerText=target.style[attr.replace("-","")]||tag.innerText
    
    else if(attr=="value")tag.outerText=target.value||tag.innerText
    else if(attr=="html")tag.outerHTML=target.innerHTML||tag.innerHTML
    else if(attr=="text")tag.outerText=target.innerText||tag.innerText
    
    else tag.outerText=target.getAttribute(attr)||tag.innerText
  }
  tag.remove()
})