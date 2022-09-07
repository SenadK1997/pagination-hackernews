<template>
<section class="c-nav">
    <div class="c-nav__headers">
        <h1 class="c-nav__h1-first">Y</h1>
        <h1 class="c-nav__h1-second">Hacker News</h1>
    </div>
        <div class="c-nav__search">
            <div class="c-nav__search-bar">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1.7em" width="1.7em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"></path></svg>
            </div>
            <div class="c-nav__search-user">
                <svg @click="userPop = !userPop" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path></svg>
            </div>
        </div>
        <div class="c-nav__search__dropdown" v-if="userPop">
            <div>Submit</div>
            <div>Favorites</div>
            <div>Threads</div>
            <div>Settings</div>
            <div>Sign out</div>
        </div>
</section>

</template>

<script>
export default {
    data() {
        return {
            userPop: false,
        };
    },
}

</script>

<style scoped>
.c-nav {
    min-width: 100%;
    background-color: #FB651C;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0px;
    left: 0px;
    max-height: 70px;
}

.c-nav__headers {
    display: flex;
    align-items: center;
    margin-left: 80px;
}

.c-nav__h1-first {
    border: 3px solid white;
    font-size: 35px;
    padding: 7px;
}
.c-nav__h1-second {
    font-size: 25px;
    margin-left: 10px;
}
.c-nav__search {
    display: flex;
    position: fixed;
    right: 230px;
}
.c-nav__search-bar {
    margin-right: 30px;
    cursor: pointer;
}
.c-nav__search-user {
    cursor: pointer;
}
.c-nav__search__dropdown {
    width: 150px;
    height: 180px;
    margin-top: 330px;
    margin-right: 170px;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    background-color: rgb(248, 241, 241);
    position: relative;
    box-shadow: 0px 0px 2px rgb(111, 111, 240);
}
.c-nav__search__dropdown div {
    cursor: pointer;
    text-align: left;
    margin-left: 45px;
}
</style>