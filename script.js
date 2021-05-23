    //#1

function about(name, age) {
    console.log('your name:'+ name);
    console.log('your age:'+ age);
}
about('alex', 18)

function about2(arg) {
    console.log('your name:'+ arg.name);
    console.log('your age:'+ arg.age);
}
about2({
    name:'alex', 
    age: 18});

    //#2
    function* idgenerator() {
        let id=177
        while (true) {
            yield id++
        }
    }
    const myidgenerator= idgenerator();
    console.log(myidgenerator.next().value)
     console.log(myidgenerator.next().value)
      console.log(myidgenerator.next().value)

     //#3
      const arg ={
          name: 'Yana',
          age:"22",
          data:["hi556","75667746",'4656464564564']
      }
      console.log(JSON.stringify(arg));
            console.log(JSON.stringify(arg,null,2));


    //#4
    const subway={
red:['station 1',"station 2","station 3"],
green:['station 1',"station 2","station 3"],
    }
    console.log(subway.green.join(''));
    console.log(subway.blue?.join(''));


    //№5
    const {name, age}=arg;
    console.log(name,age);
    const{0 : pass, 1: uac}=arg.data;//вытаскивание данных
    console.log(pass, uac);
    

    //№6
    let arr= [44,45];
    console.log([...arr,33,60]);//дополнили массив
    console.log([33,60,...arr,]);


    //#7
    const myArr=[1,3,1,4,5,3,6,5,3,1,8,9,6,3,4,5];
    console.log(new Set(myArr));//убираем дубли
    console.log([...new Set(myArr)]);//убираем дубли


    //#8
    const ar8=[["2"],"2",34, 88,"99"];
    const ar8Num = ar8.map(Number);
    console.log(ar8Num);
    
    //#9
    console.time('ex 1');
    let a=77;
    let b=99;
    for(let i=0; i<1000000;i++){
    [a,b]=[b,a];
    }
    console.timeEnd('ex 1');
    console.time('ex 2');
    let x=77;
    let y=99;
    for(let i=0; i<1000000;i++){
        let t=x;
        x=y;
        y=x;
    }
    console.timeEnd('ex 2');