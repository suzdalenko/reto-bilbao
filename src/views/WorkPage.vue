<template> 
    <HeaderIndex /> 
    <HeaderBottom v-bind:workPage="workPage()" v-bind:cityPage="cityPage()" />            
    <div class="ex-basic-1 pt-5 pb-5">
        <div class="container">
            <div class="row">
                <div class="text-box mb-5" v-if="photo_referenceArray.length > 0">
                        <h3>Mudanzas Reto en {{ cityPage() }} </h3>
                </div>
                <div class="col-lg-12" v-if="photo_referenceArray.length > 0">
                    <img class="image_galery mt-5 mb-3" v-on:load="onImgLoad" v-bind:src="photo_referenceArray[0]" v-bind:alt="workPage() + ' ' + cityPage()">
                </div>
            </div> 
        </div> 
    </div>
    <PreguntasFrecuentes />
    <div class="ex-basic-1 pt-3 pb-5">
        <div class="container">
            <div class="row">
                <div class="col-xl-10 offset-xl-1"> 
                    <span v-for="(refer, index) in photo_referenceArray"  v-bind:key="index">
                        <img v-if="photo_referenceArray[index+1]" class="image_galery mb-5" v-bind:src="photo_referenceArray[index+1]" v-bind:alt="workPage() + ' ' + cityPage() + ' País Vasco'">
                    </span>
                    <ContentWorkPage v-bind:cityPage="cityPage()" />
                </div> 
            </div> 
        </div> 
    </div>
    <FooterIndex />
</template>
<script>
import HeaderIndex from '@/components/IndexPage/HeaderIndex';
import HeaderBottom from '@/components/WorkPage/HeaderBottom';
import ContentWorkPage from '@/components/WorkPage/ContentWorkPage';
import PreguntasFrecuentes from '@/components/PreguntasComp/PreguntasFrecuentes';
import FooterIndex from '@/components/IndexPage/FooterIndex';



export default{
    components: { HeaderIndex, HeaderBottom, ContentWorkPage, PreguntasFrecuentes, FooterIndex },
    data (){
        return {
            photo_referenceArray: [], 
        }
    },
    created (){
        this.getListReferencesFotosFromPlaceId()
    },
    methods: { 
       workPage(){
           return this.$route.params.work.replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ');
       },
       cityPage(){
            return this.$route.params.city.replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ');
       },
        getListReferencesFotosFromPlaceId(){
            let cityName = this.$route.params.city.replaceAll('-', ' ')
            let emptyPhotoArray = []; 
            fetch('https://imagedeveloper.pythonanywhere.com/?city='+cityName).then(res => res.json()).then(result => {
                result.images.forEach( image => {
                    emptyPhotoArray.push('https://imagedeveloper.pythonanywhere.com/show_image/'+image)
                })
                this.photo_referenceArray = emptyPhotoArray;
                console.log( this.photo_referenceArray)
            })
        }
    }
}
</script>
<style scoped>
.image_galery{
    width: 100%;
    height: auto;
    border: 4px solid grey;
    border-radius: 22px;
}
.image_galery{
    max-height: 90vh;
}
</style>
