module.exports = {
    readProducts(req, res) {
        const products = [
            {
                id: "1",
                nome: "café",
                marca: "BlackHard",
                preco: "5.68"
            },
            {
                id: "2",
                nome: "pão",
                marca: "Francês",
                preco: "0.3"
            },
            {
                id: "3",
                nome: "mortandela",
                marca: "Sadia",
                preco: "8.90"
            }
        ]
        return res.json(products);
    },
    readProduct(req, res) {
        const id = req.params.id;
        const products = [
            {
                id: "1",
                nome: "café",
                marca: "BlackHard",
                preco: "5.68"
            },
            {
                id: "2",
                nome: "pão",
                marca: "Francês",
                preco: "0.3"
            },
            {
                id: "3",
                nome: "mortandela",
                marca: "Sadia",
                preco: "8.90"
            }
        ]
        if(id && id>0 && id < products.length)
            return res.json(products[id-1]);
        else
            return res.json({"error":"ops! produto não encontrado!"});
    },
    createProduct(req, res) {
        const product = req.body;
        return res.json(product);
    },
    updateProduct(req,res){
        const id = req.params.id;
        const product = req.body;
    },
    deleteProduct(req,res){
        const id = req.params.id;
    }
};