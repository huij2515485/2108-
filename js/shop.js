
// 获取图片的节点 拿到img的src

let name1=$$('#name')


console.log(name1);
let pValue=location.search;
console.log(pValue);
// 转化为数组
let pValueArr=pValue.split("?");
console.log(pValueArr[1]);
// 只需要其中的id
pValueArr=pValueArr[1];
console.log(pValueArr);

for(let j=0;j<10;j++){
    axios.get(`./goods${j}.json`).then(data => {
        console.log(JSON.parse(data));
       JSON.parse(data).forEach(function (v, i) {
           if(v.id==pValueArr){ 
               console.log(v);
               console.log(v.name);
               name1.innerHTML=v.name
               // mesge2.innerHTML=v.mesge2
               // mesge1.innerHTML=v.mesge1
               // price.innerHTML=v.price;
           }     
       });
    });
}

axios.get('./js/goods.json').then(data => {
     console.log(JSON.parse(data));
    JSON.parse(data).forEach(function (v, i) {
        if(v.id==pValueArr){ 
            console.log(v);
            console.log(v.name);
            name1.innerHTML=v.name
            // mesge2.innerHTML=v.mesge2
            // mesge1.innerHTML=v.mesge1
            // price.innerHTML=v.price;
        }
        
    });

 });
