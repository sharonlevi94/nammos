<template>
  <PageLayout md :background="'#18adf2'">
    <v-container style="height: 100vh" class="d-flex justify-start align-start">
      <v-layout row wrap>
        <v-flex class="d-flex justify-center" xs12>
          <div class="nammos-logo"/>
        </v-flex>
        <v-flex xs12>
          <v-container fluid>
            <v-layout v-if="!displayLogin" class="form" row wrap>
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
            <v-form v-else ref="form" class="form" @submit.prevent="login">
              <v-layout row wrap>
                <v-flex class="d-flex flex-column" xs12>
                  <span class="field-title font lg">מספר נייד</span>
                  <v-text-field
                    v-model="form.phone_number"
                    :rules="notEmptyAndPhoneNumber"
                    placeholder="מספר נייד"
                    solo
                  ></v-text-field>
                </v-flex>
                <v-flex class="d-flex flex-column" xs12>
                  <div class="d-flex justify-space-between">
                    <span class="field-title">סיסמה</span>
                    <span class="forgot-password" @click="forgotPasswordModal = !forgotPasswordModal">שכחתי סיסמה</span>
                  </div>
                  <v-text-field
                    v-model="form.password"
                    :rules="notEmptyAndPassword"
                    placeholder="סיסמה"
                    :type="showPassword? 'text' : 'password'"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    solo
                    @click:append="showPassword = !showPassword"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <div class="d-flex align-center">
                    <NammosCheckbox :active="rememberMe" @activate="rememberMe = !rememberMe" class="ml-5"/>
                    <span class="field-title">זכור אותי</span>
                  </div>
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
                        @click="displayLogin = false">
                    חזרה
                  </span>
                </v-flex>
              </v-layout>
            </v-form>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
    <NammosModal
      :value="forgotPasswordModal"
      @close="forgotPasswordModal = !forgotPasswordModal">
      <p style="font-size: 18px" v-text="'הכניסו כתובת מייל ונשלח אליכם לינק לאיפוס הסיסמה:'"/>
      <v-text-field
        v-model="email"
        :rules="notEmptyAndEmail"
        placeholder="המייל שלכם"
        solo
      ></v-text-field>
      <NammosButton
        title="קדימה!"
        font-size="18px"
        @click="renewPassword"/>
    </NammosModal>
  </PageLayout>
</template>

<script>
import PageLayout from "~/components/PageLayout";
import rules from "~/mixins/rules";

export default {
  name: "welcome",
  layout: 'login',
  auth: false,
  components: {PageLayout},
  mixins: [rules],
  data () {
    return {
      displayLogin: false,
      showPassword: false,
      rememberMe: false,
      forgotPasswordModal: false,
      form: {
        phone_number: null,
        password: null
      },
      email: null
    }
  },
  methods: {
    async login () {
      try {
        if (!this.form.phone_number || !this.form.password) {
          return
        }
        if (this.rememberMe) {
          this.$auth.$storage.setLocalStorage('form', JSON.stringify(this.form))
        } else {
          this.$auth.$storage.removeLocalStorage('form')
        }
        this.$store.commit('setLoader', {value: true})
        const response = await this.$auth.loginWith('local', {
          data: {...this.form}
        })
        if (response?.data?.message) {
          throw { message: response?.data?.message }
        }
        else if (response?.data) {
          await this.$auth.setUser(response.data.user)
          await this.$auth.setUserToken(response.data.token)
          this.$store.commit('auth-users/setToken', response.data.token)
          this.$store.commit('auth-users/setUser', response.data.user)
          this.$store.commit('setLoader', {value: false})
          await this.$store.dispatch('showSnackBar', {success: true, text: 'התחברת בהצלחה!', value: true})
          return this.$router.push({name: 'home'})
        }
      } catch (e) {
        await this.$auth.logout()
        console.error('login error: ', e)
        this.$store.commit('setLoader', {value: false})
        await this.$store.dispatch('showSnackBar', {error: true, text: e?.message, value: true})
      }
    },
    renewPassword () {
      this.$store.dispatch('showSnackBar', {error: true, text: 'מצטערים! שירות זה יהיה זמין ממש בקרוב!', value: true})
    }
  },
  created() {
    if (this.$auth.loggedIn) {
      this.$router.push({name: 'home'})
    }
    const formRemembered= this.$auth.$storage.getLocalStorage('form')
    if (formRemembered) {
      this.rememberMe = true
      const formParsed = JSON.parse(JSON.stringify(formRemembered))
      this.form.phone_number = formParsed.phone_number
      this.form.password = formParsed.password
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
  animation: moveFromTop 900ms ease;
  //transform: rotateX(560deg);
  //animation: turn 3.5s ease-out forwards 1s;
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
.form {
  animation: moveFromLeft 900ms ease;
}
.forgot-password {
  display: flex;
  align-items: flex-end;
  color: white;
  font-size: 18px;
  padding-bottom: 10px;
  text-decoration: underline;
  cursor: pointer;
}
</style>
