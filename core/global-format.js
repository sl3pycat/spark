Element.prototype.gfa=function(name){
  let value = this.getAttribute(name)
  color = Math.floor(Math.random()*16777215).toString(16)
  
  value = spark.format(value,{color:"#"+color,number:Math.random()},"random")
  return value
}