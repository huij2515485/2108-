// class Cart{
//     constructor(){
//        this.getCartGoods();
//        this.allChec = document.querySelectorAll('#checkAll1');
//        this.oneChec = document.querySelectorAll('.checOne');
//         this.onecheck()//默认全选
//         this.total()//在开始时调用一遍总计使界面看起来好一点
//         this.$('tbody').addEventListener('click', this.addfn.bind(this))//监听点击的是哪个节点
//         // this.LocalData()
//     }
// // 判断点击的节点
// addfn(eve) {
//     if(eve.target.className == 'add'){
//        this.add(eve.target);
     
//     }
//     if(eve.target.className == 'jian'){
//         this.jianjian(eve.target);
      
//      }
     
//     if(eve.target.className == 'delete'){

//         let confirm = document.getElementById('confirm');
//         confirm.innerHTML = `
//     <p>确认删除？</p>
//     <button onclick="this.delete(${eve.target})">确认</button>
//     <button onclick="this.xiaoshi(confirm)">取消</button>
//     `
// //    this.delete(eve.target);
//         // ;
//         this.delete(eve.target);
//     }
// }

// xiaoshi(confirm){
//     confirm.style.display='none'
// }
// // 增加商品数量

// add (target1) {
//     // console.log(target1);
//     let numObj = target1.previousElementSibling;
//     // console.log(numObj1 );
//     // console.log(numObj.innerHTML);
//     let num = numObj.innerHTML - 0 + 1;
//     // console.log(num);
//     numObj.innerHTML  = num;
//     // 单价
//     let tdObj = target1.parentNode;
//     let price = tdObj.previousElementSibling.innerHTML;

//     tdObj.nextElementSibling.innerHTML = (num-0) * parseInt(price);
//     // console.log((tdObj.parentNode.children)[0].firstElementChild.checked);
//     let trObj = tdObj.parentNode;
//     // console.log(trObj);
//     this.total()

//     // 获取相应商品id
//     let goods_id = trObj.getAttribute('goods');
//     // console.log(goods_id);
//     this.LocalData(goods_id, num)
//   }
// //   减少数量
//  jianjian(targe){

//     let numObj1 = targe.nextElementSibling;
//     // console.log(numObj1);
//     let num = numObj1.innerHTML - 0-1;//数量减1
//     // console.log(num);
//     //判定数量是否小于或等于1，如果小于或等于1之后强制让其等于1，其余不变
//     if(num<=1){
//         num=1
//         numObj1.innerHTML  = num;

//     }else{
//         numObj1.innerHTML  = num;

//     }
    
//     let tdObj1 = targe.parentNode;
//     // console.log(tdObj1);

//     let price = tdObj1.previousElementSibling.innerHTML;

//     tdObj1.nextElementSibling.innerHTML = (num-0) * parseInt(price);
//     let tdObj2= tdObj1.parentNode//获取tr节点
//     let goods_id1 =tdObj2.getAttribute('goods');
//     // 
//     // console.log(goods_id1);
//     this.total()
//     this.LocalData(goods_id1, num)
    
//  }
// // 删除
//   delete (tar) {
//     // console.log(tar);
//     let trObj = tar.parentNode.parentNode;
//     let id = trObj.getAttribute('goods');
//     // console.log(id);
//     let that = this;
//     //   console.log(this); 

//     //   当前商品选中,则更新数量
//     //   console.log((trObj.children)[0].firstElementChild.checked);
//       trObj.remove();
//       if ((trObj.children)[0].firstElementChild.checked) {
//         that.total(document.querySelectorAll('.checOne'))
//       }
//     //   更新localstorge中的数据
//       this.LocalData(id);


    


//   }
//   LocalData (goods_id, num = 0) {
//     //  console.log(goodsId, num);
//     let data = localStorage.getItem('cart');
//     // console.log(data);

//     data = JSON.parse(data);
//     // console.log(data);

//     data.forEach((goods, index) => {
//         // console.log(goods);
//       if (goods_id == goods.id) {
//         if (num){
//          goods.num = num;
//         }
//           // 修改数量
//         else {  // 删除当前商品
//           data.splice(index, 1)
//         }
//       }
//     //   console.log(goods.num);
//     });
//     // console.log(data);
//     // 更新到local中
//     localStorage.setItem('cart', JSON.stringify(data))
//   }
//   total(Obj=''){
// // 删除的时候,重新获取单选的数据
//     this.oneChec = Obj || this.oneChec;
//     // console.log(this.oneChec);
//     let total_num = 0;//定义总数量为0
//     let total_price = 0;//定义总价为0
//     // 1 循环商品,找出选中的
//     this.oneChec.forEach(goods => {
//     //   console.log(goods);
//       if (goods.checked) {  // 判断选中的商品
//         let goodsTrObj = goods.parentNode.parentNode;
//         // console.log(goodsTrObj);
//         let num = goodsTrObj.querySelector('.goods-num').innerHTML - 0;
//         let subT = goodsTrObj.querySelector('.goods-price').innerHTML - 0;
//         //  console.log(num, subT);
//         total_num += num;
//         total_price += subT;
//       }

//     });
//     this.$('#num').innerHTML = total_num;
//     this.$('#money').innerHTML = total_price;
//   }
// // 点击单选复选
//     onecheck () {
        
//         let that = this;
//         let num = 0;
//         let at=0;
//         // let length = this.oneChec.length;
        
//         this.oneChec.forEach((one, key) => {
//         //   console.log(one.checked);
//           one.checked && num++;
//           one.onclick = function () {
//             // console.log(this.checked);
//             if (this.checked) {
//               // 选取当前处于选中状态按钮
//               num++
//               // console.log(key);
//               // 让全选选中
//             //   console.log(num);
//               if(num%2==0){
//                   $('#checkAll1').prop("checked",true)
                 
//               }
//             //   

//             } else {
//               num--;
//               // 取消全选
//               $('#checkAll1').prop("checked",false)
              

//             }
    
//             that.total();
//           }
    
//         })
        
// $('#checkAll1').on('click',function(){
     
// if(at%2==0){
//     for(let i=0;i<$('.checOne').length;i++){
//         $(".checOne").prop("checked",false);
        
//     }
//     at++
//     that.total();

//     return;
// }
// if(at%2==1){
//     for(let i=0;i<$('.checOne').length;i++){
//         $(".checOne").prop("checked",true);
        
//     }
//     at++
//     }
//     that.total();
// })


//       }
//     // 获取之前的数据
//  getCartGoods() {
//     let cartG = localStorage.getItem('cart');
//     // console.log(cartG);
//     let html ='';
//     JSON.parse(cartG).forEach(data => {
//         // console.log(data);
//         html += `<tr goods='${data.id}'>
//                 <td><input type='checkbox' class="checOne" checked=''></td>
//                 <td><img src="${data.src}"  style="height: 100px;width: 100px;"></td>
//                 <td>${data.name}</td>
//                 <td>${data.price}元</td>
//                 <td><button class="jian">-</button>&nbsp;<span class='goods-num'> ${data.num}</span> <button class='add'>+</button></td>
//                 <td class='goods-price'>${data.num*data.price}</td>
//                 <td><button class='delete'>删除</button></td>
//                 </tr>`;    
//     });
//     // console.log(html);
//     this.$('tbody').innerHTML=html;

// }
//  $ (tag) {
//     return document.querySelector(tag);
//   }
// }
// new Cart;
