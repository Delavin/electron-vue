<template>
    <div id="mytitle">
        <Titlebtn type="min" />
        <Titlebtn type="max" />
        <Titlebtn type="close" />
    </div>
</template>

<script>
    import Titlebtn from './Titlebtn'
    export default {
      name: 'Mytitle',
      components: {
        Titlebtn
      }
    }
</script>
    
<style>
#mytitle {
    position: absolute;
    width: 100%;
    height: 52px;
    background-color: rgb(198, 47, 47);
    -webkit-app-region: drag;
}
</style>