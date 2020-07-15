/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import transations from '../../config/transations'
export type TypeFunction = 'login'|'load'|'found'|'create'|'update'|'delete' |'restore'|'forceDelete'

class Response {
  public mountReturn (
    {
      typeFunction,
      data,
      status = 400,
      contentError=[],
      showMessage=true,
      options = 0,
    }:{
      typeFunction: TypeFunction;
      data: any;
      status: number;
      contentError: Array<string>;
      showMessage: boolean;
      options: number
    }) {
    const happen = this.getHappen(status)
    const message = this.getMessage(typeFunction, happen, showMessage)
    if (happen === 'error') {
      return this.failedResponse(message, status, contentError, options)
    }
    return this.successResponse(data, message, status, options)
  }

  public failedResponse (message: string, status: number, contentError, options: number) {
    return {
      data: [],
      status,
      headers: this.mountHeader('error', message, contentError),
      options,
    }
  }

  public successResponse (data: any, message: string, status: number, options: number) {
    return {
      data,
      status,
      headers: this.mountHeader('success', message),
      options,
    }
  }

  private getHappen (status: number): string {
    return (status > 200 && status < 300) ? 'success' : 'error'
  }

  public getMessage (typeFunction: TypeFunction, happen: string, showMessage: boolean): string {
    if (!showMessage) {
      return ''
    }
    const msg = transations[typeFunction][happen]
    return msg || ''
  }

  private getContentError (contentError: Array<string>): string {
    return (contentError.length) ? contentError.join(', ') : ''
  }

  private mountHeader (type='success', message='Success', error=[]): object {
    const contentError = error ? this.getContentError(error) : ''
    return {
      returnType: type,
      message,
      contentError,
    }
  }
}

export default new Response()
