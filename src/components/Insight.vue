<template>

    <div class="containerInsight">  
        <div class="row"> 
            <div class="col mx-2 DataPeriodUnit"> 
                <div class="DataContainer">
                    <div class="row DPQUBtn">                      

                        <button class=""
                        :class="[selectedButton === 'toData' ? 'col-3 DataButton-Active' : 'col-3 DataButton']"
                        @click="changeComponent('toData')"
                       >
                             Data <!--strong class="line">|</strong-->
                        </button> 
                        <button class=""
                        :class="[selectedButton === 'toPeriod' ? 'col-3 PeriodButton-Active' : 'col-3 PeriodButton']"

                        @click="changeComponent('toPeriod')">
                        
                            Period <!--strong class="line">|</strong-->
                        </button> 
                        <button class=""
                        :class="[selectedButton === 'toUnit' ? 'col-6 OrgButton-Active' : 'col-6 OrgButton']"

                         @click="changeComponent('toUnit')">
                             Organisation Unit
                        </button>
                        <component :is="presentComponent"></component>

                 </div>  

                 <button class="GenerateInsight" @click="GeneratePage()"> Generate Insight</button>

            </div>

            <section v-if="generatePageIsActive">

                <div class="col-md-9 indicator"> 
                <div class="innerContainer">
                    <div class="row">
                        <div class="col Data">
                           <strong class="bracket">  DATA(indicator) 
                           </strong>
                             <i class="fa-solid fa-circle-info"></i>
                              <br>
                              <strong>Multiple Selected</strong>  <span class="ViewALL">...View All</span>
                        </div>
                        <div class="col Period">
                            <strong class="bracket">
                            PERIOD(Relative) 
                            </strong>
                            <i class="fa-solid fa-circle-info"></i>
                            <br>
                            <strong>Last 12 Months</strong> 
                        </div>
                        <div class="col Org">
                            <strong class="bracket">
                             ORGANISATION UNIT(State) 
                            </strong>
                             <i class="fa-solid fa-circle-info"></i>
                             <br>
                             <strong>Multiple Selected</strong>  <span class="ViewALL">...View All</span>
                        </div>
                 </div>   </div></div>

                 <div class="col centerPage" >
                  <div class="stateLagos">
                    <div class="LagosDiv"> 
                        <p class="Lag"><strong>Lagos</strong></p>
                    </div>
                    <span class="L2022">
                            <p class="lSpacing"><strong>Data Element</strong></p>
                            <p class="lSpacing"><strong>Jan. 2022</strong></p>
                            <p class="lSpacing"><strong>Feb. 2022</strong></p>
                            <p class="lSpacing"><strong>Mar.  2022</strong></p>
                            <p class="lSpacing"><strong>Apr.  2022</strong></p>
                            <p class="lSpacing"><strong>May  2022</strong></p>
                            <p class="lSpacing"><strong>Jun.  2022</strong></p>
                            <p class="lSpacing"><strong>Jul.  2022</strong></p>
                    </span>


                    <span class="sVisit">
                            <p class="spacing">ANC Second Visit  </p>
                            <p class="Janspacing">80%  </p>
                            <p class="Febspacing"> 60% </p>
                            <p class="Marspacing"> 40% </p>
                            <p class="Aprspacing"> 80% </p>
                            <p class="Mayspacing"> 48% </p>
                            <p class="Junspacing"> 60% </p>
                            <p class="Julspacing"> 84% </p>
                    </span>

                    <span class="sVisit">
                        <p class="spacing">ANC Second Visit  </p>
                            <p class="Janspacing">80%  </p>
                            <p class="Febspacing"> 60% </p>
                            <p class="Marspacing"> 40% </p>
                            <p class="Aprspacing"> 80% </p>
                            <p class="Mayspacing"> 48% </p>
                            <p class="Junspacing"> 60% </p>
                            <p class="Julspacing"> 84% </p>
                    </span>

                    <span class="sVisit">
                        <p class="spacing">ANC Second Visit  </p>
                            <p class="Janspacing">80%  </p>
                            <p class="Febspacing"> 60% </p>
                            <p class="Marspacing"> 40% </p>
                            <p class="Aprspacing"> 80% </p>
                            <p class="Mayspacing"> 48% </p>
                            <p class="Junspacing"> 60% </p>
                            <p class="Julspacing"> 84% </p>
                    </span>


                    </div>

                    <div class="Loremdiv">
                    <h5 class="loremInsight">Insight</h5>
                    <p class="Lorem">  In hac habitasse platea dictumst. Cras ipsum metus, bibendum et neque eget, porttitor tincidunt lacus. Vivamus nec turpis dictum, cursus nisl sit amet, elementum est. 
                    </p>
                        <p class="LoremII">
                            Mauris eu nulla interdum libero aliquet porta.  dapibus eu dictum sed, euismod eget felis.  Mauris eros nulla, mattis eu mi at, gravida consequat odio.

                        </p> 
                        <div>
                            <i class="fa-regular fa-thumbs-up"></i>
                            <i class="fa-regular fa-thumbs-down"></i>
                            <input type="text" placeholder="How was your response?      Relevant       Irrelevant" 
                             class="WasRelevant"> 
                             <i class="fa-solid fa-xmark CanCel"></i>

                        </div>
                    <input type="text" placeholder="Send a Message" 
                    class="SendMessage">
                    <i class="fa-solid fa-arrow-right"></i>
                    <p class="Disclaimer"> Disclaimer: Research Review, DHIS 2 LLM may produce inaccurate information</p>
                </div>
                </div>

                 <div class="col rightPage">

                    <section >
                        <div class=" topRightPage2">
                        <p class="sightReview"><strong>Insight Review</strong></p>
                       
                       <div>
                        <div v-if="lineButton"> 
                            <img src="https://study.com/cimages/videopreview/videopreview-full/what_is_a_line_graph_133237.jpg"
                            alt="graphView" class="graphView">
                        </div>
                        </div>
                        <div>
                        <div  v-if="barClicked"> 
                            <img src="https://www.researchgate.net/publication/319307011/figure/fig1/AS:631662652166196@1527611520560/Bar-Chart-showing-the-age-groups-of-participants-Figure-1-shows-that-the-most-frequently.png"
                            alt="index" class="indexView">
                        </div> 
                        </div>

                        <div class="chartbuttons">
                            <span>
                            <button type="button" @click="clickBarButton('toBar')"
                            class=""
                            :class="[selectedChart === 'theBarChart'? 'barChart-ACTIVE':'barChart']"

                            >Bar Chart</button>
                                </span>
                                <span>
                            <button @click="clickGraphButton('toLine')" class="" type="submit"
                            :class="[selectedLineChart === 'theLineChart'? 'lineChart-ACTIVE':'lineChart']"

                            >Line Graph</button>              
                                    </span>
                        </div>
                        <div class="bottomRightPage2 my-2"> 
                            <div class="divIns">
                          <strong class="Ins">Insight</strong>
                            <i class="fa-solid fa-download downloadII"></i>
                            </div>
                          
                            <div class="btnbuttons">
                            <button type="button" class="btn-b">Share</button>
                            <button class="btn-d" type="submit">Save</button>
                        </div>
                        </div>
                        </div>
                    </section>
                    </div>

            </section>
    
            <section v-else>
            <div   class="col-md-9 indicator" > 
                <div class="innerContainer">
                    <div class="row">
                        <div class="col Data">
                           <strong class="bracket">  DATA(indicator) 
                           </strong>
                             <i class="fa-solid fa-circle-info"></i>
                              <br>
                              None Selected  
                        </div>
                        <div class="col Period">
                            <strong class="bracket">
                            PERIOD(Relative) 
                            </strong>
                            <i class="fa-solid fa-circle-info"></i>
                            <br>
                             None Selected

                        </div>
                        <div class="col Org">
                            <strong class="bracket">
                             ORGANISATION UNIT(State) 
                            </strong>
                             <i class="fa-solid fa-circle-info"></i>
                             <br>
                             None Selected
                        </div>
                 </div>   </div></div>
                 <div class="col centerPage">
                    <i class="fa-solid fa-layer-group"></i>
                    
                    <h6 class="select">Select at least one 'Data', 'Period' and 'Organisation Unit' Dimension
                   to Generate Insight and Ask Follow Up Question
                    </h6>
                    <input type="text" placeholder="Send a Message" 
                    class="SendMessage">
                    <i class="fa-solid fa-arrow-right"></i>
                </div>

                <div class="col rightPage">


                    <section v-if="isActive">
                        <div class=" topRightPage2">
                        <p class="sightReview"><strong>Insight Review</strong></p>
                       
                       <div>
                        <div v-if="lineButton"> 
                            <img src="https://study.com/cimages/videopreview/videopreview-full/what_is_a_line_graph_133237.jpg"
                            alt="graphView" class="graphView">
                        </div>
                        </div>
                        <div>
                        <div  v-if="barClicked"> 
                            <img src="https://www.researchgate.net/publication/319307011/figure/fig1/AS:631662652166196@1527611520560/Bar-Chart-showing-the-age-groups-of-participants-Figure-1-shows-that-the-most-frequently.png"
                            alt="index" class="indexView">
                        </div> 
                        </div>

                        <div class="chartbuttons">
                            <span>
                            <button type="button" @click="clickBarButton('toBar')"
                            class=""
                            :class="[selectedChart === 'theBarChart'? 'barChart-ACTIVE':'barChart']"

                            >Bar Chart</button>
                                </span>
                                <span>
                            <button @click="clickGraphButton('toLine')" class="" type="submit"
                            :class="[selectedLineChart === 'theLineChart'? 'lineChart-ACTIVE':'lineChart']"

                            >Line Graph</button>              
                                    </span>
                        </div>
                        <div class="bottomRightPage2 my-2"> 
                            <div class="divIns">
                          <strong class="Ins">Insight</strong>
                            <i class="fa-solid fa-download downloadII"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                width="16" height="16" fill="currentColor" 
                                class="bi bi-download " viewBox="0 0 16 16"> 
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/> <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                </svg> 
                        </div>
                          
                            <div class="btnbuttons">
                            <button type="button" class="btn-b">Share</button>
                            <button class="btn-d" type="submit">Save</button>
                        </div>
                        </div>
                        </div>
                    </section>






                    <section v-else>
                        <div class=" topRightPage">
                        <p class="sightReview"><strong>Insight Review</strong></p>
                       <div>
                        <button class="viewBtn"
                            @click="clickView()">
                             View
                        </button>
                        <!--component :is="viewComponent">
                        </component-->

                        </div>

                        <!--div v-if="isActive"> 
                            <img src="https://www.researchgate.net/publication/319307011/figure/fig1/AS:631662652166196@1527611520560/Bar-Chart-showing-the-age-groups-of-participants-Figure-1-shows-that-the-most-frequently.png"
                            alt="index" class="indexView">
                        </div-->                       
                        </div>
                        <div class="bottomRightPage"> 
                            <div class="divIns">
                          <strong class="Ins">Insight</strong>
                            <i class="fa-solid fa-download"></i>
                            <i class="fa-solid fa-xmark"></i>
                            </div>
                            <p class="name">Name</p>
                            <input type="text" placeholder="Insight Name"
                            class="inputInsightName">
                            <p class="Decription">Decription</p>
                            <input type="text" placeholder="Decription"
                            class="DecriptionInput">
                            <div class="btnbuttons">
                            <button type="button" class="btn-b">Share</button>
                            <button class="btn-d" type="submit">Save</button>
                        </div>
                        </div>
                    </section>

                
                    </div>
                </section>





                 <!--div class="col rightPageIII"-->

                    <!--section v-if="isActive">
                        <div class=" topRightPage2">
                        <p class="sightReview"><strong>Insight Review</strong></p>
                       
                       <div>
                        <div v-if="lineButton"> 
                            <img src="https://study.com/cimages/videopreview/videopreview-full/what_is_a_line_graph_133237.jpg"
                            alt="graphView" class="graphView">
                        </div>
                        </div>
                        <div>
                        <div  v-if="barClicked"> 
                            <img src="https://www.researchgate.net/publication/319307011/figure/fig1/AS:631662652166196@1527611520560/Bar-Chart-showing-the-age-groups-of-participants-Figure-1-shows-that-the-most-frequently.png"
                            alt="index" class="indexView">
                        </div> 
                        </div>

                        <div class="chartbuttons">
                            <span>
                            <button type="button" @click="clickBarButton('toBar')"
                            class=""
                            :class="[selectedChart === 'theBarChart'? 'barChart-ACTIVE':'barChart']"

                            >Bar Chart</button>
                                </span>
                                <span>
                            <button @click="clickGraphButton('toLine')" class="" type="submit"
                            :class="[selectedLineChart === 'theLineChart'? 'lineChart-ACTIVE':'lineChart']"

                            >Line Graph</button>              
                                    </span>
                        </div>
                        <div class="bottomRightPage2 my-2"> 
                            <div class="divIns">
                          <strong class="Ins">Insight</strong>
                            <i class="fa-solid fa-download downloadII"></i>
                            </div>
                          
                            <div class="btnbuttons">
                            <button type="button" class="btn-b">Share</button>
                            <button class="btn-d" type="submit">Save</button>
                        </div>
                        </div>
                        </div>
                    </section-->
                


                   
                        

                    </div>
        </div>
</div>
<!--/div-->

</template>

<script>
import data from '../components/Data.vue'
import period from '../components/Period.vue'
import unit from '../components/Unit.vue'


export default {
    name: 'insight',
    component : {
        data, period, unit},

    data () {
        return {
            presentComponent : data,
            componentNames: ['toData', 'toPeriod', 'toUnit'],
            selectedButton: 'toData',
            isActive: false,
            lineButton: false,
            barClicked: true,
            chartNames: [],
            selectedChart: 'theBarChart',
            selectedLineChart: 'theLineChart',
            generatePageIsActive: false,
        }
    },

    methods: {
            //      this.selectedComponent = component === 'goToInsight' ? 'insight':'advanced'
            GeneratePage() {
               this.generatePageIsActive = !this.generatePageIsActive //true

            },
        

        clickBarButton() {
           if(this.barClicked = true)
           return this.lineButton = false;
            

           //if(this.)
           //this.selectedChart ='theBarChart' ? 'theBarChart': !'theBarChart' theLineChart
        },

        clickGraphButton() {
           if( this.lineButton = true )
           return this.barClicked = false;
         // this.selectedLineChart =  !this.selectedLineChart     //='toLine' ? 'theLineChart': 'theBarChart' 
            switch (this.selectedLineChart) {
                case 'toLine':
                return 'toLineChart';            
                default:
                    break;
            }

        },

        clickView() {
           this.isActive = !this.isActive
    },
        changeComponent(componentName) {
      // Set the currentComponent based on the clicked button
      this.presentComponent = this.getComponentByName(componentName);
      this.selectedButton = this.getComponentByColor(componentName);
        
    },
    getComponentByName(componentName) {
      // Return the corresponding component based on the component name
      switch (componentName) {
        case 'toData':
          return data;
        case 'toPeriod':
          return period;
        case 'toUnit':
          return unit;
        default:
            case 'toData':
          return data;
    }
},
getComponentByColor(componentName) {
      // Return the corresponding component based on the component name
      switch (componentName) {
        case 'toData':
          return 'toData';
        case 'toPeriod':
          return 'toPeriod';
        case 'toUnit':
          return 'toUnit';
        default:
            case 'toData':
          return 'toData';
    }},
   


}}
</script>

<style scoped>

.containerInsight{
    position: relative;
    left: 170px;  
    top: 1px;
}
.DataPeriodUnit{ 
    height: 836px;
    top: 204px;
    left: 40px;
    width: 400px;
}

.DPQUBtn{
    background-color: lightblue;
    position: relative;
    left: 11px;
    max-width: 472px;
    height: 50px;
    border-radius: 5px;
}

.DataButton{
    position: relative;
    top: 9px;
    background-color: lightblue;
    border: solid 2px lightblue;
    border-right-color: #2c6693;

}

.DataButton-Active{
    position: relative;
    top: 12px;
    left: 1px;
    background-color: white;
    border: none;
    padding: 7px;
    color: #2c6693;
    font-weight: bold;
    width: 70px;
    margin-left: 25px;
    margin-right: 10px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;

   
}
.PeriodButton{
    position: relative;
    top: 9px;
    background-color: lightblue;
    border: solid 2px lightblue;
    border-right-color: #2c6693;
}

.PeriodButton-Active{
    position: relative;
    background-color: white;
    border: none;
    padding: 7px;
    color: #2c6693;
    font-weight: bold;
    top: 12px;
    left: 5px;
    background-color: white;
    border: none;
    width: 70px;
    margin-left: 25px;
    margin-right: 10px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
}
.OrgButton{
    position: relative;
    top: 9px;
    background-color: lightblue;
    border: none;
}

.OrgButton-Active{
    position: relative;
    top: 15px;
    background-color: white;
    border: none;
    padding: 7px;
    color: #2c6693;
    font-weight: bold;
    top: 12px;
    left: 5px;
    background-color: white;
    border: none;
    width: 150px;
    margin-left: 25px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
}
.line{
    font-size: 15px;
    position: relative;
    left: 30px;
    color: #2c6693;
}



.innerContainer {
    height: 70px;
   width: 815px;
    text-align: center;
    position: relative;
    right: 175px;
    bottom: 565px;
    border-radius: 5px;
    background-color: white;
  border-color: gray;
  text-align: left;

}

.DataContainer{ 
    text-align: center;
    position: relative;
    right: 655px;
    top: 35px;
    height: 600px;
    width: 470px;
    border-radius: 5px;
    background-color: white;
  border-color: gray;

}

.centerPage{
    text-align: center;
    position: relative;
    right: 175px;
    bottom: 555px;
    height: 520px;
    width: 540px;
    border-radius: 5px;
    background-color: white;
  border-color: gray;

}

.rightPageIII{
    text-align: left;
    position: relative;
    bottom: 1605px;
    height: 520px;
    left: 375px;
    width: 264px;
}
.rightPage{ 
    text-align: left;
    position: relative;
    bottom: 1085px;
    height: 520px;
    left: 375px;
    width: 264px;

}
.topRightPage{
    height: 100px;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: white;
  border-color: gray;

}

.topRightPage2 {
    margin-bottom: 20px;
    border-radius: 5px;
    background-color: white;
  border-color: gray; 
  height: 380px;

}
.bottomRightPage{
    position: relative;
    bottom: 10px;
    height: 410px;
    border-radius: 5px;
    background-color: white;
  border-color: gray;

}

.bottomRightPage2{
    height: 132px;
    position: relative;
    top: 15px;
    border-radius: 5px;
    background-color: white;
  border-color: gray;
}

.fa-layer-group{
    font-size: 90px;
    margin-top: 200px;
    margin-bottom: 50px;
    color: #2c6693;

}

.select{
    margin-top: 20px;
    color: #2c6693;
    font-size: 15px;
}

.SendMessage{
    margin-top: 10px;
    width: 500px;
    border-radius: 10px;
    border: none;
    background-color: whitesmoke;

}

.SendMessage::placeholder{
    color: #2c6693;
    text-align: left;
    position: relative;
    left: 15px;
}

.fa-arrow-right{
    position: relative;
    right: 30px;
}

.viewBtn{
    background-color: #2c6693;
    color: white;
    margin-top: 3px;
    width: 200px;
    padding: 5px;
    border: none;
    border-radius: 10px;
    position: relative;
    left: 30px;
    opacity: 0.6;
}

.sightReview{
    position: relative;
    top: 10px;
    text-align: left;
    font-size: 13px;
    margin-top: 10px;
    margin-left: 5px;
}

.divIns{
    margin-top: 20px;
    margin-bottom: 30px;
}
.Ins{
    position: relative;
    left: 10px;
    top: 20px;
    margin-top: 150px;
    color: black;

       



}

.fa-download{
    position: relative;
    left: 120px;
    top: 20px;
    color:#2c6693;
    border-radius: 5px;
    padding: 5px;
    background-color: azure;
    border: solid 1px;
}

.downloadII{
    position: relative;
    left: 150px;
    top: 20px;
    color:#2c6693;
    border-radius: 5px;
    padding: 5px;
    background-color: azure;
    border: solid 1px;
}
.fa-xmark{
    color:#2c6693;
    position: relative;
    left: 130px;
    top: 20px;
    border-radius: 5px;
    padding: 5px;
    background-color: rgb(94, 168, 233);
    border: solid 0.5px;

}

.name{
    position: relative;
    left: 10px; 
    font-size: 13px;
    color: black;


}

.inputInsightName{
    width: 220px;
    border-radius: 10px;
    border: none;
    position: relative;
    left: 20px;
    bottom: 15px;
    background-color: white;
  background-color: whitesmoke;
}

.inputInsightName::placeholder{
    color: #2c6693;
    text-align: left;
    position: relative;
    left: 10px;
    opacity: 0.8;
}

.Decription{
    position: relative;
    left: 10px;
    color: black;
    font-size: 13px;

}

.DecriptionInput{
    width: 220px;
    height: 180px;
    border-radius: 10px;
    border: none;
    position: relative;
    left: 20px;
    bottom: 15px;
    background-color: whitesmoke;


}

.DecriptionInput::placeholder{
    color: #2c6693;
    text-align: left;
    position: relative;
    left: 10px;
    opacity: 0.8; 
    bottom: 70px;
}

.btnbuttons{
    position: relative;
    left: 20px; 
}

.btn-b{
margin-right: 15px;
width: 100px;
border:solid 1px #2c6693;
opacity: 0.8; 
border-radius: 10px;
color: #2c6693;
padding: 5px;

}

.btn-b:hover{
    background-color: #2c6693;
    color: white;
    opacity: 0.6;
}
.btn-d{
    width: 100px;
    background-color: #2c6693;
    opacity: 0.8; 
    padding: 5px;
    color: white;
    border-radius: 10px;
}

.btn-d:hover{
    opacity: 0.6;
  
}
.bracket{
    font-size: 13px;
    color: black;
    opacity: 0.5; 
    text-align: left;

}


.GenerateInsight{
    background-color: #2c6693;
    color: white;
    font-weight: bold;
    padding: 5px;
    width: 402px;
    border-radius: 5px;
    border: none;
    position: relative;
    top: 480px;

}

.GenerateInsight:hover{
    background-color: lightblue;
}

.chartbuttons{
    position: relative;
    top: 20px;
    left: 30px;

}

.indexView{
    position: relative;
    bottom: 4px;
    height: 280px;
    width: 250px;
    left: 7px;
}

.graphView{
    position: relative;
    bottom: 4px;
    height: 280px;
    width: 250px;
    left: 7px;
}

.lineChart-ACTIVE{
    width: 100px;
    margin-right: 15px;
    position: relative;
    left: 10px;
    background-color: white;
    opacity: 0.8; 
    padding: 5px;
    color: #2c6693;
    border-radius: 10px;
    border:solid 1px #2c6693;


}

.lineChart{
margin-right: 15px;
width: 100px;
border:solid 1px #2c6693;
opacity: 0.8; 
border-radius: 10px;
color: #2c6693;
padding: 5px;
position: relative;
left: 10px;
}

.barChart-ACTIVE{
    width: 100px;
    background-color: #2c6693;
    opacity: 0.8; 
    padding: 5px;
    color: white;
    border-radius: 10px;
    border: none;
}
.barChart{
width: 100px;
border:solid 1px #2c6693;
opacity: 0.8; 
border-radius: 10px;
color: #2c6693;
padding: 5px;

}

.stateLagos{
    height: 90px;
    text-align: center;
    margin-bottom: 80px;


}
.LagosDiv{
    height: 34px;
    background-color: lightblue;
    color: black;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding-bottom: 10px;

}
.L2022{
    display: flex;
   background-color: whitesmoke;

}

.sVisit{
    display: flex;
    height: 28px;
}

.Loremdiv{
    margin-top: 10px;
    position: relative;
    border-top: solid 10px whitesmoke;
    height: 350px;
    
}

.spacing{
    margin-left: 10px;
    font-size: 13px;
    position: relative;
    top: 5px;
}

.Janspacing{
    font-size: 13px;
    margin-left: 11px;
    position: relative;
    top: 5px;
}

.Febspacing{
    font-size: 13px;
    margin-left: 30px;
    position: relative;
    top: 5px;
}

.Marspacing{
    font-size: 13px;
    margin-left: 35px;
    position: relative;
    top: 5px;
}

.Aprspacing{
    font-size: 13px;
    margin-left: 35px;
    position: relative;
    top: 5px;
}

.Mayspacing{
    font-size: 13px;
    margin-left: 35px;
    position: relative;
    top: 5px;
}

.lSpacing{
    margin-left: 12px;
    font-size: 11px;
    position: relative;
    top: 5px;
}

.Junspacing{
    font-size: 13px;
    margin-left: 35px;
    position: relative;
    top: 5px;
}

.Julspacing{
    font-size: 13px;
    margin-left: 35px; 
    position: relative;
    top: 5px;
}

.Lag{
    font-size: 14px;
    position: relative;
    top: 5px;
}

.loremInsight{
    text-align: left;
    margin-left: 10px;
    font-weight: bold;
    font-size: 20px;
    margin-top: 10px;
}

.Lorem{
    text-align: left;
    margin-left: 10px; 
}

.LoremII{
    text-align: left;
    margin-left: 10px; 
}
.WasRelevant{
    width: 400px;
    border-radius: 10px;
    border: none;
    background-color: whitesmoke;
   margin-top: 20px;
   margin-bottom: 15px;

}

.WasRelevant::placeholder{
    color: #2c6693;
    text-align: left;
    position: relative;
    left: 23px;
    font-size: 12px;

}

.fa-thumbs-up{
    position: relative;
    left: 250px;
    font-size: 11px;
}

.fa-thumbs-down{
    position: relative;
    left: 310px;
    font-size: 11px;
}

.CanCel{
    position: absolute;
    left: 430px;
    top: 238px;
    font-size: 15px;
    width: 5px;
    background-color: whitesmoke;
    border: none;
}

.Disclaimer{
    position: relative;
    left: 40px;
    top: 5px;
    font-size: 11px;
}

.bi-download {
    position: relative;
    left: 80px;
    top: 20px;
}
</style>