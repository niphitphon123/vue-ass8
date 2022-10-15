<template>
 <div>
    <navbar />
    <section class="home">

<div class="content">
    <span>"Genshin Impact"</span>
    <p>Genshin Impact เป็นเกมที่นำเสนอในรูปแบบ MMORPG Openworld งานภาพกราฟิกสุดอลังการสไตล์อนิเมะสวยงามสุดๆ โดยระบบการเล่นเบื้องต้นจะให้ผู้เล่นจัดทีมตัวละครไปผจญภัย ซึ่งมีตัวละครหลากหลายที่ได้จากการสุ่ม Gacha ส่วนระบบ Gameplay ก็จะออกแนว Action โมเดล 3D มีการกดคอมโบโจมตี คลิกซ้ายคลิกขวา ซึ่งแต่ละตัวก็จะมีลูกเล่นแตกต่างกันออกไป และจะมีกิจกรรมมาให้เล่นตลอดพร้อมทั้งแจกเพชรไว้สำหรับสุ่มGacha เพื่อเอาตัวละครหรืออาวุธที่อยากได้ </p>

</div>
<div class="image">
    <img src="images/Pai.jpg" alt="">
</div>

<div class="content">
    <p> <span>Gameplay : </span> {{mrs}} </p>
    <p> <span>ตัวละคร : </span> {{Cha}} </p>
        <p> <span>ฉาก : </span> {{tex}} </p>
            <p> <span>เนื้อเรื่อง : </span> {{story}} </p>
               <p> <span>ความชอบ : </span> {{love}} </p>
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
            mrs: '8/10',
            Cha: '10/10',
            tex: '9/10',
            story: '7/10',
            love: '10/10'


        } 
    }


}
</script>

<style>

</style>