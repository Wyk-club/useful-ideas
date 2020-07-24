//合并多个对象，原理是深拷贝之后合并对象，如果有相同的属性，后面的对象会复写前面的
function isPlainObject(val ) {
    const toString = Object.prototype.toString;
    return toString.call(val) === "[object Object]";
}

function deepMerge(...objs) {
    // const result = Object.create(null);
    const result = {}
    // console.log('deepMerge方法调用成功');
    // console.log(objs, "deepMerge objs");
    objs.forEach(obj => {
        if (obj) {
            Object.keys(obj).forEach(key => {
                const val = obj[key];
                if (isPlainObject(val)) {
                    // 递归
                    if (isPlainObject(result[key])) {
                        result[key] = deepMerge(result[key], val);
                    } else {
                        result[key] = deepMerge(val);
                    }
                } else {
                    //  数组也要重新赋值  不然依然会引用到其他的
                    if (Array.isArray(val)) {
                        result[key] = [...val];
                    } else {
                        result[key] = val;
                    }
                }
            });
        }
    });
    // console.log(result)
    return result;
}

export default deepMerge