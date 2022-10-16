<template>
  <SectionLayout md :background="'#18adf2'">
    <v-container style="height: 100vh" class="d-flex justify-start align-start">
      <v-layout row wrap>
        <v-flex class="d-flex justify-center" xs12>
          <div class="nammos-logo"/>
        </v-flex>
        <v-flex xs12>
          <v-container fluid>
            <v-layout v-if="!login" row wrap>
              <v-flex xs12 mt-10>
                <v-btn block x-large elevation="10" @click="login = true">
                  התחברות
                </v-btn>
              </v-flex>
              <v-flex xs12 mt-3>
                <v-btn block x-large elevation="10" @click="$router.push({ name: 'register' })">
                  הרשמה
                </v-btn>
              </v-flex>
            </v-layout>
            <v-form v-else ref="form">
              <v-layout row wrap>
                <v-flex class="d-flex flex-column" xs12>
                  <span class="field-title font lg">דוא"ל</span>
                  <v-text-field
                    placeholder="דואר אלקטרוני"
                    solo
                  ></v-text-field>
                </v-flex>
                <v-flex class="d-flex flex-column" xs12>
                  <span class="field-title">סיסמה</span>
                  <v-text-field
                    placeholder="סיסמה"
                    solo
                  ></v-text-field>
                </v-flex>
                <v-flex class="d-flex justify-center" xs12>
                  <span class="field-title text-decoration-underline"
                        style="cursor: pointer"
                        @click="login = false">
                    חזרה
                  </span>
                </v-flex>
              </v-layout>
            </v-form>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </SectionLayout>
</template>

<script>
import SectionLayout from "~/components/SectionLayout";
export default {
  name: "welcome",
  components: {SectionLayout},
  data () {
    return {
      login: false,
      form: {
        email: null,
        password: null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.nammos-logo {
  width: 100%;
  height: 40vh;
  background-image: url("../assets/images/nammos.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

}
.field-title {
  color: white;
  font-size: 32px;
  font-weight: 500;
}
</style>
