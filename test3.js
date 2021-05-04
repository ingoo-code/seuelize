class test{
    constructor(){
        this.name = 'a'
    }

    static init(){
        console.log('30');
    }

    init(){
        console.log('29');
    }
}


console.log(test);
console.log(new test);
test.init();

let a = new test();

a.init();

// 