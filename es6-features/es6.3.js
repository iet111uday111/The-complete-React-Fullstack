// const artists = ['Clapton', 'U2', 'Burno Mars', 'Kendrik Lamar', 'Marshal'];

// artists.forEach(function(artist){
//     console.log(artist);
// })



document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        // const names = ['francis','lisa','marions','ron'];


        // names.forEach((name) => {
        //     document.body.insertAdjacentHTML("afterbegin",`<div>Hi, my name is ${name}<div>`);
        // }); 

        // const products = [
        //     {name:'Iphone',price:200},
        //     {name:'Motorola',price:70},
        //     {name:'Samsung',price:150},
        //     {name:'Sony',price:98},
        //     {name:'Windows pone',price:10}
        //  ];

        //  let templte = '';
        //  products.forEach((product) => {
        //      const discount = () => {
        //          if(product.price < 100){
        //              return `<span>On sale !!</span>`
        //          }else{
        //             return `<span>Not On sale !!</span>`
        //          }
        //      }
             
        //      templte +=`
        //      <div class="product">
        //      <h1>${product.name}</h1>
        //      ${discount()}
        //      <strong>Price: $ ${product.price} </strong>
             
        //       </div>
        //      `
        //  })

        //  document.body.insertAdjacentHTML('afterbegin',templte);

        const users = [
            {user: 'Martin Jones', age:32, eyes: 'brown'},
            {user: 'Jane Doe', age:20, eyes: 'blue'},
            {user: 'Brain Wrecker', age:40, eyes: 'brown'},
        ]

        const listOfUsers = users.map((user) => {
            return user.user
        })

        console.log(listOfUsers);

        listOfUsers.forEach((name) => {
            const select =  document.querySelector('select');
            select.insertAdjacentHTML('afterbegin',`<option value=${name}>${item}</option>`)
        })
        
    }
}


