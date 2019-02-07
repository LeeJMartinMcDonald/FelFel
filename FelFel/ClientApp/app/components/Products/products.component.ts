import { Component, OnInit } from "@angular/core";

import { Product } from "../../models/product";

import { ProductService } from "../../services/product.service";

@Component({
    selector: "products",
    template: require("./products.component.html")
})

export class ProductComponent implements OnInit{
    products: Product[];

    constructor(
        private readonly productService: ProductService
    ) {
    }

    ngOnInit() {
        this.productService.getProducts().subscribe(products => {
            this.products = products;
        });
    }
}