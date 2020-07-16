<template>
  <v-stepper v-model="e6" vertical>
    <v-row>
      <v-col cols="12" md="3">
        <v-stepper-step :complete="e6 > 1" step="1">COMPANY TYPE</v-stepper-step>

        <v-stepper-step :complete="e6 > 2" step="2">STATE</v-stepper-step>

        <v-stepper-step :complete="e6 > 3" step="3">BUSINESS</v-stepper-step>

        <v-stepper-step :complete="e6 > 4" step="4">TEAM</v-stepper-step>

        <v-stepper-step :complete="e6 > 5" step="5">PERSONAL DETAILS</v-stepper-step>
      </v-col>
      <v-col cols="12" md="9">
        <v-stepper-content step="5">
          <v-row align="center" justify="center">
            <v-col cols="12" md="8">
              <h4>A bit about you</h4>
              <p>Share some personal information about you</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-row align="center" justify="center">
                <v-col cols="12" md="4">
                  <label for>First Name</label>
                  <v-text-field type="text" solo placeholder="First Name" value="Jonathan"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <label for>Last Name</label>
                  <v-text-field type="text" solo placeholder="Last name" value="Doe"></v-text-field>
                </v-col>
              </v-row>
              <v-row align="center" justify="center">
                <v-col cols="12" md="8">
                  <label for>Phone</label>
                  <v-radio-group v-model="radios" :mandatory="false">
                    <v-radio label="Yes" value="radio-1"></v-radio>
                    <v-radio label="No" value="radio-2"></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
              <v-row align="center" justify="center">
                <v-col cols="12" md="8">
                  <label for>
                    Do you have SSN or ITIN
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon color="grey" dark v-bind="attrs" v-on="on">mdi-help-circle-outline</v-icon>
                      </template>
                      <span>Text Goes Here</span>
                    </v-tooltip>
                  </label>
                  <v-radio-group v-model="radios" :mandatory="false">
                    <v-radio label="Yes" value="radio-1"></v-radio>
                    <v-radio label="No" value="radio-2"></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
              <v-row align="center" justify="center">
                <v-col cols="12" md="8">
                  <label for>
                    Enter your SSN or ITIN Number
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon color="grey" dark v-bind="attrs" v-on="on">mdi-help-circle-outline</v-icon>
                      </template>
                      <span>Text Goes Here</span>
                    </v-tooltip>
                  </label>
                  <v-text-field type="text" solo value="888 88 888"></v-text-field>
                </v-col>
              </v-row>
              <div class="d-flex justify-space-around">
                <v-btn class="font-weight-bold" text>Previous Step</v-btn>
                <v-btn color="primary" @click="e6 = 6" class="font-weight-bold">
                  Next Step
                  <i class="text--white mdi mdi-arrow-right-bold"></i>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-stepper-content>

        <v-stepper-content step="6">
          <v-row align="center" justify="center">
            <v-col cols="12" md="8">
              <h4>Mailing Address</h4>
              <p>Enter Your communication details</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-row align="center" justify="center">
                <v-col cols="12" md="4">
                  <label for>Country</label>
                  <v-select :items="['Nigeria','Kenya','England','India']" label="Country" solo></v-select>
                </v-col>
                <v-col cols="12" md="4">
                  <label for>State</label>
                  <v-select :items="['Kerala','Mumbai','Lagos',]" label="State" solo></v-select>
                </v-col>
              </v-row>

              <v-row align="center" justify="center">
                <v-col cols="12" md="8">
                  <label for>Street Address</label>
                  <v-text-field type="text" solo value="Street No:3: Lorem Ipsum #32"></v-text-field>
                </v-col>
              </v-row>

              <v-row align="center" justify="center">
                <v-col cols="12" md="4">
                  <label for>City</label>
                  <v-text-field type="text" solo placeholder="City" value="Cochin"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <label for>Pin</label>
                  <v-text-field type="number" solo placeholder="Pin" value="8"></v-text-field>
                </v-col>
              </v-row>
              <div class="d-flex justify-space-around">
                <v-btn @click="e6 = 5" class="font-weight-bold" text>Previous Step</v-btn>
                <v-btn color="primary" class="font-weight-bold">
                  Next Step
                  <i class="text--white mdi mdi-arrow-right-bold"></i>
                </v-btn>
              </div>
              <v-row align="center" justify="center">
                <v-col cols="12" md="8">
                  <v-alert
                    class="mt-4 d-flex justify-space-around"
                    dense
                    outlined
                    icon="mdi-clipboard-text-outline"
                    type="info"
                  >You can enter an address you want to and this doesnt have to be in US</v-alert>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-stepper-content>
      </v-col>
    </v-row>
  </v-stepper>
</template>

<script src="./about.js">
</script>

<style>
@import url("./about.css");
</style>