<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <v-card width="800px" class="mx-auto">
      <v-img src="@/assets/photos/photo3.jpg" height="200px"/>
      <v-card-title>About</v-card-title>
      <v-card-subtitle>This is an about page</v-card-subtitle>
      <v-divider/>
      <v-card-text>
        The v-card component is a versatile component that can be used for anything from a panel to a static image. The card component has numerous helper components to make markup as easy as possible. Components that have no listed options use Vue’s functional component option for faster rendering and serve as markup sugar to make building easier. Try out an interactive screencast on how Vuetify cards work.
      </v-card-text>
      <v-divider/>
      <v-card-text>
        A card has 4 basic components, v-card-title, v-card-subtitle, v-card-text and v-card-actions.
      </v-card-text>
      <v-card-actions>
        <div class="mx-auto">
          <v-btn color="success" class="mr-2">OK</v-btn>
          <v-btn color="error">Cancle</v-btn>
        </div>
      </v-card-actions>
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