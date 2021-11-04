<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <v-card>
      <v-card-title>Margin and Padding</v-card-title>
      <v-divider/>
      <v-card-text>
        <div class="green pa-5">
            <div class="yellow lighten-4 blue--text ml-10 mr-5">
                Adjust screen size to see spacing changes
            </div>
            <div class="yellow lighten-4 blue--text mt-5">
                Adjust screen size to see spacing changes
            </div>
            <div class="yellow lighten-4 blue--text ma-3 pa-5">
                Adjust screen size to see spacing changes
            </div>
        </div>
      </v-card-text>
    </v-card>  
</template>

<script>
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "",
    //추가하고 싶은 컴포넌트 등록
    components: {
    },
    //컴포넌트 데이터 정의
    data: function() {
        return {
        };
    },
    //컴포넌트 메소드 정의
    methods: {
    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>