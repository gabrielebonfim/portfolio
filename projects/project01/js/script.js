import { fetchData } from '../../../commons/fetchData.js';

new Vue({
    el: '#project01',
    data: {
        pageContent: {}
    },
    mounted() {
        this.loadData();
    },
    methods: {
        async loadData() {
            await fetchData('data.json')
                .then(data => {
                    this.pageContent = data;
                });
        }
    }
});
