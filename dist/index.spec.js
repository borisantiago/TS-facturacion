"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe("Producto class", () => {
    test("El producto ingresado es tipo #ProductoImp", () => {
        var producto = new index_1.ProductoImp();
        let interfaceProducto = producto;
        expect(producto).toBeInstanceOf(index_1.ProductoImp);
        expect(interfaceProducto).not.toBe(index_1.ProductoImp);
    });
    test("El objeto factura es tipo ##FacturaImp y adquiere productos con set", () => {
        var factura = new index_1.FacturaImp();
        expect(factura).toBeInstanceOf(index_1.FacturaImp);
        expect(factura.imprimirFactura()).not.toBeNull();
    });
    test("Atributos de class #ProductoImp", () => {
        var producto = new index_1.ProductoImp();
        expect(producto.nombre).toBeInstanceOf("");
        expect(producto.precioUnitario).toBe("");
        expect(producto.cantidad).toBe("");
    });
    test("Factura class", () => {
        var productoA = new index_1.ProductoImp();
        productoA.nombre = "Teclado";
        productoA.precioUnitario = 2;
        productoA.cantidad = 3;
        var productoB = new index_1.ProductoImp();
        productoB.nombre = "Monitor";
        productoB.precioUnitario = 50;
        productoB.cantidad = 2;
        test("Comprobando que producto instanciado es tipo #FacturaImp y envia con set ´rpductos", () => {
            var fac = new index_1.FacturaImp();
            expect(fac).toBeInstanceOf(index_1.FacturaImp);
            expect(fac.imprimirFactura()).not.toBeNull();
        });
    });
});
