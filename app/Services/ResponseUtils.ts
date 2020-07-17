/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import transations from '../../config/transations'
export type TypeFunction = 'login'|'load'|'found'|'create'|'update'|'delete' |'restore'|'forceDelete'

export function getSatusCode (contentError: any, typeFunction: TypeFunction): number {
  if (typeFunction === 'create') {
    return !contentError.length ? 201 : 400
  }
  return !contentError.length ? 200 : 400
}

export function getHappen (status: number): string {
  return (status < 200 || status > 300) ? 'error' : 'success'
}

export function getMessage (typeFunction: TypeFunction, statusCode: number): string {
  const happen = getHappen(statusCode)
  const msg = transations[typeFunction][happen]
  return msg || ''
}

export function getContentError (contentError: any): string {
  return (contentError.length) ? contentError.join(', ') : ''
}

export function mountHeader (type='success', message='Success', error=[]): object {
  const contentError = error ? this.getContentError(error) : ''
  return {
    returnType: type,
    message,
    contentError,
  }
}

