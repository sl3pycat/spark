spark.tag("prompt","default",function(tag){
  //gets the prompt result
  let result = prompt(tag.getAttribute("query"))
  if(result){
    //if theres a result then format it and add it to the dom
    tag.innerHTML = spark.format(tag.innerHTML,{result},tag.id||"prompt")
    let kids = [...(tag.childNodes||[])]
    tag.replaceWith(...kids)
    //kids are mutated incase the following tags depended on information from kids
    spark.mutate(...(kids.filter(entry=>entry.tagName)))
  } else tag.remove()
})