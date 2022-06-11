import { ProductoImp, ProductoI, FacturaImp} from "./index";

describe ( "Producto class", ()=>{
    test("El producto ingresado es tipo #ProductoImp", ()=>{
       
        var producto = new ProductoImp();
        let interfaceProducto: ProductoI = producto;

        expect(producto).toBeInstanceOf(ProductoImp);
        expect(interfaceProducto).not.toBe(ProductoImp);

    })

    test("El objeto factura es tipo ##FacturaImp y adquiere productos con set", ()=>{
        var factura = new FacturaImp();

        expect(factura).toBeInstanceOf(FacturaImp);
        expect(factura.imprimirFactura()).not.toBeNull();
    })

    var productoA = new ProductoImp();
        productoA.nombre = "Teclado";
        productoA.precioUnitario = 2;
        productoA.cantidad = 3;

    var productoB = new ProductoImp();
        productoB.nombre = "Monitor";
        productoB.precioUnitario = 50;
        productoB.cantidad = 2;

    test("Atributos de class #ProductoImp", ()=>{
        var producto = new ProductoImp();

        expect(producto.nombre).toBeInstanceOf("Teclado");
        expect(producto.precioUnitario).toBe("2");
        expect(producto.cantidad).toBe("3");
    })

       

    test("Comprobando que producto instanciado es tipo #FacturaImp y envia con set productos", ()=>{
                var fac = new FacturaImp();

            expect(fac).toBeInstanceOf(FacturaImp);
            expect(fac.imprimirFactura()).not.toBeNull();
    })

    

   

})