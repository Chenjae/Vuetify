<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <v-card>
      <v-card-title>
          Grid System
      </v-card-title>   
      <v-divider/>
      <v-card-text>
          
          <v-row>
              <v-col class="yellow" cols="12" sm="2" md="6" lg="10">A</v-col>
              <v-col class="red" cols="12" sm="10" md="6" lg="2">B</v-col>
          </v-row>


          <v-row class="green">
              <v-col cols="12" sm="2" md="6" lg="10">A</v-col>
              <v-col cols="12" sm="10" md="6" lg="2">B</v-col>
          </v-row>


      </v-card-text>


      <v-divider/>

      <v-card-text>
          <h3>v-row : 행</h3>
          - no-gutters : 줄 바꿈시 중간에 띄어지는 부분을 제거
          
          <h3>v-col : 열</h3>
          - cols : 전체 12 등분의 cols 중 몇개의 cols를 차지할 것 인지<br/>
          - sm, md, lg.. : 반응형에 따른 크기 지정 (전체 12)
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