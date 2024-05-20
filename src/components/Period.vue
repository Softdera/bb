<template>
    <div class="periodContainer"> 
        <p class="periodDimension"> Period Dimension</p>
        <div class="periodbuttons">
            <span><button class="" type="button"
                :class="[currentPage === 'relative' ? 'btnd-active' : 'btnd']"
                @click="Updatedcomponent('toRelative')">
            
            Relative Period</button>
            <!--relative/-->
            </span>
         <span>
            <button type="button" class=""
            :class="[currentPage === 'fixed' ? 'btnb-active' : 'btnb']"
            @click="Updatedcomponent('toFixed')">
            Fixed Period</button>
            <!--fixed/--> 
         </span>
         <component :is="nowComponent"></component>
        </div>
    </div>
</template>

<script>
import fixed from '../components/fixed.vue'
import relative from '../components/relative.vue'


export default {
name: 'period',
components : {
    fixed, relative
},
data () {
    return{
       nowComponent: relative,
       currentPage: 'relative',

    }
  },
  

  methods: {
    Updatedcomponent(component) {
      // Set the currentComponent based on the clicked button
      this.nowComponent = component === 'toRelative' ? relative : fixed;
        this.currentPage = component === 'toRelative' ? 'relative' : 'fixed'
    },
  }
}
</script>

<style scoped>

.periodContainer{
    margin-top: 50px;
}

.periodDimension{
    position: relative;
    right: 138px;
    top: 10px;
    margin-top: 10px;
}

.periodbuttons{
    position: relative;
    left: 38px;
}
.btnd-active{
    position: relative;
    right: 60px;
    border-radius: 5px;
    background-color: #2c6693;
    color: white;
    padding: 5px;
    width: 180px;
    border: none;
}

.btnd{
    position: relative;
    right: 60px;
    border-radius: 5px;
    background-color: white;
    color: #2c6693;
    padding: 5px;
    width: 180px;
    border: solid 1px #2c6693;

}
.btnb-active{
    position: relative;
    right: 20px;
    border-radius: 5px;
    color: white;
    padding: 5px;
    width: 180px;
    background-color: #2c6693;
}

.btnb{
    position: relative;
    right: 20px;
    border-radius: 5px;
    color: #2c6693;
    border: solid 1px #2c6693;
    padding: 5px;
    width: 180px;
    background-color: white;
}

</style>