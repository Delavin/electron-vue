<template>
  <div>
      <div class="header drag" >
          <ul>
              <li>
                <div class="icon" style="float:left">
                    <img  src="../../../../build/icons/256x256.png"  />
                </div>
              </li>
              <li>
                 <span>{{title}}</span>
              </li>
              <li style="float:right">
                 <div class="winbtn" >
                   <title-btn type="min"/>
                   <title-btn type="max"/>
                   <title-btn type="close"/>
                </div>
              </li>
            </ul>
      </div>
     <div>
          <slot>
      </slot>
     </div>
  </div>
</template>
<script>
import TitleBtn from '../Header/Titlebtn.vue'
export default {
    
props: ['title'],
    components: {
        TitleBtn
    }
}
</script>
<style>
.header
{
    height: 45px;
    width: 100%;
    background: #333;
 
   border: 1px solid yellow;
}

.header ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
.header li{
    float: left;
}
.header li span{
    display: block;
    color: white;
    text-align:center;
    padding:  14px 16px;
    text-decoration: none;
}
.drag{
    -webkit-app-region:drag;
}
.icon{
    width: 45px;
}
.header span{
    font-family: miscrosoft YaHei
}
.icon img{
    width: 45px;
    height: 45px;
      
}
.winbtn{
    display: inline-flex;
    align-items: center;
    margin-top: 12px;

}
</style>

