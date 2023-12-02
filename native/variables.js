//variables storage
spark.variables = {}

//the variable tag 
spark.tag("var","closing",function(tag){
  
  [...tag.attributes].forEach(entry=>{
    spark.variables[entry.name]=entry.value
    //define variable as self closing assessor
    spark.tag("v-"+entry.name,"closing",v=>{
      let value = spark.variables[entry.name]
      
      //pre string manipulations
      if(v.hasAttribute("upper-case"))value=value.toUpperCase()
      if(v.hasAttribute("lower-case"))value=value.toLowerCase()
      
      v.outerText = value
      
    })
  })
  tag.remove()
})