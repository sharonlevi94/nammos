<template>
  <SectionLayout md :background="'#18adf2'">
    <v-container style="height: 100vh" class="d-flex justify-start align-start">
      <v-layout row wrap>
        <v-flex class="d-flex justify-center" xs12>
          <div class="nammos-logo"/>
        </v-flex>
        <v-flex xs12>
          <v-container fluid>
            <v-layout v-if="!displayLogin" row wrap>
              <v-flex xs12 mt-10>
                <v-btn
                  class="btn-text"
                  block
                  x-large
                  elevation="10"
                  @click="displayLogin = true">
                  התחברות
                </v-btn>
              </v-flex>
              <v-flex xs12 mt-3>
                <v-btn class="btn-text"
                       block
                       x-large
                       elevation="10"
                       @click="$router.push({ name: 'register' })">
                  הרשמה
                </v-btn>
              </v-flex>
            </v-layout>
            <v-form v-else ref="form" @submit.prevent="login">
              <v-layout row wrap>
                <v-flex class="d-flex flex-column" xs12>
                  <span class="field-title font lg">דוא"ל</span>
                  <v-text-field
                    v-model="form.email"
                    :rules="notEmpty"
                    placeholder="דואר אלקטרוני"
                    solo
                  ></v-text-field>
                </v-flex>
                <v-flex class="d-flex flex-column" xs12>
                  <span class="field-title">סיסמה</span>
                  <v-text-field
                    v-model="form.password"
                    :rules="notEmpty"
                    placeholder="סיסמה"
                    :type="showPassword? 'text' : 'password'"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    solo
                    @click:append="showPassword = !showPassword"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 mt-3>
                  <v-btn class="btn-text"
                         block
                         x-large
                         elevation="10"
                         @click="login">
                    כניסה
                  </v-btn>
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
import rules from "~/mixins/rules";
export default {
  name: "welcome",
  components: {SectionLayout},
  mixins: [rules],
  data () {
    return {
      displayLogin: false,
      showPassword: false,
      form: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    async login () {
      try {
        const response = await this.$auth.loginWith('local', {
          data: {...this.form}
        })
        if (response?.data) {
          await this.$auth.setUser(response.data.user)
          await this.$auth.setUserToken(response.data.token)
        }
        this.$store.commit('auth-users/setToken', response.data.token)
        this.$store.commit('auth-users/setUser', response.data.user)
        return this.$router.push({name: 'index'})
      } catch (e) {
        console.error('login error: ', e)
      }
    }
  },
  created() {
    if (this.$auth.loggedIn) {
      this.$router.push({name: 'index'})
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
.error--text {
  ::v-deep {
    .v-input__slot {
      border: 2px solid red!important;
    }
    div {
      display: flex;
      justify-content: flex-end;
      color: white!important;
      font-size: medium;
      font-weight: 600;
    }
  }
}
</style>
