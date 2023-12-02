//sumarizes an elements values into an object
spark.sumarize = function(tag){
  let sum = {}
  //get the native js value
  sum.value = tag.value||""
  //get the attributes
  ;[...tag.attributes].forEach(entry=>sum[entry.name]=entry.value)
  //get the styles
  ;(tag.getAttribute("style")||"").split(";").filter(e=>e).forEach(entry=>{
    entry=entry.split(":")
    sum["style-"+entry[0]]=entry[1]
  })
  return sum
}
