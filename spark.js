console.time("spark v0.1")
const spark = {
  // a collection of all scripts that should be loaded on init (push to the array to add custom libs)
  libs:["core/attributes.js","core/sumarize.js","core/observer.js","core/mutator.js","core/tag.js","core/formatter.js","native/set.js","native/get.js","native/define.js","native/define.function.js","native/events.js","native/variables.js","native/styling.js",...(document.currentScript.getAttribute("import")||"").split(" ").filter(e=>e).map(entry=>`imports/${entry}.js`)].map(url=>new URL(location.hostname=="localhost"?url:url.replace(".js",".min.js"), document.currentScript.src).href),
  //reference to the core script
  cs:document.currentScript
  
}

//wait for the application to fully load before doing anything ( for good pwa scores )
document.addEventListener("DOMContentLoaded",()=>{
  //check for custom splash screens
  let splash=document.querySelector("splash-screen")
  if(splash){
    document.getElementById("splash-screen").innerHTML=splash.innerHTML
    splash.remove()
  }
  //fetches core scripts and custom scripts
  spark.text(...spark.libs).then(code=>{
    //executes core scripts and sets up observation
    Function(code)()
    spark.observer.observe(document.documentElement,{ childList: true, attributes: true, subtree: true,})
    //initial mutation
    spark.mutate(document.documentElement)
    //remove splash screen
    document.getElementById("splash-screen").remove()
    console.timeEnd("spark v0.1")
  })
  
})

//helper to fetch text files 
spark.text = async function FetchText(...urls){
  //fetches multiple scripts then joins them
  if(urls.length>1)return (await Promise.all(urls.map(url=>FetchText(url)))).join("\n")
  else {
    try{
      //fetch a single script
      let text = await fetch(urls[0])
      if(text.ok)return await text.text()
      else return ""
    } catch(e){
      //try again if offline, usual network breaks are due to connection resets
      return FetchText(urls[0])
    }
  }
}

//creates a splash screen
document.documentElement.insertAdjacentHTML("beforeend",`<div id=splash-screen><style>#splash-screen{position:fixed;top:0;left:0;width:100%;height:100%;background:white;display:flex;align-items:center;justify-content:center}#splash-loader{width:45px;height:45px;border:2px solid transparent;border-left:2px solid blue;border-right:2px solid blue;border-radius:100%;animation:spin 500ms linear infinite}@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(359deg)}}</style><div id=splash-loader></div></div>`)
//sets the app title, icon and default meta data
document.head.insertAdjacentHTML("beforeend",`<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${spark.cs.getAttribute("title")||"Spark app"}</title><link rel="icon" href="${spark.cs.getAttribute("icon")||"favicon.ico"}"><link rel="apple-touch-icon" href="${spark.cs.getAttribute("icon")||"favicon.ico"}"/>`)