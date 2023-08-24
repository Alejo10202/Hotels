import { CanDeactivateFn } from '@angular/router';

export const exitGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  const alert = confirm("¿Estas seguro de salir?");
  if(alert){
      localStorage.removeItem('token')
  }
  return alert
};
