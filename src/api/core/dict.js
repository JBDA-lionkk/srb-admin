import request from '@/utils/request'
export default {
    listByParentId(parentId) {
        return request.get(`/admin/core/dict/listByParentId/${parentId}`)
    }
}