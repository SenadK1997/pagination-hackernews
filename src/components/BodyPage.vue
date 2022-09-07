<template>
    <section class="c-nav__filters">
        <div class="c-section__left">
            <div class="c-section__left-news" @click="showNews">News</div>
            <div @click="showShows">Show</div>
            <div @click="showComments">Comments</div>
            <div @click="showAsks">Ask</div>
            <div @click="showJobs">Jobs</div>
        </div>
        <div class="c-section__right">
            <div class="c-section__right-today">Today</div>
            <div>Yesterday</div>
        </div>
    </section>

    <section class="c-section">
        <div class="c-body__header">
            <h1>Latest News of Today</h1>
        </div>
        <div class="c-section__list" :class="{ 'load__more': more }" ref="listContainer">
            <div v-for="story in filteredData" :key="story" class="c-section__list__stories">
                <div class="c-section__points" v-if="story.data && story.data.score">{{ story.data.score }}<div>POINTS</div></div>
                <div class="c-section__comments">{{ story.data.descendants }}<div>COMMENTS</div></div>

                <div class="c-section__title">
                    <div class="c-section__title-text">
                        {{ story.data.title}}
                        <div class="c-section__list__title-under">
                            <div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path></svg>{{ story.data.by }}</div>
                                <a class="c-section__url"><router-link :to="{ path: '/detail/' + story.data.id}">url.com</router-link></a>
                        </div>
                    </div>
                        <button class="c-section__button">{{ button }}</button>
                </div>
            </div>
        </div>
        <div class="c-buttons">
            <button @click="loadMore">Load more</button> <p>or</p> <button><input type="text" v-model="search">Search</button>
        </div>
    </section>
</template>

<script>
import {createApp} from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import SingleArticle from './SingleArticle.vue'

createApp(app).use(VueAxios,axios)

export default {
    name: "BodyPage",
    data() {
        return {
            err: "",
            stories: [],
            button: "Read more",
            overflowText: "...",
            listLength: 11,
            search: null,
        };
    },
    created: function () {
        axios.get("https://hacker-news.firebaseio.com/v0/topstories.json")
            .then((response) => {
            const results = response.data;
            results.forEach(id => {
                axios.get("https://hacker-news.firebaseio.com/v0/item/" + id + ".json")
                    .then((response) => {
                    this.stories.push(response);
                })
                    .catch((err) => {
                    this.err = err;
                });
            });
        })
            .catch((err) => {
            this.err = err;
        });
    },
    methods: {
        loadMore() {
            if (this.listLength > this.stories.length)
                return;
            this.listLength = this.listLength + 7;
        },
        scrollToBottom(event) {
            Element.scrollHeight - Element.scrollTop === Element.clientHeight;
            let element = event.target;
            if (element.scrollHeight - element.scrollTop === element.clientHeight) {
                this.loadMore();
            }
        },
    },
    computed: {
        filteredData() {
            if (this.search && this.stories.length) {
                return ({
                    ...this.stories,
                    stories: this.stories.filter((item) => {
                        return item.data.title.toLowerCase().includes(this.search); /* NE RADI SEARCH */
                    }),
                });
            }
            else {
                return this.stories.slice(0, this.listLength);
            };
        },
    },
    mounted() {
        let listContainer = this.$refs.listContainer;
        listContainer.addEventListener("scroll", this.scrollToBottom);
    },
    components: { SingleArticle }
}
</script>

<style scoped>
.c-section {
    justify-content: center;
}
.c-body__header {
    font-size: 8px;
}
.c-section-body {
    max-width: 100%;
}
.c-section__list {
    box-shadow: 0px 0px 5px blue;
    min-width: 1300px;
    height: 520px;
    overflow-y: scroll;
}
.load__more {
    margin-top: 200px;
    max-height: 100%;
    overflow: visible;
}
.c-section__list__stories {
    display: flex;
    max-width: 100%;
    border: 1px solid rgb(228, 224, 224);
    align-items: center;
    height: 50px;
}
.c-section__list__title-under {
    display: flex;
    justify-content: space-between;
    width: 250px;
}
.c-section__points {
    margin-left: 25px;
    color: #FB651C;
}
.c-section__points div {
    color: #D4D4D4;
}
.c-section__comments {
    margin-left: 35px;
    color: #FB651C;
}
.c-section__comments div {
    color: #D4D4D4;
}
.c-section__title {
    margin-left: 35px;
    justify-content: space-between;
    display: flex;
    width: 100%;
}
.c-section__title-text {
    color: #646464;
    text-align: left;
    text-overflow: '...';
}
.c-section__url {
    text-decoration: none;
    color: black;
}
.c-section__button {
    background-color: #D2D2D2;
    border-radius: 99px;
}
.c-buttons {
    display: flex;
    width: 1300px;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
}
.c-buttons p {
    margin-left: 10px;
    margin-right: 10px;
}
.c-buttons button {
    background-color: #FB641E;
    border-radius: 99px;
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
.c-nav__filters {
    display: flex;
    justify-content: space-between;
    min-width: 100%;
    background-color: #F0F1EA;
    position: fixed;
    top: 70px;
    height: 40px;
    align-items: center;
    left: 0;
}
.c-section__left {
    display: flex;
    width: 350px;
    justify-content: space-between;
    margin-left: 75px;
}
.c-section__right {
    display: flex;
    width: 170px;
    justify-content: space-between;
    margin-right: 350px;
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