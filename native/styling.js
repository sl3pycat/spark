spark.addAttr("^\\-",function(tag,attr){
  if(attr.startsWith("--")){
    tag.style.setProperty(attr,tag.gfa(attr))
    return tag.gfa(attr)
  }
  let style = attr.replace("-","")
  tag.style[style]=tag.gfa(attr)
  tag.removeAttribute(attr)
})

spark.addAttr("^\\.",function(tag,attr){
  let style = attr.replace(".","")
  tag.classList.add(...style.split("."))
  tag.removeAttribute(attr)
})

