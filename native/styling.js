spark.addAttr("^\\-",function(tag,attr){
  if(attr.startsWith("--")){
    tag.style.setProperty(attr,tag.getAttribute(attr))
    return tag.getAttribute(attr)
  }
  let style = attr.replace("-","")
  tag.style[style]=tag.getAttribute(attr)
  tag.removeAttribute(attr)
})

spark.addAttr("^\\.",function(tag,attr){
  let style = attr.replace(".","")
  tag.classList.add(...style.split("."))
  tag.removeAttribute(attr)
})

