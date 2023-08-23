import { CanDeactivateFn } from '@angular/router';

export const exitGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  const alert = confirm("¿Estas seguro de salir?");
  /*let token = localStorage.getItem('token');
  if(alert){
    token = localStorage.removeItem('token')
    return alert
  }*/
  return alert;
};
