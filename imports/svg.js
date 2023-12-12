spark.tag("svg","default",function(tag){
  if(tag.hasAttribute("icon")){
    let icon = tag.getAttribute("icon")
    tag.removeAttribute("icon")
    
    tag.setAttribute("viewBox","0 0 16 16")
    tag.setAttribute("fill",tag.getAttribute("fill")||"currentColor")
    tag.setAttribute("width",tag.getAttribute("width")||tag.getAttribute("size")||"16")
    tag.setAttribute("height",tag.getAttribute("height")||tag.getAttribute("size")||"16")
    spark.text(new URL("icons/"+icon.replaceAll(" ","-")+".svg", spark.cs.src).href)
    .then(code=>tag.innerHTML=code)
  }
})