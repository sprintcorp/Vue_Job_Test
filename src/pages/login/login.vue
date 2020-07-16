<template>
  <div>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6">
          <h1 class="mb-4">Try Freshdesk free for 21 days</h1>
          <v-form>
            <div class="d-sm-flex">
              <v-text-field
                filled
                class="mr-sm-2"
                label="First Name"
                prepend-inner-icon="mdi-account-outline"
                background-color="#E8EFFF"
              ></v-text-field>

              <v-text-field filled label="Last Name" background-color="#E8EFFF"></v-text-field>
            </div>
            <v-text-field
              filled
              label="Email"
              background-color="#E8EFFF"
              prepend-inner-icon="mdi-email-outline"
            ></v-text-field>

            <v-text-field
              filled
              label="Company"
              background-color="#E8EFFF"
              prepend-inner-icon="mdi-office-building"
            ></v-text-field>

            <v-text-field
              filled
              label="Phone Number"
              background-color="#E8EFFF"
              prepend-inner-icon="mdi-cellphone-iphone"
            ></v-text-field>

            <p class="grey--text font-weight-light">
              Your data will be located in
              <span>United States &nbsp;&nbsp;</span>
              <a href="#" class="text-decoration-none green--text font-weight-bold">change</a>
            </p>
            <v-btn
              large
              block
              class="uppercase white--text font-weight-bold"
              color="#27C16B"
            >Sign up for free</v-btn>
            <p class="mt-4 grey--text font-weight-light">
              By clicking "SIGN UP FOR FREE" you agree to our
              <a
                href="#"
                class="text-decoration-none green--text font-weight-bold"
              >terms</a>
              and acknowledge reading our
              <a
                href="#"
                class="text-decoration-none green--text font-weight-bold"
              >privacy notice</a>
            </p>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script src="./login.js"></script>

<style scoped>
@import url("./login.css");
</style>
