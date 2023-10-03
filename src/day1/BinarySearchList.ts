export default function bs_list(haystack: number[], needle: number): boolean {
    let high = haystack.length
    let low = 0

    do{
        const m = Math.floor(low + (high - low)/2)
        const v = haystack[m]
        if(v === needle){
            return true
        }else if (v < needle){
            low = m + 1

        }else  {
            high = m
        }


    }while (low< high )

    return false

}