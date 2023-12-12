document.head.insertAdjacentHTML("beforeend",`
<style reset-css>
*:not(style,script,head){
  display:flex;
  flex-direction:column;
  flex:0 0 auto;
  align-items:start;
  justify-content:statt;
  position:relative;
  
  color:inherit;
  background:transparent;
  border:none;
  outline:none;
  margin:0;
  padding:0;
  overflow:hidden;
  box-sizing: border-box;
  
  user-select:none;
}

html,body{
  color:var(--text);
  background:var(--background);
  width:100%;
  height:100%;
  overflow-y:auto;
}
</style>
`)