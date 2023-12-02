spark.tag("alert","default",function(tag){
  //mutate children, remove from the dom then alert the inner value
  if(tag.children)spark.mutate(...tag.children)
  tag.remove()
  alert(tag.hasAttribute("html")?tag.innerHTML:tag.innerText)
})