import { Component, OnInit } from '@angular/core';

import { ProduitService } from '../../services/produit.service';
import  { Produit } from '../../models/produit.model';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {
  produits: Produit[];

  constructor(private produitService: ProduitService) { }

  ngOnInit() {
      this.produitService.findAll().subscribe(
          (produits) => {
              this.produits = produits;
              console.log('hhhhhhhhhh', produits);
          }
      );
    }
}
