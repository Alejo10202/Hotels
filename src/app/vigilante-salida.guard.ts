import { CanDeactivateFn } from '@angular/router';

export const vigilanteSalidaGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
