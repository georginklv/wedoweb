<template>
  <v-app>
    <div class="wrapper">
      <v-col cols="auto" class="pa-0">
        <div class="header-pic">
          <img
            src="../assets/headerText2.png"
            class="headerImg"
            alt="header-image"
          />
          <div class="morph"></div>
        </div>
        <v-row class="btn-wrapper">
          <div class="line"></div>
          <v-row>
            <v-dialog
              v-model="dialog"
              persistent
              max-width="600px"
              class="pa-8"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  chaped
                  rounded
                  class="white--text font-weight-black"
                  color="#ff4f40"
                  width="120px"
                  v-bind="attrs"
                  v-on="on"
                >
                  let's talk
                </v-btn>
              </template>
              <v-card>
                <form @submit.prevent="sendEmail">
                  <v-card-title>
                    <span class="headline mb-4"
                      >Information about your project</span
                    >
                    <div class="line form-line mb-53"></div>
                  </v-card-title>
                  <v-card-text>
                    <v-container class="pa-0">
                      <v-col class="pa-0" cols="12">
                        <small>*indicates required field</small>
                        <v-text-field
                          class="mt-1"
                          label="What is your company main activity?*"
                          placeholder=""
                          outlined
                          name="activity"
                        ></v-text-field>
                        <v-autocomplete
                          v-model="values"
                          :items="items"
                          outlined
                          chips
                          label="What kind of services interest you the most?"
                          multiple
                          name="interest"
                        ></v-autocomplete>
                        <v-text-field
                          class="mt-1"
                          label="Other"
                          placeholder=""
                          outlined
                          name="other activity"
                        ></v-text-field>
                        <v-text-field
                          class="mt-1"
                          label="Whats your project budget (leva)?*"
                          placeholder="Numbers only"
                          outlined
                          name="budget"
                        ></v-text-field>
                        <v-menu
                          ref="menu"
                          v-model="menu"
                          :close-on-content-click="false"
                          :return-value.sync="date"
                          transition="scale-transition"
                          offset-y
                          min-width="290px"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="date"
                              label="What's your deadline?*"
                              prepend-icon="mdi-calendar"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                              name="deadline"
                            ></v-text-field>
                          </template>
                          <v-date-picker v-model="date" no-title scrollable>
                            <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="menu = false"
                              >Cancel</v-btn
                            >
                            <v-btn
                              text
                              color="primary"
                              @click="$refs.menu.save(date)"
                              >OK</v-btn
                            >
                          </v-date-picker>
                        </v-menu>
                        <span class="headline mb-4">Contacts</span>
                        <div class="line form-line mb-5"></div>
                        <v-text-field
                          class="mt-3"
                          name="name"
                          label="Name:*"
                          placeholder="First & Last"
                          outlined
                        ></v-text-field>
                        <v-text-field
                          class="mt-1"
                          name="phone"
                          label="Phone*"
                          outlined
                        ></v-text-field>
                        <v-text-field
                          class="mt-1"
                          name="email"
                          label="Email*"
                          outlined
                        ></v-text-field>
                        <v-textarea
                          outlined
                          name="message"
                          label="Message"
                          class="mt-1"
                        ></v-textarea>
                        <v-text-field
                          class="mt-1"
                          name="website"
                          label="Website"
                          outlined
                        ></v-text-field>
                        <span class="headline mb-4">GDPR</span>
                        <div class="line form-line mb-3"></div>
                        <v-checkbox
                          v-model="checkbox"
                          label="Become acquainted with personal data protection and agree to the data I have provided to be processed for the purpose of the inquiry."
                        ></v-checkbox>
                      </v-col>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false"
                      >Close</v-btn
                    >
                    <v-btn
                      color="blue darken-1 white--text"
                      type="submit"
                      value="Send"
                      text
                      @click="dialog = false"
                      :disabled="!checkbox"
                      >Submit</v-btn
                    >
                  </v-card-actions>
                </form>
              </v-card>
            </v-dialog>
          </v-row>
        </v-row>
      </v-col>
    </div>
  </v-app>
</template>

<script>
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_qW52qoo8J4mejwWU8ndCk");
export default {
  data: () => ({
    values: [],
    checkbox: false,
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    dialog: false,
    items: [
      "Web Design & Development",
      "Corporate Identity",
      "Web Site Re-design",
      "SEO Optimization",
      "UX/UI",
      "Online Shop",
      "Social Media Marketing",
      "Other",
    ],
  }),
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm("service_oceveqa", "template_63mcyxs", e.target).then(
        (result) => {
          console.log("SUCCESS!", result.status, result.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    },
  },
};
</script>

<style scoped lang="scss">
.header-pic {
  display: flex;
  // height: 700px;
  flex-direction: column;
}

.headerImg {
  background-size: cover;
  width: 100%;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  margin: 0 0 0 -2vh;
  max-width: 1300px;
  z-index: 100;
}
.morph {
  max-width: 1300px;
  width: calc(100% - 107px);
  max-height: 1000px;
  height: calc(100% - 70px);
  content: "";
  border-radius: 54% 46% 42% 58% / 60% 58% 42% 40%;
  background: #9dfdc7; /* Old browsers */
  background: -moz-linear-gradient(
    -45deg,
    #9dfdc7 9%,
    #84f2cf 37%,
    #69e7d9 65%,
    #31cbeb 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    -45deg,
    #9dfdc7 9%,
    #84f2cf 37%,
    #69e7d9 65%,
    #31cbeb 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    135deg,
    #9dfdc7 9%,
    #84f2cf 37%,
    #69e7d9 65%,
    #31cbeb 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  animation: wave 10s linear infinite;
  margin: -4vh 0 0 0;
  transform: rotate(11deg);
  z-index: 1;
  position: absolute;
}
.line {
  width: 500px;
}
.wrap {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
}

.v-btn {
  font-size: 20px !important;
  top: 10px !important;
  &:hover {
    color: #fff !important ;
  }
}
.v-application .blue--text.text--darken-1 {
  &:hover {
    color: #fff !important ;
  }
}
.btn-wrapper {
  position: relative;
  top: -150px;
  z-index: 100;
}
.form-line {
  width: 280px;
  height: 5px;
}
.v-card {
  padding: 10px;
}
.v-card.v-sheet {
  backdrop-filter: blur(9px);
  background: #ffffffa6;
}
@keyframes wave {
  20% {
    border-radius: 45% 55% 60% 35%/ 50% 51% 49% 47%;
  }
  40% {
    border-radius: 45% 55% 49% 51%/ 36% 51% 49% 64%;
  }
  60% {
    border-radius: 60% 40% 57% 43%/ 47% 62% 38% 53%;
  }
  80% {
    border-radius: 60% 40% 32% 68%/ 38% 36% 64% 62%;
  }
}

// landscape
//.................................................
// 1366x768
// 1920x1080
// 1536x864
// 1440x900
// 1280x720

// tablet
//.................................................
// 768x1024
// 1280x800
// 800x1280
// 601x962
// 962x601

@media screen and (max-width: 1200px) {
  .btn-wrapper {
    top: 0px;
  }
}
@media screen and (max-width: 962px) {
  .morph {
    margin: -3vh 0 0 0;
  }
}
@media screen and (max-width: 800px) {
  .btn-wrapper {
    top: 0px;
  }
}
@media screen and (max-width: 768px) {
  .morph {
    margin: -1vh 0 0 0;
  }
}
@media screen and (max-width: 601px) {
  .headerImg {
    width: 150%;
    margin: 0 0 0 -18vh;
  }
  .morph {
    max-width: 1300px;
    width: calc(170% - 107px);
    max-height: 1000px;
    height: calc(110% - 70px);
    margin: -10vh 0 0 -15vh;
  }
}

// mobile
//.................................................
// 360x640
// 375x667
// 414x896
// 360x780
// 375x812

@media screen and (max-width: 450px) {
  .headerImg {
    width: 200%;
    margin: 0 0 0 -13vh;
  }
  .morph {
    max-width: 1300px;
    width: calc(170% - 107px);
    max-height: 1000px;
    height: calc(110% - 70px);
    margin: -8vh 0 0 -8vh;
    transform: rotate(2deg);
  }
}
@media screen and (max-width: 375px) {
  .headerImg {
    width: 200%;
    margin: 0 0 0 -13vh;
  }
  .morph {
    max-width: 1300px;
    width: calc(170% - 107px);
    max-height: 1000px;
    height: calc(110% - 70px);
    margin: -5vh 0 0 -8vh;
    transform: rotate(7deg);
  }
}
</style>
