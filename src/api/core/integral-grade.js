// 引入axios的初始化模块
import request from '@/utils/request'

// 导出默认模块
export default {
    // 定义模块成员
    // 成员方法: 获取积分等级列表
    list() {
        // 调用axios的初始化模块,发送远程ajax请求
        return request.get('/admin/core/integralGrade/list')
    },

    removeById(id) {
        return request.delete('/admin/core/integralGrade/remove/' + id)
    },

    save(integralGrade) {
        return request({
            url: '/admin/core/integralGrade/save',
            method: 'post',
            // 将对象转为json字符串,传给后端
            data: integralGrade
        })
    },

    getById(id) {
        return request.get('/admin/core/integralGrade/get/' + id)
    },

    updateById(integralGrade) {
        return request({
            url: '/admin/core/integralGrade/update',
            method: 'put',
            data: integralGrade
        })
    }
}
