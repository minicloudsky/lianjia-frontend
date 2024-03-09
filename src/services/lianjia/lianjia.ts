import {request} from "@umijs/max";

export async function updateXxx(xxId: number, xxx: string) {
    return request(`/api/xxx`, {
        method: 'POST',
        data: {
            xxId,
            xxx,
        }
    });
}


export async function listErshoufang(params: API.PageRequest): Promise<API.PageResponse<Lianjia.Ershoufang>> {
    return request(`/api/lianjia/ershoufang/list`, {
        method: 'GET',
        params: params
    });
}