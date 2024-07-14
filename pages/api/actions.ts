"use server"

export async function getProducts() {
    const response = await fetch('https://api.timbu.cloud/products?organization_id=c7ab58dd60ac44b58fdaaba775b4e3f7&reverse_sort=false&Appid=XQQYQ1CDHQ0RBBZ&Apikey=6f96b3ce51794908bdb767033000c31d20240712161809995865')
    const data: { items: [] } = await response.json()
    return data
}
