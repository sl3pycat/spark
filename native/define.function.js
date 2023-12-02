spark.define.function = function(tag){
  //save the function name for reference 
  let name = tag.getAttribute("func")||tag.getAttribute("function")
  spark.tag(name,"default",function(clone){
    //check if function was alreay parsed
    if(clone.parsed)return;else clone.parsed=true;
    
    //collect values for the formatter
    let values = {text:clone.innerText,html:clone.innerHTML}
    ;[...clone.attributes].forEach(entry=>values[entry.name]=entry.value)
    
    //format the internal value
    clone.innerHTML = spark.format(tag.innerHTML,values,name)
  })
}