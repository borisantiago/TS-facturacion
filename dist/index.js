"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaImp = exports.ProductoImp = void 0;
class ProductoImp {
    constructor() {
        this.id = 0;
        this.fechaRegistro = new Date();
        this.estado = "";
        this.nombre = "";
        this.precioUnitario = 0;
        this.cantidad = 0;
        this.fechaRegistro = new Date();
    }
    cantidadTotal() {
        return this.cantidad * this.precioUnitario;
    }
    imprimirTabla() {
        return `\nNombre: ${this.nombre} \nCodigo: ${this.id} \nPrecio/u: $${this.precioUnitario} * cantidad ( ${this.cantidad} ) \nTotal = $${this.cantidadTotal()}\n`;
    }
}
exports.ProductoImp = ProductoImp;
//otros metodos
const newUID = () => {
    return Math.random().toString(36).slice(2);
};
//instanciacion de objetos
class FacturaImp {
    constructor() {
        this.id = 0;
        this.fechaRegistro = new Date();
        this.estado = "";
        this.dirrecion = "";
        this.nombreCliente = "";
        this.fechaTransaccion = new Date();
        this.iva = 0;
        this.productos = [];
        this.fechaRegistro = new Date();
    }
    subTotalPagar() {
        let totalPrecio = 0;
        this.productos.forEach((producto) => {
            totalPrecio += producto.cantidadTotal();
        });
        return totalPrecio;
    }
    totalConImpuestos() {
        var total = this.subTotalPagar();
        return total + (total * (this.iva / 100));
    }
    imprimirFactura() {
        return `\n.${this.productos.map((producto) => producto.imprimirTabla()).join("")}\n********************************\n\nSubtotal: $${this.subTotalPagar()}\nIVA: (${this.iva}%)\nTotal: $${this.totalConImpuestos()}\n`;
    }
    agregarProduto(prod) {
        var aux = false;
        if (!aux) {
            this.productos.push(prod);
        }
    }
}
exports.FacturaImp = FacturaImp;
var productoA = new ProductoImp();
productoA.id = newUID();
productoA.nombre = "Teclado";
productoA.precioUnitario = 2;
productoA.cantidad = 3;
var productoB = new ProductoImp();
productoB.id = newUID();
productoB.nombre = "Monitor";
productoB.precioUnitario = 50;
productoB.cantidad = 2;
var facturar = new FacturaImp();
facturar.iva = 12;
facturar.productos.push(productoA);
facturar.productos.push(productoB);
console.log(facturar.imprimirFactura());
