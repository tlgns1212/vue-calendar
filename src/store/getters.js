// state값을 접근하는 속성이자 computed()처럼 미리 연산된 값을 접근하는 속성
/*
state : {
    num : 10
},
getters: {
    getNumber(state){
        return state.cum;
    },
    doubleNumber(state){
        return state.num **2;
    }
}

출력
<p> {{this.$store.getters.getNumber }}</p>
<p> {{this.$store.getters.doubleNumber }}</p>

*/
