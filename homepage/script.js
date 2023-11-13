import { fetchData } from '../commons/fetchData.js';

new Vue({
    el: '#homepage',
    data: {
        pageContent: {}
    },
    mounted() {
        this.loadData();
    },
    methods: {
        async loadData() {
            await fetchData('homepage/data.json')
                .then(data => {
                    this.pageContent = data;
                });
        }
    }
});
