import { CanDeactivateFn } from '@angular/router';

export const exitGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  const alert = confirm("¿Estas seguro de salir?");
  const token = localStorage.getItem('token')
  return token !== undefined;
};
