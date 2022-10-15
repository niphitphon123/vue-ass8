<template>
 <div>
    <navbar />
    <section class="home">
<h1 class="heading"> เกมในค่ายนี้ที่โมเดลคล้ายๆกันอยู่แต่เนื้อเรื่องคนละจักรวาลกัน </h1>

<div class="image">
    <img src="images/Pai.jpg" alt="">
</div>
<div class="image">
    <img src="images/Hon2.jpg" alt="">
</div>
</section>
 </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
export default {
    components: { Navbar } ,
    data() { 
        return { 
            address: '648 Chokchai4 Ladprao 10230 Bangkok'


        } 
    }


}
</script>

<style>

</style>