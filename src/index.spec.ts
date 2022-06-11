import { ProductoImp, ProductoI, FaturaImp, FacturaI} from "./index";

describe ( "Producto class", ()=>{
    test("El producto ingresado es tipo #ProductoImp", ()=>{
       
        var producto = new ProductoImp();
        let interfaceProducto: ProductoI = producto;

        expect(producto).toBeInstanceOf(ProductoImp);
        expect(interfaceProducto).not.toBe(ProductoImp);

    })

    test("Factura class", ()=>{
        var productoA = new ProductoImp();
            productoA.nombre = "Teclado";
            productoA.precioUnitario = 2;
            productoA.cantidad = 3;

        var productoB = new ProductoImp();
            productoB.nombre = "Monitor";
            productoB.precioUnitario = 50;
            productoB.cantidad = 2;

            test("Comprobando que producto instanciado es tipo #FacturaImp y envia con set ´rpductos", ()=>{
                var fac = new FaturaImp();

                expect(fac).toBeInstanceOf(FaturaImp);

                expect(fac.imprimirFactura()).not.toBeNull();
            })

    })

})