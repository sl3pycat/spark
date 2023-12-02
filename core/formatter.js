spark.format = function(string, datax, idx){
  return string.replace(/{{.*?}}/g , function(match){
    let curr = match.slice(2,-2).split("||")
    let data = curr[0].split(".")
    let id = data.shift()
    data.join(".")
    if(id==idx) return datax[data]||curr[1]||""; else return match
  })
}