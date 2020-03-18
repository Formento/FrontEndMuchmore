<template>
  <div class="custom-background">
    <Navbar />  
    <div class="contact">
      <section class="contact-text">  
        <h1>Contact <strong>Us</strong></h1>
        <div><hr /></div>
        <p>
          We are here to help you and find answers to your questions on our Support section.
          <br />
          If you can't find the answer to your question or have any feedback, reach out to us by completing the form.
          <br />
          All fields are mandatory unless otherwise stated.
        </p>
        <div><hr /></div>
        <div>
          <p>
            <strong>Adress:</strong> 123 Palo Alto, Palo Alto, CA 94300
          </p>
          <p>
            <strong>Phone:</strong> +1 234-567-8910
          </p>
          <p>
            <strong>Email:</strong> contact@yourdomain.net
          </p>
        </div>
        <div class="social-medias">
          <a href="#">
            <img src="@/assets/facebook.png">
          </a>
          <a href="#">
            <img src="@/assets/googleplus.png">
          </a>
          <a href="#">
            <img src="@/assets/linkedin.png">
          </a>
          <a href="#">
            <img src="@/assets/twitter.png">
          </a>
        </div>
      </section>
      <section class="contact-form">
        <form @submit.prevent="submitform">
          <input v-model="message.name"
            class="form-item form-input" type="text" name="name"
            placeholder="Your Name" required>
          <input v-model="message.email"
            class="form-item form-input" type="email" name="email"
            placeholder="Your Email" required>
          <input v-model="message.subject"
            class="form-item form-input" type="text" name="subject"
            placeholder="Subject">
          <textarea v-model="message.comment"
            class="form-item form-input input-area" name="comment"
            placeholder="Your Message" required>
          </textarea>
          <div v-if="feedbackactive" class="form-item form-feedback">
            <div class="close-icon" v-on:click="xclose">X</div>
            <p class="form-feedback-message">{{ feedback }}</p>
          </div>
          <button v-else class="form-item btn-void-red">SUBMIT</button>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'Contact',
  components: {
    Navbar,
  },
  data () {
    return {
        feedbackactive: false,
        feedback: '',
        message: {
          email: '',
          subject: '',
          name: '',
          comment: '',
        },
    };
  },
  methods: {
    submitform: function () {
      if (this.message.name === '' || this.message.email === '' || this.message.comment === '') {
        return false;
      } else {
        this.sendmail();
      }
    },
    sendmail: function (){
      let config = {
        headers: {
          Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJNdWNoTW9yZSIsImlhdCI6MTU4MzQzMTEyOCwiZXhwIjoxNjE0OTY3MTI4LCJhdWQiOiJ3d3cubXVjaG1vcmUuY29tIiwic3ViIjoibXVjaG1vcmUtdGVzdC1kZXYiLCJHaXZlbk5hbWUiOiJKb2hubnkiLCJTdXJuYW1lIjoiUm9ja2V0IiwiRW1haWwiOiJqcm9ja2V0QGV4YW1wbGUuY29tIiwiUm9sZSI6WyJNYW5hZ2VyIiwiUHJvamVjdCBBZG1pbmlzdHJhdG9yIl19.x5i2ldiTazjY1ANxdoURBiQ-TXqam_K1KJfdo3puYEQ',
        },
      };
      axios
        .post('https://sendmail.muchomas.xyz/', this.message, config)
        .then(response => {
          console.log(response);
          this.feedbackactive = true;
          this.feedback = 'Email successfully sent!';
          this.message = { email: '', subject: '', name: '', comment: '', };
        })
        .catch(error => {
          console.log(error);
          this.feedbackactive = true;
          this.feedback = 'The information could not be sent at this time. Please try again later.'
        });
    },
    xclose: function (){
      this.feedbackactive = false;
    }
  },
 }
</script>

<style scoped>
  .custom-background {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: linear-gradient(to right, #ea3d3d 55%, #35373a 45%);
  }
  .btn-void-red {
    background-color: white;
    color: #ea3d3d;
    border: 2px solid #ea3d3d;
    max-width: 150px;
    font-weight: 700;
    letter-spacing: .2rem;
  }
  .btn-void-red:hover { color: white; background-color: #ea3d3d; }
  .btn-void-red:active { transform: scale(1.05); }
  .close-icon {
    position: relative;
    float: right;
    margin-right: 0.5rem;
    margin-top: 0.5rem;
    height: 1.5rem;
    width: 1.5rem;
    background-color: white;
    border: 2px solid #ea3d3d;
    border-radius: 50%;
    color: #ea3d3d;
    text-align: center;
    line-height: 1.5rem;
    vertical-align: middle;
  }
  .close-icon:hover {
    cursor: pointer;
    background-color: #ea3d3d;
    color: white;
  }
  .close-icon:active { user-select: none; transform: scale(1.2); }
  .contact {
    height: 100%;
    padding: 0px 11.22% 8%;
    display: grid;
    grid-template-columns: repeat(15, 1fr);
    align-items: stretch;
  }
  .contact-text {
    grid-column: 1 / 5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: justify;
  }
  .contact-text h1 { font-size: 2.5em; text-transform: uppercase; font-weight: 100; }
  .contact-text h1 strong { font-weight: 700; }
  .contact-text strong { font-weight: 600; }
  .contact-text hr { width: 6rem; float: left;}
  .contact-form {
    grid-column: 6 / 16;
    background-color: white;
    padding: 30px 0px 50px;
    z-index: 2
  }
  .contact-form form {
    display:grid;
    height: 100%;
    grid-template-columns: repeat(10, 1fr);
  }
  .form-feedback { background-color: lightgray; }
  .form-feedback-message {
    padding-right: 3rem;
    padding-left: 0.5rem;
    text-align: justify;
  }
  .form-item { grid-column: 2 / 10; margin: 15px 0px 0px; }
  .form-input {
    padding: 5px 0px;
    border: none;
    border-bottom: 2px solid #ea3d3d;
  }
  .input-area { height: 14em; resize: none; }
  .social-medias { display: flex; }
  .social-medias img {
    padding: 15px 20px 0px 0px;
    filter: saturate(0%) brightness(300%) opacity(0.4);
  }
  @media (max-width: 800px) {
    .custom-background {
      display: flex;
      flex-direction: column;
      height: 200vh;
      background: linear-gradient(to bottom, #ea3d3d 55%, #35373a 45%);
    }
    .contact {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .contact-text { height: 80vh; }
    .contact-form { height: 80vh; }
    .contact-section-form { display: block; background-color: #35373a; }
  }
</style>
