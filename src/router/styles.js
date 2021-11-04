//import Spacing from "@/views/styles/Spacing"

export default [
    {
        path: "/styles/textandtypography",
        //lazyloding
        component: () => import(/* webpackChunkName: "about" */ '../views/styles/TextAndTypography.vue')
    },
    {
        path: "/styles/spacing",
        //하나의 번들 js 파일로 만들어서 들어간다. 사용하는 것만 다운로드하는 것이 좋다
        //component: Spacing
        component: () => import(/* webpackChunkName: "about" */ '../views/styles/Spacing.vue')
    }
]