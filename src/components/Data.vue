<template>
  <div class="dataContainer">
    <input class="Dataitem" type="text" placeholder="Search Data Item Name">
  <p class="DataType">Data Type</p>
  <input class="Dataele" type="text" 
  placeholder="Data Elements">
  <i class="fa-solid fa-angle-right fa-rotate-90 angleDataele"></i>
    <div class="elements"> 
        <div> 
            <p class="AllGroups">Element Groups</p>
            <input class="AllGroupsInput" type="text" 
             placeholder="All Groups">
             <i class="fa-solid fa-angle-right fa-rotate-90 angleAllGroups"></i>
        </div>
        <div>
            <p class="Disaggregation">Disaggregation</p>
            <input class="DisaggregationInput" type="text" 
             placeholder="Totals Only">
             <i class="fa-solid fa-angle-right fa-rotate-90 angleDisaggregation"></i>

        </div>
    </div>

    <form class="checkboxes"> 
        <div> 
        <input type="checkbox" value="ANC" class="ANC">
        <label>ANC 2nd Visit</label>

    </div>
    <div> 
        <input type="checkbox" value="ARI-with" class="ANC"> 
        <label>ARI Treated with Antibiotics</label>

    </div>
    <div> 
        <input type="checkbox" value="ARI-without" class="ANC">
        <label>ARI Treated without Antibiotics</label>

    </div>
    <div> 
        <input type="checkbox" value="Flaccid" class="ANC">
        <label>Acute Flaccid Paralysis</label>

    </div>
    <div> 
        <input type="checkbox" value="ART" class="ANC">
        <label>ART Entry Point: No Other</label>

    </div>
    <div> 
        <input type="checkbox" value="Flaccid" class="ANC">
        <label>Acute Flaccid Paralysis</label>

    </div>
    <div> 
        <input type="checkbox" value="Flaccid" class="ANC">
        <label>Acute Flaccid Paralysis</label>

    </div>
    <div> 
        <input type="checkbox" value="Flaccid" class="ANC">
        <label>Acute Flaccid Paralysis</label>

    </div>
    <div> 
        <input type="checkbox" value="Flaccid" class="ANC">
        <label>Acute Flaccid Paralysis</label>

    </div>
    

    <div> 
        <input type="checkbox" value="">
        <label></label>

    </div>
    </form>
 </div>
</template>

<script>
export default {
name: 'data'
}
</script>

<style scoped>


.dataContainer{
    margin-top: 60px;
}

.angleDataele{
    position: absolute;
    left: 390px;
    top: 185px;
    color: #2c6693;
}

.angleAllGroups{ 
    position: absolute;
    left: 115px;
    top: 40px;
    color: #2c6693;

}

.angleDisaggregation{
    position: absolute;
    left: 340px;
    top: 40px;
    color: #2c6693;
}

.elements{
    display: flex;
    position: relative;
    left: 50px;
    top: 20px;
}

.Dataitem{
    width: 400px;
    background-color: whitesmoke;
    border: none;
    border-radius: 5px;
    padding: 5px;

}

.Dataitem::placeholder{
    color: #2c6693;
    position: relative;
    left: 10px;
}

.Dataele{
    width: 400px;
    border: solid 1px #2c6693;
    border-radius: 5px;
    padding: 5px;
}
.DataType{
    position: relative;
    right: 160px;
    top: 10px;
    margin-top: 10px;
}

.AllGroups{
    position: relative;
    right: 55px;
    top: 15px;
}

.AllGroupsInput{
    position: relative;
    right: 25px;
    border: solid 1px #2c6693;
    border-radius: 5px;
}

.Disaggregation{
    position: relative;
    right: 6px;
    top: 15px;
}

.DisaggregationInput{
    position: relative;
    left: 25px;
    border: solid 1px #2c6693;
    border-radius: 5px;
}

.checkboxes{
    margin-top: 40px;
}

.checkboxes{
    width: 400px;
    background-color: whitesmoke;
    position: relative;
    left: 25px;
    top: 15px;
    text-align: left;
    padding-left: 20px;
    overflow-y: auto;
    max-height: 200px;
}

.checkboxes::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 5px;
}
 

.checkboxes::-webkit-scrollbar-thumb {
  background: #2c6693; 
  border-radius: 5px;
}

.checkboxes::-webkit-scrollbar {
  width: 10px;
}
.ANC{
    margin-top: 12px;
    margin-right: 12px;
}

</style>

