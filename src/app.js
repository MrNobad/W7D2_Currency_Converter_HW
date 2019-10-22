import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      rates: [],
      filteredRates: null

    },
    computed: {

      currencyConversion: function(){
        return this.currencyCalculator(this.rates);
      }
    },

    mounted() {
      this.fetchRates();
    },

    methods: {
      fetchRates: function() {
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.rates = data.rates)
      },

      currencyCalculator: function(rates){
        return rates.reduce((runningTotal, rate) => runningTotal + rates.rates, 0);
        console.log(rates);
      }
    }
  })
})
