const product = [
    {
        id: 0,
        image: 'https://www.bollywoodhungama.com/wp-content/uploads/2022/10/EXCLUSIVE-THIS-is-the-sweetest-thing-Karan-Johar%E2%80%99s-kids-have-told-him-about-his-work-.jpg',
        title: 'Karan Johar',
        designation: 'Director',
        price: 110000,
    },
    {
        id: 1,
        image: 'https://www.bollywoodhungama.com/wp-content/uploads/2023/03/SCOOP-Sanjay-Leela-Bhansali-has-no-plans-to-revive-Inshallah-as-of-now.jpg',
        title: 'Sanjay Leela Bhansali',
        designation: 'Director',
        price: 150000,
    },
    {
        id: 2,
        image: 'https://static.toiimg.com/thumb/msid-95470486,width-1280,resizemode-4/95470486.jpg',
        title: 'Shah Rukh Khan',
        designation: 'Actor',
        price: 230000,
    },
    {
        id: 3,
        image: 'https://cdn.siasat.com/wp-content/uploads/2023/05/Salman-Khan-2.jpg',
        title: 'Salman Khan',
        designation: 'Actor',
        price: 200000,
    },
    {
        id: 4,
        image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTOPiPaZDE-XcOohbLVtgsLpxPfq0vDC3KQTDbR4Vm7jZFaGg9J',
        title: 'Deepika Padukone',
        designation: 'Actress',
        price: 15000,
    },
    {
        id: 5,
        image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTjHvdHjtGGc8NrVOMP2NHVdAS33QVl6ln-tfsGooVxrIXDXXiY',
        title: 'Priyanka Chopra',
        designation: 'Actress',
        price: 10000,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, designation, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <p>${designation}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Select for your movie</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, designation, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <p style='font-size:12px;'>${designation}</p>

                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}