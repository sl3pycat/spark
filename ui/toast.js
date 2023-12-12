document.head.insertAdjacentHTML("BEFOREEND",`<style toast>
  toast {
    position:fixed;
    left:10px;
    right:10px;
    bottom:10px;
    padding:20px;
    background:#202020;
    color:white;
    white-space:nowrap;
    border-radius:30px;
    box-shadow:0px 0px 2px 2px var(--shadow);
    z-index:6;
    animation:poppin 100ms ease-out;
  }
  
  @keyframes poppin{
    from{
      opacity:0;
      transform:scale(.9);
    }
    to{
      opacity:1;
      transform:scale(1)
    }
  }
</style>`)

spark.tag("toast","default",function(tag){
  setTimeout(()=>tag.remove(),3000)
})