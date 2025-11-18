import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-funcionalidades',
  imports: [CommonModule],
  templateUrl: './funcionalidades.html',
  styleUrl: './funcionalidades.scss'
})
export class Funcionalidades {
  selectedFile: File | null = null;
  isDragging = false;
  uploadStatus: 'idle' | 'success' | 'error' = 'idle';

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.handleFile(input.files[0]);
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;
    
    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      this.handleFile(event.dataTransfer.files[0]);
    }
  }

  handleFile(file: File): void {
    if (file.type === 'text/csv' || file.name.endsWith('.csv')) {
      this.selectedFile = file;
      this.uploadStatus = 'success';
    } else {
      this.selectedFile = null;
      this.uploadStatus = 'error';
    }
  }

  removeFile(): void {
    this.selectedFile = null;
    this.uploadStatus = 'idle';
  }

  processFile(): void {
    if (this.selectedFile) {
      console.log('Processando arquivo:', this.selectedFile.name);
      alert('Arquivo enviado com sucesso! (simulação)');
    }
  }
}
