import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      rates: [],
      filteredRates: null,
      convertedRates: null
    },
    computed: {

      currencyCalculator: function() {
        return this.convertedRates = (this.rates * this.filteredRates);
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
      }
    }
  })
})
