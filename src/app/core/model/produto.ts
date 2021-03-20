export class Produto {
  id: number;
  nomeProduto: string;
  valorCusto: number;
  valorRevenda: number;
  medida: string;
  produtoInativo: boolean;
}

export class ProdutoFilter extends Produto {
  produtoInativoFilterEnum = 'ATIVO';
}
