class Submit{

    get locationInputField(){
        return $('#country')
    }
    get ellipsis(){
        return $('.lds-ellipsis')
    }
    get locationIndia(){
        return $('=India')
    }

    get purchaseButton(){
       return $('[type="submit"]')
    }

    get successMsg(){
       return $(".alert-success")
    }
}

module.exports=new Submit();