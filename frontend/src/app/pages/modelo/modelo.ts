import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DadosModelo {
  praca: string;
  formato: string;
  programa: string;
  duracao: number;
  faixaHoraria: string;
  precoSugerido: number;
  precoTabela: number;
  percentualDesconto: number;
  confiancaModelo: number;
}

@Component({
  selector: 'app-modelo',
  imports: [CommonModule],
  templateUrl: './modelo.html',
  styleUrl: './modelo.scss'
})
export class Modelo {
  dados: DadosModelo[] = [
  {
    "praca": "RÁDIO LIT. CACHOEIRO FM 101,1",
    "formato": "COMERCIAL NA FAIXA",
    "programa": "06:00/12:00",
    "duracao": 15,
    "faixaHoraria": "06:00/12:00",
    "precoSugerido": 12.99,
    "precoTabela": 25.98,
    "percentualDesconto": 171.47731,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LIT. CACHOEIRO FM 101,1",
    "formato": "COMERCIAL NA FAIXA",
    "programa": "06:00/12:00",
    "duracao": 30,
    "faixaHoraria": "06:00/12:00",
    "precoSugerido": 21.65,
    "precoTabela": 43.3,
    "percentualDesconto": 115.37033,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LIT. CACHOEIRO FM 101,1",
    "formato": "COMERCIAL NA FAIXA",
    "programa": "06:00/12:00",
    "duracao": 60,
    "faixaHoraria": "06:00/12:00",
    "precoSugerido": 32.475,
    "precoTabela": 64.95,
    "percentualDesconto": 86.194496,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LIT. CACHOEIRO FM 101,1",
    "formato": "COMERCIAL ROTATIVO",
    "programa": "06:00/12:00",
    "duracao": 15,
    "faixaHoraria": "06:00/12:00",
    "precoSugerido": 12.99,
    "precoTabela": 25.98,
    "percentualDesconto": 171.47745,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LIT. CACHOEIRO FM 101,1",
    "formato": "COMERCIAL ROTATIVO",
    "programa": "06:00/12:00",
    "duracao": 30,
    "faixaHoraria": "06:00/12:00",
    "precoSugerido": 21.65,
    "precoTabela": 43.3,
    "percentualDesconto": 115.37041,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LIT. CACHOEIRO FM 101,1",
    "formato": "COMERCIAL ROTATIVO",
    "programa": "06:00/12:00",
    "duracao": 60,
    "faixaHoraria": "06:00/12:00",
    "precoSugerido": 32.475,
    "precoTabela": 64.95,
    "percentualDesconto": 86.19455,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LIT. CACHOEIRO FM 101,1",
    "formato": "ENCAIXE AVULSO",
    "programa": "06:00/12:00",
    "duracao": 15,
    "faixaHoraria": "06:00/12:00",
    "precoSugerido": 12.99,
    "precoTabela": 25.98,
    "percentualDesconto": 171.47768,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LIT. CACHOEIRO FM 101,1",
    "formato": "ENCAIXE AVULSO",
    "programa": "06:00/12:00",
    "duracao": 30,
    "faixaHoraria": "06:00/12:00",
    "precoSugerido": 21.65,
    "precoTabela": 43.3,
    "percentualDesconto": 115.370544,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LIT. CACHOEIRO FM 101,1",
    "formato": "ENCAIXE AVULSO",
    "programa": "06:00/12:00",
    "duracao": 60,
    "faixaHoraria": "06:00/12:00",
    "precoSugerido": 32.475,
    "precoTabela": 64.95,
    "percentualDesconto": 86.19465,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LIT. CACHOEIRO FM 101,1",
    "formato": "COMERCIAL NA FAIXA",
    "programa": "12:00/17:00",
    "duracao": 15,
    "faixaHoraria": "12:00/17:00",
    "precoSugerido": 12.99,
    "precoTabela": 25.98,
    "percentualDesconto": 171.47476,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LIT. CACHOEIRO FM 101,1",
    "formato": "COMERCIAL NA FAIXA",
    "programa": "12:00/17:00",
    "duracao": 30,
    "faixaHoraria": "12:00/17:00",
    "precoSugerido": 21.65,
    "precoTabela": 43.3,
    "percentualDesconto": 115.3688,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LIT. CACHOEIRO FM 101,1",
    "formato": "COMERCIAL NA FAIXA",
    "programa": "12:00/17:00",
    "duracao": 60,
    "faixaHoraria": "12:00/17:00",
    "precoSugerido": 32.475,
    "precoTabela": 64.95,
    "percentualDesconto": 86.193474,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LIT. CACHOEIRO FM 101,1",
    "formato": "COMERCIAL ROTATIVO",
    "programa": "12:00/17:00",
    "duracao": 15,
    "faixaHoraria": "12:00/17:00",
    "precoSugerido": 12.99,
    "precoTabela": 25.98,
    "percentualDesconto": 171.47488,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LIT. CACHOEIRO FM 101,1",
    "formato": "COMERCIAL ROTATIVO",
    "programa": "12:00/17:00",
    "duracao": 30,
    "faixaHoraria": "12:00/17:00",
    "precoSugerido": 21.65,
    "precoTabela": 43.3,
    "percentualDesconto": 115.368866,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LIT. CACHOEIRO FM 101,1",
    "formato": "COMERCIAL ROTATIVO",
    "programa": "12:00/17:00",
    "duracao": 60,
    "faixaHoraria": "12:00/17:00",
    "precoSugerido": 32.475,
    "precoTabela": 64.95,
    "percentualDesconto": 86.19353,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LIT. CACHOEIRO FM 101,1",
    "formato": "ENCAIXE AVULSO",
    "programa": "12:00/17:00",
    "duracao": 15,
    "faixaHoraria": "12:00/17:00",
    "precoSugerido": 12.99,
    "precoTabela": 25.98,
    "percentualDesconto": 171.47513,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LIT. CACHOEIRO FM 101,1",
    "formato": "ENCAIXE AVULSO",
    "programa": "12:00/17:00",
    "duracao": 30,
    "faixaHoraria": "12:00/17:00",
    "precoSugerido": 21.65,
    "precoTabela": 43.3,
    "percentualDesconto": 115.36902,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LIT. CACHOEIRO FM 101,1",
    "formato": "ENCAIXE AVULSO",
    "programa": "12:00/17:00",
    "duracao": 60,
    "faixaHoraria": "12:00/17:00",
    "precoSugerido": 32.475,
    "precoTabela": 64.95,
    "percentualDesconto": 86.19363,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LIT. CACHOEIRO FM 101,1",
    "formato": "COMERCIAL NA FAIXA",
    "programa": "17:00/22:00",
    "duracao": 15,
    "faixaHoraria": "17:00/22:00",
    "precoSugerido": 12.99,
    "precoTabela": 25.98,
    "percentualDesconto": 171.47263,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LIT. CACHOEIRO FM 101,1",
    "formato": "COMERCIAL NA FAIXA",
    "programa": "17:00/22:00",
    "duracao": 30,
    "faixaHoraria": "17:00/22:00",
    "precoSugerido": 21.65,
    "precoTabela": 43.3,
    "percentualDesconto": 115.36752,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LIT. CACHOEIRO FM 101,1",
    "formato": "COMERCIAL NA FAIXA",
    "programa": "17:00/22:00",
    "duracao": 60,
    "faixaHoraria": "17:00/22:00",
    "precoSugerido": 32.475,
    "precoTabela": 64.95,
    "percentualDesconto": 86.19263,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LIT. CACHOEIRO FM 101,1",
    "formato": "COMERCIAL ROTATIVO",
    "programa": "17:00/22:00",
    "duracao": 15,
    "faixaHoraria": "17:00/22:00",
    "precoSugerido": 12.99,
    "precoTabela": 25.98,
    "percentualDesconto": 171.47276,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LIT. CACHOEIRO FM 101,1",
    "formato": "COMERCIAL ROTATIVO",
    "programa": "17:00/22:00",
    "duracao": 30,
    "faixaHoraria": "17:00/22:00",
    "precoSugerido": 21.65,
    "precoTabela": 43.3,
    "percentualDesconto": 115.3676,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LIT. CACHOEIRO FM 101,1",
    "formato": "COMERCIAL ROTATIVO",
    "programa": "17:00/22:00",
    "duracao": 60,
    "faixaHoraria": "17:00/22:00",
    "precoSugerido": 32.475,
    "precoTabela": 64.95,
    "percentualDesconto": 86.19268,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LIT. CACHOEIRO FM 101,1",
    "formato": "ENCAIXE AVULSO",
    "programa": "17:00/22:00",
    "duracao": 15,
    "faixaHoraria": "17:00/22:00",
    "precoSugerido": 12.99,
    "precoTabela": 25.98,
    "percentualDesconto": 171.473,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LIT. CACHOEIRO FM 101,1",
    "formato": "ENCAIXE AVULSO",
    "programa": "17:00/22:00",
    "duracao": 30,
    "faixaHoraria": "17:00/22:00",
    "precoSugerido": 21.65,
    "precoTabela": 43.3,
    "percentualDesconto": 115.367744,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LIT. CACHOEIRO FM 101,1",
    "formato": "ENCAIXE AVULSO",
    "programa": "17:00/22:00",
    "duracao": 60,
    "faixaHoraria": "17:00/22:00",
    "precoSugerido": 32.475,
    "precoTabela": 64.95,
    "percentualDesconto": 86.19277,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL COLATINA FM 95,3",
    "formato": "COMERCIAL NA FAIXA",
    "programa": "06:00/12:00",
    "duracao": 15,
    "faixaHoraria": "06:00/12:00",
    "precoSugerido": 8.58,
    "precoTabela": 17.16,
    "percentualDesconto": 240.68849,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL COLATINA FM 95,3",
    "formato": "COMERCIAL NA FAIXA",
    "programa": "06:00/12:00",
    "duracao": 30,
    "faixaHoraria": "06:00/12:00",
    "precoSugerido": 14.3,
    "precoTabela": 28.6,
    "percentualDesconto": 155.7433,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL COLATINA FM 95,3",
    "formato": "COMERCIAL NA FAIXA",
    "programa": "06:00/12:00",
    "duracao": 60,
    "faixaHoraria": "06:00/12:00",
    "precoSugerido": 28.6,
    "precoTabela": 57.2,
    "percentualDesconto": 92.88401,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL COLATINA FM 95,3",
    "formato": "COMERCIAL ROTATIVO",
    "programa": "06:00/12:00",
    "duracao": 15,
    "faixaHoraria": "06:00/12:00",
    "precoSugerido": 8.58,
    "precoTabela": 17.16,
    "percentualDesconto": 240.68867,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL COLATINA FM 95,3",
    "formato": "COMERCIAL ROTATIVO",
    "programa": "06:00/12:00",
    "duracao": 30,
    "faixaHoraria": "06:00/12:00",
    "precoSugerido": 14.3,
    "precoTabela": 28.6,
    "percentualDesconto": 155.74341,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL COLATINA FM 95,3",
    "formato": "COMERCIAL ROTATIVO",
    "programa": "06:00/12:00",
    "duracao": 60,
    "faixaHoraria": "06:00/12:00",
    "precoSugerido": 28.6,
    "precoTabela": 57.2,
    "percentualDesconto": 92.88407,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL COLATINA FM 95,3",
    "formato": "ENCAIXE AVULSO",
    "programa": "06:00/12:00",
    "duracao": 15,
    "faixaHoraria": "06:00/12:00",
    "precoSugerido": 8.58,
    "precoTabela": 17.16,
    "percentualDesconto": 240.68904,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL COLATINA FM 95,3",
    "formato": "ENCAIXE AVULSO",
    "programa": "06:00/12:00",
    "duracao": 30,
    "faixaHoraria": "06:00/12:00",
    "precoSugerido": 14.3,
    "precoTabela": 28.6,
    "percentualDesconto": 155.74364,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL COLATINA FM 95,3",
    "formato": "ENCAIXE AVULSO",
    "programa": "06:00/12:00",
    "duracao": 60,
    "faixaHoraria": "06:00/12:00",
    "precoSugerido": 28.6,
    "precoTabela": 57.2,
    "percentualDesconto": 92.884186,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL COLATINA FM 95,3",
    "formato": "COMERCIAL NA FAIXA",
    "programa": "12:00/17:00",
    "duracao": 15,
    "faixaHoraria": "12:00/17:00",
    "precoSugerido": 8.58,
    "precoTabela": 17.16,
    "percentualDesconto": 240.6846,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL COLATINA FM 95,3",
    "formato": "COMERCIAL NA FAIXA",
    "programa": "12:00/17:00",
    "duracao": 30,
    "faixaHoraria": "12:00/17:00",
    "precoSugerido": 14.3,
    "precoTabela": 28.6,
    "percentualDesconto": 155.74098,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL COLATINA FM 95,3",
    "formato": "COMERCIAL NA FAIXA",
    "programa": "12:00/17:00",
    "duracao": 60,
    "faixaHoraria": "12:00/17:00",
    "precoSugerido": 28.6,
    "precoTabela": 57.2,
    "percentualDesconto": 92.88285,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL COLATINA FM 95,3",
    "formato": "COMERCIAL ROTATIVO",
    "programa": "12:00/17:00",
    "duracao": 15,
    "faixaHoraria": "12:00/17:00",
    "precoSugerido": 8.58,
    "precoTabela": 17.16,
    "percentualDesconto": 240.68481,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL COLATINA FM 95,3",
    "formato": "COMERCIAL ROTATIVO",
    "programa": "12:00/17:00",
    "duracao": 30,
    "faixaHoraria": "12:00/17:00",
    "precoSugerido": 14.3,
    "precoTabela": 28.6,
    "percentualDesconto": 155.74109,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL COLATINA FM 95,3",
    "formato": "COMERCIAL ROTATIVO",
    "programa": "12:00/17:00",
    "duracao": 60,
    "faixaHoraria": "12:00/17:00",
    "precoSugerido": 28.6,
    "precoTabela": 57.2,
    "percentualDesconto": 92.882904,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL COLATINA FM 95,3",
    "formato": "ENCAIXE AVULSO",
    "programa": "12:00/17:00",
    "duracao": 15,
    "faixaHoraria": "12:00/17:00",
    "precoSugerido": 8.58,
    "precoTabela": 17.16,
    "percentualDesconto": 240.68518,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL COLATINA FM 95,3",
    "formato": "ENCAIXE AVULSO",
    "programa": "12:00/17:00",
    "duracao": 30,
    "faixaHoraria": "12:00/17:00",
    "precoSugerido": 14.3,
    "precoTabela": 28.6,
    "percentualDesconto": 155.7413,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL COLATINA FM 95,3",
    "formato": "ENCAIXE AVULSO",
    "programa": "12:00/17:00",
    "duracao": 60,
    "faixaHoraria": "12:00/17:00",
    "precoSugerido": 28.6,
    "precoTabela": 57.2,
    "percentualDesconto": 92.88302,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL COLATINA FM 95,3",
    "formato": "COMERCIAL NA FAIXA",
    "programa": "17:00/22:00",
    "duracao": 15,
    "faixaHoraria": "17:00/22:00",
    "precoSugerido": 8.58,
    "precoTabela": 17.16,
    "percentualDesconto": 240.68138,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL COLATINA FM 95,3",
    "formato": "COMERCIAL NA FAIXA",
    "programa": "17:00/22:00",
    "duracao": 30,
    "faixaHoraria": "17:00/22:00",
    "precoSugerido": 14.3,
    "precoTabela": 28.6,
    "percentualDesconto": 155.73904,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL COLATINA FM 95,3",
    "formato": "COMERCIAL NA FAIXA",
    "programa": "17:00/22:00",
    "duracao": 60,
    "faixaHoraria": "17:00/22:00",
    "precoSugerido": 28.6,
    "precoTabela": 57.2,
    "percentualDesconto": 92.88189,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL COLATINA FM 95,3",
    "formato": "COMERCIAL ROTATIVO",
    "programa": "17:00/22:00",
    "duracao": 15,
    "faixaHoraria": "17:00/22:00",
    "precoSugerido": 8.58,
    "precoTabela": 17.16,
    "percentualDesconto": 240.6816,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL COLATINA FM 95,3",
    "formato": "COMERCIAL ROTATIVO",
    "programa": "17:00/22:00",
    "duracao": 30,
    "faixaHoraria": "17:00/22:00",
    "precoSugerido": 14.3,
    "precoTabela": 28.6,
    "percentualDesconto": 155.73917,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL COLATINA FM 95,3",
    "formato": "COMERCIAL ROTATIVO",
    "programa": "17:00/22:00",
    "duracao": 60,
    "faixaHoraria": "17:00/22:00",
    "precoSugerido": 28.6,
    "precoTabela": 57.2,
    "percentualDesconto": 92.88195,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL COLATINA FM 95,3",
    "formato": "ENCAIXE AVULSO",
    "programa": "17:00/22:00",
    "duracao": 15,
    "faixaHoraria": "17:00/22:00",
    "precoSugerido": 8.58,
    "precoTabela": 17.16,
    "percentualDesconto": 240.68196,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL COLATINA FM 95,3",
    "formato": "ENCAIXE AVULSO",
    "programa": "17:00/22:00",
    "duracao": 30,
    "faixaHoraria": "17:00/22:00",
    "precoSugerido": 14.3,
    "precoTabela": 28.6,
    "percentualDesconto": 155.7394,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL COLATINA FM 95,3",
    "formato": "ENCAIXE AVULSO",
    "programa": "17:00/22:00",
    "duracao": 60,
    "faixaHoraria": "17:00/22:00",
    "precoSugerido": 28.6,
    "precoTabela": 57.2,
    "percentualDesconto": 92.88206,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL LINHARES FM 96,9",
    "formato": "COMERCIAL NA FAIXA",
    "programa": "06:00/12:00",
    "duracao": 15,
    "faixaHoraria": "06:00/12:00",
    "precoSugerido": 51.27,
    "precoTabela": 102.54,
    "percentualDesconto": 70.938545,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL LINHARES FM 96,9",
    "formato": "COMERCIAL NA FAIXA",
    "programa": "06:00/12:00",
    "duracao": 30,
    "faixaHoraria": "06:00/12:00",
    "precoSugerido": 85.45,
    "precoTabela": 170.9,
    "percentualDesconto": 56.723034,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL LINHARES FM 96,9",
    "formato": "COMERCIAL NA FAIXA",
    "programa": "06:00/12:00",
    "duracao": 60,
    "faixaHoraria": "06:00/12:00",
    "precoSugerido": 183.87617,
    "precoTabela": 341.8,
    "percentualDesconto": 46.203575,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL LINHARES FM 96,9",
    "formato": "COMERCIAL ROTATIVO",
    "programa": "06:00/12:00",
    "duracao": 15,
    "faixaHoraria": "06:00/12:00",
    "precoSugerido": 51.27,
    "precoTabela": 102.54,
    "percentualDesconto": 70.93858,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL LINHARES FM 96,9",
    "formato": "COMERCIAL ROTATIVO",
    "programa": "06:00/12:00",
    "duracao": 30,
    "faixaHoraria": "06:00/12:00",
    "precoSugerido": 85.45,
    "precoTabela": 170.9,
    "percentualDesconto": 56.723053,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL LINHARES FM 96,9",
    "formato": "COMERCIAL ROTATIVO",
    "programa": "06:00/12:00",
    "duracao": 60,
    "faixaHoraria": "06:00/12:00",
    "precoSugerido": 183.87613,
    "precoTabela": 341.8,
    "percentualDesconto": 46.20359,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL LINHARES FM 96,9",
    "formato": "ENCAIXE AVULSO",
    "programa": "06:00/12:00",
    "duracao": 15,
    "faixaHoraria": "06:00/12:00",
    "precoSugerido": 51.27,
    "precoTabela": 102.54,
    "percentualDesconto": 70.938644,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL LINHARES FM 96,9",
    "formato": "ENCAIXE AVULSO",
    "programa": "06:00/12:00",
    "duracao": 30,
    "faixaHoraria": "06:00/12:00",
    "precoSugerido": 85.45,
    "precoTabela": 170.9,
    "percentualDesconto": 56.723087,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL LINHARES FM 96,9",
    "formato": "ENCAIXE AVULSO",
    "programa": "06:00/12:00",
    "duracao": 60,
    "faixaHoraria": "06:00/12:00",
    "precoSugerido": 183.87607,
    "precoTabela": 341.8,
    "percentualDesconto": 46.203606,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL LINHARES FM 96,9",
    "formato": "COMERCIAL NA FAIXA",
    "programa": "12:00/17:00",
    "duracao": 15,
    "faixaHoraria": "12:00/17:00",
    "precoSugerido": 51.27,
    "precoTabela": 102.54,
    "percentualDesconto": 70.937904,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL LINHARES FM 96,9",
    "formato": "COMERCIAL NA FAIXA",
    "programa": "12:00/17:00",
    "duracao": 30,
    "faixaHoraria": "12:00/17:00",
    "precoSugerido": 85.45,
    "precoTabela": 170.9,
    "percentualDesconto": 56.72265,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL LINHARES FM 96,9",
    "formato": "COMERCIAL NA FAIXA",
    "programa": "12:00/17:00",
    "duracao": 60,
    "faixaHoraria": "12:00/17:00",
    "precoSugerido": 183.87683,
    "precoTabela": 341.8,
    "percentualDesconto": 46.203384,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL LINHARES FM 96,9",
    "formato": "COMERCIAL ROTATIVO",
    "programa": "12:00/17:00",
    "duracao": 15,
    "faixaHoraria": "12:00/17:00",
    "precoSugerido": 51.27,
    "precoTabela": 102.54,
    "percentualDesconto": 70.937935,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL LINHARES FM 96,9",
    "formato": "COMERCIAL ROTATIVO",
    "programa": "12:00/17:00",
    "duracao": 30,
    "faixaHoraria": "12:00/17:00",
    "precoSugerido": 85.45,
    "precoTabela": 170.9,
    "percentualDesconto": 56.722664,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL LINHARES FM 96,9",
    "formato": "COMERCIAL ROTATIVO",
    "programa": "12:00/17:00",
    "duracao": 60,
    "faixaHoraria": "12:00/17:00",
    "precoSugerido": 183.8768,
    "precoTabela": 341.8,
    "percentualDesconto": 46.203392,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL LINHARES FM 96,9",
    "formato": "ENCAIXE AVULSO",
    "programa": "12:00/17:00",
    "duracao": 15,
    "faixaHoraria": "12:00/17:00",
    "precoSugerido": 51.27,
    "precoTabela": 102.54,
    "percentualDesconto": 70.937996,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL LINHARES FM 96,9",
    "formato": "ENCAIXE AVULSO",
    "programa": "12:00/17:00",
    "duracao": 30,
    "faixaHoraria": "12:00/17:00",
    "precoSugerido": 85.45,
    "precoTabela": 170.9,
    "percentualDesconto": 56.722706,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL LINHARES FM 96,9",
    "formato": "ENCAIXE AVULSO",
    "programa": "12:00/17:00",
    "duracao": 60,
    "faixaHoraria": "12:00/17:00",
    "precoSugerido": 183.87674,
    "precoTabela": 341.8,
    "percentualDesconto": 46.20341,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL LINHARES FM 96,9",
    "formato": "COMERCIAL NA FAIXA",
    "programa": "17:00/22:00",
    "duracao": 15,
    "faixaHoraria": "17:00/22:00",
    "precoSugerido": 51.27,
    "precoTabela": 102.54,
    "percentualDesconto": 70.93736,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL LINHARES FM 96,9",
    "formato": "COMERCIAL NA FAIXA",
    "programa": "17:00/22:00",
    "duracao": 30,
    "faixaHoraria": "17:00/22:00",
    "precoSugerido": 85.45,
    "precoTabela": 170.9,
    "percentualDesconto": 56.722324,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL LINHARES FM 96,9",
    "formato": "COMERCIAL NA FAIXA",
    "programa": "17:00/22:00",
    "duracao": 60,
    "faixaHoraria": "17:00/22:00",
    "precoSugerido": 183.87738,
    "precoTabela": 341.8,
    "percentualDesconto": 46.203224,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL LINHARES FM 96,9",
    "formato": "COMERCIAL ROTATIVO",
    "programa": "17:00/22:00",
    "duracao": 15,
    "faixaHoraria": "17:00/22:00",
    "precoSugerido": 51.27,
    "precoTabela": 102.54,
    "percentualDesconto": 70.9374,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL LINHARES FM 96,9",
    "formato": "COMERCIAL ROTATIVO",
    "programa": "17:00/22:00",
    "duracao": 30,
    "faixaHoraria": "17:00/22:00",
    "precoSugerido": 85.45,
    "precoTabela": 170.9,
    "percentualDesconto": 56.722343,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL LINHARES FM 96,9",
    "formato": "COMERCIAL ROTATIVO",
    "programa": "17:00/22:00",
    "duracao": 60,
    "faixaHoraria": "17:00/22:00",
    "precoSugerido": 183.87735,
    "precoTabela": 341.8,
    "percentualDesconto": 46.20323,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL LINHARES FM 96,9",
    "formato": "ENCAIXE AVULSO",
    "programa": "17:00/22:00",
    "duracao": 15,
    "faixaHoraria": "17:00/22:00",
    "precoSugerido": 51.27,
    "precoTabela": 102.54,
    "percentualDesconto": 70.93746,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL LINHARES FM 96,9",
    "formato": "ENCAIXE AVULSO",
    "programa": "17:00/22:00",
    "duracao": 30,
    "faixaHoraria": "17:00/22:00",
    "precoSugerido": 85.45,
    "precoTabela": 170.9,
    "percentualDesconto": 56.722385,
    "confiancaModelo": 0.85
  },
  {
    "praca": "RÁDIO LITORAL LINHARES FM 96,9",
    "formato": "ENCAIXE AVULSO",
    "programa": "17:00/22:00",
    "duracao": 60,
    "faixaHoraria": "17:00/22:00",
    "precoSugerido": 183.87729,
    "precoTabela": 341.8,
    "percentualDesconto": 46.20325,
    "confiancaModelo": 0.85
  }
];
}
