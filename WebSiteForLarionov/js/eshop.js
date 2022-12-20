$('document').ready(function(){
    loadGoods();
});

function loadGoods() {
    //загружаю товары на страницу
    $.getJSON('goods.json', function(data) {
        //console.log(data);
        var out = '';
        for (var key in data) {
            out+='<div class="single-goods">';
            out+='<h3>'+data[key]['name']+'<h3>';
            out+='<p>Старая цена: '+data[key]['item_basePrice']+'</p>';
            out+='<p>Цена по скидке: '+data[key]['item_salePrice']+'</p>';
            out+='<img src="'+data[key].image+'">';
            out+='<a href="'+data[key].item_link+'" target="_blank">Перейти к товару</a>';
            out+='</div';
        }
        $('#goods').html(out);
    });
}



