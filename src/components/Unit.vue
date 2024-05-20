<template>
    <div class="unitContainer">
        <input class="unitItem" type="text" 
        placeholder="Search Organisation Unit">

        <p class="UnitType">Organisation Unit</p>
        <input class="Unitele" type="text" 
            placeholder="State">
         <i class="fa-solid fa-angle-right fa-rotate-90 angleUnit"></i>


         <form class="checkboxes"> 
  

    <div> 
        <input type="checkbox" value="ANC" class="ANC">
        <label>Select All States</label>

    </div>
    <div> 
        <input type="checkbox" value="ARI-with" class="ANC"> 
        <label>Abia  </label>

    </div>
    <div> 
        <input type="checkbox" value="ARI-without" class="ANC">
        <label>Adamawa</label>

    </div>
    <div> 
        <input type="checkbox" value="Flaccid" class="ANC">
        <label>Akwa Ibom</label>

    </div>
    <div> 
        <input type="checkbox" value="ART" class="ANC">
        <label>Anambra</label>

    </div>
    <div> 
        <input type="checkbox" value="Flaccid" class="ANC">
        <label>Bauchi</label>

    </div>
    <div> 
        <input type="checkbox" value="Flaccid" class="ANC">
        <label>Bayelsa</label>

    </div>
    <div> 
        <input type="checkbox" value="Flaccid" class="ANC">
        <label>Benue</label>

    </div>
    <div> 
        <input type="checkbox" value="Flaccid" class="ANC">
        <label>Borno</label>

    </div>

    <div> 
        <input type="checkbox" value="Flaccid" class="ANC">
        <label>Borno</label>

    </div>
    <div> 
        <input type="checkbox" value="Flaccid" class="ANC">
        <label>Borno</label>

    </div>
    <div> 
        <input type="checkbox" value="Flaccid" class="ANC">
        <label>Borno</label>

    </div><div> 
        <input type="checkbox" value="Flaccid" class="ANC">
        <label>Borno</label>

    </div>
    <div> 
        <input type="checkbox" value="Flaccid" class="ANC">
        <label>Borno</label>

    </div>
   
    </form>



    </div>
</template>

<script>
export default {
name: 'unit'
}
</script>

<style scoped>



.unitContainer{
    margin-top: 60px;
}


.unitItem{
    width: 400px;
    background-color: whitesmoke;
    border: none;
    border-radius: 5px;
    padding: 5px;

}

.unitItem::placeholder{
    color: #2c6693;
    position: relative;
    left: 10px;
}


.angleUnit{
    position: absolute;
    left: 390px;
    top: 185px;
    color: #2c6693;
}

.Unitele{
    width: 400px;
    border: solid 1px #2c6693;
    border-radius: 5px;
    padding: 5px;
}
.UnitType{
    position: relative;
    right: 138px;
    top: 10px;
    margin-top: 10px;
}

.checkboxes{
    margin-top: 15px;
}

.checkboxes{
    width: 400px;
    background-color: whitesmoke;
    position: relative;
    left: 25px;
    top: 15px;
    text-align: left;
    padding-left: 20px;
    overflow-y:auto;
    max-height: 280px;
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