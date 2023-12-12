document.head.insertAdjacentHTML("BEFOREEND",`
<style ui-bar>
bar {
  flex-direction:row;
  width:100%;
  height:70px;
  align-items:center;
  justify-content:center;
  padding:5px;
  background:var(--background);
  z-index:5;
  opacity:0.9;
  position:sticky;
  top:0;
  
}

bar>text{
margin:5px;
  margin-right:auto;
  font-size:20px
}

bar>svg{
  width:25px;
  height:25px;
  margin:5px;
  color:var(--hue)
}
</style>`)