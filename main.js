const app = new Vue ({
    el: '#app',
    data: {
        mail: '',
        emails: [],
    },
    created() {

        for(let i=0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {

            this.mail = res.data.response
            this.emails.push(this.mail)
             
            })
        }
    }
});