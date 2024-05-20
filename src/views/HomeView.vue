<template>
  <div class="home">
    <div class="header"> 
      <div class="leftHeader"> 
        <i class="fa-solid fa-layer-group" 
        style="color: white;"></i>
        <strong class="lines"> | </strong>
       <strong class="Demo"> DHIS2 Demo - LLM</strong>
      </div>
      <div class="rightHeader"> 
        <i class="fa-solid fa-envelope mx-3"></i>
        <i class="fa-solid fa-bars mx-3"></i>
        <i class="fas fa-portrait mx-3"></i>
      </div>
    </div>

    <div class="com_props"> 
      
  <div class="dhis_file">
  <div class=""  data-bs-toggle="dropdown"
   aria-expanded="false">
    <strong class="file_text">DHIS 2 File</strong>
    <i class="fa-solid fa-angle-right fa-rotate-90"></i>
    <div class="dropdown">
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Home</a></li>
    <hr class="bluehr" style="color: #74C0FC;">
    <li><a class="dropdown-item" href="#">New</a></li>
    <li><a class="dropdown-item" href="#"><span>Open
      <i class="fa-solid fa-angle-right"
       style="color: #74C0FC;
        position: relative;
        left: 350px
       "></i>
    </span>
    
    </a></li>
    <hr class="bluehr" style="color: #74C0FC;">
    <li><a class="dropdown-item" href="#">Save</a></li>
    <li><a class="dropdown-item" href="#">Save As 
      <i class="fa-solid fa-angle-right"
       style="color: #74C0FC;   position: relative;
        left: 337px"></i>
      </a></li>
    <hr class="bluehr" style="color: #74C0FC;">
    <li><a class="dropdown-item" href="#">Share <i class="fa-solid fa-angle-right"
       style="color: #74C0FC;
        position: relative;
        left: 352px"></i></a></li>
    <li><a class="dropdown-item" href="#">Download <i class="fa-solid fa-angle-right"
       style="color: #74C0FC;
        position: relative;
        left: 323px
       "></i></a></li>

  </ul>
  </div>
</div>
</div>
  
  <div class="switchComponent">
      <button class="" 
      :class="[selectedComponent === 'insight'? 'INSIGHT-ACTIVE':'INSIGHT']"
      @click="switchComponent('goToInsight')"
      > 
        INSIGHT
      </button> 
      <button class="" :class="[selectedComponent === 'advanced'? 'Advance-Active':'Advance']" 
      @click="switchComponent('goToAdvance')"
>
        ADVANCED ANALYTICS
      
       </button>
      
    <component :is="currentComponent" ></component>

    </div>
    <!--div>
    <button v-for="(b,i) in buttons" :key="i" type="button" 
    :style="{ 'background-color': b.active ? 'green' : 'grey' }" 
    @click="switchComponent(b, currentComponent)">{{ b.text }}
  </button>
      </div-->

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import Button from '../components/Button.vue'
import advance from '../components/Advance.vue'
import insight from '../components/Insight.vue'


export default {
  name: 'HomeView',
  components: {
   advance, insight, 
  },
 

  data () {
    return{
      currentComponent: insight,    
      selectedComponent: 'insight'
    }
  },
  

  methods: {
    switchComponent(component) {
      // Set the currentComponent based on the clicked button
      this.currentComponent = component === 'goToInsight' ? insight : advance;
      this.selectedComponent = component === 'goToInsight' ? 'insight':'advanced'
      
    //  this.buttons.forEach(button => {
     //   button.active = button.text === b.text})}
     
     // if (!this.isActive) {
       // return this.isActive = !this.isActive;

     // }
     
      //this.isActive ===  insight || advance;

    
    /*activate (b) {
      this.buttons.forEach(button => {
        button.active = button.text === b.text

      })}*/
 // }
}}}
</script>

<style>

.fa-angle-down{
    
  }

button {
    background-color: white; /* Set the color for the active state */
  }

.activeBtn {
  background-color: red;
}

.header{
width: 1500px;
height: 80px;
border: 1px solid #00000066;
display: flex;
background-color: #2c6693;
color: white;
}

.leftHeader{
  position: relative;
  left: 50px;
  top: 25px
}

.rightHeader{
  position: relative;
  left: 1100px;
  top: 25px

}

.fa-layer-group{
  font-size: 30px;


}

.Demo{
  color: white;
  position: relative;
  left: 15px;
}

.lines{
  color: white;
  position: relative;
  left: 8px;
}

.com_props{
  width: 1300px;
  height: 64px;
  left: 60px;
  background-color: white;
  border-color: gray;
  display: flex;
  margin-top: 20px;
  position: relative;
  border-radius: 10px;
}

.dropdown{
  position: absolute;
  padding: 35px;
}

.dhis_file{ 
  width: 480px;
  background-color: #2c6693;
  color: white;
  border-radius: 10px;
  cursor: pointer;
}

.file_text{
  position: relative;
  top: 20px;
  right: 110px;
  color: white;
}

.fa-rotate-90{ 
  position: relative;
  top: 20px;
  left: 160px;
  font-size: 23px;
}

.switchComponent{
width: 820;

}

.INSIGHT{ 
  position: relative;
  top: 20px;
  left: 90px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  background-color: white;

}


.INSIGHT-ACTIVE{ 
  position: relative;
  top: 20px;
  left: 90px;
  font-weight: bold;
  cursor: pointer;
  border: solid 3px white;
  background-color: white;
  border-bottom-color: #2c6693;
  padding: 7px;


}

.Advance{
  position: relative;
  top: 20px;
  left: 100px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  background-color: white;
}

.Advance-Active{
  position: relative;
  top: 20px;
  left: 100px;
  font-weight: bold;
  cursor: pointer;
  border: solid 3px white;
  background-color: white;
  border-bottom-color: #2c6693;
  padding: 7px;
}

li{
  width: 455px;
  margin: 10px;
}

.bluehr{
  width: 430px;
  margin: 10px auto;
}

.INSIGHT::after{
  border-radius: 20px;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.5);
}
</style>