<template>
  
    <div class="dates" v-for="(date, index) in dates" :key="index">
        <p>{{ date.date}}</p>
        <p>{{ date.time }}</p>
    </div>
  
</template>

<script>
export default {
    data(){
        return{
            dates: [{
                    date: '2/2/2023',
                    time: '12:00'
                },
                {
                    date: '2/2/2023',
                    time: '12:00'
                },
                {date: '2/2/2023',
                    time: '12:00'
                },
                {date: '2/2/2023',
                    time: '12:00'
                },
                {date: '2/2/2023',
                    time: '12:00'
                },
                {date: '2/2/2023',
                    time: '12:00'
                },
                {date: '2/2/2023',
                    time: '12:00'
                },
                {date: '2/2/2023',
                    time: '12:00'
                },
                {date: '2/2/2023',
                    time: '12:00'
                },
                {date: '2/2/2023',
                    time: '12:00'
                },
                {date: '2/2/2023',
                    time: '12:00'
                },
                {date: '2/2/2023',
                    time: '12:00'
                },
                {date: '11/2/2023',
                    time: '12:00'
                },
                {date: '11/2/2023',
                    time: '12:00'
                },
                {date: '11/2/2023',
                    time: '12:00'
                },
                {date: '11/2/2023',
                    time: '12:00'
                },
                {date: '11/2/2023',
                    time: '12:00'
                },
                {date: '11/2/2023',
                    time: '12:00'
                },
                {date: '11/2/2023',
                    time: '12:00'
                },
                {date: '11/2/2023',
                    time: '12:00'
                },
                {date: '11/2/2023',
                    time: '12:00'
                },
            ],
        }
    },
    methods:{
        
    }
}
</script>

<style scoped>

.dates{
    width: 23%;
    height: 160px;
    background-color: #FBFBFB;
    margin: 10px;
    border-radius: 20px;
    transition: box-shadow 0.3s;
}

.dates:hover{
    box-shadow: 2px 4px 18px rgba(97, 0, 255,0.7);
    cursor: pointer;
}
</style>