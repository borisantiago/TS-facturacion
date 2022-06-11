"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumar = void 0;
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
//otros metodos
const newUID = () => {
    return Math.random().toString(36).slice(2);
};
//instanciacion de objetos
class FaturaImp {
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
        return `\n${this.productos.map((producto) => producto.imprimirTabla()).join("")}\n********************************\n\nSubtotal: $${this.subTotalPagar()}\nIVA: (${this.iva}%)\nTotal: $${this.totalConImpuestos()}\n`;
    }
    agregarProduto(prod) {
        var aux = false;
        if (!aux) {
            this.productos.push(prod);
        }
    }
}
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
var facturar = new FaturaImp();
facturar.iva = 12;
facturar.productos.push(productoA);
facturar.productos.push(productoB);
console.log(facturar.imprimirFactura());
function sumar(a, b) {
    return a + b;
}
exports.sumar = sumar;
/*



interface ProductoI {
  nombre: string;
  precioUnitario: number;
  cantidad: number;
}

interface FacturaI {
  dirrecion: string;
  iva: number;
  detalles?: string;

  productos: ProductoI[];
}

class ProductoImp implements ProductoI {
  id: number | string = 0;
  fechaRegistro = new Date();
  estado: string = "";
  nombre: string = "";
  precioUnitario: number = 0;
  cantidad: number = 0;
  constructor() {
    this.fechaRegistro = new Date();
  }

  cantidadTotal(): number {
    return this.cantidad * this.precioUnitario;
  }
  imprimirTabla(): string {
      return `\nNombre: ${this.nombre} \nCodigo: ${this.id} \nPrecio/u: $${this.precioUnitario} * cantidad ( ${ this.cantidad } ) \nTotal = $${this.cantidadTotal()}\n`;
  }

}

//otros metodos
const newUID = ()=>{
    return Math.random().toString(36).slice(2);
}

//instanciacion de objetos
class FaturaImp implements FacturaI {
  public id: number | string = 0;
  public fechaRegistro: Date = new Date();
  public estado: string = "";
  public dirrecion: string = "";
  public nombreCliente: string = "";
  public fechaTransaccion: Date = new Date();

  public iva: number = 0;
  public productos: ProductoImp[] = [];
  public detalles?: string;
  constructor() {
    this.fechaRegistro = new Date();
  }
   public subTotalPagar(): number {
        let totalPrecio = 0;
        this.productos.forEach((producto) => {
            totalPrecio += producto.cantidadTotal();
        });
        return totalPrecio;
    }

    public totalConImpuestos(): number {
        var total = this.subTotalPagar();
        return total+ (total * (this.iva/100));
    }

    public imprimirFactura(): string {
        return `\n${this.productos.map((producto) => producto.imprimirTabla()).join("")}\n********************************\n\nSubtotal: $${this.subTotalPagar()}\nIVA: (${this.iva}%)\nTotal: $${this.totalConImpuestos()}\n`;
    }

    public agregarProduto(prod: ProductoImp): void {
      var aux:boolean = false;

      
      
      if(!aux) {
        this.productos.push(prod);
      }
    }
}

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

var facturar = new FaturaImp();
      facturar.iva = 12;
      facturar.productos.push(productoA);
      facturar.productos.push(productoB);
     

console.log(facturar.imprimirFactura());



*/
