import {request, METHOD} from '@/utils/request';

export async function getPagedContracts(parameter) {
    return request('Contract/GetPagedList', METHOD.POST,parameter)
  }