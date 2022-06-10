
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
  
        this.productos.map((producto) => {
          if(prod.id == producto.id) {
            console.log(`El nuevo producto ${producto.nombre} ya tiene un id:${producto.id} asignado, incrementando ${prod.cantidad} al Stock!!`);
            producto.cantidad += prod.cantidad;
            producto.precioUnitario = prod.precioUnitario;
            aux = true;
            return;
          } 
        });
        
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
      return `${this.id} | ${this.nombre} | $${this.precioUnitario} | ${
        this.cantidad
      } | $$${this.cantidadTotal()}\n`;
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
          return `\n****************************************\n${this.productos.map((producto) => producto.imprimirTabla()).join("")}\nSubtotal: $${this.subTotalPagar()}\nIVA: (${this.iva}%)\nTotal: $${this.totalConImpuestos()}\n****************************************\n`;
      }
  
      public agregarProduto(prod: ProductoImp): void {
        var aux:boolean = false;
  
        this.productos.map((producto) => {
          if(prod.id == producto.id) {
            console.log(`El nuevo producto ${producto.nombre} ya tiene un id:${producto.id} asignado, incrementando ${prod.cantidad} al Stock!!`);
            producto.cantidad += prod.cantidad;
            producto.precioUnitario = prod.precioUnitario;
            aux = true;
            return;
          } 
        });
        
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
        productoB.id = "123456";
        productoB.nombre = "Monitor";
        productoB.precioUnitario = 3;
        productoB.cantidad = 3;
  
  var facturar = new FaturaImp();
        facturar.iva = 16;
        facturar.productos.push(productoA);
        facturar.productos.push(productoB);
        facturar.detalles = "La venta 1 de esta factura";
  
  
  //console.log(prod1.imprimirTabla(), prod2.imprimirTabla());
  console.log(facturar.imprimirFactura());
  console.log(`**************** Incrementar con el mismo Codigo ****************\n`);
  var prodRepeat = new ProductoImp();
  prodRepeat.id = "123456";
  prodRepeat.nombre = "Pepino";
  prodRepeat.precioUnitario = 4;
  prodRepeat.cantidad = 3;
  facturar.agregarProduto(prodRepeat);
  
  console.log(facturar.imprimirFactura());
  
  
  console.log(facturar.imprimirFactura());

  */