spark.mutate = function(...nodes){
  for(let node of nodes){
    //ignore unmutatable node
    if(node.tagName=="SCRIPT"||node.tagName=="STYLE"||node.isConnected==false)return;
    
    //test for custom defined attributes
    ;[...node.attributes].forEach(entry=>spark.attr(node,entry.name))
    
    //test for custom defined tags
    spark.test(node)
    
    //mutate the nodes children
    if(node.isConnected&&node.children)spark.mutate(...node.children)
  }
}