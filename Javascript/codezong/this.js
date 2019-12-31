// this는 어디서 호출했느냐에 따라 결과가 달라짐.
// 호출한 놈 === this
// bind를 통해서 this를 고정시킬수 있음.

var someone = {
    name : 'codejong',
    whoAmI : function(){
        console.log(this);
    }
}

someone.whoAmI(); // 1

var myWhoAmI = someone.whoAmI;
myWhoAmI(); // 2

var bindedWhoAmI = myWhoAmI.bind(someone); // bind는 this를 고정시켜줌.
bindedWhoAmI();

var btn = document.getElementById('btn');
// btn.addEventListener('click', someone.whoAmI); // 3 
// btn.addEventListener('click', myWhoAmI); // 3 
btn.addEventListener('click', bindedWhoAmI); // 3 