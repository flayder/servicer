export const getItemProp = (id: number, item: any) => {
    if(item.properties && item.properties.length) {
        const data: any = item.properties.filter((item: any) => item.id == id)
        if(data.length > 0)
            return data[0]
    }

    return false
}

export const getCurrentPrice = (ru_price: any, foreign_price: any, currency = false) =>{
    const lang = useCookie('lang')
    
    if(lang.value && lang.value != 'ru')
        return (currency) ? foreign_price + ' $' : foreign_price

    return (currency) ? ru_price + ' ₽' : ru_price
}


export const getContact = (contact: any) => {
    if(contact.profile_additional_contact_id == 2) {
        return `tg://resolve?domain=${contact.value}`
    } else {
        return `https://wa.me/${contact.value}`
    }
}

export const isFavorite = (favorites: any, favorite_id: any) => {
    for(let i = 0; i < favorites.length; i++) {
        if(favorites[i] == favorite_id)
            return true
    }

    return false
}

export const updateUrl = (q: any) => {
    let qq: any = ''

    for(let n in q) {
      qq += `${n}=${q[n]}&`
    }

    qq = qq.substring(0, qq.length - 1)
    const pageUrl: any = window.location.href.split('?')

    const url = qq != '' ? pageUrl[0] + '?' + qq : pageUrl[0]
    window.history.pushState("", "", url)
}

export const generateTags = (item: any) => {
    const data: any = []

    // if(item.properties && item.properties.length) {
    //     item.properties.map((d: any) => {
    //         d.userValues.map((v: any) => {
    //             data.push({
    //                 field: `prop_${d.id}=${v}`,
    //                 name: d.name 
    //             })
    //         })
            
    //     })
    // }

    if(item.status && item.status.length) {
        item.status.map((d: any) => {
            data.push({
                field: `status=${d.id}`,
                name: d.name 
            })
        })
    }

    if(item.class && item.class.length) {
        item.class.map((d: any) => {
            data.push({
                field: `class=${d.id}`,
                name: d.name 
            })
        })
    }

    //console.log('item.services', item)

    if(item.services && item.services.length) {
        item.services.map((d: any) => {
            data.push({
                field: `service_${d.id}=${d.value},${d.value}`,
                name: d.name 
            })
        })
    }

    if(item.categories && item.categories.length) {
        item.categories.map((d: any) => {
            data.push({
                field: d.slug,
                name: d.name 
            })
        })
    }

    if(item.activities && item.activities.length) {
        item.activities.map((d: any) => {
            data.push({
                field: `activity=${d.id}`,
                name: d.name 
            })
        })
    }

    if(item.places && item.places.length) {
        item.places.map((d: any) => {
            data.push({
                field: `place=${d.id}`,
                name: d.name 
            })
        })
    }

    if(item.country) {
        data.push({
            field: `country=${item.country.id}`,
            name: item.country.title
        })
    }

    if(item.city) {
        data.push({
            field: `city=${item.city.id}`,
            name: item.city.title
        })
    }

    if(item.metro) {
        data.push({
            field: `metro=${item.metro.id}`,
            name: item.metro.title
        })
    }

    return data
}