<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
  <v-app>
    <v-navigation-drawer app color="secondary" dark v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Application </v-list-item-title>
          <v-list-item-subtitle> with Vue + Vuetify </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon>mdi-home-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/about">
          <v-list-item-icon>
            <v-icon>mdi-help-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group :value="false" prepend-icon="mdi-palette-outline" active-class="green--text">
          <template v-slot:activator>
            <v-list-item-title>Styles</v-list-item-title>
          </template>
          <v-list-item to="/styles/textandtypography" color="white">
            <v-list-item-icon>
              <v-icon>mdi-numeric-1</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Text And Typography</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/styles/spacing" color="white">
            <v-list-item-icon>
              <v-icon>mdi-numeric-2</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Spacing</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-item to="/gridsystem" color="white">
            <v-list-item-icon>
              <v-icon>mdi-view-grid-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Grid System</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Vuetify</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <!-- app : fixed 고정, dark : 글씨 색 흰색 -->
    <v-footer app color="primary" dark>
      <!-- x축 margin을 auto -->
      <div class="mx-auto">Chenjae</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  //컴포넌트의 대표이름 (devtools에 나오는 이름)
  name: "App",
  //추가하고 싶은 컴포넌트 등록
  components: {},
  //컴포넌트 데이터 정의
  data: function () {
    return {
      drawer: false
    };
  },
  //컴포넌트 메소드 정의
  methods: {},
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped></style>
