<template>
<section class="c-section">
    <div class="c-section__left">
        <div class="c-section__left-news">News</div>
        <div>Show</div>
        <div>Comments</div>
        <div>Ask</div>
        <div>Jobs</div>
    </div>
    <div class="c-section__right">
        <div class="c-section__right-today">Today</div>
        <div>Yesterday</div>
    </div>
</section>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.c-section {
    display: flex;
    justify-content: space-between;
    min-width: 100%;
    background-color: #F0F1EA;
    position: fixed;
    top: 70px;
    height: 40px;
    align-items: center;
}
.c-section__left {
    display: flex;
    margin-left: 80px;
    width: 350px;
    justify-content: space-between;
}
.c-section__right {
    display: flex;
    margin-right: 350px;
    width: 170px;
    justify-content: space-between;
}
.c-section__left div {
    background-color: #fff;
    padding: 5px 10px;
    border-radius: 99px;
    cursor: pointer;
}
.c-section__left div:first-of-type {
    background-color: #fb651c;
    padding: 5px 10px;
    border-radius: 99px;
}
.c-section__right div {
    background-color: #fff;
    padding: 5px 10px;
    border-radius: 99px;
    cursor: pointer;
}
.c-section__right div:first-of-type {
    background-color: #fb651c;
    padding: 5px 10px;
    border-radius: 99px;
}
</style>