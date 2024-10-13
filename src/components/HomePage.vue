<template>
  <v-container>
    <v-row v-if="isScreenLarge" class="d-flex justify-center">
      <v-col cols="12" lg="11" class="d-flex">
        <v-col cols="6" class="left px-13 d-flex flex-column justify-center">
          <div class="heading">Learn to code by watching others</div>
          <div class="para mt-10">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </div>
        </v-col>
        <v-col cols="6" class="right px-7">
          <div
            class="px-10 px-md-0 text1 d-flex flex-column flex-md-row justify-center align-center py-4 mb-5"
          >
            <div class="try">Try it free 7 days</div>
            <div class="d-flex justify-center align-center">&nbsp;then $20/mo. thereafter</div>
          </div>
          <v-col cols="12" class="body px-sm-7 px-lg-0">
            <div class="pt-1 form-container">
              <div class="input-one mb-4">
                <input
                  type="text"
                  placeholder="First Name"
                  class="input-field"
                  v-model="firstName"
                  @focus="clearError('firstNameError')"
                />
                <div v-if="firstNameError" class="error text-end mt-1">
                  {{ firstNameError }}
                </div>
              </div>

              <div class="input-two mb-4">
                <input
                  type="text"
                  placeholder="Last Name"
                  class="input-field"
                  v-model="lastName"
                  @focus="clearError('lastNameError')"
                />
                <div v-if="lastNameError" class="error text-end mt-1">
                  {{ lastNameError }}
                </div>
              </div>

              <div class="input-three mb-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  class="input-field"
                  v-model="email"
                  @focus="clearError('emailError')"
                />
                <div v-if="emailError" class="error text-end mt-1">
                  {{ emailError }}
                </div>
              </div>

              <div class="input-four mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  class="input-field"
                  v-model="password"
                  @focus="clearError('passwordError')"
                />
                <div v-if="passwordError" class="error text-end mt-1">
                  {{ passwordError }}
                </div>
              </div>

              <button class="claim-button pt-3" @click="handleSubmit">
                CLAIM YOUR FREE TRIAL
              </button>
            </div>
            <div class="tc mb-6 text-center">
              By clicking the button, you are agreeing to our
              <span class="ts">Terms and Services</span>
            </div>
          </v-col>
        </v-col>
      </v-col>
    </v-row>
    <v-row v-else class="">
      <v-col col="12">
        <v-col class="px-13 d-flex flex-column justify-center">
          <div class="heading">Learn to code by watching others</div>
          <div class="para mt-10">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </div>
        </v-col>
        <v-col cols="12" class="right px-7">
          <div class="text1 d-flex justify-center align-center py-4 mb-5">
            <span class="try">Try it free 7 days</span>&nbsp;then $20/mo.
            thereafter
          </div>
          <v-col cols="12" class="body px-7">
            <div class="pt-1 form-container">
              <div class="input-one mb-4">
                <input
                  type="text"
                  placeholder="First Name"
                  class="input-field"
                  v-model="firstName"
                  @focus="clearError('firstNameError')"
                />
                <div v-if="firstNameError" class="error text-end mt-1">
                  {{ firstNameError }}
                </div>
              </div>

              <div class="input-two mb-4">
                <input
                  type="text"
                  placeholder="Last Name"
                  class="input-field"
                  v-model="lastName"
                  @focus="clearError('lastNameError')"
                />
                <div v-if="lastNameError" class="error text-end mt-1">
                  {{ lastNameError }}
                </div>
              </div>

              <div class="input-three mb-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  class="input-field"
                  v-model="email"
                  @focus="clearError('emailError')"
                />
                <div v-if="emailError" class="error text-end mt-1">
                  {{ emailError }}
                </div>
              </div>

              <div class="input-four mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  class="input-field"
                  v-model="password"
                  @focus="clearError('passwordError')"
                />
                <div v-if="passwordError" class="error text-end mt-1">
                  {{ passwordError }}
                </div>
              </div>

              <button class="claim-button pt-3" @click="handleSubmit">
                CLAIM YOUR FREE TRIAL
              </button>
            </div>
            <div class="tc mb-6 text-center">
              By clicking the button, you are agreeing to our
              <span class="ts">Terms and Services</span>
            </div>
          </v-col>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onBeforeUnmount, onMounted, computed } from "vue";
import { useStore } from "vuex";
import Swal from "sweetalert2";

// Access Vuex store
const store = useStore();

// Vuex action to update screen size
const updateScreenSize = () => {
  store.dispatch("updateScreenSize");
};

// Set up event listeners to handle screen resize
onMounted(() => {
  window.addEventListener("resize", updateScreenSize);
  updateScreenSize(); // Initial check
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateScreenSize);
});

// Access Vuex state for screen size
const isScreenLarge = computed(() => store.state.isScreenLarge);

// Form data and error handling
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");

const firstNameError = ref("");
const lastNameError = ref("");
const emailError = ref("");
const passwordError = ref("");

// Clear specific error
const clearError = (errorField) => {
  switch (errorField) {
    case "firstNameError":
      firstNameError.value = "";
      break;
    case "lastNameError":
      lastNameError.value = "";
      break;
    case "emailError":
      emailError.value = "";
      break;
    case "passwordError":
      passwordError.value = "";
      break;
  }
};

// Form submission and validation
const handleSubmit = () => {
  // Clear previous errors
  firstNameError.value = "";
  lastNameError.value = "";
  emailError.value = "";
  passwordError.value = "";

  let isValid = true;

  // Validate First Name
  if (!firstName.value) {
    firstNameError.value = "First Name cannot be empty";
    isValid = false;
  }

  // Validate Last Name
  if (!lastName.value) {
    lastNameError.value = "Last Name cannot be empty";
    isValid = false;
  }

  // Validate Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value) {
    emailError.value = "Email Address cannot be empty";
    isValid = false;
  } else if (!emailPattern.test(email.value)) {
    emailError.value = "Looks like this is not an email";
    isValid = false;
  }

  // Validate Password
  if (!password.value) {
    passwordError.value = "Password cannot be empty";
    isValid = false;
  }

  // Handle successful form submission
  if (isValid) {
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    password.value = "";
    Swal.fire({
      title: "Success!",
      text: "You are subscribed!",
      icon: "success",
      confirmButtonText: "Ok",
    });
  }
};
</script>


<style>
@font-face {
  font-family: f1;
  src: url(/src/assets/Poppins-Bold.ttf);
}
@font-face {
  font-family: f3;
  src: url(/src/assets/Poppins-Medium.ttf);
}
@font-face {
  font-family: f2;
  src: url(/src/assets/Poppins-Light.ttf);
}
@font-face {
  font-family: f4;
  src: url(/src/assets/Poppins-Regular.ttf);
}
@font-face {
  font-family: f5;
  src: url(/src/assets/Poppins-MediumItalic.ttf);
}
.body {
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  box-shadow: 0 6px 0px hsl(0, 62%, 63%); /* Dark green shadow */
}
.text1 {
  background-color: hsl(247, 32%, 48%);
  border-radius: 5px;
  font-family: f2;
  font-size: 13px;
  box-shadow: 0 6px 0px hsl(0, 62%, 63%); /* Dark green shadow */
}
.heading {
  font-family: f1;
  color: white;
  font-size: 40px;
  line-height: 50px;
}
.para {
  font-family: f2;
  color: white;
  font-size: 14px;
}
.try {
  font-family: f3;
}
/*  */
.form-container {
  max-width: 400px;
  margin: 20px auto;
}

.input-field {
  color: black;
  width: 100%;
  padding: 10px;
  border: 1.5px solid hsl(0, 0%, 93%); /* Grey border */
  border-radius: 4px;
}

.error {
  color: hsl(0, 100%, 74%);
  font-size: 10px;
  font-family: f5;
  letter-spacing: -0.7px;
}

.claim-button {
  font-family: f3;
  font-size: 14px;
  background-color: hsl(153, 59%, 51%);
  color: white;
  box-shadow: 0 4px 0px hsl(153, 61%, 46%); /* Dark green shadow */
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}
.tc {
  color: hsl(252, 11%, 82%);
  font-size: 10px;
  font-family: f4;
  letter-spacing: -0.5px;
}
.ts {
  color: hsl(357, 68%, 70%);
  font-family: f1;
}

/* Styling the placeholder */
.input-field::placeholder {
  font-size: 12px;
  color: hsl(252, 2%, 42%); /* Light grey for placeholder */
  font-family: f1; /* Change the font family of the placeholder */
}

/* On focus, hide the placeholder */
.input-field:focus::placeholder {
  color: transparent; /* Hide placeholder */
}
</style>
