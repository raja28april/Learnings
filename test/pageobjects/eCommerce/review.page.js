class ReviewPage {
    get productPrices(){
        return $$('//tr/td[4]/strong');
    }
    get totalPrice(){
        return $('h3 strong')
    }

    get checkout(){
        return $(".btn-success");
    }
    sumOfProducts(){
        const sumOfProductPrices = this.productPrices.map(prodcutPrice=>parseInt(prodcutPrice.getText().substring(2)))
        .reduce((acc,price)=>acc+price,0);
        return sumOfProductPrices;
    }

    totalFormattedPrice(){
       return parseInt(this.totalPrice.getText().substring(2));
    }
}
module.exports = new ReviewPage();