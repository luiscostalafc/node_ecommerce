import Logger from '@ioc:Adonis/Core/Logger'
import Response from '../Responses/Response'
export default class BaseRepository {
  protected model: any
  protected obj: any
  protected contentError = []
  protected returnMsg = ''
  protected statusCode = 400
  protected options = 0

  constructor (Model) {
    this.model = new Model()
  }

  public logError (func, error) {
    Logger.warn(`Repository ${func} Error: ${error}`)
  }

  public first () {
    try{
      this.obj = this.model.first()
      this.statusCode = 200
    } catch(error) {
      this.logError('first', error)
      this.contentError = error
    }
    return Response.mountReturn({
      typeFunction: 'load',
      data: this.obj,
      status: this.statusCode,
      contentError: this.contentError,
      showMessage: true,
      options: 0,
    })
  }

  public all () {
    try{
      this.obj = this.model.all()
      this.statusCode = 200
    } catch(error) {
      this.logError('all', error)
      this.contentError = error
    }

    return Response.mountReturn({
      typeFunction:'load',
      data:this.obj,
      status:this.statusCode,
      contentError:this.contentError,
      showMessage: true,
      options:0,
    })
  }

  public withTrashed () {
    try{
      this.obj = this.model.withTrashed().get()
      this.statusCode = 200
    } catch(error) {
      this.logError('withTrashed', error)
      this.contentError = error
    }

    return Response.mountReturn({
      typeFunction:'load',
      data:this.obj,
      status:this.statusCode,
      contentError:this.contentError,
      showMessage: true,
      options:0,
    })
  }

  public OnlyTrashed () {
    try{
      this.obj = this.model.onlyTrashed().get()
      this.statusCode = 200
    } catch(error) {
      this.logError('OnlyTrashed', error)
      this.contentError = error
    }

    return Response.mountReturn({
      typeFunction:'load',
      data:this.obj,
      status:this.statusCode,
      contentError:this.contentError,
      showMessage: true,
      options:0,
    })
  }

  public findOrFail (id: any) {
    try{
      this.obj = this.model.findOrFail(id)
      this.statusCode = 200
    } catch(error) {
      this.logError('findOrFail', error)
      this.contentError = error
      this.statusCode = 404
    }

    return Response.mountReturn({
      typeFunction:'found',
      data:this.obj,
      status:this.statusCode,
      contentError:this.contentError,
      showMessage: true,
      options:0,
    })
  }

  public create (data: any) {
    try {
      this.obj = this.model.create(data)
      this.statusCode = 201
    } catch (error) {
      this.logError('create', error)
      this.contentError = error
      this.statusCode = 400
    }

    return Response.mountReturn({
      typeFunction:'create',
      data:this.obj,
      status:this.statusCode,
      contentError:this.contentError,
      showMessage: true,
      options:0,
    })
  }

  public findAndUpdate (id: any, data: any) {
    const res = this.model.findOrFail(id)
    try {
      res.update(data)
      this.obj = res.getChanges()
      this.statusCode = 200
    } catch (error) {
      this.logError('findAndUpdate', error)
      this.contentError = error
      this.statusCode = 400
    }

    return Response.mountReturn({
      typeFunction:'update',
      data:this.obj,
      status:this.statusCode,
      contentError:this.contentError,
      showMessage: true,
      options:0,
    })
  }

  public findAndDelete (id: any) {
    try {
      this.obj = this.model.find(id).delete()
      this.statusCode = 200
    } catch (error) {
      this.logError('findAndDelete', error)
      this.contentError = error
      this.statusCode = 400
    }

    return Response.mountReturn({
      typeFunction:'delete',
      data:this.obj,
      status:this.statusCode,
      contentError:this.contentError,
      showMessage: true,
      options:0,
    })
  }

  public findAndRestore (id: any) {
    try {
      this.obj = this.model.withTrashed().findOrFail(id).restore()
      this.statusCode = 200
    } catch (error) {
      this.logError('findAndRestore', error)
      this.contentError = error
      this.statusCode = 400
    }

    return Response.mountReturn({
      typeFunction:'restore',
      data:this.obj,
      status:this.statusCode,
      contentError:this.contentError,
      showMessage: true,
      options:0,
    })
  }

  public findAndDestroy (id: any) {
    try {
      this.obj = this.model.withTrashed().findOrFail(id).forceDelete()
      this.statusCode = 200
    } catch (error) {
      this.logError('findAndDestroy', error)
      this.contentError = error
      this.statusCode = 400
    }

    return Response.mountReturn({
      typeFunction:'forceDelete',
      data:this.obj,
      status:this.statusCode,
      contentError:this.contentError,
      showMessage: true,
      options:0,
    })
  }
}
