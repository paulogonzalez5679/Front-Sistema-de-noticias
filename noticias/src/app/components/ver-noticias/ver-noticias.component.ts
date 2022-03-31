import { Component, OnInit } from '@angular/core';
import { VerNoticiasService } from '../../services/ver-noticias.service';
import { noticia } from '../../models/noticia';


@Component({
  selector: 'app-ver-noticias',
  templateUrl: './ver-noticias.component.html',
  styleUrls: ['./ver-noticias.component.css']
})
export class VerNoticiasComponent implements OnInit {

  listNoticias: noticia[] = [];

  constructor(private verNoticias: VerNoticiasService) { }

  ngOnInit(): void {
    this.obtenerNoticias();
  }

  obtenerNoticias()
  {
    this.verNoticias.getNoticias().subscribe(data=> {
      console.log(data);
      this.listNoticias=data;
    }, error=>{
      console.log(error);

    }
    )
  }

  eliminarNoticia(id: any)
  {
    this.verNoticias.eliminarNoticias(id).subscribe(data=> {
      console.log("noticia eliminada");
      this.obtenerNoticias();
    }, error=>{
      console.log(error);

    }
    )
  }
}
