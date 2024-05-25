export const addDataToRef = (ref: any, data: any) => {
    try {
        for(var key in data.value) {
            if(ref.value.hasOwnProperty(key)) {
                if(typeof ref.value[key] == "object" && typeof data.value[key] == "object") {
                    const d = data.value[key]
                    for(let i in d) {
                        ref.value[key][i] = d[i]
                    }
                } 
                else if (Array.isArray(ref.value[key])) {
                    const d = data.value[key]
                    if(Array.isArray(data.value[key])) {
                        d.map((item: any) => {
                            ref.value[key].push(item)
                        })
                    } else if(typeof data.value[key] == "object") {
                        ref.value[key].push(data.value[key])
                    }
                }
                else
                    ref.value[key] = data.value[key]
            }
        }
    } catch(e) {
        console.log('error', e)
    }
}

export const configureData = (data: any) => {
    if(typeof data == 'object') {
        if(data?.name)
            return data.name
        else
            return JSON.stringify(data)
    }

    if(data == "true" || data === true)
        data = 1
    else if (data == "false" || data === false)
        data = 0

    return data
}