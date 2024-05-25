export default class 
{
    static getSeoTitle = (data: any) => 
    {
        var title = ''

        if(typeof data.seo == "object") {
            title = data.seo.title
        }

        if(!title) {
            if(data.hasOwnProperty('title')) {
                title = data.title
            } else if(data.hasOwnProperty('name')) {
                title = data.name
            }
        }

        return title
    }

    static getSeoDescription = (data: any) => 
    {
        var d = ''

        if(typeof data.seo == "object") {
            d = this.stripHtml(data.seo.description)
        }

        return d
    }

    static getSeoKeyword = (data: any) => {
        var d = ''

        if(typeof data.seo == "object") {
            d = data.seo.keyword
        }

        return d
    }

    static getSeoAlt = (data: any) => {
        var d = ''

        if(typeof data.seo == "object") {
            d = data.seo.alt
        }

        if(!d) {
            if(data.hasOwnProperty('title')) {
                d = data.title
            } else if(data.hasOwnProperty('name')) {
                d = data.name
            }
        }

        return d
    }

    static stripHtml(html: any)
    {
       return (typeof html == "string") ? html.replace(/<[^>]*>?/gm, '') : '';
    }
}