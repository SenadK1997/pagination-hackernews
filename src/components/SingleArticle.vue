<template>
    <section class="c-section">
        <div class="c-close-btn">
            <router-link :to="{ path: '/details'}">Close</router-link>
        </div>

        <div class="c-section__header">
            <div class="c-section__header__title">
                <h1>{{ story.title }}</h1>
            </div>

                <div class="c-section__header__title__below">
                    <div class="c-section__header__title__below-left">
                        <p>Time:</p>
                        <p class="c-author__unvisible">Author:<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
                            </svg>
                                {{ story.by }}
                        </p>
                        <p><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"></path></svg>
                            url.com
                        </p>
                    </div>
                    <div class="c-section__header__title__below-right">
                            <button class="c-section__header__title__below-right__buttons"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd"></path></svg>
                                Vote
                            </button>
                        <button class="c-section__header__title__below-right__buttons"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>
                            Favourite
                        </button>
                        <button class="c-section__header__title__below-right__buttons"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 0 0 0-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"></path></svg>
                            Share
                        </button>
                    </div>
                </div>
        </div>



        <div class="c-section__container">
            <h1>Lorem ipsum</h1>
            <p>Glavni tekst</p>
        </div>
        <div class="c-section__below-container">
            <div class="c-section__below-container__comments">Comments</div>
            <div class="c-section__below-container__btns">
                <button>Join thread</button>
                <p>or</p>
                <button>Next read</button>
            </div>
        </div>
        <div>
            **Komentari**
        </div>
    </section>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SingleArticle',
    data() {
        return {
            story: {},
            comments: [],
            articleUrl: []
        }
    },
    created: function () {
        axios.get('https://hacker-news.firebaseio.com/v0/item/' + this.$route.params.id + '.json')
        .then((res) => {
            this.story = res.data
            this.story.comments = []
            this.articleUrl = []
            this.story.kids.forEach(id => {
                axios.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json')
                .then((res) => {
                    this.comments.push(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

</script>


<style scoped>
.c-section {
    max-width: 100%;
    background-color: #FEFEFE;
}
.c-section__header {
    position: absolute;
    top: 55px;
    left: 100px;
    width: 90%;
}
.c-section__header__title {
    position: relative;
}
.c-section__header__title h1 {
    font-size: 30px;
    display: flex;
    position: relative;
}
.c-section__header__title__below {
    display: flex;
    justify-content: space-between;
    min-width: 100%;
    position: relative;
    top: -20px;
    align-items: center;
    height: 35px;
}
.c-section__header__title__below-left {
    width: 400px;
    justify-content: space-between;
    display: flex;
}
.c-section__header__title__below-right {
    width: 400px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    height: 35px;
}

.c-close-btn {
    display: flex;
    background-color: #FEF8F2;
    min-width: 100%;
    align-items: center;
    height: 50px;
    position: fixed;
    top: 0px;
    left: 0px;
    padding-left: 100px;
}
.c-section__container {
    height: 50vh;
    margin-top: 250px;
    display: flex;
    width: 100%;
}
.c-section__below-container {
    display: flex;
}
.c-section__below-container__comments {
    display: flex;
}
.c-section__below-container__btns {
    display: flex;
}
.c-section__header__title__below-right__buttons {
    border-radius: 99px;
    background-color: #FFFFFF;
    border: 1px solid rgb(177, 175, 175);
    padding: 5px 15px;
}
</style>