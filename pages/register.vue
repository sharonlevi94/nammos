<template>
  <PageLayout md :background="'#18adf2'">
    <v-form ref="form" class="form">
      <v-container>
        <v-layout v-if="registerSuccess" row wrap>
          <v-flex xs12>
            <p class="field-title font lg">
              ההרשמה בוצעה בהצלחה! לאחר אישור מנהל תוכל\י לבצע התחברות למערכת.
            </p>
          </v-flex>
          <v-flex xs12 mt-3>
            <v-btn class="btn-text"
                   block
                   x-large
                   elevation="10"
                   @click="$router.push({ name: 'welcome' })">
              חזרה למסך הכניסה
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout v-else row wrap>
          <v-flex class="d-flex flex-column" xs12>
            <span class="field-title font lg">שם מלא</span>
            <v-text-field
              v-model="form.full_name"
              :rules="notEmpty"
              placeholder="שם מלא"
              solo
            ></v-text-field>
          </v-flex>
          <v-flex class="d-flex flex-column" xs12>
            <span class="field-title font lg">דוא"ל</span>
            <v-text-field
              v-model="form.email"
              :rules="notEmptyAndEmail"
              placeholder="דואר אלקטרוני"
              solo
            ></v-text-field>
          </v-flex>
          <v-flex class="d-flex flex-column" xs6 pl-2>
            <span class="field-title font lg">סיסמה</span>
            <v-text-field
              v-model="form.password"
              :rules="notEmptyAndPassword"
              placeholder="סיסמה"
              solo
            ></v-text-field>
          </v-flex>
          <v-flex class="d-flex flex-column" xs6 pr-2>
            <span class="field-title font lg">אימות סיסמה</span>
            <v-text-field
              v-model="form.confirmPassword"
              :rules="notEmptyAndPassword"
              placeholder="אימות סיסמה"
              solo
            ></v-text-field>
          </v-flex>
          <v-flex class="d-flex flex-column" xs12>
            <span class="field-title font lg">מספר נייד</span>
            <v-text-field
              v-model="form.phone_number"
              :rules="notEmptyAndPhoneNumber"
              placeholder="מספר נייד"
              solo
            ></v-text-field>
          </v-flex>
          <v-flex xs12 mt-3>
            <v-btn class="btn-text"
                   block
                   x-large
                   elevation="10"
                   @click="register">
              הרשמה
            </v-btn>
          </v-flex>
          <v-flex xs12 mt-3>
            <v-btn class="btn-text"
                   block
                   x-large
                   elevation="10"
                   @click="$router.push({ name: 'welcome' })">
              חזרה
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </PageLayout>
</template>

<script>
import PageLayout from "~/components/PageLayout";
import rules from "~/mixins/rules";
export default {
  name: "register",
  layout: 'login',
  auth: false,
  components: {PageLayout},
  mixins: [rules],
  data () {
    return {
      form: {
        full_name: null,
        email: null,
        password: null,
        confirmPassword: null,
        phone_number: null
      },
      registerSuccess: false
    }
  },
  methods: {
    async register () {
      try {
        if (!this.$refs.form.validate() || this.form.password !== this.form.confirmPassword) {
          return
        }
        await this.$usersApi.addUser(this.form)
        this.registerSuccess = true
      } catch (e) {
        console.error('register error: ', e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
  animation: moveFromTop 900ms ease;
}
</style>
