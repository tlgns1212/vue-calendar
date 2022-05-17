<template>
    <div class="container-fluid">
        <wj-flex-radar bindingX="country" :palette="palette" :initialized="initialized">
            <wj-flex-radar-axis wjProperty="axisY" :min="0" :max="100"></wj-flex-radar-axis>
            <wj-flex-radar-series binding="sales" name="Sales"></wj-flex-radar-series>
            <wj-flex-radar-series binding="downloads" name="Downloads"></wj-flex-radar-series>
            <wj-flex-chart-animation easing="Swing" animationMode="Point" :duration="500"></wj-flex-chart-animation>
        </wj-flex-radar>
    </div>
</template>

<script>
    import "@grapecity/wijmo.styles/wijmo.css";
    import "@grapecity/wijmo.styles/wijmo.css";
    import Vue from 'vue';
    import '@grapecity/wijmo.vue2.core';
    import '@grapecity/wijmo.vue2.chart';
    import '@grapecity/wijmo.vue2.chart.radar';
    import '@grapecity/wijmo.vue2.chart.animation';
    import { isArray } from '@grapecity/wijmo';
    import { Palettes } from '@grapecity/wijmo.chart';

export default {
        data: () =>({

                data: getData(),
                palette: this.getRandomPalette()

        }),
        methods: {
            getData() {
    var data = [],
        countries = 'US,Germany,UK,Japan,Italy,Greece'.split(',');
    countries.forEach(function (country) {
        data.push({
            country: country,
            downloads: Math.ceil(Math.random() * 80) + 20,
            sales: Math.ceil(Math.random() * 80) + 20
        });
    });
    return data;
},
            getRandomPalette() {
                let palettes = Object.keys(Palettes).filter(prop => isArray(Palettes[prop]));
                let rand = Math.floor(Math.random() * palettes.length);
                return Palettes[palettes[rand]];
            },
            initialized: function(theChart) {
                let app = this;
                setTimeout(function () {
                    theChart.itemsSource = app.data;
                }, 200);
            }
        }
    }

</script>

<style>
    body {
        margin-bottom: 24px;
    }

    label {
        margin-right: 3px;
    }
</style>
