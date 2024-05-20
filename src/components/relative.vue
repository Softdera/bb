<template>
    <div class="relativeContainer"> 
        <p class="pType"> Period Type</p>
        <input class="Months" type="text" 
  placeholder="Months">
  <i class="fa-solid fa-angle-right fa-rotate-90 angleMonths"></i>


  <div class="monthsContainer"> 
    <p class="monthsList">This Month</p>
    <p class="monthsList">Last Month</p>
    <p class="monthsList">Last 3 Months</p>
    <p class="monthsList">Last 6 Months</p>
    <p class="monthsList">Months This Quarter</p>
    <p class="monthsList">Months This Year</p>
    <p class="monthsList">Months This Year </p>
    <p class="monthsList">Months This Year </p>
    <p class="monthsList">Months This Year </p>
    <p class="monthsList">Months This Year </p>
    <p class="monthsList">Months This Year </p>
    <p class="monthsList">Months This Year </p>

  </div>
    </div>
</template>

<script>
export default {
name: 'relative'
}
</script>

<style scoped>



.pType{
    position: relative;
    top: 36px;
    right: 192px;
    opacity: 0.8;
}

.Months{
    width: 400px;
    position: relative;
    right: 35px;
    top: 20px;
    border-radius: 5px;
    border: solid 1px #2c6693;
    padding: 2px;
}

.angleMonths{
    position: absolute;
    left: 350px;
    top: 100px;
    color: #2c6693;
}
.monthsContainer{
    text-align: left;
    background-color: whitesmoke;
    width: 400px;
    position: relative;
    right: 10px;
    top: 30px;
    overflow-y: auto;
    max-height: 280px;
}


.monthsContainer::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 5px;
}
 

.monthsContainer::-webkit-scrollbar-thumb {
  background: #2c6693; 
  border-radius: 5px;
}

.monthsContainer::-webkit-scrollbar {
  width: 10px;
}
.monthsList{
    padding-left: 15px;
    padding-top: 5px;
}

</style>