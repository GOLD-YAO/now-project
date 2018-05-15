<template>
  <div >
  
  </div>
</template>

<script>
export default {

  data () {
    return {
      swipelist: []
    }
  },
  created(){
    this.getswipelist()
  },
  methods:{
      getswipelist() {
      

       this.$http.get("/api/initSwipe").then((result) => {
         
       }).catch((err) => {
         
       });;
      
     
    }
  },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
