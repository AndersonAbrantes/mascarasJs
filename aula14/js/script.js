let input = document.querySelector("#cpf")

input.addEventListener("keypress", () => {
    let inputlength = input.value.length
    if (inputlength == 3 || inputlength == 7 ) 
    {
        input.value += "."
    }
    if (inputlength == 11) {
        input.value += "-"
    }
})

let inputCnpj = document.querySelector("#cnpj")
inputCnpj.addEventListener("keypress", () => {
    let cnpjlength = inputCnpj.value.length
    if (cnpjlength == 2 || cnpjlength == 6 ) 
    {
        inputCnpj.value += "."
    }
    if (cnpjlength == 10) 
    {
        inputCnpj.value += "/"
    }
    if (cnpjlength == 15)
    {
        inputCnpj.value += "-"
    }
})

//cpf
//111.111.112-11
//12345678911111
//	 01234

//cnpj
//03.709.814/0001-98
//123456789111111111
//	  12345678