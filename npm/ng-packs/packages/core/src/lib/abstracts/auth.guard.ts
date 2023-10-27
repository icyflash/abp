import { Injectable } from '@angular/core';
import { UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IAbpGuard } from './abstract-guard';
import { CanActivateFn } from '@angular/router';

/**
 * @deprecated Use `AuthGuardFn` instead.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements IAbpGuard {
  canActivate(): Observable<boolean> | boolean | UrlTree {
    console.error('You should add @abp/ng-oauth packages or create your own auth packages.');
    return false;
  }
}

export const AuthGuardFn: CanActivateFn = () => {
  console.error('You should add @abp/ng-oauth packages or create your own auth packages.');
  return false;
};