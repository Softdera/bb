<template>
    <!--div v-for="items in filtereditems" :key="item.id"-->
   <div class="advanceContainer"> 
          <i class="fa-solid fa-layer-group"></i>
        
          <h1 class="h1">COMING SOON</h1>
          <i class="fa-solid fa-ellipsis"></i>
        </div>
</template>

<script>
export default {
name: 'advance',


}
</script>

<style scoped>

.advanceContainer{
    text-align: center;
    position: absolute;
    left: 340px;
    top: 150px;
    width: 800px;
    height: 500px;
    border-radius: 20px;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.5);
}
.fa-layer-group{
    margin-top: 40px;
font-size: 90px;
margin-bottom: 60px;
color: gray;

}

.h1{
    font-size: 80px;
    color: #2c6693;
    margin-bottom: 50px;

}

.fa-ellipsis{ 
    font-size: 100px;
    color: gray;
    
}


</style>

