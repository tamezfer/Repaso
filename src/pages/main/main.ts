import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductoPage } from '../producto/producto';
import { CarritoPage } from '../carrito/carrito';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  products= ProductoPage;
  carritoPage= CarritoPage;

  carrito_a=[];

  productos = [
    {
     id:0, 
     color: "#660000", 
     prenda:"Abrigo negro de peluche", 
     precio:"$799", 
     lanzamiento: "12/06/18",
     username: "sofiamontero12", 
     avatar: "../assets/imgs/avatargirl.png", 
     fecha: "05/12/18", 
     review: "El compromiso de H&M con su cliente termina cuando haces click en confirmar compra. Puedes dar avisos varios que la compañía de reparto después de 3 semanas te ha citado 3 dias para darte el paquete y luego no van y a ellos les da igual. Esto mismo se lo dices a Amazon, Corte Ingles, Zara ..., y en menos de 5 min te han propuesto la devolución o la entrega inmediata porque han apretado la clavija a los de reparto. Hace 4 días que solicite a H&M la cancelación y devolución de la compra y aún no me han dicho ni pio.",
     distribuidor:"H&M", 
     valoracion: "Mala",
     imagen:"../assets/imgs/abrigo.jpg",  
     piezas:"20 piezas"
    },

    {
      id:1, 
      color: "#660000", 
      prenda:"Blusa negra con grabado en el frente", 
      precio:"$200", 
      lanzamiento: "12/06/18",
      username: "fashionlover", 
      avatar: "../assets/imgs/avatargirl.png", 
      fecha: "12/11/18", 
      review:"¡Es mi tienda favorita! la mejor ropa y los precios, muy a la moda.",
      distribuidor:"H&M",
      valoracion: "Excelente", 
      imagen: "../assets/imgs/blusa.jpg",  
      piezas:"20 piezas"
    },

    {
      id:2, 
      color: "#660000", 
      prenda:"Botines negros de tacón", 
      precio:"$600", 
      lanzamiento: "12/06/18",
      username: "laura_pozos", 
      avatar: "../assets/imgs/avatargirl.png", 
      fecha: "22/11/18", 
      review: "No tienen variedad de tallas.",
      distribuidor:"H&M",
      valoracion: "Regular", 
      imagen: "../assets/imgs/botas (2).jpg",  
      piezas:"20 piezas"
    },

    {
      id:3, 
      color: "#660000", 
      prenda:"Botines negros tipo martin martin", 
      precio:"$600", 
      lanzamiento: "12/06/18",
      username: "emifernandez23", 
      avatar: "../assets/imgs/avatarboy.png", 
      fecha: "22/11/18", 
      review: "Son muy cómodas, me encantan.",   
      distribuidor:"Zara", 
      valoracion: "Excelente",
      imagen: "../assets/imgs/botas.jpg", 
      piezas:"2 piezas"
    },

    {
      id:4, 
      color: "#660000", 
      prenda:"Burka", 
      precio:"$500", 
      lanzamiento: "12/06/18",
      username: "erikagtz_12", 
      avatar: "../assets/imgs/avatargirl.png", 
      fecha: "22/11/18", 
      review:"El largo que es no el que se indica en las medidas.",
      distribuidor:"Zara",
      valoracion: "Regular", 
      imagen: "../assets/imgs/burka.jpg", 
      piezas:"2 piezas"
    },
    
    {
      id:5, 
      color: "#660000", 
      prenda:"Camisa de cuadros", 
      precio:"$400", 
      lanzamiento: "12/06/18",
      username: "marialopez__", 
      avatar: "../assets/imgs/avatargirl.png", 
      fecha: "22/11/18", 
      review:"Queda un poco más ajustada que lo que aparece en la fotografía, escoge una talla arriba.",    
      distribuidor:"Zara",
      valoracion: "Bueno", 
      imagen: "../assets/imgs/camisa.jpg", 
      piezas:"500 piezas"
    },

    {
      id:6, 
      color: "#660000", 
      prenda:"Camisa", 
      precio:"$200", 
      lanzamiento: "12/06/18",
      username: "rebeccagaray23", 
      avatar: "../assets/imgs/avatargirl.png", 
      fecha: "10/12/18", 
      review:"La tela es muy suave.",  
      distribuidor:"GAP", 
      valoracion: "Excelente",
      imagen: "../assets/imgs/camisah.jpeg", 
      piezas:"0 piezas"
    },

    {
      id:7, 
      color: "#660000", 
      prenda:"Camison rojo", 
      precio:"$100",
      lanzamiento: "12/06/18",
      username: "daniperalta_t", 
      avatar: "../assets/imgs/avatargirl.png", 
      fecha: "05/12/18", 
      review:"El color es igual o mejor a lo que muestra la foto. Es un vestido muy versátil.",  
      distribuidor:"GAP", 
      valoracion: "Excelente",
      imagen: "../assets/imgs/camison.jpg", 
      piezas:"0 piezas"
    },

    {
      id:8, 
      color: "#660000", 
      prenda:"Chamarra holografica", 
      precio:"$600", 
      lanzamiento: "12/06/18",
      username: "ana_jimenez", 
      avatar: "../assets/imgs/avatargirl.png", 
      fecha: "12/11/18", 
      review:"Se maltrata facilmente, dificil de lavar",
      distribuidor:"GAP", 
      valoracion: "Malo",
      imagen: "../assets/imgs/chamarrabr.jpg", 
      piezas:"0 piezas"
    },

    {
      id:9, 
      color: "#660000", 
      prenda:"Chamarra de cuero", 
      precio:"$1000", 
      lanzamiento: "12/06/18",
      username: "galabarajass45", 
      avatar: "../assets/imgs/avatargirl.png", 
      fecha: "17/10/18", 
      review:"El material de cuero de la chamarra es de muy buena calidad. Es mi chamarra favorita.", 
      distribuidor:"Stradivarius", 
      valoracion: "Excelente",
      imagen: "../assets/imgs/chamra.jpg", 
      piezas:"0 piezas"
    },

    {
      id:10,
      color: "#660000", 
      prenda:"Jumper negro",
      precio:"$500",
      lanzamiento: "12/06/18", 
      username: "alessandracardenas", 
      avatar: "../assets/imgs/avatargirl.png", 
      fecha: "25/10/18", 
      review: "Falta variedad de tallas, la chica queda una talla más arriba de la que debería ser.",
      distribuidor:"Stradivarius", 
      valoracion: "Bueno",
      imagen: "../assets/imgs/jumper.jpg", 
      piezas:"20 piezas"
    },

    {
      id:11, 
      color: "#660000", 
      prenda:"Vestido de noche rojo", 
      precio:"$500", 
      lanzamiento: "12/06/18",
      username:"luciamendes34", 
      avatar: "../assets/imgs/avatargirl.png", 
      fecha: "18/11/18", 
      review:"Muy cómodo y práctico.",   
      distribuidor:"Pull & Bear",
      valoracion: "Excelente", 
      imagen: "../assets/imgs/nightg.jpg", 
      piezas:"10 piezas"
    },

    {
      id:12, 
      color: "#660000", 
      prenda:"Pantalón a cuadros con corte plano",
      precio:"$50", 
      lanzamiento: "12/06/18",
      username: "blancalagunaaa", 
      avatar: "../assets/imgs/avatargirl.png", 
      fecha: "04/12/18", 
      review:"El corte horma de maravilla.",     
      distribuidor:"Pull & Bear", 
      valoracion: "Excelente",
      imagen: "../assets/imgs/pantalon.jpg", 
      piezas:"10 piezas"
    },

    {
      id:13, 
      color: "#660000", 
      prenda:"Pantalón estamado de niña con corte plano", 
      precio:"$50", 
      lanzamiento: "12/06/18",
      username: "carmenortizzq", 
      avatar: "../assets/imgs/avatargirl.png", 
      fecha: "15/11/18", 
      review:"Queda un poco ajustado pero la tela es sensacional.",       
      distribuidor:"American Eagle", 
      valoracion: "Excelente",
      imagen: "../assets/imgs/pantalonniña.jpg", 
      piezas:"10 piezas"
    },

    {
      id:14, 
      color: "#660000", 
      prenda:"Zapatos de tacon negros", 
      precio:"$500", 
      lanzamiento: "12/06/18",
      username: "mariana.rojas", 
      avatar: "../assets/imgs/avatargirl.png", 
      fecha: "07/12/18", 
      review:"Son increíblemente cómodos.",
      distribuidor:"American Eagle", 
      valoracion: "Excelente",
      imagen: "../assets/imgs/tacones.jpg", 
      piezas:"10 piezas"
    },

    {
      id:15, 
      color: "#660000", 
      prenda:"Sudadera wonder woman", 
      precio:"$500", 
      lanzamiento: "12/06/18",
      username: "andreamora.r", 
      avatar: "../assets/imgs/avatargirl.png", 
      fecha: "16/11/18", 
      review:"El estampado es de buenísima calidad.",   
      distribuidor:"H&M", 
      valoracion: "Excelente",
      imagen: "../assets/imgs/sudadera.jpg",  
      piezas:"10 piezas"
    },

    {
      id:16, 
      color: "#660000", 
      prenda:"Vestido negro con prederia.", 
      precio:"$400", 
      lanzamiento: "12/06/18",
      username: "dianabarragan", 
      avatar: "../assets/imgs/avatargirl.png", 
      fecha: "12/10/18", 
      review:"Es muy bonito pero la piedreria se despega fácilmente.",     
      distribuidor:"Stradivarius", 
      valoracion: "Bueno",
      imagen: "../assets/imgs/vestio.jpg", 
      piezas:"10 piezas"
    },

    {
      id:17, 
      color: "#660000", 
      prenda:"Vestido largo de noche", 
      precio:"$4000", 
      lanzamiento: "12/06/18",
      username: "elizabeth.torres", 
      avatar: "../assets/imgs/avatargirl.png", 
      fecha: "20/11/18", 
      review:"Falta variedad de tallas",    
      distribuidor:"Forever 21", 
      valoracion: "Regular",
      imagen: "../assets/imgs/vest.jpg", 
      piezas:"10 piezas"
    },

    {
      id:18, 
      color: "#660000", 
      prenda:"Falda", 
      precio:"$4000", 
      lanzamiento: "12/06/18",
      username: "fany_bena.vides", 
      avatar: "../assets/imgs/avatargirl.png", 
      fecha: "08/12/18", 
      review:"Tiene una altura perfecta. Justo lo que buscaba.", 
      distribuidor:"Stradivarius", 
      valoracion: "Excelente",
      imagen: "../assets/imgs/falda2.jpg", 
      piezas:"10 piezas"
    },

    {
      id:19, 
      color: "#660000", 
      prenda:"Tennis", 
      precio:"$400", 
      lanzamiento: "12/06/18",
      username: "itzelfong21", 
      avatar: "../assets/imgs/avatargirl.png", 
      fecha: "19/11/18", 
      review:"Los colores son geniales y el zapato queda perfecto.",
      distribuidor:"Nike", 
      valoracion: "Excelente",
      imagen: "../assets/imgs/tennis.jpg", 
      piezas:"10 piezas"
    },
  ]


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  

  clickProducto(p)
  {
    this.navCtrl.push(this.products, {producto: p, carrito: this.carrito_a});
  }

  clickCarrito()
  {
    this.navCtrl.push(this.carritoPage, {carrito: this.carrito_a});
  }
}
