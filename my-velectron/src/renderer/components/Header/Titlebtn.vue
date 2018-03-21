<template>
  <div class="titlebtn" v-bind:style="style"   v-on:click="click">
      <div v-if="type=='close'">
        <svg width="12px" height="13px" viewBox="0 0 12 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch -->
    <title>Group 2</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="出金B" transform="translate(-449.000000, -20.000000)">
            <g id="title">
                <g id="Group-2" transform="translate(430.000000, 0.000000)">
                    <rect id="表格下拉" fill-rule="nonzero" x="-12.5" y="-6.25" width="62.5" height="62.5"></rect>
                    <path d="M25.4549513,25.2588835 L25.4549513,18.3838835 L26.7049513,18.3838835 L26.7049513,25.2588835 L33.5799513,25.2588835 L33.5799513,26.5088835 L26.7049513,26.5088835 L26.7049513,33.3838835 L25.4549513,33.3838835 L25.4549513,26.5088835 L18.5799513,26.5088835 L18.5799513,25.2588835 L25.4549513,25.2588835 Z" id="Combined-Shape" fill="#BBBBBB" transform="translate(25.000000, 25.000000) rotate(-315.000000) translate(-25.000000, -25.000000) "></path>
                </g>
            </g>
        </g>
    </g>
</svg>
      </div>
      <div v-else-if="type== 'min'">
     <svg width="12px" height="13px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch -->
    <title>icon/最小化</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="icon/最小化" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path d="M0,0 L20,0 L20,20 L0,20 L0,0 Z" id="Combined-Shape" fill-rule="nonzero"></path>
        <path d="M2,14 L18,14 L18,16 L2,16 L2,14 Z" id="Combined-Shape" fill="#BBBBBB"></path>
    </g>
</svg>
      </div>
      <div v-else-if="type== 'max'">
        <svg width="12px" height="13px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch -->
    <title>icon/全屏</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="icon/全屏" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect id="矩形_14_拷贝" fill-rule="nonzero" x="0" y="0" width="20" height="20"></rect>
        <path d="M2,4 L18,4 L18,16 L2,16 L2,4 Z M4,7 L4,14 L16,14 L16,7 L4,7 Z" id="Combined-Shape" fill="#BBBBBB"></path>
    </g>
</svg>
      </div>
     
  </div>
 
</template>
<script>
const style = {
  min: {
    backgroundColor: 'transparent',
    right: '100px'
  },
  max: {
    backgroundColor: 'transparent',
    right: '60px'
  },
  close: {
    backgroundColor: 'transparent',
    right: '10px'
  },
  restore: {
    backgroundColor: 'transparent',
    right: '20px'
  }
}
export default {
  name: 'Titlebtn',
  props: ['type'],
  data () {
    return {
      
    }
  },
  computed: {
    style: function () {
      return style[this.type]
    }
  },
  methods: {
    click: function () {
      require('electron').ipcRenderer.send(this.type)
    }
  }
}
</script>
<style>
.titlebtn { 

    width: 20px;
    height: 20px;
    top: 0;
    bottom: 0;
    -webkit-app-region: no-drag;
   
}
</style>

