document.head.insertAdjacentHTML("beforeend",`
<style modal>
modal{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index:10;
  background:var(--shadow);
}
</style>`)

spark.tag("modal","default",function(tag){
  history.pushState("","",location.href+"#"+Math.random())
})