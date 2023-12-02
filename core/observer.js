spark.observer = new MutationObserver(function(mutations){
  for(let mutation of mutations){
    //mutates newly added children, ignores text and comments
    if(mutation.type=="childList")spark.mutate(...[...mutation.addedNodes].filter(entry=>entry.tagName))
    else {
      //mutates attributes if changed, ignores removed attributes
      if(mutation.target.hasAttribute(mutation.attributeName))spark.attr(mutation.target,mutation.attributeName)
    }
  }
})