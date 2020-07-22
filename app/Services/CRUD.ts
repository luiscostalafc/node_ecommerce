import Logger from '@ioc:Adonis/Core/Logger'
import { getSatusCode, getHappen, getMessage } from './ResponseUtils'

let data = []
let statusCode = 400
let message = ''
let returnType = 'error'
let contentError = []

export async function logError (func: string, error: any) {
  Logger.warn(`Repository ${func} Error: ${error}`)
}

export async function first (Model) {
  try{
    data = await Model.first()
  } catch(error) {
    logError('first', error)
    contentError = error
  }

  statusCode = getSatusCode(contentError, 'load')
  returnType = getHappen(statusCode)
  message = getMessage('load', statusCode)

  return { data, statusCode, returnType, message, contentError }
}

export async function all (Model) {
  try{
    data = await Model.all()
  } catch(error) {
    logError('all', error)
    contentError = error
  }

  statusCode = getSatusCode(contentError, 'load')
  returnType = getHappen(statusCode)
  message = getMessage('load', statusCode)

  return { data, statusCode, returnType, message, contentError }
}

export async function withTrashed (Model) {
  try{
    data = await Model.where('deleted_at', '<>', null).fetch()
  } catch(error) {
    logError('withTrashed', error)
    contentError = error
  }

  statusCode = getSatusCode(contentError, 'load')
  returnType = getHappen(statusCode)
  message = getMessage('load', statusCode)

  return { data, statusCode, returnType, message, contentError }
}

export async function OnlyTrashed (Model) {
  try{
    data = await Model.where('deleted_at', '<>', null).fetch()
  } catch(error) {
    logError('OnlyTrashed', error)
    contentError = error
  }

  statusCode = getSatusCode(contentError, 'load')
  returnType = getHappen(statusCode)
  message = getMessage('load', statusCode)

  return { data, statusCode, returnType, message, contentError }
}

export async function find (Model, id: any) {
  try{
    data = await Model.find(id)
  } catch(error) {
    logError('find', error)
    contentError = error
  }

  statusCode = data ? 200 : 404
  returnType = getHappen(statusCode)
  message = getMessage('found', statusCode)

  return { data:data || {}, statusCode, returnType, message, contentError }
}

export async function findOrFail (Model, id: any) {
  try{
    data = await Model.findOrFail(id)
  } catch(error) {
    logError('findOrFail', error)
    contentError = error
  }

  statusCode = getSatusCode(contentError, 'found')
  returnType = getHappen(statusCode)
  message = getMessage('found', statusCode)

  return { data, statusCode, returnType, message, contentError }
}

export async function create (Model, body: any) {
  try {
    data = await Model.create(body)
  } catch (error) {
    logError('create', error)
    contentError = error
  }

  statusCode = getSatusCode(contentError, 'create')
  returnType = getHappen(statusCode)
  message = getMessage('create', statusCode)

  return { data, statusCode, returnType, message, contentError }
}

export async function createOrUpdate (Model, id, body: any) {
  try {
    data = Model.updateOrCreate({ id } ,body)
  } catch (error) {
    logError('createOrUpdate', error)
    contentError = error
  }

  statusCode = getSatusCode(contentError, 'create')
  returnType = getHappen(statusCode)
  message = getMessage('create', statusCode)

  return { data, statusCode, returnType, message, contentError }
}

export async function findAndUpdate (Model, id: any, body: any) {
  const res = await Model.query().where('id', id)

  if(!res.length) {
    statusCode = 404
    returnType = getHappen(statusCode)
    message = getMessage('found', statusCode)

    return { data: {}, statusCode, returnType, message, contentError }
  }

  try {
    data = await Model.query().where('id', id).update(body)
  } catch (error) {
    logError('findAndUpdate', error)
    contentError = error
  }

  const returnData = data ? body : {}
  statusCode = getSatusCode(contentError, 'update')
  returnType = getHappen(statusCode)
  message = getMessage('update', statusCode)

  return { data: returnData, statusCode, returnType, message, contentError }
}

export async function findAndDelete (Model, id: any) {
  const res = await Model.query().where('id', id)

  if(!res.length) {
    statusCode = 404
    returnType = getHappen(statusCode)
    message = getMessage('found', statusCode)

    return { data: {}, statusCode, returnType, message, contentError }
  }

  try {
    data = await Model.query().where('id', id).delete()
  } catch (error) {
    logError('findAndDelete', error)
    contentError = error
  }
  const returnData = data ? res : {}
  statusCode = getSatusCode(contentError, 'delete')
  returnType = getHappen(statusCode)
  message = getMessage('delete', statusCode)

  return { data:returnData, statusCode, returnType, message, contentError }
}

export async function findAndRestore (Model, id: any) {
  try {
    data = await Model.findOrFail(id).update({ deleted_at: null })
  } catch (error) {
    logError('findAndRestore', error)
    contentError = error
  }

  statusCode = getSatusCode(contentError, 'restore')
  returnType = getHappen(statusCode)
  message = getMessage('restore', statusCode)

  return { data, statusCode, returnType, message, contentError }
}

export async function findAndDestroy (Model, id: any) {
  try {
    data = await Model.findOrFail(id).delete()
  } catch (error) {
    logError('findAndDestroy', error)
    contentError = error
  }

  statusCode = getSatusCode(contentError, 'forceDelete')
  returnType = getHappen(statusCode)
  message = getMessage('forceDelete', statusCode)

  return { data, statusCode, returnType, message, contentError }
}

