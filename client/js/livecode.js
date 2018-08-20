var app = new Vue({
    el: "#app",
    data: {
        name: '',
        price: '',
        stock: '',
        tags: ''
    },
    methods: {
        addItem(){
            let item = {
                name: this.name,
                price: this.price,
                stock: this.stock,
                tags: this.tags
            }
            let token = localStorage.token
            
            axios({
                method: 'POST',
                url: 'http://localhost:3000/items', 
                headers: {
                    token
                }, 
                data: item
            })
            .then((data) => {
                swal('item successfully created')
                setInterval(function(){
                    window.location="http://localhost:8080/index.html"
                }, 2000)  
            })
            .catch((err) => {
                swal(err.message)
            }); 
        }
    }
})
