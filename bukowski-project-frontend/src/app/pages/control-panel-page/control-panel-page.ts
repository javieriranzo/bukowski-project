import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { priceRangeValidator } from '../../validators/price-range.validator';
import { ToastService } from '../../shared/toast-info/toast-info.service';
import { ToastInfo } from '../../shared/toast-info/toast-info';

@Component({
  selector: 'app-control-panel-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastInfo],
  templateUrl: './control-panel-page.html',
  styleUrls: ['./control-panel-page.scss']
})
export class ControlPanelPage {

  private fb = inject(FormBuilder);
  private toast = inject(ToastService);

  // Estado de guardado
  saving = signal(false);

  // Formulario precios
  priceForm: FormGroup = this.fb.group({
    minPinta: [0, [Validators.required, Validators.min(0)]],
    maxPinta: [0, [Validators.required, Validators.min(0)]],
    minHalf: [0, [Validators.required, Validators.min(0)]],
    maxHalf: [0, [Validators.required, Validators.min(0)]]
  });

  // Formulario carta de comidas (FormArray)
  menuForm: FormGroup = this.fb.group({
    items: this.fb.array([
      this.fb.control('', Validators.required),
      this.fb.control('', Validators.required),
      this.fb.control('', Validators.required)
    ])
  });

  // Getter para simplificar acceso a FormArray
  get menuItems(): FormArray {
    return this.menuForm.get('items') as FormArray;
  }

  // ------------------- Métodos -------------------

  // Guardar precios
  savePrices(): void {
    if (this.priceForm.invalid) {
      this.priceForm.markAllAsTouched();
      this.toast.show('Hay errores en los precios', 'error');
      return;
    }

    this.saving.set(true);
    setTimeout(() => {
      this.saving.set(false);
      this.toast.show('Precios guardados correctamente', 'success');
    }, 1000);
  }

  // Guardar carta de comidas
  saveMenu(): void {
    if (this.menuForm.invalid) {
      this.menuForm.markAllAsTouched();
      this.toast.show('Hay errores en la carta', 'error');
      return;
    }

    this.saving.set(true);
    setTimeout(() => {
      this.saving.set(false);
      this.toast.show('Carta de comidas guardada correctamente', 'success');
    }, 1000);
  }

  // Agregar plato extra
  addMenuItem(): void {
    this.menuItems.push(this.fb.control('', Validators.required));
  }

  // Eliminar plato
  removeMenuItem(index: number): void {
    this.menuItems.removeAt(index);
  }
}
