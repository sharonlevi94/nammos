export default {
  data () {
    return {
      notEmpty: [
        v => !!v || 'שדה חובה'
      ],
      numRule: [
        v => !v || (v && typeof v === 'number' && v >= 0) || 'שדה מספרי חיובי בלבד'
      ],
      alphaNumRule: [
        v => v?.length ? /^[A-Za-z\u0590-\u05FE\0-9]+$/.test(v) || 'שדה לא תקין' : true
      ],
      phoneRule: [
        v => (v && v.length === 10) || 'שדה לא תקין',
        v => /^[0-9]+$/.test(v) || 'שדה לא תקין'
      ],
      emailRules: [
        v => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'אימייל אינו תקין'
      ],
      passwordRules: [
        v => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) || 'סיסמא חייבת להכיל לפחות אות אחת גדולה, אותיות קטנות, ספרות ותו מיוחד'
      ],
      urlRules: [
        v => !v || /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test(v) || 'כתובת אינה תקינה',
        v => !v || v.toString().toLowerCase().includes('jpg') ||
          v.toString().toLowerCase().includes('jpeg') ||
          v.toString().toLowerCase().includes('png') ||
          v.toString().toLowerCase().includes('embed') ||
          'יש להעלות תמונות עם סיומת png, jpg, jpeg בלבד'
      ]
    }
  },
  computed: {
    notEmptyAndNum () {
      return this.notEmpty.concat(this.numRule)
    },
    notEmptyAndEmail () {
      return this.notEmpty.concat(this.emailRules)
    },
    notEmptyAndPhoneNumber () {
      return this.notEmpty.concat(this.phoneRule)
    },
    notEmptyAndPassword () {
      return this.notEmpty.concat(this.passwordRules)
    }
  }
}
