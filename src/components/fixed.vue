<template>
<div class="fixedContainer">
    <div class="fixedPeriod"> 
        <div> 
            <p class="Monthly">Period Type</p>
            <input class="MonthlyInput" type="text" 
             placeholder="Monthly">
             <i class="fa-solid fa-angle-right fa-rotate-90 angleMonthly"></i>
        </div>
        <div>
            <p class="year">Year</p>
            <input class="yearInput" type="text" 
             placeholder=" 2023">
             <i class="fa-solid fa-angle-right fa-rotate-90 angleYear"></i>
        </div>
    </div>
    <div class="monthsContainer"> 
    <p class="monthsList">January, 2023</p>
    <p class="monthsList"> February 2023</p>
    <p class="monthsList">March, 2023</p>
    <p class="monthsList"> April, 2023</p>
    <p class="monthsList">May, 2023</p>
    <p class="monthsList">June, 2023</p>
    <p class="monthsList">July, 2023</p>
    <p class="monthsList">August, 2023</p>
    <p class="monthsList">September, 2023</p>
    <p class="monthsList">Ocotber, 2023</p>
    <p class="monthsList">November, 2023</p>
    <p class="monthsList">December, 2023</p>
    </div>
</div>
</template>

<script>
export default {
    name: 'fixed'
}
</script>

<style scoped> 


.fixedContainer{
    margin-top: 30px;
}

.Monthly{
    position: relative;
    right: 78px;
    top: 15px;
}

.year{
    position: relative;
    right: 70px;
    top: 15px;
}

.angleMonthly{
    position: absolute;
    left: 140px;
    top: 42px;
    color:#2c6693;
}

.angleYear{
    position: absolute;
    left: 330px;
    top: 42px;
    color:#2c6693;

}

.fixedPeriod{
    display: flex;
    position: relative;
    left: 10px;
    top: 20px;
}

.MonthlyInput{
    width: 200px;
    position: relative;
    right: 20px;
    border-radius: 5px;
    border: solid 1px #2c6693;
}

.yearInput{
    border-radius: 5px;
    border: solid 1px #2c6693;
}

.monthsContainer{
    overflow-y: auto;
    max-height: 260px;
    text-align: left;
    background-color: whitesmoke;
    width: 400px;
    position: relative;
    right: 10px;
    top: 30px;
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
    padding-left: 9px;
    padding-top: 2px;
}


</style>