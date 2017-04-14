// import Promise from 'bluebird';
import Vue from 'vue';
import Resource from 'vue-resource';
import VueRouter from 'vue-router';

import App from "App";
import FirstCategory from "Vues/FirstCategory";
import SecondCategory from "Vues/SecondCategory";
import ThirdCategory from "Vues/ThirdCategory";
import ForthCategory from "Vues/ForthCategory";
import Detail from "Vues/Detail";
import WorldTime from "Vues/WorldTime";
import WeatherForecast from "Vues/WeatherForecast";
import RecommendList from "Vues/RecommendList";
import SingleImg from "Vues/SingleImg";
import Store from "Vues/Store";
import ScaleImg from "Vues/ScaleImg";

Vue.use(Resource);
Vue.use(VueRouter);

var router = new VueRouter();
router.map({
    "/app": {
        component: App,
    },
    "/firstcategory": {
        component: FirstCategory,
    },
    "/secondcategory/:id": {
        name: "secondcategory",
        component: SecondCategory,
    },
    "/thirdcategory/:id": {
        name: "thirdcategory",
        component: ThirdCategory,
    },
    "/forthcategory/:id": {
        name: "forthcategory",
        component: ForthCategory,
    },
    "/detail": {
        component: Detail,
    },
    "/worldtime": {
        component: WorldTime,
    },

    "/weatherforecast": {
        component: WeatherForecast,
    },
    "/recommendlist/:id": {
        name: "recommendlist",
        component: RecommendList,
    },
    "/store/:id": {
        name: "store",
        component: Store,
    },
    "/singleimg/:id": {
        name: "singleimg",
        component: SingleImg,
    },
    "/scaleimg": {
        component: ScaleImg,
    }
});

router.redirect({ '/': '/firstcategory' });
router.start(App, '#app');

// Welcome.el = '#app';
// new Vue(Welcome);
